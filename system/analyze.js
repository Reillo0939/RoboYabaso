var User = require('./User/user');

function parseInput(UserId,UserName,Message,replyToken) {
	let msgSplitor = (/\S+/ig);	
    let mainMsg = Message.match(msgSplitor);
	let trigger = mainMsg[0].toString();
	if(trigger=="創建帳號")return User.create_User(UserId,UserName,Message,replyToken);
	if(trigger=="查看帳號")return User.Inquire_User(UserId,UserName,Message,replyToken);
}

module.exports = {
	parseInput:parseInput
};