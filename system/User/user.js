const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = process.env.DB_URL;
// Database Name
const dbName = 'dream-realm-v2';
// Create a new MongoClient
const Mongoclient = new MongoClient(url);

var rply ={type : 'text'};


function create_User(UserId,UserName,Message){
	var finder;
	Mongoclient.connect(function(err) {
			assert.equal(null, err);
			//console.log("Connected successfully to server");
			const db = Mongoclient.db(dbName);
			db.collection('user').findOne({UserId:UserId}).then(function(data) {
			finder=data;
		});
	});
	if(finder!=null){
		rply.text=UserName+"帳號已存在";
		return rply;
	}
}
module.exports = {
	create_User:create_User
};