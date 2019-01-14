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
		'\[N] 普通人類-冰夜',
		'\[N] 壓路機',
		'\[N] 飛刀',
		'\[N] 替身',
		'\[N] 替身使者',
		'\[N] 手槍',
		'\[N] 步槍',
		'\[N] 拳',
		'\[N] 狙擊槍',
		'\[N] 大口徑狙擊槍',
		'\[N] 刀',
		'\[N] 長槍',
		'\[N] 盾',
		'\[N] 路邊的石頭'
	];
	rply.text = rply.text +'\n'+ rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
	return rply;	
}
function MR() {
	let rplyArr = [
		'\[R] 雷銘繪製的圖',
		'\[R] 夜月的程式片段',
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
		'\[SR] スサノオ',
		'\[SR] イージス',
		'\[SR] アイオーン',
		'\[SR] ケリュケイオン',
		'\[SR] ムラサメ',	       
		'\[SR] 雷洛的研究紀錄',	       
		'\[SR] 雷洛的研究紀錄',
		'\[SR] 粒子儲能電池',
		'\[SR] 忙碌者-Wings',
		'\[SR] 加速插件',
		'\[SR] 狂暴插件',
		'\[SR] 繪師-雷銘',
		'\[SR] 鼠用來研究的筆電',
		'\[SR] 狙擊手-凜夢',
		'\[SR] CAC系統',
		'\[SR] 粒子觸媒',
		'\[SR] 測試人員-Guni',
		'\[SR] 測試人員-赤靈',
		'\[SR] 聖戰發起者-lee',
		'\[SR] 迷之表情-(´・ω・`)', 
		'\[SR] 來自異界的魔龍眼少年路卡', 
		'\[SR] 迷之少年-Arthur'
	];
	rply.text = rply.text +'\n' + rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;	
}
function MSSR() {
    let rplyArr = [
    '\[SSR] 神剣グラム',
    '\[SSR] 覇剣デュランダル',
    '\[SSR] 霊刀イザナミ',
    '\[SSR] 滅剣・ベリアル',		   
    '\[SSR] 神槍グングニル',		   
    '\[SSR] 神槍グングニル',			    
    '\[SSR] 古代機バルバトス',
    '\[SSR] 過載插件',
    '\[SSR] 無人擊敗-愚人節boss',
    '\[SSR] β粒子研究報告',
    '\[SSR] 具現化研究者-洛斯塔克',
    '\[SSR] 雙生者-夜玥',
    '\[SSR] AAUF王牌-咲',
    '\[SSR] GU王牌-夢',
    '\[SSR] 協力者-謝諾亞',
    '\[SSR] 隔壁的bot-上原空音',
    '\[SSR] 悲劇之人-製杖',
    '\[SSR] 神器-Excalibur',
    '\[SSR] 神器-高周波刀',
    '\[SSR] 妖刀-村正',
    '\[SSR] 妖刀-村雨',
    '\[SSR] 神劍-莫邪',
    '\[SSR] 神劍-干將',
    '\[SSR] 魔劍-提爾鋒',
    '\[SSR] 神槍-岡格尼爾',
    '\[SSR] 程式設計師-夜月',
    '\[SSR] 獸娘蘿莉充氣娃娃(?'
    ];
	rply.text = rply.text +'\n'+ rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
	return rply;	
}

function MUR() {
	let rplyArr = [
		'\[UR] 覇剣イフリート',
		'\[UR] 霊刀セイレーン',
		'\[UR] 課金獎勵-普利珠',
		'\[UR] https://www.youtube.com/watch?v=h-mUGj41hWA&index=18&list=PLP3hF47qMk4JiEo8SHISpQc9sePDbzLFm&t=0s',
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




module.exports = {
	MCard:MCard,
	ICard:ICard,
	IDCA:IDCA
};
