var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

function Card() {
 let rarity=rollbase.Dice(100);
 if(rarity==100)SSR();
 if((rarity>=89) && (rarity<100))SR();
  if((rarity>=58) && (rarity<89))R();
  if(rarity<58)N();
return rply;
}
function N() {
let rplyArr = [
'\[001] [N] 鼠的畫', 
'\[002] [N] 雷洛的程式', 
'\[003] [N] 一定墜落的翅膀',
'\[004] [N] 雷銘的筆',
'\[005] [N] 夜月的肝',
'\[006] [N] 木劍',
'\[007] [N] 不是史萊姆',
'\[008] [N] 火之庇護',
'\[009] [N] 水之庇護',
'\[010] [N] 風之庇護',
'\[011] [N] 土之庇護'
];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;	
}
function R() {
let rplyArr = [
'\[030] [N] 偽裝成[R]的[N]卡',
'\[031] [R] 石劍', 
'\[032] [R] 炎之劍', 
'\[033] [R] 風之弓',
'\[034] [R] 海之鞭',
'\[035] [R] 地之杖',
'\[036] [R] 鼠的畫ex',
'\[037] [R] 雷洛那沒bug的程式',
'\[038] [R] 翅膀那雷神',
'\[039] [R] 雷銘的0.3mm自動鉛筆',
'\[040] [R] 夜月那快撐不住的肝'
];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;	
}
function SR() {
let rplyArr = [
'\[060] [N] 偽裝成[SR]的[N]卡',
'\[061] [SR] 颶風之弓', 
'\[062] [SR] 烈火之劍', 
'\[063] [SR] 大海之鞭',
'\[064] [SR] 大地魔杖',
'\[065] [SR] 鐵劍',
'\[066] [SR] 鼠那超進步的畫',
'\[067] [SR] 雷洛那超簡潔的程式',
'\[068] [SR] 翅膀雷好雷滿',
'\[069] [SR] 雷銘的用不壞的平板',
'\[070] [SR] 夜月那超越人類的肝'
];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;	
}
function SSR() {
let rplyArr = [
'\[090] [N] 偽裝成[SSR]的[N]卡',
'\[091] [SSR] 颶風之神', 
'\[092] [SSR] 烈火之神', 
'\[093] [SSR] 大海之神',
'\[094] [SSR] 大地之神',
'\[095] [SSR] 鑽石劍',
'\[096] [SSR] 鼠',
'\[097] [SSR] 雷洛',
'\[098] [SSR] Wings',
'\[099] [SSR] 雷銘',
'\[100] [SSR] 夜月'
];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;	
}


module.exports = {
	Card
};
