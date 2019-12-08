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
			
function one(UserId,UserName,Message,replyToken){
	let mainMsg = Message.match(msgSplitor);
	Mongoclient.connect(function(err) {
		assert.equal(null, err);
		//console.log("Connected successfully to server");
		
		
		Mongoclient.db(dbName).collection('user').findOne({UserId:UserId}).then((Udata)=>{
			if(Udata!=null){
				if(Udata.money>=100){
					Mongoclient.db(dbName).collection('system').findOne({name:"pool1"}).then((data)=> {
						var All=data.Probability.N+data.Probability.R+data.Probability.SR+data.Probability.SSR+data.Probability.UR;
						var Rng=Math.floor(Math.random()*All)+1;
						var CID=0;
						if(Rng<=data.Probability.UR){
							data.UR++;
							CID=data.Card.UR[Math.floor(Math.random()*data.Card.UR.length)];
						}
						else if(Rng-=data.Probability.UR,Rng<=data.Probability.SSR){
							data.SSR++;
							CID=data.Card.SSR[Math.floor(Math.random()*data.Card.SSR.length)];
						}
						else if(Rng-=data.Probability.SSR,Rng<=data.Probability.SR){
							data.SR++;
							CID=data.Card.SR[Math.floor(Math.random()*data.Card.SR.length)];
						}
						else if(Rng-=data.Probability.SR,Rng<=data.Probability.R){
							data.R++;
							CID=data.Card.R[Math.floor(Math.random()*data.Card.R.length)];
						}
						else {
							data.N++;
							CID=data.Card.N[Math.floor(Math.random()*data.Card.N.length)];
						}
						Mongoclient.db(dbName).collection('system').update({name:"pool1"},{"$set":data}, function(err, r) {
							assert.equal(null, err);
						});
						
						Udata.money-=100;
						if(!Udata.draw_all)Udata.draw_all=0;
						Udata.draw_all++;
						if(!Udata.card)Udata.card=[];
						Mongoclient.db(dbName).collection('card').findOne({"ID":CID},{projection: { _id: 0, ID: 1,Name:1,Race:1 }}).then((data_C)=> {
							rply.text=Udata.NickName+" 你抽到了\n["+data_C.ID+"]"+data_C.Race+"-"+data_C.Name;
							if(!Udata.card[CID])
								Udata.card[CID]={Race:data_C.Race,repeat:0};
							else
								Udata.card[CID].repeat++;
							Mongoclient.db(dbName).collection('user').update({UserId:UserId},{"$set":Udata}, function(err, r) {
								assert.equal(null, err);
							});
							rply.text+="\n剩餘"+Udata.money+"G";
							re_message.Line_reply(replyToken, rply);
							let time=new Date (new Date().getTime()+28800000);
							ToLog=time+" "+UserId+" "+CID;
							Mongoclient.db(dbName).collection('system').update({name:"Log"},{"$push" : { content : ToLog }}, function(err, r) {
								assert.equal(null, err);
							});
						});
					});
				}
				else{
					rply.text=Udata.NickName+" 金幣不足";
					re_message.Line_reply(replyToken, rply);
				}
			}
			else{
				rply.text=UserName+" 沒有帳號喔";
				re_message.Line_reply(replyToken, rply);
			}
		});
	});
}

