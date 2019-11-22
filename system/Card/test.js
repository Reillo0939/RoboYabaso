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
var Probability={
	UR:1,
	SSR:4,
	SR:10,
	R:25,
	N:60,
	All:100
};
			
function one(UserId,UserName,Message,replyToken){
	let mainMsg = Message.match(msgSplitor);
	Mongoclient.connect(function(err) {
		assert.equal(null, err);
		//console.log("Connected successfully to server");
		Mongoclient.db(dbName).collection('system').findOne({name:"test"}).then((data)=> {
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
		});
	});
}

function ten(UserId,UserName,Message,replyToken){
	let mainMsg = Message.match(msgSplitor);
	Mongoclient.connect(function(err) {
		assert.equal(null, err);
		//console.log("Connected successfully to server");
		Mongoclient.db(dbName).collection('system').findOne({name:"test"}).then((data)=> {
			
			rply.text="";
			for(var i=0;i<10;i++){
				var Rng=Math.random()*Probability.All+1;
				if(Rng<=Probability.UR){
					data.UR++;
					rply.text+="UR";
				}
				else if(Rng-=Probability.UR,Rng<=Probability.SSR){
					data.SSR++;
					rply.text+="SSR";
				}
				else if(Rng-=Probability.SSR,Rng<=Probability.SR){
					data.SR++;
					rply.text+="SR";
				}
				else if(Rng-=Probability.SR,Rng<=Probability.R){
					data.R++;
					rply.text+="R";
				}
				else {
					data.N++;
					rply.text+="N";
				}
				if(i<9)rply.text+=",";
			}
			re_message.Line_reply(replyToken, rply);
			var all=data.N+data.R+data.SR+data.SSR+data.UR;
			Mongoclient.db(dbName).collection('system').update({name:"test"},{"$set":data}, function(err, r) {
				assert.equal(null, err);
			});
		});
	});
}
function theory(UserId,UserName,Message,replyToken){
	rply.text=
	"UR機率為 1%\n"+
	"SSR機率為 4%\n"+
	"SR機率為 10%\n"+
	"R機率為 25%\n"+
	"N機率為 60%";
	re_message.Line_reply(replyToken, rply);
}
function real(UserId,UserName,Message,replyToken){
	Mongoclient.connect(function(err) {
		assert.equal(null, err);
		//console.log("Connected successfully to server");
		Mongoclient.db(dbName).collection('system').findOne({name:"test"}).then((data)=> {
			var all=data.N+data.R+data.SR+data.SSR+data.UR;
			rply.text=
			"總共"+all+"抽\n"+
			"UR "+data.UR+"抽\n"+
			"SSR "+data.SSR+"抽\n"+
			"SR "+data.SR+"抽\n"+
			"R "+data.R+"抽\n"+
			"N "+data.N+"抽\n"+
			"UR機率為 "+(data.UR/all*100).toFixed(2)+"%\n"+
			"SSR機率為 "+(data.SSR/all*100).toFixed(2)+"%\n"+
			"SR機率為 "+(data.SR/all*100).toFixed(2)+"%\n"+
			"R機率為 "+(data.R/all*100).toFixed(2)+"%\n"+
			"N機率為 "+(data.N/all*100).toFixed(2)+"%\n";
			re_message.Line_reply(replyToken, rply);
		});
	});
}

module.exports = {
	one:one,
	ten:ten,
	theory:theory,
	real:real
};
