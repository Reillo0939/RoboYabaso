var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var ox = require('./Character.js');
var xweapon=require('./weapon.js');
var faf = require('../index.js');
var AJT=0;

var channelAccessToken = process.env.LINE_CHANNEL_ACCESSTOKEN;
var channelSecret = process.env.LINE_CHANNEL_SECRET;
var linebot = require('linebot');///030
 var channelId='1567989750';
var bot = linebot({
  channelId: channelId,
  channelSecret: channelSecret,
  channelAccessToken: channelAccessToken
});


var rply ={type : 'text'}; //type是必需的,但可以更改
var player= new Array();;
var start=0;
var ot= new Date();;
function dd() {
HM=0;
player.length=0;
RAAUF=0;
RGU=0;						
}

setInterval(function(){
	var nt = new Date();
	if((((nt.getTime() - ot.getTime()) / (1000 * 60)) >=1) && start == 1){
		//console.log('debug'+(((nt.getTime() - ot.getTime()) / (1000 * 60))));
				var rr='';
				self++;
				ds=1;
				if(self>=player.length)self=0;
				rr='自動跳過\n\n'+BR();
				bot.push('Ca8fea1f8ef1ef2519860ee21fb740fd2',rr);
				var nowt = new Date();
				ot=nowt;
	}
			},1000);



function battles(id,name,ab) {
	let msgSplitor = (/\S+/ig);	
	let mainMsg = ab.match(msgSplitor); //定義輸入字串
	let trigger = mainMsg[0].toString()
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	if (trigger.match(/武器/) != null ){
	if (trigger.match(/製作/)!= null && start==0) return xweapon.weapon_make(id,name,mainMsg[1],mainMsg[2]) ;
	if (trigger.match(/查看/)!= null) return xweapon.weapon_view(id,name) ;
	if (trigger.match(/破壞/)!= null && start==0) return xweapon.weapon_break(id,name) ;
	}
	if (trigger.match(/玩家/) != null){
	if (trigger.match(/自身情報/)!= null) return ox.CV(id,name) ;
	}
	if (trigger.match(/技能/) != null){
		if (trigger.match(/查看/)!= null) return ox.CKV(name,mainMsg[1]) ;
	}
	
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

module.exports = {
	battles:battles,
	dd:dd
};


