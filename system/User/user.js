var linebot = require('linebot');
var bot = linebot({
	channelId: process.env.LINE_CHANNEL_ID,
	channelSecret: process.env.LINE_CHANNEL_SECRET,
	channelAccessToken: process.env.LINE_CHANNEL_ACCESSTOKEN
});


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

function create_User(UserId,UserName,Message,replyToken){
	var i=0;
	Mongoclient.connect(function(err) {
			assert.equal(null, err);
			//console.log("Connected successfully to server");
			Mongoclient.db(dbName).collection('user').findOne({UserId:UserId}).then((data)=> {
			if(data!=null){
				rply.text=UserName+" 帳號已存在";
			}
			else{
				let mainMsg = Message.match(msgSplitor);
				let NickName=mainMsg[1];
				if(NickName==null||NickName==undefined){
					rply.text=UserName+" 缺少暱稱";
				}
				else{
					var new_user={};
					new_user.UserId=UserId;
					new_user.NickName=NickName;
					new_user.create_date=new Date (new Date().getTime()+28800000);
					new_user.login_date=[];
					var today=new Date (new Date().getTime()+28800000);
					new_user.login_date[0]=(new Date(today.getFullYear(),today.getMonth(),today.getDate()).getTime()-new Date(2019,10,17).getTime())/86400000;
					new_user.Always_check-in=0;
					new_user.money=2000;
					
					Mongoclient.connect(function(err) {
						assert.equal(null, err);
						Mongoclient.db(dbName).collection('user').insertOne(new_user, function(err, r) {
							assert.equal(null, err);
						});
					});
					rply.text=UserName+" / "+NickName+" 帳號已創建完畢";
				}
			}
			bot.reply(replyToken, rply);
		});
	});
	return -1;
}
function Inquire_User(UserId,UserName,Message,replyToken){
	var finder;
	Mongoclient.connect(function(err) {
		assert.equal(null, err);
		//console.log("Connected successfully to server");
		Mongoclient.db(dbName).collection('user').findOne({UserId:UserId}).then((data)=>{
			if(data!=null){
				rply.text=data.NickName+"\n擁有"+data.money+"G";
			}
			else{
				rply.text=UserName+" 沒有帳號喔";
			}
			bot.reply(replyToken, rply);
		});
	});
	return -1;
}

module.exports = {
	create_User:create_User,
	Inquire_User:Inquire_User
};
