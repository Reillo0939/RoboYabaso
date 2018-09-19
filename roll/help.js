var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

function Help() {
rply.text ='【夢之領域BOT】v0.9.7.1' +
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
rply.text ='【角色創立系統】v1.5.?' +
'\n GU角色創立 名稱(不能有空格) 年齡 '+
'\n  -創立一個陣營為GU的角色  '+
'\n AAUF角色創立 名稱(不能有空格) 年齡 '+
'\n  -創立一個陣營為AAUF角色  ' +
'\n--------屬性說明--------------'+
'\n 生命值'+
'\n  -歸0時無法繼續戰鬥  '+
'\n CE儲存量  '+
'\n  -使用技能會消耗'+
'\n 耐重量  '+
'\n  -跟可以拿的武器、裝備等有關'+
'\n 反應力'+
'\n  -與攻擊優先度等有關';
return rply;	
}


module.exports = {
	Help:Help,
	Character:Character
};
