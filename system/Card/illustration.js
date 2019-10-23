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

function illustration(UserId,UserName,Message,replyToken){
	let mainMsg = Message.match(msgSplitor);
	Mongoclient.connect(function(err) {
		assert.equal(null, err);
		//console.log("Connected successfully to server");
		Mongoclient.db(dbName).collection('card').find({}).then((data)=>{
				console.log(data);
				data.sort(function(a, b) {
				  return a.ID - b.ID;
				});
				if(mainMsg[1]==undefined||mainMsg[1]==null||isNaN(mainMsg[1])){
					rply.text="圖鑑";
					for(let card of data){
						rply.text+="\n["+card.ID+"]"+card.Name;
					}
				}
				else{
					for(let card of data){
						if(card.ID==mainMsg[1]){
							rply.text="["+card.ID+"]"+card.Name+"\n"+
									  "簡介:"+card.Introduction+"\n"+
									  "HP/MP/AP/ATK:"+card.HP+"/"+card.MP+"/"+card.AP+"/"+card.ATK+"\n"+
									  "移動消耗的AP/攻擊消耗的AP:"+card.MoveAP+"/"+card.AttackAP+"\n"+
									  "攻擊距離:"+card.AttackRange+"\n"+
									  "技能1:"+card.skill1.Name+"\n"+
									  "--效果:"+card.skill1.Introduction+"\n"+
									  "--MP消耗/AP消耗/範圍:"+card.skill1.MPcost+"/"+card.skill1.APcost+"/"+card.skill1.range+"\n"+
									  "技能2:"+card.skill2.Name+"\n"+
									  "--效果:"+card.skill2.Introduction+"\n"+
									  "--MP消耗/AP消耗/範圍:"+card.skill2.MPcost+"/"+card.skill2.APcost+"/"+card.skill2.range+"\n"+
									  "技能3:"+card.skill3.Name+"\n"+
									  "--效果:"+card.skill3.Introduction+"\n"+
									  "--MP消耗/AP消耗/範圍:"+card.skill3.MPcost+"/"+card.skill3.APcost+"/"+card.skill3.range+"\n"+
									  "被動技能1:"+card.Passive_skill1+"\n"+
									  "被動技能2:"+card.Passive_skill2+"\n"+
									  "被動技能3:"+card.Passive_skill3+"\n";
						}
					}
				}
			re_message.Line_reply(replyToken, rply);
		});
	});
}


module.exports = {
	illustration:illustration
};
