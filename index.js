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
// generate a url that asks permissions for Google+ and Google Calendar scopes
var API_KEY = 'AIzaSyBM_GM_ZVEqwDsOPmpVBR3XI3BhwD4Bfm4'; 
var mySheetId='1QUIuFsRa1PP-862kS7TmwWSPxRrqhv5HBuu2n9tHIlg';
var cat='';
bot.on('message', function(event) { if (event.message.type = 'text') { 
var msg = '';
let a = event.source.userId;
	let b='';
event.source.profile().then(function (profile) {
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
	
if(event.message.text=='試算表測試'){
fs.readFile('client_secret.json', function processClientSecrets(err, content) {
  if (err) {
    console.log('Error loading client secret file: ' + err);
    return;
  }
  authorize(JSON.parse(content), tests);
});
event.reply([{
  type: 'text', text: 'https://docs.google.com/spreadsheets/d/1QUIuFsRa1PP-862kS7TmwWSPxRrqhv5HBuu2n9tHIlg/edit?usp=sharing' 
},
  { type: 'text', text: cat }]);	
}
	let msgSplitor = (/\S+/ig);	
	let mainMsg = event.message.text.match(msgSplitor); //定義輸入字串
	let trigger = mainMsg[0].toString().toLowerCase(); //指定啟動詞在第一個詞&把大階強制轉成細階
if(trigger.match(/寫入實驗/) != null){
		
	
fs.readFile('client_secret.json', function processClientSecrets(err, content) {
  if (err) {
    console.log('Error loading client secret file: ' + err);
    return;
  }
  authorize(JSON.parse(content), gotgpt);
});
event.reply([{
  type: 'text', text: 'https://docs.google.com/spreadsheets/d/1QUIuFsRa1PP-862kS7TmwWSPxRrqhv5HBuu2n9tHIlg/edit?usp=sharing' 
}]);	
}	
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

var fs = require('fs');
var readline = require('readline');
var google = require('googleapis');
var googleAuth = require('google-auth-library');

// If modifying these scopes, delete your previously saved credentials
// at ~./sheetsapi.json
var SCOPES = [
  'https://www.googleapis.com/auth/drive',
  'https://www.googleapis.com/auth/drive.file',
'https://www.googleapis.com/auth/drive.readonly',
	'https://www.googleapis.com/auth/spreadsheets',
	'https://www.googleapis.com/auth/spreadsheets.readonly'
];
var TOKEN_DIR = './';
var TOKEN_PATH = TOKEN_DIR + 'sheetsapi.json';



/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 *
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  var clientSecret = 'm7LO-KOhUMl3TZ4ni1FA8xGo';
  var clientId = '399740110786-f7j06o0tsbmvbk2v570qc13g0a034iqa.apps.googleusercontent.com';
  var redirectUrl ='urn:ietf:wg:oauth:2.0:oob';
  var auth = new googleAuth();
  var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);
  fs.readFile(TOKEN_PATH, function(err, token) {
    if (err) {
      getNewToken(oauth2Client, callback);
    } else {
      oauth2Client.credentials = JSON.parse(token);
      callback(oauth2Client);
    }
  });
}

function getNewToken(oauth2Client, callback) {
  var authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  });
  console.log('Authorize this app by visiting this url: ', authUrl);
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Enter the code from that page here: ', function(code) {
    rl.close();
    oauth2Client.getToken(code, function(err, token) {
      if (err) {
        console.log('Error while trying to retrieve access token', err);
        return;
      }
      oauth2Client.credentials = token;
      storeToken(token);
      callback(oauth2Client);
    });
  });
}
function storeToken(token) {
  try {
    fs.mkdirSync(TOKEN_DIR);
  } catch (err) {
    if (err.code != 'EEXIST') {
      throw err;
    }
  }
  fs.writeFile(TOKEN_PATH, JSON.stringify(token));
  console.log('Token stored to ' + TOKEN_PATH);
}

function tests(auth) {
 sheets.spreadsheets.values.get({
    auth: auth,
    spreadsheetId: mySheetId,
    range: 'test!A1:B6',
  }, function(err, response) {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    }
    var rows = response.values;
    if (rows.length == 0) {
      console.log('No data found.');
    } else {
	     var a='';
      for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
	    
        // Print columns A and E, which correspond to indices 0 and 4.
	      
        a += row[0]+'  '+row[1] + '\n';
	
}
    cat=a;
    }})}

function gotgpt(auth) {
	
	
	var values = [
  ['030'
  ],
];
var body = {
  values: values
};
sheets.spreadsheets.values.update({
 auth: auth,
  spreadsheetId: mySheetId,
  range: 'test!A7:A7',
  valueInputOption:'RAW',
  resource: body
}, function(err, result) {
  if(err) {
    // Handle error
    console.log(err);
  } else {
    console.log('%d cells updated.', result.updatedCells);
  }
});
}
