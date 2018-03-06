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
'\[01] [N] 鼠的畫', 
'\[02] [N] 雷洛的程式', 
'\[03] [N] 一定墜落的翅膀',
'\[04] [N] 雷銘的筆',
'\[05] [N] 夜月的肝',
'\[06] [N] 木劍',
];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;	
}
function R() {
let rplyArr = [
'\[07] [N] 偽裝成[R]的[N]',
'\[11] [R] 鐵劍', 
'\[12] [R] 炎刃', 
'\[13] [R] 風之弓',
'\[14] [R] 海之鞭',
'\[15] [R] 地之杖'
];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;	
}
function SR() {
let rplyArr = [
'\[08] [N] 偽裝成[SR]的[N]',
'\[21] [SR] 風之劍', 
'\[22] [SR] 火之劍', 
'\[23] [SR] 海之劍',
'\[24] [SR] 地之劍'
];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;	
}
function SSR() {
let rplyArr = [
'\[09] [N] 偽裝成[SSR]的[N]',
'\[31] [SSR] 風神', 
'\[32] [SSR] 火山之神', 
'\[33] [SSR] 海洋之神',
'\[34] [SSR] 大地之神'
];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;	
}


module.exports = {
	Card
};
