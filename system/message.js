var linebot = require('linebot');
var bot = linebot({
	channelId: process.env.LINE_CHANNEL_ID,
	channelSecret: process.env.LINE_CHANNEL_SECRET,
	channelAccessToken: process.env.LINE_CHANNEL_ACCESSTOKEN
});

function Line_reply(replyToken, message){
	bot.reply(replyToken, message);
}

module.exports = {
	Line_reply:Line_reply
};