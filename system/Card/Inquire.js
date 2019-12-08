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

function Inquire(UserId,UserName,Message,replyToken){
	let mainMsg = Message.match(msgSplitor);
	Mongoclient.connect(function(err) {
		assert.equal(null, err);
		//console.log("Connected successfully to server");
		//if(!isNaN(mainMsg[1])){
			//var f=mainMsg[1];
		Mongoclient.db(dbName).collection('user').findOne({UserId:UserId}).then((Udata)=>{
			if(Udata!=null){
				rply ={type : 'text'};
				rply.text="擁有";
				for(let i in Udata.card){
					if(Udata.card[i])rply.text+="\nID:"+i+"重複數量"+Udata.card[i].repeat;
				}
				re_message.Line_reply(replyToken, rply);
			}
			else{
				rply.text=UserName+" 沒有帳號喔";
				re_message.Line_reply(replyToken, rply);
			}
		});
		//}
	});
}


module.exports = {
	Inquire:Inquire
};