function ten(UserId,UserName,Message,replyToken){
	let mainMsg = Message.match(msgSplitor);
	Mongoclient.connect(function(err) {
		assert.equal(null, err);
		//console.log("Connected successfully to server");
		Mongoclient.db(dbName).collection('user').findOne({UserId:UserId}).then((Udata)=>{
			if(Udata!=null){
				if(Udata.money>=1000){
					Mongoclient.db(dbName).collection('system').findOne({name:"pool1"}).then((data)=> {
						var CID=[];
						for(var i=0;i<10;i++){
							CID[i]={ID:0};
							var All=data.Probability.N+data.Probability.R+data.Probability.SR+data.Probability.SSR+data.Probability.UR;
							var Rng=Math.floor(Math.random()*All)+1;
							if(Rng<=data.Probability.UR){
								data.UR++;
								CID[i].ID=data.Card.UR[Math.floor(Math.random()*data.Card.UR.length)];
							}
							else if(Rng-=data.Probability.UR,Rng<=data.Probability.SSR){
								data.SSR++;
								CID[i].ID=data.Card.SSR[Math.floor(Math.random()*data.Card.SSR.length)];
							}
							else if(Rng-=data.Probability.SSR,Rng<=data.Probability.SR){
								data.SR++;
								CID[i].ID=data.Card.SR[Math.floor(Math.random()*data.Card.SR.length)];
							}
							else if(Rng-=data.Probability.SR,Rng<=data.Probability.R){
								data.R++;
								CID[i].ID=data.Card.R[Math.floor(Math.random()*data.Card.R.length)];
							}
							else {
								data.N++;
								CID[i].ID=data.Card.N[Math.floor(Math.random()*data.Card.N.length)];
							}
						}
						Mongoclient.db(dbName).collection('system').update({name:"pool1"},{"$set":data}, function(err, r) {
							assert.equal(null, err);
						});
						
						Udata.money-=1000;
						if(!Udata.draw_all)Udata.draw_all=0;
						Udata.draw_all++;
						if(!Udata.card)Udata.card=[];
									
						Mongoclient.db(dbName).collection('card').find({"$or":CID},{projection: { _id: 0, ID: 1,Name:1,Race:1 }}).toArray().then((data_C)=> {
							rply.text=Udata.NickName+" 你抽到了";
							for(let k of CID)
								for(let card of data_C)
									if(card.ID==k.ID){
										rply.text+="\n["+card.ID+"]"+card.Race+"-"+card.Name;
										if(!Udata.card[k.ID])
											Udata.card[k.ID]={Race:card.Race,repeat:0};
										else
											Udata.card[k.ID].repeat++;
									}
							rply.text+="\n剩餘"+Udata.money+"G";
							re_message.Line_reply(replyToken, rply);
							Mongoclient.db(dbName).collection('user').update({UserId:UserId},{"$set":Udata}, function(err, r) {
								assert.equal(null, err);
							});

							let time=new Date (new Date().getTime()+28800000);
							ToLog=time+" "+UserId+" ";
							for(let k of CID)
								ToLog+=k.ID+" ";
							Mongoclient.db(dbName).collection('system').update({name:"Log"},{"$push" : { content : ToLog }}, function(err, r) {
								assert.equal(null, err);
							});
						});
					});
				}
				else{
					rply.text=Udata.NickName+" 金幣不足";
					re_message.Line_reply(replyToken, rply);
				}
			}
			else{
				rply.text=UserName+" 沒有帳號喔";
				re_message.Line_reply(replyToken, rply);
			}
		});
		
	});
}
function theory(UserId,UserName,Message,replyToken){
	
	Mongoclient.connect(function(err) {
		assert.equal(null, err);
		Mongoclient.db(dbName).collection('system').findOne({name:"pool1"}).then((data)=> {
			var All=data.Probability.N+data.Probability.R+data.Probability.SR+data.Probability.SSR+data.Probability.UR;
			rply.text=
				"UR機率為 "+(data.Probability.UR/All*100).toFixed(2)+"%\n"+
				"SSR機率為 "+(data.Probability.SSR/All*100).toFixed(2)+"%\n"+
				"SR機率為 "+(data.Probability.SR/All*100).toFixed(2)+"%\n"+
				"R機率為 "+(data.Probability.R/All*100).toFixed(2)+"%\n"+
				"N機率為 "+(data.Probability.N/All*100).toFixed(2)+"%";
			re_message.Line_reply(replyToken, rply);
		});
	});
}
function real(UserId,UserName,Message,replyToken){
	Mongoclient.connect(function(err) {
		assert.equal(null, err);
		//console.log("Connected successfully to server");
		Mongoclient.db(dbName).collection('system').findOne({name:"pool1"}).then((data)=> {
			var all=data.N+data.R+data.SR+data.SSR+data.UR;
			rply.text=
			"總共"+all+"抽\n"+
			"UR "+data.UR+"抽\n"+
			"SSR "+data.SSR+"抽\n"+
			"SR "+data.SR+"抽\n"+
			"R "+data.R+"抽\n"+
			"N "+data.N+"抽\n\------------\n"+
			"UR佔比為 "+(data.UR/all*100).toFixed(2)+"%\n"+
			"SSR佔比為 "+(data.SSR/all*100).toFixed(2)+"%\n"+
			"SR佔比為 "+(data.SR/all*100).toFixed(2)+"%\n"+
			"R佔比為 "+(data.R/all*100).toFixed(2)+"%\n"+
			"N佔比為 "+(data.N/all*100).toFixed(2)+"%";
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
