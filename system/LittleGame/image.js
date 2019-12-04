var re_message = require('../message.js');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = process.env.DB_URL;
// Database Name
const dbName = 'dream-realm-v2';
// Create a new MongoClient
const Mongoclient = new MongoClient(url);



let msgSplitor = (/\S+/ig);	

function image(UserId,UserName,Message,replyToken){
	let mainMsg = Message.match(msgSplitor);
	var rply ={
		type: 'image',
		originalContentUrl: mainMsg[1],
		previewImageUrl: mainMsg[1]
	};
	re_message.Line_reply(replyToken, rply);
}


module.exports = {
	image:image
};
