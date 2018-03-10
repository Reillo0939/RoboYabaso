var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

function IDCA(id) {
rply.text='測試人員';
if((id=='U7c4779fd913aff927f26d7f6bedd87d1')|(id=='Uc9b4571605aabd3e94edd7c189144278'))rply.text='GM';
return rply;
}

function MCard(frequency,id) {
rply.text='你抽到了：';
if(id==''){
for(i=1;i<=frequency;i++){
 SSR();
}
}
else{
for(i=1;i<=frequency;i++){
let rarity=rollbase.Dice(100);
if(rarity==100)MSSR();
if((rarity>=89) && (rarity<100))MSR();
 if((rarity>=58) && (rarity<89))MR();
 if(rarity<58)MN();
}

if(frequency==10){
rply.text+='\n多送你一張：';
let rarity=rollbase.Dice(100);
if(rarity>=96)MSSR();
if(rarity<96)MSR();
}
}
return rply;
}
function MN() {
let rplyArr = [
'\[002] [N] [Item] 雷洛的程式', 
'\[003] [N] [Item] 一定墜落的翅膀',
'\[004] [N] [Item] 雷銘的筆',
'\[006] [N] [Accessories] 火之庇護',
'\[007] [N] [Accessories] 水之庇護',
'\[008] [N] [Accessories] 風之庇護',
'\[009] [N] [Accessories] 土之庇護',
'\[010] [N] [Skill] 熱量控制',
'\[011] [N] [Skill] 燃燒現象',
'\[012] [N] [Skill] 質能轉換-水',
'\[013] [N] [Skill] 水流控制',
'\[014] [N] [Skill] 簡單氣壓控制',
'\[015] [N] [Skill] 強制位移',
'\[016] [N] [Skill] 密度控制-物',
'\[017] [N] [Skill] 土牆建立',
'\[021] [N] [Skill] 能量轉換概論',
'\[022] [N] [Skill] 能量放出實驗'
];
rply.text = rply.text +'\n'+ rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;	
}
function MR() {
let rplyArr = [
'\[030] [N] [Item] 偽裝成[R]的[N]卡',
'\[032] [R] [Item] 雷洛那有點強的bot',
'\[033] [R] [Item] 翅膀那雷神',
'\[034] [R] [Item] 雷銘的0.2mm自動鉛筆',
'\[036] [R] [Skill] 熱距離延長',
'\[037] [R] [Skill] 燃燒現象強化',
'\[038] [R] [Skill] 水壓提升(小)',
'\[039] [R] [Skill] 造霧',
'\[040] [R] [Skill] 噴氣移動',
'\[041] [R] [Skill] 位移加速',
'\[042] [R] [Skill] 沙漠化',
'\[043] [R] [Skill] 流沙',
'\[047] [R] [Skill] 能量壓縮實驗',
'\[048] [R] [Skill] 簡單建構模擬'
];
rply.text = rply.text +'\n'+ rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;	
}
function MSR() {
let rplyArr = [
'\[060] [N] [Item] 偽裝成[SR]的[N]卡',
'\[062] [SR] [Item] 雷洛那超簡潔的程式',
'\[063] [SR] [Item] 翅膀雷好雷滿',
'\[064] [SR] [Item] 雷銘的用不壞的平板',
'\[066] [SR] [Skill] 燃燒標記',
'\[067] [SR] [Skill] 創水控制',
'\[068] [SR] [Skill] 風壓推移',
'\[069] [SR] [Skill] 點石成金',
'\[074] [SR] [Skill] 屬性纏繞'
];
rply.text = rply.text +'\n' + rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;	
}
function MSSR() {
let rplyArr = [
'\[090] [N] [Item] 偽裝成[SSR]的[N]卡',
'\[091] [SSR] [Accessories] 颶風之神', 
'\[092] [SSR] [Accessories] 烈火之神', 
'\[093] [SSR] [Accessories] 大海之神',
'\[094] [SSR] [Accessories] 大地之神',
'\[096] [SSR] [Partner] 雷洛',
'\[097] [SSR] [Partner] Wings',
'\[098] [SSR] [Partner] 雷銘',
'\[100] [SSR] [Skill] 萬物燃盡',
'\[101] [SSR] [Skill] 水刃劃出',
'\[102] [SSR] [Skill] 風壓炸裂',
'\[103] [SSR] [Skill] 大地石封',
'\[106] [SSR] [Skill] 具現化概論'
];
rply.text = rply.text +'\n'+ rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;	
}

