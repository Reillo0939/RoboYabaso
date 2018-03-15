var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var main = require('../index.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

function CM(name,age) {
	var HP,MP,ATK,None,Fire,Water,Wind,Earth,Reaction,Occupation,Growing;
	
	main.fs.readFile('../client_secret.json', function processClientSecrets(err, content) {
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
'\n成長點： '+  Growing	
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
    auth: main.auth,
    spreadsheetId: main.mySheetId,
    range: '角色',
  }, function(err, response) {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    }
    var rows = response.values;
    if (rows.length == 0) {
      console.log('No data found.');
    } else {
	     var Characters = [];
      for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
	var Cha =Characters[i];
	      for(var j=0;j<15;j++){
		Cha[j]=row[j];}
}
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
