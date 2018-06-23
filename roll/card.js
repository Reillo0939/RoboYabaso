var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var ox = require('./Character.js');
var rply ={type : 'text'}; //type是必需的,但可以更改


function IDCA(id,name) {
rply.text=name+'為測試人員';//U7c4779fd913aff927f26d7f6bedd87d1  雷洛Uc9b4571605aabd3e94edd7c189144278屬
if(id=='U7c4779fd913aff927f26d7f6bedd87d1')rply.text=name+'為GM';
if(id=='Uc9b4571605aabd3e94edd7c189144278')rply.text=name+'為GM';
return rply;
}

function MCard(frequency,id,name) {
	var ggg,ttt;
	console.log(ox.oL());
	/*for(var i=0;i<ox.oL();i++){
		
	if(ox.oC(i,0)==id){
		ggg=i;
		ttt=ox.oC(ggg,17);}
	}*/
	/*if(ttt<frequency*100){
		rply.text=name+'金錢不足：';
		return rply;
	}*/
rply.text=name+'抽到了：';
/*if(id==''){
for(i=1;i<=frequency;i++){
 SSR();
}
}
else{*/
for(i=1;i<=frequency;i++){
let rarity=rollbase.Dice(1000);
if(rarity>=1000)MUR();
if((rarity>=990) && (rarity<=999))MSSR();
 if((rarity>=891) && (rarity<=990))MSR();
  if((rarity>=591) && (rarity<=890))MR();
 if(rarity<=590)MN();
}

if(frequency==9){
rply.text+='\n保底：';
let rarity=rollbase.Dice(1000);
if(rarity>=996)MUR();
if((rarity>=966) && (rarity<=995))MSSR();
if(rarity<=965)MSR();
}
//}
//ox.oA(ggg,ttt-frequency*100);
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
'\[N] 重型手槍',
'\[N] 衝鋒槍',
'\[N] 突擊步槍',
'\[N] 射手步槍',
'\[N] 狙擊槍',
'\[N] 大口徑狙擊槍',
'\[N] 火炮',
'\[N] 短近距離武器',
'\[N] 中近距離武器',
'\[N] 長近距離武器',
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
'\[R] 武器-3HIT'
];
rply.text = rply.text +'\n'+ rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;	
}
function MSR() {
let rplyArr = [
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
'\[SR] 迷之表情-(´・ω・`)'
];
rply.text = rply.text +'\n' + rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;	
}
function MSSR() {
let rplyArr = [
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
'\[SSR] 程式設計師-夜月'
];
rply.text = rply.text +'\n'+ rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;	
}

function MUR() {
let rplyArr = [
'\[UR] β粒子研究者-雷洛',
'\[UR] β粒子發現者-鼠'
];
rply.text = rply.text +'\n'+ rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;	
}

function ICard() {
rply.text = 
	'抽卡方式 \n'+
	'單抽："卡池名稱"單抽\n'+
	'十連抽："卡池名稱"10連抽\n'+
	'本周卡池\n'+
	'===粒子研究紀錄===\n'+
	' -[UR]機率0.1% \n'+
	' -[SSR]機率1% \n'+
	' -[SR]機率10% \n'+
	' -[R]機率30% \n'+
	' -[N]機率58.9% \n'+
	'===10連抽保底SR機率：===\n'+
	' -[UR]機率0.5% \n'+
	' -[SSR]機率3% \n'+
	' -[SR]機率96.5% \n'
	
	;
return rply;	
}




module.exports = {
	MCard:MCard,
	ICard:ICard,
	IDCA:IDCA
};
