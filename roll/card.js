var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

function IDCA(id,name) {
	rply.text=name+'為測試人員';//U7c4779fd913aff927f26d7f6bedd87d1  雷洛Uc9b4571605aabd3e94edd7c189144278屬
	if(id=='U7c4779fd913aff927f26d7f6bedd87d1')rply.text=name+'為GM';
	if(id=='Uc9b4571605aabd3e94edd7c189144278')rply.text=name+'為GM';
	return rply;
}

function MCard(frequency,id,name) {
	var SMC={};
	SMC.UR=2;
	SMC.SSR=10;
	SMC.SR=100;
	SMC.R=588;
	SMC.TUR=50;
	SMC.TSSR=250;
	rply.text=name+'抽到了：';
	for(i=1;i<=frequency;i++){
		let rarity=rollbase.Dice(1000);
		if(rarity<=SMC.UR)MUR();
		else if(rarity-=SMC.UR,rarity<=SMC.SSR)MSSR();
		else if(rarity-=SMC.SSR,rarity<=SMC.SR)MSR();
		else if(rarity-=SMC.SR,rarity<=SMC.R)MR();
		else MN();
	}
	if(frequency==9){
		rply.text+='\n保底：';
		let rarity=rollbase.Dice(1000);
		if(rarity<=SMC.TUR)MUR();
		else if(rarity-=SMC.TUR,rarity<=SMC.TSSR)MSSR();
		else MSR();
	}
	return rply;
}
function MN() {
	let rplyArr = [
		'\[N] 手槍',
		'\[N] 步槍',
		'\[N] 拳',
		'\[N] 狙擊槍',
		'\[N] 大口徑狙擊槍',
		'\[N] 刀',
		'\[N] 長槍',
		'\[N] 盾'
	];
	rply.text = rply.text +'\n'+ rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
	return rply;	
}
function MR() {
	let rplyArr = [
		'\[R] 武器-暗殺者', 
		'\[R] 武器-反甲騎兵槍', 
		'\[R] 武器-FAL', 
		'\[R] 武器-m16a4', 
		'\[R] 武器-霰射炸藥', 
		'\[R] 武器-FrostGiant', 
		'\[R] 武器-我不知道能不能用', 
		'\[R] 武器-Caliburn', 
		'\[R] 武器-3HIT'
	];
	rply.text = rply.text +'\n'+ rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
	return rply;	
}
function MSR() {
	let rplyArr = [	 
		'\[SR] 粒子儲能電池',
		'\[SR] 加速插件',
		'\[SR] 狂暴插件',
		'\[SR] CAC系統',
		'\[SR] 粒子觸媒'
	];
	rply.text = rply.text +'\n' + rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;	
}
function MSSR() {
    let rplyArr = [
    '\[SSR] 神器-Excalibur',
    '\[SSR] 神器-高周波刀',
    '\[SSR] 妖刀-村正',
    '\[SSR] 妖刀-村雨',
    '\[SSR] 神劍-莫邪',
    '\[SSR] 神劍-干將',
    '\[SSR] 魔劍-提爾鋒',
    '\[SSR] 神槍-岡格尼爾'
    ];
	rply.text = rply.text +'\n'+ rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
	return rply;	
}

function MUR() {
	let rplyArr = [
		'\[UR] 賢者之石',
		'\[UR] 水晶研究者-雷洛',
		'\[UR] 研究主導者-鼠'
		];
	rply.text = rply.text +'\n'+ rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
	return rply;	
}

function ICard(ICName) {
	rply.text =
	'本周卡池\n'+
	'===水晶時代===\n'+
	' -[UR]機率0.2% \n'+
	' -[SSR]機率1% \n'+
	' -[SR]機率10% \n'+
	' -[R]機率30% \n'+
	' -[N]機率58.8% \n'+
	'===10連抽保底SR機率：===\n'+
	' -[UR]機率5% \n'+
	' -[SSR]機率25% \n'+
	' -[SR]機率70%';
	if(ICName=='GU特選武器'){
		rply.text =
		'===GU特選武器===\n'+
		' -[UR]機率1.0% \n'+
		' -[SSR]機率4.0% \n'+
		' -[SR]機率15.0% \n'+
		' -[R]機率30.0% \n'+
		' -[N]機率50.0% \n'+
		'===10連抽保底SR機率：===\n'+
		' -[UR]機率1% \n'+
		' -[SSR]機率4% \n'+
		' -[SR]機率95%';
	}
return rply;	
}


function Test(frequency,id,name) {
	var SMC=[];
	for(i=0;i<9;i++)SMC[i]={};
	SMC[0].name='UR-'; 	SMC[0].count=1;
	SMC[1].name='UR-'; 	SMC[1].count=2;
	SMC[2].name='UR-'; 	SMC[2].count=3;
	SMC[3].name='UR-'; 	SMC[3].count=4;
	SMC[4].name='UR-'; 	SMC[4].count=5;
	SMC[5].name='SSR-'; 	SMC[5].count=15;
	SMC[6].name='SR-'; 	SMC[6].count=150;
	SMC[7].name='R-'; 	SMC[7].count=750;
	SMC[8].name='N-'; 	SMC[8].count=1500;
	rply.text=name+'抽到了：\n';
	var total=0;
	for(i=0;i<SMC.length;i++)total+=SMC[i].count;
	
	
	if(frequency==1){
		var rarity=rollbase.Dice(total);
		for(i=0;i<SMC.length;i++){
			rarity-=SMC[i].count;
			if(rarity<=0){
				rply.text+='['+SMC[i].name+SMC[i].count+'/'+total+']';
				return rply;
			}
		}
	}
	if(frequency==10){
		for(k=0;k<10;k++){
			var rarity=rollbase.Dice(total);
			for(i=0;i<SMC.length;i++){
				rarity-=SMC[i].count;
				if(rarity<=0){
					rply.text+='['+SMC[i].name+SMC[i].count+'/'+total+']\n';
					break;
				}
				
			}
		}
		return rply;
	}
}

module.exports = {
	MCard:MCard,
	ICard:ICard,
	IDCA:IDCA,
	Test:Test
};
