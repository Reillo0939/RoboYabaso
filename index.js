var express = require('express');
var bodyParser = require('body-parser');
var app = express();//262
var API_KEY = 'AIzaSyCEtwsTELMS5YtDw3A6LesTHvQ4OrElgGA'; 
var mySheetId='1QUIuFsRa1PP-862kS7TmwWSPxRrqhv5HBuu2n9tHIlg';
var jsonParser = bot.parser();
var google = require('googleapis');
var googleAuth = require('google-auth-library');
var OAuth2 = google.auth.OAuth2;
var oauth2Client = new OAuth2(  '399740110786-lq7lj10lalj51lg867rorffctc3k9o94',
'WNBjc6GaC8_m7SFH5_qxuWUq',
  'http://localhost:3000/oauth2callback'
);
var sheets = google.sheets('v4');
var channelAccessToken = process.env.LINE_CHANNEL_ACCESSTOKEN;
var channelSecret = process.env.LINE_CHANNEL_SECRET;
var linebot = require('linebot');
 var channelId='1487304211';
var bot = linebot({
  channelId: channelId,
  channelSecret: channelSecret,
  channelAccessToken: channelAccessToken
});




 
bot.on('message', function(event) { if (event.message.type = 'text') { 
var msg = '';
let a = event.source.userId;
	let b='';
event.source.profile().then(function (profile) {
b=profile.displayName;
//Ca8fea1f8ef1ef2519860ee21fb740fd2   群id
msg = handleEvent(event,a,b);
  event.reply(msg);
  console.log(b+'  '+event.message.text);
});
  } });
  




//以下的引號內請輸入申請LineBot取得的各項資料，逗號及引號都不能刪掉

//底下輸入client_secret.json檔案的內容
var myClientSecret={"installed":{"client_id":"399740110786-ai6tcngsubr5d8jc1qdirv5b1ehmft9h.apps.googleusercontent.com","project_id":"linebot-0939","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://accounts.google.com/o/oauth2/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"z9gr8MowvkKKI_xI7HfaunSO","redirect_uris":["urn:ietfwg:oauth:2.0:oob","http://localhost"]}}

//var auth = new googleAuth();

var cat='';

 


require('fs').readdirSync(__dirname + '/modules/').forEach(function(file) {
  if (file.match(/\.js$/) !== null && file !== 'index.js') {
    var name = file.replace('.js', '');
    exports[name] = require('./modules/' + file);
  }
});

var options = {
	host: 'api.line.me',
	port: 443,
	path: '/v2/bot/message/reply',
	method: 'POST',
	headers: {
	'Content-Type': 'application/json',
	'Authorization':'Bearer ' + channelAccessToken
	}
}
app.set('port', (process.env.PORT || 5000));
// views is directory for all template files
app.get('/', function(req, res) {
//	res.send(parseInput(req.query.input));
	res.send('Hello');
});
app.post('/', jsonParser, function(req, res) {
	let event = req.body.events[0];
	let type = event.type;
	let msgType = event.message.type;
	let msg = event.message.text;
	let rplyToken = event.replyToken;
	let a = event.source.userId;
	var b;
	bot.getUserProfile(a).then(function (profile) {

   b=profile.displayName;

});


	let rplyVal = {};
	console.log(msg + '  ' + a +'  '+b );

	//訊息來到後, 會自動呼叫handleEvent 分類,然後跳到analytics.js進行骰組分析
	//如希望增加修改骰組,只要修改analytics.js的條件式 和ROLL內的骰組檔案即可,然後在HELP.JS 增加說明.
	try {
	rplyVal = handleEvent(event,a);
	} 
	catch(e) {
		console.log('catch error');
		console.log('Request error: ' + e.message);
	}
	//把回應的內容,掉到replyMsgToLine.js傳出去
	if (rplyVal) {
		exports.replyMsgToLine.replyMsgToLine(rplyToken, rplyVal, options);
	
		
	} else {
	//console.log('Do not trigger'); 
	}
	res.send('ok');
});

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});



function handleEvent(event,id,name) {
  switch (event.type) {
    case 'message':
      const message = event.message;
      switch (message.type) {
        case 'text':
          return exports.analytics.parseInput(event.rplyToken, event.message.text,id,name); 
        default:
           break;
      }
    case 'follow':
		break;
    case 'unfollow':
       break;
    case 'join':
break;
    case 'leave':
       break;
    case 'postback':
       break;
    case 'beacon':
      break;
    default:
       break;
  }
}
