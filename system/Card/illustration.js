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
			Mongoclient.db(dbName).collection('card').find({},{projection: { _id: 0, ID: 1,Name:1,Race:1 }}).toArray().then((data)=> {
				console.log(data);
				data.sort(function(a, b) {
				  return a.ID - b.ID;
				});
				rply ={type : 'text'};
				rply.text="圖鑑";
					for(let card of data){
						rply.text+="\n["+card.ID+"]"+card.Race+"-"+card.Name;
					}
				re_message.Line_reply(replyToken, rply);
			});
		}
		else{
			let XID=parseInt(mainMsg[1]);
			Mongoclient.db(dbName).collection('card').findOne({ID:XID}).then((data)=> {
				console.log(data);
				rply=[];
				rply[0]={type : 'text'};
				if(data!=null){
					rply[0].text="["+data.ID+"]"+data.Race+"-"+data.Name+"\n"+
								  "簡介:"+data.Introduction+"\n"+
								  "HP/MP/AP/ATK:"+data.HP+"/"+data.MP+"/"+data.AP+"/"+data.ATK+"\n"+
								  "移動消耗的AP/攻擊消耗的AP:"+data.MoveAP+"/"+data.AttackAP+"\n"+
								  "攻擊距離:"+data.AttackRange+"\n"+
								  "技能1:"+data.skill1.Name+"\n"+
								  "--效果:"+data.skill1.Introduction+"\n"+
								  "--MP消耗/AP消耗:"+data.skill1.MPcost+"/"+data.skill1.APcost+"\n"+
								  "技能2:"+data.skill2.Name+"\n"+
								  "--效果:"+data.skill2.Introduction+"\n"+
								  "--MP消耗/AP消耗:"+data.skill2.MPcost+"/"+data.skill2.APcost+"\n"+
								  "技能3:"+data.skill3.Name+"\n"+
								  "--效果:"+data.skill3.Introduction+"\n"+
								  "--MP消耗/AP消耗:"+data.skill3.MPcost+"/"+data.skill3.APcost+"\n"+
								  "被動技能1:"+data.Passive_skill1+"\n"+
								  "被動技能2:"+data.Passive_skill2+"\n"+
								  "被動技能3:"+data.Passive_skill3+"\n";
					if(data.imgae_URL)
						rply[1]={
								type: 'image',
								originalContentUrl: data.imgae_URL,
								previewImageUrl: data.imgae_URL
								};
					re_message.Line_reply(replyToken, rply);
				}
			});
		}
	});
}


module.exports = {
	illustration:illustration
};
