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
					new_user.login_date[0]=(new Date(today.getFullYear(),today.getMonth()+1,today.getDate()).getTime()-new Date(2019,10,17).getTime())/86400000-1;
					new_user.Always_check_in=0;
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
			re_message.Line_reply(replyToken, rply);
		});
	});
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
			re_message.Line_reply(replyToken, rply);
		});
	});
}

function check_in(UserId,UserName,Message,replyToken){
	var finder;
	Mongoclient.connect(function(err) {
		assert.equal(null, err);
		//console.log("Connected successfully to server");
		Mongoclient.db(dbName).collection('user').findOne({UserId:UserId}).then((data)=>{
			if(data!=null){
				var today=new Date (new Date().getTime()+28800000);
				var check_in_date=(new Date(today.getFullYear(),today.getMonth(),today.getDate()).getTime()-new Date(2019,9,17).getTime())/86400000;
				var Christmas=(new Date(today.getFullYear(),today.getMonth(),today.getDate()).getTime()-new Date(2019,12,27).getTime())/86400000;
				var NewYear=(new Date(today.getFullYear(),today.getMonth(),today.getDate()).getTime()-new Date(2020,1,1).getTime())/86400000;
				if(data.login_date[data.login_date.length-1]==check_in_date){
					rply.text=data.NickName+" 你已經簽到完嘍";
				}
				else{
					data.login_date[data.login_date.length]=check_in_date;
					if(data.login_date[data.login_date.length-1]-data.login_date[data.login_date.length-2]!=1)data.Always_check_in=0;
					if(Christmas==0){
						data.money+=3000+Math.min(5*data.Always_check_in,100);
						rply.text=data.NickName+" 簽到成功\n獲得聖誕節忘了給的1000G\n已連續簽到"+data.Always_check_in+"天\n額外獲得"+Math.min(5*data.Always_check_in,100)+"G\n現有"+data.money+"G";
					}
					else if(NewYear==0){
						data.money+=3000+Math.min(5*data.Always_check_in,100);
						rply.text=data.NickName+" 簽到成功\n獲得新年簽到賞3000G\n已連續簽到"+data.Always_check_in+"天\n額外獲得"+Math.min(5*data.Always_check_in,100)+"G\n現有"+data.money+"G";
					}
					else{
						data.money+=100+Math.min(5*data.Always_check_in,100);
						rply.text=data.NickName+" 簽到成功\n獲得100G\n已連續簽到"+data.Always_check_in+"天\n額外獲得"+Math.min(5*data.Always_check_in,100)+"G\n現有"+data.money+"G";
					}
					data.Always_check_in++;
					Mongoclient.db(dbName).collection('user').update({UserId:UserId},{"$set":data}, function(err, r) {
						assert.equal(null, err);
					});
				}
			}
			else{
				rply.text=UserName+" 沒有帳號喔";
			}
			re_message.Line_reply(replyToken, rply);
		});
	});
}

function Rename(UserId,UserName,Message,replyToken){
	Mongoclient.connect(function(err) {
			assert.equal(null, err);
			//console.log("Connected successfully to server");
			Mongoclient.db(dbName).collection('user').findOne({UserId:UserId}).then((data)=> {
			if(data!=null){
				
				let mainMsg = Message.match(msgSplitor);
				let NickName=mainMsg[1];
				if(NickName==null||NickName==undefined){
					rply.text=data.NickName+" 缺少暱稱";
				}
				else{
					data.NickName=NickName;
					Mongoclient.db(dbName).collection('user').update({UserId:UserId},{"$set":data}, function(err, r) {
						assert.equal(null, err);
					});
					rply.text=NickName+" 暱稱已修改完成";
				}
			}
			else{
				rply.text=UserName+" 沒有帳號喔";
			}
			re_message.Line_reply(replyToken, rply);
		});
	});
}

module.exports = {
	create_User:create_User,
	Inquire_User:Inquire_User,
	check_in:check_in,
	Rename:Rename
};
