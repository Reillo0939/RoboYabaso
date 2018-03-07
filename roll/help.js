var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

function Help() {
rply.text ='【夢之領域BOT】v0.2' +
'\n 輸入87 效果不明 '+
'\n bot距離 x1 y1 x2 y2 文字  '+
'\n 輸出兩點距離(向下取整數)  '+
'\n 法術抽卡 或 法術單抽  '+
'\n 抽一張法術區域的卡  '+
'\n 法術10連抽  '+
'\n 抽10+1(保底SR)張法術區域的卡  '+
'\n 法術角色創立  '+
'\n 創立一個法術角色  '+
'\n 外裝角色創立  '+
'\n 創立一個外部裝甲角色  '
return rply;	
}



module.exports = {
	Help:Help
};
