var User = require('./User/user');

function parseInput(UserId,UserName,Message,replyToken) {
	let msgSplitor = (/\S+/ig);	
    let mainMsg = Message.match(msgSplitor);
	let trigger = mainMsg[0].toString();
	if(trigger=="創建帳號")User.create_User(UserId,UserName,Message,replyToken);
	if(trigger=="查看帳號")User.Inquire_User(UserId,UserName,Message,replyToken);
	if(trigger=="簽到")User.check_in(UserId,UserName,Message,replyToken);
}

module.exports = {
	parseInput:parseInput
};