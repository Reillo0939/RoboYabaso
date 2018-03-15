var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var fs = require('fs');
var readline = require('readline');
var google = require('googleapis');
var googleAuth = require('google-auth-library');
var sheets = google.sheets('v4');
var mySheetId='1QUIuFsRa1PP-862kS7TmwWSPxRrqhv5HBuu2n9tHIlg';
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
//-------------------------------------------------------------------------------------------------------------------------------
var rply ={type : 'text'}; //type是必需的,但可以更改
var Characters = [];
var cat;
function CM(name,age) {
	var HP,MP,ATK,None,Fire,Water,Wind,Earth,Reaction,Occupation,Growing;
fs.readFile('client_secret.json', function processClientSecrets(err, content) {
  if (err) {
    console.log('Error loading client secret file: ' + err);
    return;
  }
  authorize(JSON.parse(content), tests);
});

if((age>=30)&&(age<=65)){
Occupation='媒介使';
HP=((rollbase.Dice(20) - 1) * 9)+20;
MP=((rollbase.Dice(5) - 1) * 9)+20;
ATK=rollbase.Dice(70-age);
Reaction=rollbase.Dice(70-age);
None=rollbase.Dice(70-age);
Fire=rollbase.Dice(70-age);	
Water=rollbase.Dice(70-age);
Wind=rollbase.Dice(70-age);
Earth=rollbase.Dice(70-age);
Growing=rollbase.Dice(66-age);
}
if((age>=14)&&(age<=29)){
Occupation='放出使';
HP=((rollbase.Dice(20) - 1) * 9)+20;
MP=((rollbase.Dice(20) - 1) * 9)+20;
ATK=rollbase.Dice(50);
Reaction=rollbase.Dice(50);
None=rollbase.Dice(50);
Fire=rollbase.Dice(50);	
Water=rollbase.Dice(50);
Wind=rollbase.Dice(50);
Earth=rollbase.Dice(50);
Growing=Math.floor(((35-ATK)+(35-None)+(35-Fire)+(35-Water)+(35-Wind)+(35-Earth))*0.5);
}
if(Growing<=10)Growing=rollbase.Dice(5)+10;
rply.text=
'['+ name +']  年齡：' +age +
'\n職業：  ' + Occupation +
'\n生命值： '+ HP +
'\nBata粒子適性： '+ MP +
'\n物理適性： '+ ATK +
'\n反應力： '+ Reaction +
'\n放出適性： '+ None +
'\n火屬適性： '+ Fire +
'\n水屬適性： '+ Water +
'\n風屬適性： '+ Wind +
'\n土屬適性： '+ Earth +
'\n成長點： '+  Growing	+'\n' + Characters[0][0]+ Characters[0][1]+ Characters[0][2]
;
if((age<14)||(age>65)){
Occupation='不適合戰鬥者';
rply.text=
'['+ name +']  年齡：' +age +
'\n職業：  ' + Occupation ;
}


return rply;	
}
function CT(name,age) {
	var HP,MP,ATK,Reaction,Occupation,Control,Growing;
if((age>=40)&&(age<=60)){
Occupation='外部裝甲操縱人員';
HP=((rollbase.Dice(20) - 1) * 9)+20;
MP=((rollbase.Dice(5) - 1) * 9)+20;
ATK=rollbase.Dice(70-age);
Reaction=rollbase.Dice(70-age);
Control=rollbase.Dice(70-age);
Growing=rollbase.Dice(61-age);
}
if((age>=16)&&(age<=39)){
Occupation='外部裝甲操縱人員';
HP=((rollbase.Dice(20) - 1) * 9)+50;
MP=((rollbase.Dice(20) - 1) * 9)+20;
ATK=rollbase.Dice(50);
Reaction=rollbase.Dice(50);
Control=rollbase.Dice(50);
Growing=Math.floor(((35-ATK)+(35-Control))*0.5);
}
if(Growing<=10)Growing=rollbase.Dice(5)+10;
if((Control<10)||(MP<50))Occupation='外骨骼裝備步兵';
rply.text=
'['+ name +']  年齡：' +age +
'\n職業：  ' + Occupation +
'\n生命值： '+ HP +
'\nBata粒子適性： '+ MP +
'\n物理適性： '+ ATK +
'\n控制能力： '+ Control +
'\n反應力： '+ Reaction +
'\n成長點： '+  Growing;

if((age<16)||(age>60)){
Occupation='不適合戰鬥者';
rply.text=
'['+ name +']  年齡：' +age +
'\n職業：  ' + Occupation ;
}
return rply;	
}

module.exports = {
	CM:CM,
	CT:CT
};








function tests(auth) {
 sheets.spreadsheets.values.get({
    auth: auth,
    spreadsheetId: mySheetId,
    range: 'Character',
  }, function(err, response) {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    }
    var rows = response.values;
    if (rows.length == 0) {
      console.log('No data found.');
    } else {
	     var row = rows[0];
	    var Cha=Characters[0];
	    Cha[0]=row[0];
	    Cha[1]=row[1];
	    Cha[2]=row[2];
    }})}


/*function gotgpt(auth) {
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
}*/
