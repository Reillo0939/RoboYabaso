var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

function Card() {
 let rarity=rollbase.Dice(100)
 if(rarity==100)SSR();
 if((rarity>=89) && (rarity<100))SR();
  if((rarity>=58) && (rarity<89))R();
  if(rarity<58)N();
}
function N() {
let rplyArr = [
'\編號01:N鼠的畫', 
'\編號02:N雷洛的程式', 
'\編號03:N一定墜落的翅膀',
'\編號04:N雷銘的筆',
'\編號05:N夜月的肝',
'\編號06:N木劍',
'\編號07:R偽裝成R的N',
'\編號08:SR偽裝成SR的N',
'\編號09:SSR偽裝成SSR的N',
];
function R() {
let rplyArr = [
'\編號11:R鐵劍', 
'\編號12:R炎刃', 
'\編號13:R風之弓',
'\編號14:R海之鞭',
'\編號15:R地之杖', 
];
function SR() {
let rplyArr = [
'\編號91:SR風之劍', 
'\編號92:SR火之劍', 
'\編號93:SR海之劍',
'\編號94:SR地之劍', 
];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;	
}
function SSR() {
let rplyArr = [
'\編號101:SSR風神', 
'\編號102:SSR火山之神', 
'\編號103:SSR海洋之神',
'\編號104:SSR大地之神', 
];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;	
}


module.exports = {
	Card:Card
};
