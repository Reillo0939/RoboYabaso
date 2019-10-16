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

function create_User(UserId,UserName,Message){
	var finder;
	Mongoclient.connect(function(err) {
			assert.equal(null, err);
			//console.log("Connected successfully to server");
			Mongoclient.db(dbName).collection('user').findOne({UserId:UserId}).then((data)=> {
			if(data!=null){
				rply.text=UserName+" 帳號已存在";
				return rply;
			}
			else{
				let mainMsg = Message.match(msgSplitor);
				let NickName=mainMsg[1];
				if(NickName==null||NickName==undefined){
					rply.text=UserName+" 缺少暱稱";
					return rply;
				}
				Mongoclient.connect(function(err) {
					assert.equal(null, err);
					Mongoclient.db(dbName).collection('user').insertOne({UserId : UserId,NickName:NickName,money:2000 }, function(err, r) {
						assert.equal(null, err);
					});
				});
				rply.text=UserName+" / "+NickName+" 帳號已創建完畢";
				return rply;
			}
		});
	});
	console.log(rply);
}
function Inquire_User(UserId,UserName,Message){
	var finder;
	Mongoclient.connect(function(err) {
		assert.equal(null, err);
		//console.log("Connected successfully to server");
		Mongoclient.db(dbName).collection('user').findOne({UserId:UserId}).then((data)=>{
			if(data!=null){
				rply.text=data.NickName+"\n擁有"+data.money+"G";
				return rply;
			}
			else{
				rply.text=UserName+" 沒有帳號喔";
				return rply;
			}
		});
	});
}

module.exports = {
	create_User:create_User,
	Inquire_User:Inquire_User
};
