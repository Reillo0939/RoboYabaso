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
		if(mainMsg[1]==undefined||mainMsg[1]==null||isNaN(mainMsg[1])){
			Mongoclient.db(dbName).collection('card').find({}).toArray().then((data)=> {
				console.log(data);
				data.sort(function(a, b) {
				  return a.ID - b.ID;
				});
				rply.text="圖鑑";
					for(let card of data){
						rply.text+="\n["+card.ID+"]"+card.Name;
					}
				re_message.Line_reply(replyToken, rply);
			});
		}
		else{
			Mongoclient.db(dbName).collection('card').findOne({ID:mainMsg[1]}).then((data)=> {
				if(data!=null){
					rply.text="["+data.ID+"]"+data.Name+"\n"+
								  "簡介:"+data.Introduction+"\n"+
								  "HP/MP/AP/ATK:"+data.HP+"/"+data.MP+"/"+data.AP+"/"+data.ATK+"\n"+
								  "移動消耗的AP/攻擊消耗的AP:"+data.MoveAP+"/"+data.AttackAP+"\n"+
								  "攻擊距離:"+data.AttackRange+"\n"+
								  "技能1:"+data.skill1.Name+"\n"+
								  "--效果:"+data.skill1.Introduction+"\n"+
								  "--MP消耗/AP消耗/範圍:"+data.skill1.MPcost+"/"+data.skill1.APcost+"/"+data.skill1.range+"\n"+
								  "技能2:"+data.skill2.Name+"\n"+
								  "--效果:"+data.skill2.Introduction+"\n"+
								  "--MP消耗/AP消耗/範圍:"+data.skill2.MPcost+"/"+data.skill2.APcost+"/"+data.skill2.range+"\n"+
								  "技能3:"+data.skill3.Name+"\n"+
								  "--效果:"+data.skill3.Introduction+"\n"+
								  "--MP消耗/AP消耗/範圍:"+data.skill3.MPcost+"/"+data.skill3.APcost+"/"+data.skill3.range+"\n"+
								  "被動技能1:"+data.Passive_skill1+"\n"+
								  "被動技能2:"+data.Passive_skill2+"\n"+
								  "被動技能3:"+data.Passive_skill3+"\n";
					re_message.Line_reply(replyToken, rply);
				}
			});
			
		}
	});
}


module.exports = {
	illustration:illustration
};
