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
			var Probability={};
			Probability.UR=1;
			Probability.SSR=4;
			Probability.SR=10;
			Probability.R=25;
			Probability.N=60;
			Probability.All=100;
			var Rng=Math.random()*Probability.All+1;
			
			if(Rng<=Probability.UR){
				data.UR++;
				rply.text="UR";
			}
			else if(Rng-=Probability.UR,Rng<=Probability.SSR){
				data.SSR++;
				rply.text="SSR";
			}
			else if(Rng-=Probability.SSR,Rng<=Probability.SR){
				data.SR++;
				rply.text="SR";
			}
			else if(Rng-=Probability.SR,Rng<=Probability.R){
				data.R++;
				rply.text="R";
			}
			else {
				data.N++;
				rply.text="N";
			}
			re_message.Line_reply(replyToken, rply);
			var all=data.N+data.R+data.SR+data.SSR+data.UR;
			Mongoclient.db(dbName).collection('system').update({name:"test"},{"$set":data}, function(err, r) {
				assert.equal(null, err);
			});
			//rply.text="["+data.ID+"]"+data.Race+"-"+data.Name+"\n";
		});
		
	});
}


module.exports = {
	test:test
};
