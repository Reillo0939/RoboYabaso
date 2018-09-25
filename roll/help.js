var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

function Help() {
rply.text ='【夢之領域BOT】v0.9.7.1.' +
'\n 卡池資訊'+
'\n  -查看本周卡池的資訊與抽卡方式'+
'\n 卡片查詢 卡片id  '+
'\n  -查詢指定id的卡片說明  '+
'\n 角色創立說明'+
'\n  -查看角色創立系統的說明及創立方式'+
'\n v0.9更新訊息'+
'\n  -優化說明';
return rply;	
}
function Character() {
rply.text ='【角色創立系統】v1.5.2' +
'\n GU角色創建 名稱(不能有空格) 種族 兵種 '+
'\n  -創立一個陣營為GU的角色  '+
'\n AAUF角色創建 名稱(不能有空格) 種族 兵種 '+
'\n  -創立一個陣營為AAUF角色  ' +
'\n--------屬性說明--------------'+
'\n 生命值'+
'\n  -歸0時無法繼續戰鬥  '+
'\n CE儲存量  '+
'\n  -使用技能會消耗'+
'\n 射擊能力  '+
'\n  -跟使用遠距離武器有關'+
'\n 格鬥能力  '+
'\n  -跟使用近距離武器有關'+
'\n 反應力'+
'\n  -與行動優先度等有關';
return rply;	
}


module.exports = {
	Help:Help,
	Character:Character
};