function TCard(frequency,id) {
rply.text='你抽到了：';
if(id==''){
for(i=1;i<=frequency;i++){
 SSR();
}
}
else{
for(i=1;i<=frequency;i++){
let rarity=rollbase.Dice(100);
if(rarity==100)TSSR();
if((rarity>=89) && (rarity<100))TSR();
 if((rarity>=58) && (rarity<89))TR();
 if(rarity<58)TN();
}

if(frequency==10){
rply.text+='\n多送你一張：';
let rarity=rollbase.Dice(100);
if(rarity>=96)TSSR();
if(rarity<96)TSR();
}
}
return rply;
}

function TN() {
let rplyArr = [
'\[001] [N] [Item] 鼠的畫', 
'\[005] [N] [Item] 夜月的肝',
'\[018] [N] [Skill] 磁懸推進',
'\[019] [N] [Skill] 連結武裝切換',
'\[020] [N] [Skill] 複合武器切換'
];
rply.text = rply.text +'\n'+ rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;	
}
function TR() {
let rplyArr = [
'\[030] [N] [Item] 偽裝成[R]的[N]卡',
'\[031] [R] [Item] 鼠的畫ex',
'\[035] [R] [Item] 夜月那快撐不住的肝',
'\[044] [R] [Skill] 墊步突擊',
'\[045] [R] [Skill] 誤差修正',
'\[046] [R] [Skill] 雷達'
];
rply.text = rply.text +'\n'+ rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;	
}
function TSR() {
let rplyArr = [
'\[060] [N] [Item] 偽裝成[SR]的[N]卡',
'\[061] [SR] [Item] 鼠那超進步的畫',
'\[065] [SR] [Item] 夜月那超越人類的肝',
'\[070] [SR] [Skill] 全彈射擊',
'\[071] [SR] [Skill] 極速穿擊',
'\[072] [SR] [Skill] 具現化武裝:27mm炮',
'\[073] [SR] [Skill] 具現化武裝:八連裝導彈倉'
];
rply.text = rply.text +'\n' + rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;	
}
function TSSR() {
let rplyArr = [
'\[090] [N] [Item] 偽裝成[SSR]的[N]卡',
'\[095] [SSR] [Partner] 鼠',
'\[099] [SSR] [Partner] 夜月',
'\[104] [SSR] [Skill] 具現化武裝:電磁軌加速炮',
'\[105] [SSR] [Skill] 具現化武裝:浮游護盾'
];
rply.text = rply.text +'\n'+ rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;	
}
function ICard() {
rply.text = 
	'本周卡池\n'+
	'=法術池:=\n'+
	' -SSR卡機率1% \n'+
	' -SR卡機率10% \n'+
	' -R卡機率30% \n'+
	' -N卡機率59% \n'+
	'=10連抽保底SR機率：=\n'+
	' -SSR卡機率5% \n'+
	' -SR卡機率95% \n'+
	'--------------------------'+
	'=外裝池:=\n'+
	' -SSR卡機率1% \n'+
	' -SR卡機率10% \n'+
	' -R卡機率30% \n'+
	' -N卡機率59% \n'+
	'=10連抽保底SR機率：=\n'+
	' -SSR卡機率5% \n'+
	' -SR卡機率95% \n'+
	;
return rply;	
}




module.exports = {
	MCard:MCard,
	TCard:TCard,
	ICard:ICard,
	IDCA:IDCA
};
