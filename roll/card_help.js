var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply ={type : 'text'}; //type是必需的,但可以更改



function CardH(id) {
let rplyArr = [
'\[000] [UR] [None] 沒有東西', 
'\[001] [N] [Item] 鼠的畫 \n增加[095] [SSR] [Partner] 鼠 的經驗值1', 
'\[002] [N] [Item] 雷洛的程式 \n增加[096] [SSR] [Partner] 雷洛 的經驗值1', 
'\[003] [N] [Item] 一定墜落的翅膀 \n增加[097] [SSR] [Partner] Wings 的經驗值1點',
'\[004] [N] [Item] 雷銘的筆 \n增加[098] [SSR] [Partner] 雷銘 的經驗值1',
'\[005] [N] [Item] 夜月的肝 \n增加[099] [SSR] [Partner] 夜月 的經驗值1',
'\[006] [N] [Accessories] 火之庇護 \n 增加火屬適性5%',
'\[007] [N] [Accessories] 水之庇護 \n 增加水屬適性5%',
'\[008] [N] [Accessories] 風之庇護 \n 增加風屬適性5%',
'\[009] [N] [Accessories] 土之庇護 \n 增加土屬適性5%',

'\[022] [N] [Skill] 能量放出實驗'
];
if(id>9){rply.text='施工中';}
else{
rply.text=rplyArr(id);}
return rply;
}
module.exports = {
	CardH:CardH
};
