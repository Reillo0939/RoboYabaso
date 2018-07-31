//  i.e., `User.js` will become `exports['User']` or `exports.User`
require('fs').readdirSync('./roll/').forEach(function(file) {
	if (file.match(/\.js$/) !== null && file !== 'index.js') {
	  var name = file.replace('.js', '');
	  exports[name] = require('../roll/' + file);
	}
  });

//用來呼叫骰組,新增骰組的話,要寫條件式到下面呼叫 
//格式是 exports.骰組檔案名字.function名
function parseInput(rplyToken, inputStr, id,name) {
	//console.log('InputStr: ' + inputStr);
	_isNaN = function(obj) 	{
	return isNaN(parseInt(obj));  
	}
	
	let msgSplitor = (/\S+/ig);	
	let mainMsg = inputStr.match(msgSplitor); //定義輸入字串
	let trigger = mainMsg[0].toString().toLowerCase()
	console.log(trigger);
	; //指定啟動詞在第一個詞&把大階強制轉成細階
	if (trigger.match(/^help$/)!= null ) return exports.help.Help();

	//87
	//if (trigger.match(/87/) != null) return exports.funny.bsMo() ;
	/*if (trigger.match(/^粒子研究紀錄抽卡/) != null) return exports.card.MCard(1,id,name) ;//"G.U"抽卡
	if (trigger.match(/^粒子研究紀錄10連抽/) != null) return exports.card.MCard(9,id,name) ;//"G.U"10連抽*/
	
	//if (trigger.match(/^卡片查詢$/) != null) return exports.card_help.CardH(mainMsg[1]) ;
	if (trigger.match(/^卡池資訊$/) != null) return exports.card.ICard() ;
	
	if (trigger.match(/(^玩家權限$|^玩家權限$)/) != null) return exports.card.IDCA(id,name) ;
	if (trigger.match(/^gu角色創立$/) != null) return exports.Character.CM(mainMsg[1],mainMsg[2],mainMsg[3],id,name) ;
	if (trigger.match(/^aauf角色創立$/) != null) return exports.Character.CT(mainMsg[1],mainMsg[2],mainMsg[3],id,name) ;
	
	
	if (trigger.match(/玩家/) != null){
	if (trigger.match(/自身情報/)!= null) return exports.Character.CV(id,name) ;
	if (trigger.match(/查詢/)!= null) return exports.Character.CI(name,mainMsg[1]) ;
	if (trigger.match(/改名/)!= null) return exports.Character.CCN(id,name,mainMsg[1]) ;
	if (trigger.match(/列表/)!= null) return exports.Character.CCL() ;
	//if (trigger.match(/成長點配置/)!= null) return exports.Character.CSG(id,name,mainMsg[1],mainMsg[2]) ;
	}
	
	if (trigger.match(/武器/) != null){
	if (trigger.match(/製作/)!= null) return exports.weapon.weapon_make(id,name,mainMsg[1],mainMsg[2]) ;
	if (trigger.match(/查看/)!= null) return exports.weapon.weapon_view(id,name) ;
	if (trigger.match(/破壞/)!= null) return exports.weapon.weapon_break(id,name) ;
	//if (trigger.match(/改造/)!= null) return exports.weapon.weapon_retrofit(id,name,mainMsg[1],mainMsg[2]) ;
	
	}
	if (trigger.match(/技能/) != null){
		if (trigger.match(/查看/)!= null) return exports.Character.CKV(name,mainMsg[1]) ;
	}
	
	if (trigger.match(/^角色創立說明$/) != null) return exports.help.Character() ;

	if (trigger.match(/運氣|運勢/) != null) return exports.funny.randomLuck(mainMsg) ; //占卜運氣		
	
	if (trigger.match(/^廣播$/) != null) bot.push(mainMsg[1],mainMsg[2]);
  
}


module.exports = {
	parseInput:parseInput
};
