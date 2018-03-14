var express = require('express');//
var bodyParser = require('body-parser');
var app = express();//262
var channelAccessToken = process.env.LINE_CHANNEL_ACCESSTOKEN;
var channelSecret = process.env.LINE_CHANNEL_SECRET;
var linebot = require('linebot');///030
 var channelId='1567989750';
var bot = linebot({
  channelId: channelId,
  channelSecret: channelSecret,
  channelAccessToken: channelAccessToken
});
var jsonParser = bot.parser();
var google = require('googleapis');
var sheets = google.sheets('v4');
var googleAuth = require('google-auth-library');
var auth = new googleAuth();
var OAuth2 = google.auth.OAuth2;
var REDIRECT_URL='urn:ietf:wg:oauth:2.0:oob';
/*var oauth2Client = new auth.OAuth2(  '399740110786-ne3lhespt77ni2mt99ae1sunohrts5jh.apps.googleusercontent.com',
'OzjUGCSYtQExFf4k_XJc9Q_W',
  'https://dream-realm-v2.herokuapp.com/oauth2calkback'
);*/

var oauth2Client = new OAuth2(
  '399740110786-ai6tcngsubr5d8jc1qdirv5b1ehmft9h.apps.googleusercontent.com',
  'GFRUPZFJo1qNKIYabC2T34CD',
 REDIRECT_URL
);

// generate a url that asks permissions for Google+ and Google Calendar scopes
var scopes = [
  'https://www.googleapis.com/auth/drive',
  'https://www.googleapis.com/auth/drive.file',
'https://www.googleapis.com/auth/drive.readonly',
	'https://www.googleapis.com/auth/spreadsheets',
	'https://www.googleapis.com/auth/spreadsheets.readonly'
];

var url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: 'offline',

  // If you only need one scope you can pass it as a string
  scope: scopes,

  // Optional property that passes state parameters to redirect URI
  // state: 'foo'
});
oauth2Client.getToken(code, function (err, tokens) {
  // Now tokens contains an access_token and an optional refresh_token. Save them.
  if (!err) {
    oauth2Client.setCredentials(tokens);
  }
});
var API_KEY = 'AIzaSyBM_GM_ZVEqwDsOPmpVBR3XI3BhwD4Bfm4'; 
var mySheetId='1QUIuFsRa1PP-862kS7TmwWSPxRrqhv5HBuu2n9tHIlg';
var cat='';
bot.on('message', function(event) { if (event.message.type = 'text') { 
var msg = '';
let a = event.source.userId;
	let b='';
event.source.profile().then(function (profile) {
sheets.spreadsheets.values.get({
  auth: oauth2Client,
      spreadsheetId: mySheetId,
      //range:'test!A1:A3',
	range:encodeURI('test'),
	//valueRenderOption: '',
	//dateTimeRenderOption: '',
	
	
}, function(err, response) {
  if(err) {
    // Handle error
    console.log(err);
  } else {
    var numRows;
    numRows = response.values;
    console.log('retrieved.   ' + numRows[1].length);
  }
});
b=profile.displayName;
//Ca8fea1f8ef1ef2519860ee21fb740fd2   群id

msg =exports.analytics.parseInput(event.rplyToken, event.message.text,a,b);
if(event.message.text=='武裝裝甲聯合戰線'){
event.reply([{
  type: 'image',
  originalContentUrl: 'https://2.bp.blogspot.com/-b7JvOc_z2SU/WqfgwGgmylI/AAAAAAAADJI/k1rhP5ERtycFl6D4OqCEip1ShubvAbedgCLcBGAs/s1600/AAUF.jpg',
  previewImageUrl: 'https://2.bp.blogspot.com/-b7JvOc_z2SU/WqfgwGgmylI/AAAAAAAADJI/k1rhP5ERtycFl6D4OqCEip1ShubvAbedgCLcBGAs/s1600/AAUF.jpg'
},
  { type: 'text', text: '擁有超現代技術與使用beta粒子能量的聯合' }]);
}
if(event.message.text=='蓋爾奇亞聯合'){
event.reply([{
  type: 'image',
  originalContentUrl: 'https://1.bp.blogspot.com/-esavyLGBQ8I/WqfgwIWh0XI/AAAAAAAADJM/ZYR8ZXdjkzgOzGc_VEetoGgtHPEvSbzUwCLcBGAs/s1600/GU.jpg',
  previewImageUrl: 'https://1.bp.blogspot.com/-esavyLGBQ8I/WqfgwIWh0XI/AAAAAAAADJM/ZYR8ZXdjkzgOzGc_VEetoGgtHPEvSbzUwCLcBGAs/s1600/GU.jpg'
},
  { type: 'text', text: '融合現代科技與beta粒子魔法技術的聯合國家' }]
	   );
}
  event.reply(msg);
	
  console.log(b+'  '+event.message.text+'   '+url);
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

