var re_message = require('../message.js');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = process.env.DB_URL;
// Database Name
const dbName = 'dream-realm-v2';
// Create a new MongoClient
const Mongoclient = new MongoClient(url);

var rply ={type : 'text'};
let msgSplitor = (/\S+/ig);	

var Gameing=[];

function ingame(UserId, NickName, money_in,count,answer,Difficulty) {
  this.UserId = UserId;
  this.NickName = NickName;
  this.money_in = money_in;
  this.count = count;
  this.answer = answer;
  this.Difficulty=Difficulty;
}

function Game(UserId,UserName,Message,replyToken){
	let mainMsg = Message.match(msgSplitor);
	if(mainMsg[1]=="參加"){
		for(var player of Gameing){
			if(player.UserId==UserId){
				console.log(Gameing);
				rply.text=player.NickName+" 你正在遊戲中";
				re_message.Line_reply(replyToken, rply);
				return false;
			}
		}
				Mongoclient.connect(function(err) {
					assert.equal(null, err);
					//console.log("Connected successfully to server");
					Mongoclient.db(dbName).collection('user').findOne({UserId:UserId}).then((data)=>{
						
						if(data!=null){
							if(mainMsg[2]==undefined||mainMsg[2]==null||isNaN(mainMsg[2])){
								rply.text=data.NickName+" 賭金未填或者錯誤";
								re_message.Line_reply(replyToken, rply);
								return false;
							}
							else{
								if(mainMsg[2]*10>data.money){
									rply.text=data.NickName+" 賭金不夠";
									re_message.Line_reply(replyToken, rply);
								return false;
								}
								else{
									var list=[0,1,2,3,4,5,6,7,8,9];
									var answer=[];
									for(var k=0;k<4;k++){
										var tag=Math.floor(Math.random()*list.length);
										answer[k]=list[tag];
										list.splice(tag,1);
									}
									var Difficulty=10;
									if(mainMsg[2]>5 && mainMsg[2]<=10)Difficulty=8;
									if(mainMsg[2]>10 && mainMsg[2]<=50)Difficulty=6;
									if(mainMsg[2]>50 && mainMsg[2]<=250)Difficulty=4;
									if(mainMsg[2]>250 )Difficulty=2;
									Gameing[Gameing.length]=new ingame(UserId, data.NickName, mainMsg[2],1,answer,Difficulty);
									rply.text=data.NickName+" 遊戲開始\n第"+Gameing[Gameing.length-1].count+"/"+Difficulty+"次猜題\n賭金(x10):"+Gameing[Gameing.length-1].money_in;
									data.money-=mainMsg[2]*10;
									Mongoclient.db(dbName).collection('user').update({UserId:UserId},{"$set":data}, function(err, r) {
										assert.equal(null, err);
									});
								}
							}
						}
						else{
							rply.text=UserName+" 沒有帳號喔";
						}
						re_message.Line_reply(replyToken, rply);
					});
				});
		
	}
	else{
		for(var player of Gameing){
			if(player.UserId==UserId){
				if(!isNaN(mainMsg[1])){
					var guess=[0,0,0,0];
					guess[0]=Math.floor(mainMsg[1]/1000);
					guess[1]=Math.floor(mainMsg[1]%1000/100);
					guess[2]=Math.floor(mainMsg[1]%100/10);
					guess[3]=Math.floor(mainMsg[1]%10);
					var a=0,b=0;
					for(var i=0;i<4;i++){
						for(var k=0;k<4;k++){
							if(guess[i]==player.answer[k]){
								if(i==k)
									a++;
								else
									b++;
							}
						}
					}
					if(a==4){
						Mongoclient.connect(function(err) {
							assert.equal(null, err);
							//console.log("Connected successfully to server");
							Mongoclient.db(dbName).collection('user').findOne({UserId:UserId}).then((data)=>{
								if(data!=null){
									var return_money=[10,7,3,2,1.5,1.4,1.3,1.2,1.1,1];
									var give=Math.floor(player.money_in*return_money[player.count-1]);
									data.money+=(give*10);
									rply.text=data.NickName+" 4A 遊戲結束\n依據你猜題的次數你可以獲得"+(give*10)+"G\n你共有"+data.money+"G";
									delete_play(player.UserId);
									Mongoclient.db(dbName).collection('user').update({UserId:UserId},{"$set":data}, function(err, r) {
										assert.equal(null, err);
									});
								}
								re_message.Line_reply(replyToken, rply);
							});
						});
						
					}
					else{
						if(player.count==player.Difficulty){
							rply.text=player.NickName+" 遊戲失敗\n答案為"+player.answer[0]+player.answer[1]+player.answer[2]+player.answer[3]+"\n繼續努力吧";
							delete_play(player.UserId);
							re_message.Line_reply(replyToken, rply);
						}
						else{
							player.count++;
							rply.text=player.NickName+" "+a+"A"+b+"B"+"\n第"+player.count+"/10次猜題\n賭金(x10):"+player.money_in;
							re_message.Line_reply(replyToken, rply);
						}
					}
				}
			}
		}
	}
	
}

function delete_play(UserId){
	for(var i=0;i<Gameing.length;i++){
		if(Gameing[i].UserId==UserId){
			Gameing.splice(i,1);
		}
	}
}

module.exports = {
	Game:Game
};
