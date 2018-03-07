var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

function Character(name,age) {

var HP,MP,ATK,None,Fire,Water,Wind,Earth;
var Points = 0;
do {
    if((rollbase.Dice(100)>=50)&& (HP<200) && (Points<100)){HP+=5;Points++;}
    if((rollbase.Dice(100)>=50)&& (MP<200) && (Points<100)){MP+=5;Points++;}
    if((rollbase.Dice(100)>=50)&& (ATK<50) && (Points<100)){ATK++;Points++;}
    if((rollbase.Dice(100)>=50)&& (None<50) && (Points<100)){None++;Points++;}
    if((rollbase.Dice(100)>=50)&& (Fire<50) && (Points<100)){Fire++;Points++;}
    if((rollbase.Dice(100)>=50)&& (Water<50) && (Points<100)){Water++;Points++;}
    if((rollbase.Dice(100)>=50)&& (Wind<50) && (Points<100)){Wind++;Points++;}
    if((rollbase.Dice(100)>=50)&& (Earth<50) && (Points<100)){Earth++;Points++;}
} while (Points < 100);

rply.text=
'['+ name +']  年齡：' +age +
'\n生命值： '+ HP +
'\nBata粒子適性： '+ MP +
'\n物理適性： '+ ATK +
'\n放出適性： '+ None +
'\n火屬適性： '+ Fire +
'\n水屬適性： '+ Water +
'\n風屬適性： '+ Wind +
'\n土屬適性： '+ Earth ;
return rply;	
}



module.exports = {
	Character:Character
};
