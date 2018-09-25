var rollbase = require('./rollbase.js');
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
  rl.question('Enter the code from that prace here: ', function(code) {
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
var player=[];
var SKILLS = [];
function get_player_data() { return player; }
function save_player_data(data) { player = data;}
//-------------------------------------------------讀取資料-------------------------------------------------
function load_player_data() {
    fs.readFile('client_secret.json', function processClientSecrets(err, content) {
        if (err) {
            console.log('Error loading client secret file: ' + err);
            return;
        }
        authorize(JSON.parse(content), data_load);
    });
}
function data_load(auth) {
    sheets.spreadsheets.values.get({
        auth: auth,
        spreadsheetId: mySheetId,
        range: 'Character',
    }, function (err, response) {
        if (err) {
            console.log('The API returned an error: ' + err);
            return;
        }
        var rows = response.values;
        if (rows.length == 0) {
            console.log('No data found.');
        } else {
            player = JSON.parse(rows[0][0]);
           // console.log(JSON.stringify(player));
            
        }
    })
}
//-------------------------------------------------更新資料-------------------------------------------------
function updata_player_data() {
    fs.readFile('client_secret.json', function processClientSecrets(err, content) {
        if (err) {
            console.log('Error loading client secret file: ' + err);
            return;
        }
        authorize(JSON.parse(content), player_updata);
    });
}
function player_updata(auth) {
    var values = [
        [JSON.stringify(player)]
    ];
    console.log('test OK');
    var range = 'Character!A1';
    var body = {
        values: values
    };
    var request = {
        spreadsheetId: mySheetId,
        range: range,
        valueInputOption: 'RAW',
        resource: {
            values: values
        },
        auth: auth,
    }
    sheets.spreadsheets.values.update(request, function (err, result) {
        if (err) {
            // Handle error
            console.log(err);
        } else {
            console.log('%d cells updated.', result.updatedCells);
        }
    });
}
//-------------------------------------------------GU創角-------------------------------------------------
function CM(player_name,race,Occupation,id,names) {          
for (var fd = 0; fd < player.length; fd++) {
    if (player[fd].ID == id) {
rply.text=names +' 你已有角色，若要修改請找GM';
return rply;	
}
}
    if (player_name==null && race==null && Occupation==null){
rply.text='缺少名稱 種族 兵種'+
		  '\n種族有 純人種 貓科種 犬科種 兔科種'+
		  '\n兵種有 基礎放出使 火炎操作使 流水支援使 電能突擊使 寒冰干擾使';
return rply;	
}
if(race==null && Occupation==null){
rply.text='缺少 種族 兵種'+
		  '\n種族有 純人種 貓科種 犬科種 兔科種'+
		  '\n兵種有 基礎放出使 火炎操作使 流水支援使 電能突擊使 寒冰干擾使';
return rply;	
}
if(race!='純人種' && race!='貓科種' && race!='犬科種' && race!='兔科種'){
	rply.text='種族錯誤'+
		  '\n種族有 純人種 貓科種 犬科種 兔科種';
return rply;	
}
if(Occupation==null){
rply.text='缺少 兵種'+
		  '\n兵種有 基礎放出使 火炎操作使 流水支援使 電能突擊使 寒冰干擾使';
return rply;	
}
if(Occupation!='基礎放出使' && Occupation!='火炎操作使' && Occupation!='流水支援使' && Occupation!='電能突擊使' && Occupation!='寒冰干擾使' ){
	rply.text='兵種錯誤'+
		  '\n兵種有 基礎放出使 火炎操作使 流水支援使 電能突擊使 寒冰干擾使';
return rply;	
    }
    var player_now = player.length;
    player[player_now] = {};
    player[player_now].ID = id;
    player[player_now].Name = player_name;
    player[player_now].Race = race;
    player[player_now].Occupation = Occupation;
    player[player_now].Honor_Point = 0;
    player[player_now].Rank = '訓練兵';
    player[player_now].Skills = [];
    player[player_now].Skills[0] = '1';
    player[player_now].Skills[1] = '2';
    player[player_now].Skills[2] = '3';
    player[player_now].Skills[3] = '4';
    player[player_now].Skills[4] = '5';

    player[player_now].MHP = 100;
    player[player_now].MShield = 50;
    player[player_now].CE = 150;

    player[player_now].Fighting = rollbase.Dice(5) + 10;
    player[player_now].Shooting = rollbase.Dice(5) + 10;
    player[player_now].Reaction = rollbase.Dice(100);
    player[player_now].None = rollbase.Dice(5)+10;
    player[player_now].Fire = rollbase.Dice(5) + 10;
    player[player_now].Water = rollbase.Dice(5) + 10;
    player[player_now].Thunder = rollbase.Dice(5) + 10;
    player[player_now].Ice = rollbase.Dice(5) + 10;

    if (race == '純人種') player[player_now].Shooting = Math.round(player[player_now].None * 1.5);
    if (race == '貓科種') player[player_now].Reaction = Math.round(player[player_now].Reaction * 1.3);
    if (race == '犬科種') player[player_now].Fighting = Math.round(player[player_now].Fighting * 1.5);
    if (race == '兔科種') player[player_now].Shooting = Math.round(player[player_now].Shooting * 1.5);

    if (Occupation == '火炎操作使') {
        var temporarily = Math.round(player[player_now].Water * 0.75);
        player[player_now].Fire = player[player_now].Fire + temporarily;
        player[player_now].Water = player[player_now].Water - temporarily;
    }
    if(Occupation=='流水支援使'){
        var temporarily = Math.round(player[player_now].Thunder * 0.75);
        player[player_now].Water = player[player_now].Water + temporarily;
        player[player_now].Thunder = player[player_now].Thunder - temporarily;
    }
    if(Occupation=='電能突擊使'){
        var temporarily = Math.round(player[player_now].Ice * 0.75);
        player[player_now].Thunder = player[player_now].Thunder + temporarily;
        player[player_now].Ice = player[player_now].Ice - temporarily;
    }
    if(Occupation=='寒冰干擾使'){
        var temporarily = Math.round(player[player_now].Fire * 0.75);
        player[player_now].Ice = player[player_now].Ice + temporarily;
        player[player_now].Fire = player[player_now].Fire - temporarily;
    }

        rply.text=
    '[' + names + ']的角色' +
        '\n[' + player[player_now].Name + ']  種族:' + player[player_now].Race +
        '\n職業:' + player[player_now].Occupation +
        '\n軍階:' + player[player_now].Rank +
        '\n榮譽值:' + player[player_now].Honor_Point +
        '\n生命值:' + player[player_now].MHP +
        '\n護盾:' + player[player_now].MShield +
        '\nCE儲存量:' + player[player_now].CE +
        '\n格鬥能力:' + player[player_now].Fighting +
        '\n射擊能力:' + player[player_now].Shooting +
        '\n反應力:' + player[player_now].Reaction +
        '\n放出適性:' + player[player_now].None +
        '\n火屬適性:' + player[player_now].Fire +
        '\n水屬適性:' + player[player_now].Water +
        '\n雷屬適性:' + player[player_now].Thunder +
        '\n冰屬適性:' + player[player_now].Ice;
    updata_player_data();
return rply;	
}
//-------------------------------------------------AAUF創角-------------------------------------------------
function CT(name,race,Occupation,id,names) {
	var HP,MP,ATK,Control,Reaction,skills;
for(var tt=0;tt<Characters.length;tt++){
if(Characters[tt][0]==id){
rply.text=names +' 你已有角色，若要修改請找GM';
return rply;	
}
}

if(name==null && race==null && Occupation==null){
rply.text='缺少名稱 種族 兵種'+
		  '\n種族有 純人種 貓科種 犬科種 兔科種'+
		  '\n兵種有 CAC系統磁懸裝甲 複合性火力支援裝甲 輔助性戰鬥支援裝甲';
return rply;	
}
if(race==null && Occupation==null){
rply.text='缺少 種族 兵種'+
		  '\n種族有 純人種 貓科種 犬科種 兔科種'+
			'\n兵種有 CAC系統磁懸裝甲 複合性火力支援裝甲 輔助性戰鬥支援裝甲';
return rply;	
}
if(race!='純人種' && race!='貓科種' && race!='犬科種' && race!='兔科種'){
	rply.text='種族錯誤'+
		  '\n種族有 純人種 貓科種 犬科種 兔科種';
return rply;	
}
if(Occupation==null){
rply.text='缺少 兵種'+
		 '\n兵種有 CAC系統磁懸裝甲 複合性火力支援裝甲 輔助性戰鬥支援裝甲';
return rply;	
}
if(Occupation!='CAC系統磁懸裝甲' && Occupation!='複合性火力支援裝甲' && Occupation!='輔助性戰鬥支援裝甲' ){
	rply.text='兵種錯誤'+
		 '\n兵種有 CAC系統磁懸裝甲 複合性火力支援裝甲 輔助性戰鬥支援裝甲';
return rply;	
}


ATK=5;
Reaction=5;
Control=15;

if(race=='貓科種'){
	Reaction=10;
	Control=Control-10;
}
if(race=='犬科種'){
	ATK=10;
	Reaction=0;
}
if(race=='兔科種'){
	Control=Control+10;
	ATK=0;
}

if(Occupation=='CAC系統磁懸裝甲'){
	HP='100,80';
	MP=100;
	skills='11,12,13,0,0'
}
if(Occupation=='複合性火力支援裝甲'){
	HP='100,100';
	MP=50;
	ATK=ATK+10;
	skills='6,7,8,0,0'
}
if(Occupation=='輔助性戰鬥支援裝甲'){
	HP='100,60';
	MP=200;
	ATK=ATK-10;
	skills='9,10,0,0,0'
}

for(var i=0;i<=65;i++){
	var x = rollbase.Dice(3);
	if(x==1)ATK++;
	if(x==2)Reaction++;
	if(x==3)Control++;
}

rply.text=
'['+ name +']  種族:' +race +
'\n兵種:  ' + Occupation +
'\n軍階: '+  '訓練兵'+
'\n生命值: '+ '100' ;
if(Occupation=='CAC系統磁懸裝甲')rply.text+='\n護甲:80';
if(Occupation=='複合性火力支援裝甲')rply.text+='\n護甲:100';
if(Occupation=='輔助性戰鬥支援裝甲')rply.text+='\n護甲:60';
rply.text+='\nCE儲存量: '+ MP +
'\n耐重量: '+ ATK +
'\n控制能力: '+ Control +
'\n反應力: '+ Reaction ;

var hh=Characters.length;
var ddd=[];
console.log('test OK 2');
ddd[0] = id ;
ddd[1] = name ;
ddd[2] = race ;
ddd[3] = 'A.A.U.F' ;
ddd[4] = Occupation ;
ddd[5] = HP ;
ddd[6] = MP ;
ddd[7] = ATK ;
ddd[8] = Reaction ;
ddd[9]  = 0 ;
ddd[10] = 0 ;
ddd[11] = 0 ;
ddd[12] = 0 ;
ddd[13] = 0 ;
ddd[14] = Control ;
ddd[15] = 0 ;
ddd[16] = '訓練兵' ;
ddd[17] = 10000 ;
ddd[18] = 0 ;
ddd[19] = 0 ;
ddd[20] = 0 ;
ddd[21] = skills ;
Characters[hh]=ddd;
	
fs.readFile('client_secret.json', function processClientSecrets(err, content) {
  if (err) {
    console.log('Error loading client secret file: ' + err);
    return;
  }
  authorize(JSON.parse(content), gotgpt);
});

return rply;	
}
//-------------------------------------------------玩家自身情報-------------------------------------------------
function player_View(id,name) {
	rply.text= name+' 你沒有角色，如果有遺失請與GM聯絡';
    for(var fd=0;fd<player.length;fd++){
        if(player[fd].ID==id){
	        if(player[fd].Camp=='A.A.U.F'){
		         rply.text=
                    '['+name+']的角色'+
                    '\n['+ player[fd].Name +']  種族:' +player[fd].Race +
                    '\n職業:' + player[fd].Occupation +
                    '\n軍階:'+  player[fd].Rank	+
                    '\n榮譽值:' + player[fd].Honor_Point+
                    '\n生命值:' + player[fd].MHP +
                    '\n護甲:' + player[fd].Defense +
                    '\nCE儲存量:'+ player[fd].CE +
                    '\n耐重量:' + player[fd].Strength +
                    '\n控制能力:' + player[fd].Control +
                    '\n反應力:' + player[fd].Reaction ;
	        }
            if (player[fd].Camp =='G.U.'){
	            rply.text=
                    '[' + name + ']的角色' +
                    '\n[' + player[fd].Name + ']  種族:' + player[fd].Race +
                    '\n職業:' + player[fd].Occupation +
                    '\n軍階:' + player[fd].Rank +
                    '\n榮譽值:' + player[fd].Honor_Point +
                    '\n生命值:' + player[fd].MHP +
                    '\n護盾:' + player[fd].MShield +
                        '\nCE儲存量:' + player[fd].CE +
                '\n格鬥能力:' + player[fd].Fighting +
                '\n射擊能力:' + player[fd].Shooting +
                    '\n反應力:' + player[fd].Reaction +
                    '\n放出適性:' + player[fd].None +
                    '\n火屬適性:' + player[fd].Fire +
                    '\n水屬適性:' + player[fd].Water +
                    '\n雷屬適性:' + player[fd].Thunder +
                    '\n冰屬適性:' + player[fd].Ice;
	        }
        }
    }
    return rply;	
}
//-------------------------------------------------玩家查詢-------------------------------------------------
function player_Inquire(name,names) {
    for(var fd=0;fd<player.length;fd++){
        if(player[fd].Name==names){
            if (player[fd].Camp == 'A.A.U.F') {
		        rply.text=
                    '[' + name + ']你所查詢的角色為'+
                    '\n[' + player[fd].Name + ']  種族:' + player[fd].Race +
                    '\n職業:' + player[fd].Occupation +
                    '\n軍階:' + player[fd].Rank +
                    '\n榮譽值:' + player[fd].Honor_Point +
                    '\n生命值:' + player[fd].MHP +
                    '\n護甲:' + player[fd].Defense +
                    '\nCE儲存量:' + player[fd].CE +
                    '\n耐重量:' + player[fd].Strength +
                    '\n控制能力:' + player[fd].Control +
                    '\n反應力:' + player[fd].Reaction;
	        }
            if (player[fd].Camp=='G.U.'){
	            rply.text=
                    '[' + name + ']你所查詢的角色為' +
                    '\n[' + player[fd].Name + ']  種族:' + player[fd].Race +
                    '\n職業:' + player[fd].Occupation +
                    '\n軍階:' + player[fd].Rank +
                    '\n榮譽值:' + player[fd].Honor_Point +
                    '\n生命值:' + player[fd].MHP +
                    '\n護盾:' + player[fd].MShield +
                    '\nCE儲存量:' + player[fd].CE +
                    '\n耐重量:' + player[fd].Strength +
                    '\n反應力:' + player[fd].Reaction +
                    '\n放出適性:' + player[fd].None +
                    '\n火屬適性:' + player[fd].Fire +
                    '\n水屬適性:' + player[fd].Water +
                    '\n雷屬適性:' + player[fd].Thunder +
                    '\n冰屬適性:' + player[fd].Ice;
	        }
        }
    }
    return rply;	
}
//-------------------------------------------------技能查詢-------------------------------------------------
function Skill_View(name,num) {
for(var fd=0;fd<SKILLS.length;fd++){
if(SKILLS[fd][0]==num){
	rply.text=
'['+name +']'+'編號['+num+']'+'的技能為\n'+
SKILLS[fd][1]+'\n'+
'說明 '+SKILLS[fd][10]+'\n'+
'類型 '+SKILLS[fd][2]+'\n'+
'距離 '+SKILLS[fd][3]+'\n'+
'傷害/回復 '+SKILLS[fd][4]+'\n'+
'命中率/成功率 '+SKILLS[fd][5]+'\n'+
'CE消耗量 '+SKILLS[fd][6]+'\n'+
'屬性 '+SKILLS[fd][7]+'\n'+
'適性增幅 '+SKILLS[fd][8]+'\n';
	return rply;	
}
}
rply.text='不好意思'+'['+name+']'+'找不到編號為'+num+'的技能';
return rply;	
}

function CKSV(id,name) {
    for (var fd = 0; fd < player.length; fd++) {
        if (player[fd].ID == id) {
            var CSkill = [];
            for (var i = 0; i < 5; i++) {
                for (var aa = 0; aa < SKILLS.length; aa++) {
                    if (SKILLS[aa][0] == player[fd].Skills[i]) CSkill[i] = SKILLS[aa][1];
                }
            }
            rply.text = '[' + name + ']的角色\n[' + player[fd].Name + ']裝備的技能';
            if (player[fd].Skills[0] == 0) rply.text += '\n沒有裝備任何技能';
            if (player[fd].Skills[0] != 0) rply.text += '\n[' + player[fd].Skills[0] + ']' + CSkill[0];
            if (player[fd].Skills[1] != 0) rply.text += '\n[' + player[fd].Skills[1] + ']' + CSkill[1];
            if (player[fd].Skills[2] != 0) rply.text += '\n[' + player[fd].Skills[2] + ']' + CSkill[2];
            if (player[fd].Skills[3] != 0) rply.text += '\n[' + player[fd].Skills[3] + ']' + CSkill[3];
            if (player[fd].Skills[4] != 0) rply.text += '\n[' + player[fd].Skills[4] + ']' + CSkill[4];
            return rply;
        }
    }
}

function CKR(num) {
for(var fd=0;fd<SKILLS.length;fd++){
if(SKILLS[fd][0]==num){
	var x=
SKILLS[fd][1]+','+SKILLS[fd][2]+','+SKILLS[fd][3]+','+SKILLS[fd][4]+','+SKILLS[fd][5]+','+
SKILLS[fd][6]+','+SKILLS[fd][7]+','+SKILLS[fd][8]+','+SKILLS[fd][9]+','+SKILLS[fd][10];
	return x;	
}
}
x='0,0,0,0,0,0,0,0,0,0';
return x;	
}

function CK() {
fs.readFile('client_secret.json', function processClientSecrets(err, content) {
  if (err) {
    console.log('Error loading client secret file: ' + err);
    return;
  }
  authorize(JSON.parse(content), CKS);
});


}
function CKS(auth) {
 sheets.spreadsheets.values.get({
    auth: auth,
    spreadsheetId: mySheetId,
    range: 'skill',
  }, function(err, response) {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    }
    var rows = response.values;
    if (rows.length == 0) {
      console.log('No data found.');
    } else {
	    SKILLS.splice(0,100);
	    cat=rows.length;
	    for (var i = 0; i < rows.length; i++) {
	     var row = rows[i];
	     var Cha=[];
		for(var j = 0 ; j < 11;j++){
			if(row[j]!= null){
	    			Cha[j]=row[j];
			}
			else{
				Cha[j]='0';
			}
		}
		    SKILLS[i]=Cha;
	    }
	    
    }})

}

module.exports = {
    get_player_data: get_player_data,
    save_player_data: save_player_data,
    CM: CM,
    updata_player_data: updata_player_data,
    CT: CT,
    CK: CK,
    Skill_View: Skill_View,
    CKSV: CKSV,
    CKR: CKR,
    player_Inquire: player_Inquire,
    player_View: player_View,
    load_player_data: load_player_data
};