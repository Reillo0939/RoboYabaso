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
var cat,re,ccN;
function CM(name,age,id,names) {
	var HP,MP,ATK,None,Fire,Water,Wind,Earth,Reaction,Occupation,Growing;

for(var tt=0;tt<Characters.length;tt++){
if(Characters[tt][0]==id){
rply.text=names +' 你已有角色，若要修改請找GM';
return rply;	
}
}
if(name==null && age==null){
rply.text='請詳細閱讀創角說明';
return rply;	
}
if(name==null){
rply.text='你的名字呢';
return rply;	
}
if(age==null){
rply.text='你幾歲了';
return rply;	
}
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
rply.text=names +'\n'
'['+ name +']  年齡：' +age +
'\n職業：  ' + Occupation +
'\n軍階： '+  '訓練兵'+
'\n生命值： '+ HP +
'\nBata粒子適性： '+ MP +
'\n物理適性： '+ ATK +
'\n反應力： '+ Reaction +
'\n放出適性： '+ None +
'\n火屬適性： '+ Fire +
'\n水屬適性： '+ Water +
'\n風屬適性： '+ Wind +
'\n土屬適性： '+ Earth +
'\n成長點： '+  Growing	
;
if((age<14)||(age>65)){
rply.text='這年齡不適合戰鬥請重新創角';
return rply;
}
	console.log('test OK 1');
var hh=Characters.length;
var ddd=[];
console.log('test OK 2');
ddd[0] = id ;
ddd[1] = name ;
ddd[2] = age ;
ddd[3] = 'G.U.' ;
ddd[4] = Occupation ;
ddd[5] = HP ;
ddd[6] = MP ;
ddd[7] = ATK ;
ddd[8] = Reaction ;
ddd[9]  = None ;
ddd[10] = Fire ;
ddd[11] = Water ;
ddd[12] = Wind ;
ddd[13] = Earth ;
ddd[14] = Growing ;
ddd[15] = 0 ;
ddd[16] = '訓練兵' ;
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
function CT(name,age,id,names) {
	var HP,MP,ATK,Reaction,Occupation,Control,Growing;
for(var tt=0;tt<Characters.length;tt++){
if(Characters[tt][0]==id){
rply.text= names + ' 你已有角色，若要修改請找GM';
return rply;	
}
}
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
'\n軍階： '+  '訓練兵'+
'\n生命值： '+ HP +
'\nBata粒子適性： '+ MP +
'\n物理適性： '+ ATK +
'\n控制能力： '+ Control +
'\n反應力： '+ Reaction +
'\n成長點： '+  Growing;

if((age<16)||(age>60)){
rply.text='這年齡不適合戰鬥請重新創角';
return rply;
}
var hh=Characters.length;
var ddd=[];
console.log('test OK 2');
ddd[0] = id ;
ddd[1] = name ;
ddd[2] = age ;
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
ddd[14] = Growing ;
ddd[15] = Control ;
ddd[16] = '訓練兵' ;
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
function CV(id,name) {
	rply.text= name+' 你沒有角色，如果有遺失請與GM聯絡';
for(var fd=0;fd<Characters.length;fd++){
if(Characters[fd][0]==id){
	 console.log('IN');
	if(Characters[fd][3]=='A.A.U.F'){
		rply.text=
name +' 的角色'+
'\n['+ Characters[fd][1] +']  年齡：' +Characters[fd][2] +
'\n職業：  ' + Characters[fd][4] +
'\n軍階： '+  Characters[fd][16]	+
'\n生命值： '+ Characters[fd][5] +
'\nBata粒子適性： '+ Characters[fd][6] +
'\n物理適性： '+ Characters[fd][7] +
'\n控制能力： '+ Characters[fd][15] +
'\n反應力： '+ Characters[fd][8] +
'\n未分配的成長點： '+  Characters[fd][14]	
;
	}
	if(Characters[fd][3]=='G.U.'){
	rply.text=
name +' 的角色'+
'\n['+ Characters[fd][1] +']  年齡：' +Characters[fd][2] +
'\n職業：  ' + Characters[fd][4] +
'\n軍階： '+  Characters[fd][16]	+
'\n生命值： '+ Characters[fd][5] +
'\nBata粒子適性： '+ Characters[fd][6] +
'\n物理適性： '+ Characters[fd][7] +
'\n反應力： '+ Characters[fd][8] +
'\n放出適性： '+ Characters[fd][9] +
'\n火屬適性： '+ Characters[fd][10] +
'\n水屬適性： '+ Characters[fd][11] +
'\n風屬適性： '+ Characters[fd][12] +
'\n土屬適性： '+ Characters[fd][13] +
'\n未分配的成長點： '+  Characters[fd][14]	
;
	}
}
}
return rply;	
}
function CI(name,names) {
	
for(var fd=0;fd<Characters.length;fd++){
if(Characters[fd][1]==names){
	 console.log('IN');
	if(Characters[fd][3]=='A.A.U.F'){
		rply.text=
name +' 我找到的角色是'+
'\n['+ Characters[fd][1] +']  年齡：' +Characters[fd][2] +
'\n職業：  ' + Characters[fd][4] +
'\n軍階： '+  Characters[fd][16]	+
'\n生命值： '+ Characters[fd][5] +
'\nBata粒子適性： '+ Characters[fd][6] +
'\n物理適性： '+ Characters[fd][7] +
'\n控制能力： '+ Characters[fd][15] +
'\n反應力： '+ Characters[fd][8] +
'\n未分配的成長點： '+  Characters[fd][14]	
;
	}
	if(Characters[fd][3]=='G.U.'){
	rply.text=
name +' 我找到的角色是'+
'\n['+ Characters[fd][1] +']  年齡：' +Characters[fd][2] +
'\n職業：  ' + Characters[fd][4] +
'\n軍階： '+  Characters[fd][16]	+
'\n生命值： '+ Characters[fd][5] +
'\nBata粒子適性： '+ Characters[fd][6] +
'\n物理適性： '+ Characters[fd][7] +
'\n反應力： '+ Characters[fd][8] +
'\n放出適性： '+ Characters[fd][9] +
'\n火屬適性： '+ Characters[fd][10] +
'\n水屬適性： '+ Characters[fd][11] +
'\n風屬適性： '+ Characters[fd][12] +
'\n土屬適性： '+ Characters[fd][13] +
'\n未分配的成長點： '+  Characters[fd][14]	
;
	}
}
}
return rply;	
}

function CCN(id,name,Cname) {
	rply.text= name+' 你沒有角色，如果有遺失請與GM聯絡';
	for(var fd=0;fd<Characters.length;fd++){
		if(Characters[fd][0]==id){
			ccN=fd;
	 		console.log('IN');
			Characters[fd][1]=Cname;
			rply.text=name +' 改名成功';
		}
	}
	fs.readFile('client_secret.json', function processClientSecrets(err, content) {
  if (err) {
    console.log('Error loading client secret file: ' + err);
    return;
  }
  authorize(JSON.parse(content), CCCN);
});
	return rply;	
}

function CSG(id,name,select,Points) {
	rply.text= name+' 你沒有角色，如果有遺失請與GM聯絡';
for(var fd=0;fd<Characters.length;fd++){
if(Characters[fd][0]==id){
	if(Characters[fd][3]=='A.A.U.F'){
		if(select!=''){
			if(Points!=''){
				
			}
			else{rply.text=name +'你未輸入數值';}
		}
		else{rply.text=name +'你可分配\n-物理適性\n-放出適性\n-火屬適性\n-水屬適性\n-風屬適性\n-土屬適性';}
		
		rply.text=
name +' 的角色'+
'\n['+ Characters[fd][1] +']  年齡：' +Characters[fd][2] +
'\n職業：  ' + Characters[fd][4] +
'\n軍階： '+  Characters[fd][16]	+
'\n生命值： '+ Characters[fd][5] +
'\nBata粒子適性： '+ Characters[fd][6] +
'\n物理適性： '+ Characters[fd][7] +
'\n控制能力： '+ Characters[fd][15] +
'\n反應力： '+ Characters[fd][8] +
'\n未分配的成長點： '+  Characters[fd][14]	
;*/
	}
	if(Characters[fd][3]=='G.U.'){
	rply.text=
name +' 的角色'+
'\n['+ Characters[fd][1] +']  年齡：' +Characters[fd][2] +
'\n職業：  ' + Characters[fd][4] +
'\n軍階： '+  Characters[fd][16]	+
'\n生命值： '+ Characters[fd][5] +
'\nBata粒子適性： '+ Characters[fd][6] +
'\n物理適性： '+ Characters[fd][7] +
'\n反應力： '+ Characters[fd][8] +
'\n放出適性： '+ Characters[fd][9] +
'\n火屬適性： '+ Characters[fd][10] +
'\n水屬適性： '+ Characters[fd][11] +
'\n風屬適性： '+ Characters[fd][12] +
'\n土屬適性： '+ Characters[fd][13] +
'\n未分配的成長點： '+  Characters[fd][14]	
;
	}
}
}
return rply;	
}

function CCL() {
	rply.text='目前的玩家有\n';
for(var fd=1;fd<Characters.length;fd++){
	rply.text+='陣營： '+ Characters[fd][3] + '  名稱： '+Characters[fd][1] +'\n';
}
	rply.text+='這些';
return rply;	
}

module.exports = {
	CM:CM,
	CT:CT,
	oz:oz,
	CV:CV,
	CI:CI,
	CCN:CCN,
	CCL:CCL,
	CSG:CSG
};

function oz() {
fs.readFile('client_secret.json', function processClientSecrets(err, content) {
  if (err) {
    console.log('Error loading client secret file: ' + err);
    return;
  }
  authorize(JSON.parse(content), tests);
});


}



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
	    Characters.splice(0,100);
	    cat=rows.length;
	    for (var i = 0; i < rows.length; i++) {
	     var row = rows[i];
	     var Cha=[];
		for(var j = 0 ; j < 17;j++){
			if(row[j]!= null){
	    			Cha[j]=row[j];
			}
			else{
				Cha[j]='0';
			}
		}
		    Characters[i]=Cha;
	    }
	    
    }})

}


function gotgpt(auth) {
var leng=Characters.length;
	var values = [
      [Characters[leng-1][0] ,Characters[leng-1][1],Characters[leng-1][2],Characters[leng-1][3]
      ,Characters[leng-1][4],Characters[leng-1][5],Characters[leng-1][6],Characters[leng-1][7]
      ,Characters[leng-1][8],Characters[leng-1][9],Characters[leng-1][10],Characters[leng-1][11]
      ,Characters[leng-1][12],Characters[leng-1][13],Characters[leng-1][14],Characters[leng-1][15],Characters[leng-1][16]],
];
	console.log('test OK');
	var range='Character!A' + leng;
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

function CCCN(auth) {
var leng=ccN;
	var values = [
      [Characters[leng][1],]
];
	console.log('test OK');
	var range='Character!B' + (leng+1);
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
