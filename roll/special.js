var rollbase = require('./rollbase.js');

var rply ={type : 'text'}; //type是必需的,但可以更改
var player = [];
var Weaponry =['手槍','刀'];
var skill =['火球','回復','反殺','抖音','六法全書'];

function main(UUID,Name,Message){
	let msgSplitor = (/\S+/ig);	
	let mainMsg = Message.match(msgSplitor); //定義輸入字串
	let trigger = mainMsg[0].toString().toLowerCase();
	
	if (trigger.match(/^加入等待$/) != null) return join(mainMsg[1],UUID,Name) ;
	
}
function join(PN,UUID,Name){
	var n=player.length;
	for(i=0;i<n;i++){
		if(player[i].UUID==UUID){
			rply.text ='[' + Name + ']的[' + player[i].PlayerName + ']已進入等待';
			return rply;
		}
	}
	if(n>=4){
		rply.text ='人數已滿';
		return rply;
	}
	player[n]={};
	player[n].PlayerName=PN;
	player[n].UUID=UUID;
	player[n].Name=Name;
	player[n].HP=100;
	player[n].MP=100;
	player[n].Weaponry=rollbase.Dice(Weaponry.length)-1;
	player[n].skill=rollbase.Dice(skill.length)-1;
	rply.text ='[' + Name + ']的[' + player[n].PlayerName + '\n'+
	'武器：'+Weaponry[player[n].Weaponry]+'\n'+
	'技能：'+skill[player[n].skill];
	return rply;
}

module.exports = {
	main:main
};
