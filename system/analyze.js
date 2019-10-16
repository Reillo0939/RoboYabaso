var User = require('./User/user');

function parseInput(UserId,UserName,Message) {
	let msgSplitor = (/\S+/ig);	
    let mainMsg = Message.match(msgSplitor);
	let trigger = mainMsg[0].toString();
	if(trigger=="創建帳號")User.create_User(UserId,UserName,Message);
	if(trigger=="查看帳號")User.Inquire_User(UserId,UserName,Message);
}

module.exports = {
	parseInput:parseInput
};