var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

function Character(name,age) {
	var HP,MP,ATK,None,Fire,Water,Wind,Earth,Reaction,Occupation;
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
}
if((age<14)||(age>65)){
Occupation='不適合戰鬥者';
HP=rollbase.Dice(20) ;
MP=rollbase.Dice(20) ;
ATK=rollbase.Dice(5);
Reaction=rollbase.Dice(5);
None=rollbase.Dice(5);
Fire=rollbase.Dice(5);	
Water=rollbase.Dice(5);
Wind=rollbase.Dice(5);
Earth=rollbase.Dice(5);
}

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
'\n土屬適性： '+ Earth ;
return rply;	
}



module.exports = {
	Character:Character
};
