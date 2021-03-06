//  i.e., `User.js` will become `exports['User']` or `exports.User`
require('fs').readdirSync('./roll/').forEach(
	function(file) {
		if (file.match(/\.js$/) !== null && file !== 'index.js') {
			var name = file.replace('.js', '');
			exports[name] = require('../roll/' + file);
		}
	} 
);

var channelAccessToken = process.env.LINE_CHANNEL_ACCESSTOKEN;
var channelSecret = process.env.LINE_CHANNEL_SECRET;
var linebot = require('linebot');///030
var channelId='1567989750';
var bot = linebot(
	{
		channelId: channelId,
		channelSecret: channelSecret,
		channelAccessToken: channelAccessToken
	}
);
  
//用來呼叫骰組,新增骰組的話,要寫條件式到下面呼叫 
//格式是 exports.骰組檔案名字.function名
function parseInput(rplyToken, inputStr, id,name) {
	//console.log('InputStr: ' + inputStr);
	_isNaN = function(obj) 	{
		return isNaN(parseInt(obj));  
	}
	let msgSplitor = (/\S+/ig);	
	let mainMsg = inputStr.match(msgSplitor); //定義輸入字串
	let trigger = mainMsg[0].toString().toLowerCase();
	console.log(trigger);

	if (inputStr.toLowerCase().match(/^\d+\s+\d+d\d+/) != null || inputStr.toLowerCase().match(/^\d+d\d+/) != null) return exports.rollbase.nomalDiceRoller(inputStr, mainMsg[0], mainMsg[1], mainMsg[2]);
	if (trigger.match(/^help$/)!= null ) return exports.help.Help();
	if (trigger.match(/^水晶時代抽卡/) != null) return exports.card.MCard(1,id,name) ;//"G.U"抽卡
	if (trigger.match(/^水晶時代10連抽/) != null) return exports.card.MCard(9,id,name) ;//"G.U"10連抽
	if (trigger.match(/^新抽卡系統測試/) != null) return exports.card.Test(1,id,name) ;
	if (trigger.match(/^新抽卡系統10連/) != null) return exports.card.Test(10,id,name) ;
	
	
	//if (trigger.match(/^卡片查詢$/) != null) return exports.card_help.CardH(mainMsg[1]) ;
	if (trigger.match(/^卡池資訊$/) != null) return exports.card.ICard(mainMsg[1]) ;

	if (trigger.match(/(^玩家權限$|^玩家權限$)/) != null) return exports.card.IDCA(id,name) ;

	if (trigger.match(/^gu角色創建$/) != null) return exports.Character.CM(mainMsg[1],mainMsg[2],mainMsg[3],id,name) ;
	if (trigger.match(/^aauf角色創建$/) != null) return exports.Character.CT(mainMsg[1],mainMsg[2],mainMsg[3],id,name) ;
	
	if (trigger.match(/^角色建立$/) != null) return '角色建立\n'+'line://app/1567989750-WKrVXk6p';
	if (trigger.match(/^武器_製作link$/) != null) return '武器製作\n'+'line://app/1567989750-lYvLaAZk';
	if (trigger.match(/玩家/) != null){
		if (trigger.match(/自身情報/) != null) return exports.Character.player_View(id,name) ;
		if (trigger.match(/查詢/) != null) return exports.Character.player_Inquire(name,mainMsg[1]) ;
		//if (trigger.match(/改名/)!= null) return exports.Character.CCN(id,name,mainMsg[1]) ;
		if (trigger.match(/技能/) != null) return exports.Character.CKSV(id, name);
		//if (trigger.match(/轉換/) != null) return exports.Character.test(id, mainMsg[1]);
		if (trigger.match(/測試/) != null) return exports.Character.load_player_data();
	}
	if (trigger.match(/武器/) != null){
		if (trigger.match(/製作/) != null) return exports.weapon.weapon_make(id, name, mainMsg[1], mainMsg[2], mainMsg[3], mainMsg[4], mainMsg[5]) ;
		if (trigger.match(/查看/)!= null) return exports.weapon.weapon_view(id,name) ;
		if (trigger.match(/破壞/) != null) return exports.weapon.weapon_break(id, name, mainMsg[1]) ;
	}
	if (trigger.match(/技能/) != null){
        	if (trigger.match(/查看/) != null) return exports.Character.Skill_View(name,mainMsg[1]) ;	
	}
	if (trigger.match(/^角色創立說明$/) != null) return exports.help.Character() ;
	if (trigger.match(/運氣|運勢/) != null) return exports.funny.randomLuck(mainMsg) ; //占卜運氣
	if (trigger.match(/^廣播$/) != null) bot.push('Ca8fea1f8ef1ef2519860ee21fb740fd2',mainMsg[1]);
}


module.exports = {
	parseInput:parseInput
};
