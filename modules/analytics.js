// Load `*.js` under roll directory as properties
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
	let trigger = mainMsg[0].toString().toLowerCase(); //指定啟動詞在第一個詞&把大階強制轉成細階

	//在下面位置開始分析trigger

	//普通ROLL擲骰判定在此	
	if (inputStr.match(/\w/)!=null && inputStr.toLowerCase().match(/\d+d+\d/)!=null) return exports.rollbase.nomalDiceRoller(inputStr,mainMsg[0],mainMsg[1],mainMsg[2]);
	
	//xBy>A 指令開始於此
	if (trigger.match(/^(\d+)(b)(\d+)$/i)!= null) return exports.advroll.xBy(trigger,mainMsg[1],mainMsg[2]);
	//xUy 指令開始於此	
	if (trigger.match(/^(\d+)(u)(\d+)$/i)!= null && isNaN(mainMsg[1])== false) return exports.advroll.xUy(trigger,mainMsg[1],mainMsg[2],mainMsg[3]);
	
	if (trigger.match(/^ccb$|^cc$|^ccn[1-2]$|^cc[1-2]$/)!= null && mainMsg[1]<=1000 )
	{		
	//ccb指令開始於此
	if (trigger == 'ccb'&& mainMsg[1]<=99) return exports.coc.coc6(mainMsg[1],mainMsg[2]);
	
	//cc指令開始於此
	if (trigger == 'cc'&& mainMsg[1]<=1000) return exports.coc.coc7(mainMsg[1],mainMsg[2]);
	//獎懲骰設定於此	
	if (trigger == 'cc1'&& mainMsg[1]<=1000) return exports.coc.coc7bp(mainMsg[1],'1',mainMsg[2]); 
	if (trigger == 'cc2'&& mainMsg[1]<=1000) return exports.coc.coc7bp(mainMsg[1],'2',mainMsg[2]);	
	if (trigger == 'ccn1'&& mainMsg[1]<=1000) return exports.coc.coc7bp(mainMsg[1],'-1',mainMsg[2]);	
	if (trigger == 'ccn2'&& mainMsg[1]<=1000) return exports.coc.coc7bp(mainMsg[1],'-2',mainMsg[2]);	
	}
			
	if (trigger.match(/(^cc7版創角$|^cc七版創角$)/) != null && mainMsg[1] != NaN )	return exports.coc.build7char(mainMsg[1]);
	
	if (trigger.match(/(^cc6版創角$|^cc六版創角$)/) != null && mainMsg[1] != NaN )	return exports.coc.build6char(mainMsg[1]);
	
	if (trigger.match(/^coc7角色背景$/)!= null ) return exports.coc.PcBG();
  
	if (trigger.match(/^help$/)!= null ) return exports.help.Help();
	
	
	//nc指令開始於此 來自Rainsting/TarotLineBot 
	if (trigger.match(/^[1-4]n[c|a][+|-][1-99]$|^[1-4]n[c|a]$/)!= null ) return exports.nc.nechronica(trigger,mainMsg[1]);

	//依戀
	if (trigger.match(/(^nm$)/) != null)	return exports.nc.nechronica_mirenn(mainMsg[1]);

	
	//wod 指令開始於此
	if (trigger.match(/^(\d+)(wd|wod)(\d|)((\+|-)(\d+)|)$/i)!= null)return exports.wod.wod(trigger,mainMsg[1]);

	//Fisher–Yates shuffle
 	//SortIt 指令開始於此
 	if (trigger.match(/排序/)!= null && mainMsg.length >= 3) return exports.funny.SortIt(inputStr,mainMsg);
 	if (trigger.match(/^d66$/)!= null ) return exports.advroll.d66(mainMsg[1]);
	if (trigger.match(/^d66s$/)!= null ) return exports.advroll.d66s(mainMsg[1]);

	
	//choice 指令開始於此
	if (trigger.match(/choice|隨機|選項|選1/)!= null && mainMsg.length >= 3) return exports.funny.choice(inputStr,mainMsg);
	
	//tarot 指令
	if (trigger.match(/tarot|塔羅牌|塔羅/) != null) {
		if (trigger.match(/^單張|^每日|^daily/)!= null) return exports.funny.NomalDrawTarot(mainMsg[1], mainMsg[2]);//預設抽 79 張
		if (trigger.match(/^時間|^time/)!= null) 	return exports.funny.MultiDrawTarot(mainMsg[1], mainMsg[2], 1);
		if (trigger.match(/^大十字|^cross/)!= null) return exports.funny.MultiDrawTarot(mainMsg[1], mainMsg[2], 2);
	}
	
	//FLAG指令開始於此
	if (trigger.match(/立flag|死亡flag/) != null) return exports.funny.BStyleFlagSCRIPTS() ;	
	//87
	if (trigger.match(/87/) != null) return exports.funny.bsMo() ;
	
	if (inputStr=='"G.U"抽卡') return exports.card.MCard(1,id,name) ;
	if (inputStr=='"G.U"10連抽') return exports.card.MCard(10,id,name) ;
	if (inputStr=='A.A.U.F"抽卡') return exports.card.TCard(1,id,name) ;
	if (inputStr=='"A.A.U.F"10連抽') return exports.card.TCard(10,id,name) ;
	
	if (trigger.match(/^卡片查詢$/) != null) return exports.card_help.CardH(mainMsg[1]) ;
	if (trigger.match(/^卡池資訊$/) != null) return exports.card.ICard() ;
	
	if (trigger.match(/(^玩家權限$|^玩家權限$)/) != null) return exports.card.IDCA(id,name) ;
	
	if (trigger.match("G.U角色創立") != null) return exports.Character.CM(mainMsg[1],mainMsg[2],id) ;
	if (trigger.match("A.A.U.F角色創立") != null) return exports.Character.CT(mainMsg[1],mainMsg[2],id) ;
	
	if (trigger.match(/^角色資料$/) != null) return exports.Character.CV(id,name) ;
	if (trigger.match(/^角色查詢$/) != null) return exports.Character.CI(name,mainMsg[1]) ;
	
	
	if (trigger.match(/^角色創立說明$/) != null) return exports.help.Character() ;
	
	if (trigger.match(/bot距離/) != null) return exports.advroll.xyxy(mainMsg[1],mainMsg[2],mainMsg[3],mainMsg[4],mainMsg[5]) ;
	
	if (trigger.match(/傷害計算/) != null) return exports.advroll.Damage(mainMsg[1],mainMsg[2],mainMsg[3],mainMsg[4],name) ;
	
	
	//鴨霸獸指令開始於此
	if (trigger.match(/鴨霸獸|巴獸/) != null) return exports.funny.randomReply() ;	
	if (trigger.match(/運氣|運勢/) != null) return exports.funny.randomLuck(mainMsg) ; //占卜運氣		
	
	/*tarot 指令
	if (trigger.match(/猜拳/) != null) {
		return RockPaperScissors(inputStr, mainMsg[1]);
	}
*/

  
}


module.exports = {
	parseInput:parseInput
};

