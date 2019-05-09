var rollbase = require('./rollbase.js');

var rply ={type : 'text'}; //type是必需的,但可以更改
var player = [];
var Weaponry =['手槍','刀'];
var skill =['火球','回復','反殺','抖音','六法全書'];
var battle=0;
var turn=0;

function main(UUID,Name,Message){
	let msgSplitor = (/\S+/ig);	
	let mainMsg = Message.match(msgSplitor); //定義輸入字串
	let trigger = mainMsg[0].toString().toLowerCase();
	if(battle==0){
		if (trigger.match(/^加入等待$/) != null) return join(mainMsg[1],UUID,Name) ;
		if (trigger.match(/^開戰$/) != null) return start() ;
	}
	if(battle==1){
		if (trigger.match(/^攻擊$/) != null) return atk(mainMsg[1],UUID,Name);
		if (trigger.match(/^裝彈$/) != null) return reload(UUID,Name);
	}
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
	player[n].bullet=6;
	player[n].Weaponry=rollbase.Dice(Weaponry.length)-1;
	player[n].skill=rollbase.Dice(skill.length)-1;
	rply.text ='[' + Name + ']的[' + player[n].PlayerName + '\n';
	/*
	'武器:"'+Weaponry[player[n].Weaponry]+'\n'+
	'技能:"['+(player[n].skill+1)+']'+skill[player[n].skill];*/
	return rply;
}

function start(){
	if(n<4){
		rply.text ='人數未滿4人';
		return rply;
	}
	rply.text ='玩家'+player[turn].PlayerName+'行動\n'+
	'可用指令:\n'+
	'攻擊 目標名 --依武器攻擊目標，但你不會知道你是什麼武器'+
	'裝彈 --武器是手槍可以裝彈，但你不會知道你是什麼武器';
	return rply;
	battle=1;
}

function atk(Target,UUID,Name){
	if(player[turn].UUID==UUID){
		for(i in player){
			if(player[i].PlayerName==Target){
				//手槍
				if(player[turn].Weaponry==0){
					if(player[turn].bullet>0){
						var Damage=rollbase.Dice(16)+4;
						player[i].HP-=Damage;
						player[turn].bullet--;
						rply.text =player[i].PlayerName+'的HP:'+player[i].HP+'(-'+Damage+')';
						if(player[i].HP<=0){
							rply.text +='\n'+player[i].PlayerName+'在起不能';
							delete player[i];
						}
					}
					else{
						rply.text='你發現沒子彈了';
					}
				}
				//刀
				if(player[turn].Weaponry==1){
					var Damage=rollbase.Dice(6)+9;
					player[i].HP-=Damage;
					player[turn].bullet--;
					rply.text =player[i].PlayerName+'的HP:'+player[i].HP+'(-'+Damage+')';
				}
				turn++;
				if(turn>=player.length)turn=0;
				if(player.length<=1){
					rply.text +='\n'+player[0].PlayerName+'成為贏家';
					Reset();
					return rply;
				}
				rply.text +='\n\n玩家'+player[turn].PlayerName+'行動\n'+
					'可用指令:\n'+
					'攻擊 目標名 --依武器攻擊目標，但你不會知道你是什麼武器'+
					'裝彈 --武器是手槍可以裝彈，但你不會知道你是什麼武器';
				return rply;
			}
		}
		rply.text='你484打錯名字了';
		return rply;
	}
}

function reload(UUID,Name){
	if(player[turn].UUID==UUID){
		player[turn].bullet=rollbase.Dice(6-player[turn].bullet)+player[turn].bullet;
		rply.text='裝完了，但你不會知道裝了幾顆子彈www';
		return rply;
	}
}

function Reset(){
	player = [];
	Weaponry =['手槍','刀'];
	skill =['火球','回復','反殺','抖音','六法全書'];
	battle=0;
	turn=0;
}
module.exports = {
	main:main,
	Reset:Reset
};
