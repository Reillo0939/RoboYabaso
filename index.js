var express = require('express');
var bodyParser = require('body-parser');
var app = express();//262
var channelAccessToken = process.env.LINE_CHANNEL_ACCESSTOKEN;
var channelSecret = process.env.LINE_CHANNEL_SECRET;
var linebot = require('linebot');
 var channelId='1487304211';
var bot = linebot({
  channelId: channelId,
  channelSecret: channelSecret,
  channelAccessToken: channelAccessToken
});
var jsonParser = bot.parser();
var google = require('googleapis');
var sheets = google.sheets('v4');
var googleAuth = require('google-auth-library');
var myClientSecret={"installed":{"client_id":"399740110786-ai6tcngsubr5d8jc1qdirv5b1ehmft9h.apps.googleusercontent.com","project_id":"linebot-0939","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://accounts.google.com/o/oauth2/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"z9gr8MowvkKKI_xI7HfaunSO","redirect_uris":["urn:ietfwg:oauth:2.0:oob","http://localhost"]}}
var OAuth2 = google.auth.OAuth2;
var oauth2Client = new OAuth2(  '399740110786-lq7lj10lalj51lg867rorffctc3k9o94',
'WNBjc6GaC8_m7SFH5_qxuWUq',
  'http://localhost'
);
var API_KEY = 'AIzaSyCEtwsTELMS5YtDw3A6LesTHvQ4OrElgGA'; // specify your API key here
var mySheetId='1QUIuFsRa1PP-862kS7TmwWSPxRrqhv5HBuu2n9tHIlg';
var cat='';
bot.on('message', function(event) { if (event.message.type = 'text') { 
var msg = '';
let a = event.source.userId;
	let b='';
event.source.profile().then(function (profile) {
sheets.spreadsheets.values.get({
      auth: API_KEY,
      spreadsheetId: mySheetId,
      range:encodeURI('test'),
   }, function(err, response) {
      if (err) {
         console.log('讀取問題檔的API產生問題：' + err);
         return;
      }
      cat= response.values[0][0];
      console.log('title已下載完畢！');
   });
b=profile.displayName;
//Ca8fea1f8ef1ef2519860ee21fb740fd2   群id
msg =exports.analytics.parseInput(event.rplyToken, event.message.text,a,b);
  event.reply(msg);
  console.log(b+'  '+event.message.text+'   '+cat);
});
  } });
 
require('fs').readdirSync(__dirname + '/modules/').forEach(function(file) {
  if (file.match(/\.js$/) !== null && file !== 'index.js') {
    var name = file.replace('.js', '');
    exports[name] = require('./modules/' + file);
  }
});
app.set('port', (process.env.PORT || 5000));
// views is directory for all template files
app.get('/', function(req, res) {
//	res.send(parseInput(req.query.input));
	res.send('Hello');
});
app.post('/', jsonParser, function(req, res) {
});
app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});
