var User = require('./User/user');
var nAnB = require('./LittleGame/nAnB.js');
var illustration = require('./Card/illustration.js');
var ct = require('./Card/test.js');
var image = require('./LittleGame/image.js');

function parseInput(UserId,UserName,Message,replyToken) {
	let msgSplitor = (/\S+/ig);	
    let mainMsg = Message.match(msgSplitor);
	let trigger = mainMsg[0].toString();
	if(trigger=="創建帳號")User.create_User(UserId,UserName,Message,replyToken);
	if(trigger=="查看帳號")User.Inquire_User(UserId,UserName,Message,replyToken);
	if(trigger=="簽到")User.check_in(UserId,UserName,Message,replyToken);
	if(trigger=="暱稱更改")User.Rename(UserId,UserName,Message,replyToken);
	if(trigger=="猜數字")nAnB.Game(UserId,UserName,Message,replyToken);
	if(trigger=="圖鑑")illustration.illustration(UserId,UserName,Message,replyToken);
	if(trigger=="試抽一次")ct.one(UserId,UserName,Message,replyToken);
	if(trigger=="試抽十次")ct.ten(UserId,UserName,Message,replyToken);
	if(trigger=="試抽理論值")ct.theory(UserId,UserName,Message,replyToken);
	if(trigger=="試抽統計值")ct.real(UserId,UserName,Message,replyToken);
	
	if(trigger=="圖片")image.image(UserId,UserName,Message,replyToken);
}

module.exports = {
	parseInput:parseInput
};
