var express = require('express');//
var bodyParser = require('body-parser');
var app = express();//262
var ox = require('./roll/Character.js');
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
var input='';
var battle=0;
ox.oz();
bot.on('message', function(event) { if (event.message.type = 'text') { 
var msg = '';
let a = event.source.userId;
	let b='';
	
	
	
event.source.profile().then(function (profile) {
b=profile.displayName;
//Ca8fea1f8ef1ef2519860ee21fb740fd2   群id


if(event.message.text=='戰鬥模式啟動'&&battle==0){
if(a=='U7c4779fd913aff927f26d7f6bedd87d1'||a=='Uc9b4571605aabd3e94edd7c189144278'){
battle=1;
event.reply({ type: 'text', text: '已啟動戰鬥模式' });	
}
else{
event.reply({type: 'text', text: 'GM才能使用' });	
}
}
	if(battle==0){
		msg =exports.analytics.parseInput(event.rplyToken, event.message.text,a,b);
if(event.message.text=='武裝裝甲聯合戰線'){
event.reply([{
  type: 'image',
  originalContentUrl: 'https://2.bp.blogspot.com/-b7JvOc_z2SU/WqfgwGgmylI/AAAAAAAADJI/k1rhP5ERtycFl6D4OqCEip1ShubvAbedgCLcBGAs/s1600/AAUF.jpg',
  previewImageUrl: 'https://2.bp.blogspot.com/-b7JvOc_z2SU/WqfgwGgmylI/AAAAAAAADJI/k1rhP5ERtycFl6D4OqCEip1ShubvAbedgCLcBGAs/s1600/AAUF.jpg'
},
  { type: 'text', text: '擁武裝裝甲聯合戰線是β粒子公諸於世後由數個高發展高技術的國家為基礎，並以人才技術互通協約為基底所產生的武裝研究機關。此研究機關原本是將粒子的能源替代性發揮到最大，並以此為基礎將已經近乎停滯的科技水平再次提高，然而此研究因為假想敵的魔術系統實驗成功而轉向粒子與外骨骼裝甲結合的新世代步兵武裝研究。在擁有近乎無限可能的新型能源下，研究的進展相當快速，操作員的篩選和培訓也非常樂觀，最終，結合粒子糾纏現象和AI輔助演算的具現化系統也成功運行，武裝裝甲聯合戰線也在具現化武裝發表的那一天，正式成立。' }]);
}
if(event.message.text=='蓋爾奇亞聯合'){
event.reply([{
  type: 'image',
  originalContentUrl: 'https://1.bp.blogspot.com/-esavyLGBQ8I/WqfgwIWh0XI/AAAAAAAADJM/ZYR8ZXdjkzgOzGc_VEetoGgtHPEvSbzUwCLcBGAs/s1600/GU.jpg',
  previewImageUrl: 'https://1.bp.blogspot.com/-esavyLGBQ8I/WqfgwIWh0XI/AAAAAAAADJM/ZYR8ZXdjkzgOzGc_VEetoGgtHPEvSbzUwCLcBGAs/s1600/GU.jpg'
},
  { type: 'text', text: '蓋爾奇亞聯合是最初發現β粒子的聯合陣營，在發現之後進行了將近十年的非公開研究，這十年間，β粒子成為了新的能源，科技水平大幅的提升，使得聯合外的部分國家互相簽定了人才技術互通協約。然而在研究的第十年，第十一實驗設施發生了粒子洩漏事故，並在該區域產生了非自然性的環境改變，此計畫才不得不公諸於世。雖然粒子的存在被眾人所知，但研究也有了新的突破，β粒子不再局限於能源，研究團隊在洩漏事故所產生的環境異變中了解到了其改變既有事物的能力，並嘗試以人來控制局部事像的改變，經歷了許多次的失敗和犧牲，建構出了現今的魔術系統。' }]
	   );
}

if(event.message.text=='( ´･ω･`)'){
event.reply(
  { type: 'text', text: '( ´･ω･`)' });
}
if(event.message.text=='(´・ω・`)'){
event.reply(
  { type: 'text', text: '(´・ω・`)' });
}
		 event.reply(msg);
	}
if(event.message.text=='重新載入'){
if(a=='U7c4779fd913aff927f26d7f6bedd87d1'||a=='Uc9b4571605aabd3e94edd7c189144278'){
ox.oz();
event.reply({ type: 'text', text: '重新載入，請稍後片刻' });	
}
else{
event.reply({type: 'text', text: 'GM才能使用' });	
}
}

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
    range: 'test',
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
	      if(i ==rows.length-1){
        a += 'id ' + row[0]+' name '+row[1] +' LV '+row[2];}
	      else{
		      a += 'id ' + row[0]+' name '+row[1] +' LV '+row[2]+'\n';
	      }
	
}
    cat=a;
    }})}

function gotgpt(auth) {
var c ='';
c=input;
	var values = [
  [c
  ],
];
var body = {
  values: values
};
	var request = {
    spreadsheetId: mySheetId,
        range: 'test!A7:A7',
      valueInputOption: 'RAW',
        resource: {
      values: values
    },

    auth: auth,
  };
	
sheets.spreadsheets.values.update(request, function(err, result) {
  if(err) {
    // Handle error
    console.log(err);
  } else {
    console.log('%d cells updated.', result.updatedCells);
  }
});
}
