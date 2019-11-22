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

function test(UserId,UserName,Message,replyToken){
	let mainMsg = Message.match(msgSplitor);
	Mongoclient.connect(function(err) {
		assert.equal(null, err);
		//console.log("Connected successfully to server");
		Mongoclient.db(dbName).collection('system').findOne({name:"test"}).then((data)=> {
			var all=data.N+data.R+data.SR+data.SSR+data.UR;
			data.UR++;
			console.log(data);
			Mongoclient.db(dbName).collection('system').update({name:"test"},{"$set":data}, function(err, r) {
				assert.equal(null, err);
			});
			//rply.text="["+data.ID+"]"+data.Race+"-"+data.Name+"\n";
			//re_message.Line_reply(replyToken, rply);
		});
		
	});
}


module.exports = {
	test:test
};
