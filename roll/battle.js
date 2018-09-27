var rollbase = require('./rollbase.js');
var Character = require('./Character.js');
var xweapon=require('./weapon.js');

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
var player = [];
var mode = 0;
var start=0;
var ot= new Date();;
function Reset() {
    player = Character.get_player_data;
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



function battles(id,name,in_text) {
	let msgSplitor = (/\S+/ig);	
    let mainMsg = in_text.match(msgSplitor); //定義輸入字串
	let trigger = mainMsg[0].toString()
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	if (trigger.match(/武器/) != null ){
	if (trigger.match(/製作/)!= null && start==0) return xweapon.weapon_make(id,name,mainMsg[1],mainMsg[2]) ;
	if (trigger.match(/查看/)!= null) return xweapon.weapon_view(id,name) ;
	if (trigger.match(/破壞/)!= null && start==0) return xweapon.weapon_break(id,name) ;
	}
	if (trigger.match(/玩家/) != null){
        if (trigger.match(/自身情報/) != null) return Character.CV(id,name) ;
	}
	if (trigger.match(/技能/) != null){
        if (trigger.match(/查看/) != null) return Character.CKV(name,mainMsg[1]) ;
    }

    if (trigger.match(/模式1/) != null) mode = 1;

    

    if (mode == 1) {
        if (trigger.match(/^戰鬥參與$/) != null && start == 0) {
            console.log(id);
            var participate_player=0;
            for (var fd = 0; fd < player.length; fd++) {
                if (player[fd].participate == 1) participate_player++;
            }
            if (participate_player >= 2) {
                rply.text = '人數已滿';
                return rply;	
            }
            for (var fd = 0; fd < player.length; fd++) {
                if (player[fd].ID == id) {
                    if (player[fd].Camp == 'A.A.U.F') {
                        player[fd].participate = 1;
                        var participate_player = 0;
                        for (var fd = 0; fd < player.length; fd++) {
                            if (player[fd].participate == 1) participate_player++;
                        }
                        rply.text =
                            '[' + name + ']的角色已參與 (' + participate_player+'/2)'+
                            '\n[' + player[fd].Name + ']  種族:' + player[fd].Race +
                            '\n職業:' + player[fd].Occupation +
                            '\n軍階:' + player[fd].Rank +
                            '\n榮譽值:' + player[fd].Honor_Point +
                            '\n生命值:' + player[fd].MHP +
                            '\n護甲:' + player[fd].Defense +
                            '\nCE儲存量:' + player[fd].CE +
                            '\n格鬥能力:' + player[fd].Fighting +
                            '\n射擊能力:' + player[fd].Shooting +
                            '\n控制能力:' + player[fd].Control +
                            '\n反應力:' + player[fd].Reaction;
                    }
                    if (player[fd].Camp == 'G.U.') {
                        player[fd].participate = 1;
                        rply.text =
                            '[' + name + ']的角色已參與(' + participate_player + '/2)' +
                            '\n[' + player[fd].Name + ']  種族:' + player[fd].Race +
                            '\n職業:' + player[fd].Occupation +
                            '\n軍階:' + player[fd].Rank +
                            '\n榮譽值:' + player[fd].Honor_Point +
                            '\n生命值:' + player[fd].MHP +
                            '\n護盾:' + player[fd].MShield +
                            '\nCE儲存量:' + player[fd].CE +
                            '\n格鬥能力:' + player[fd].Fighting +
                            '\n射擊能力:' + player[fd].Shooting +
                            '\n反應力:' + player[fd].Reaction +
                            '\n放出適性:' + player[fd].None +
                            '\n火屬適性:' + player[fd].Fire +
                            '\n水屬適性:' + player[fd].Water +
                            '\n雷屬適性:' + player[fd].Thunder +
                            '\n冰屬適性:' + player[fd].Ice;
                    }
                    return rply;	
                }
            }
        }
        if (trigger.match(/^取消參與$/) != null && start == 0) {
            for (var fd = 0; fd < player.length; fd++) {
                if (player[fd].ID == id) {
                    if (player[fd].participate == 1) {
                        player[fd].participate = 0;
                        var participate_player = 0;
                        for (var fd = 0; fd < player.length; fd++) {
                            if (player[fd].participate == 1) participate_player++;
                        }
                        rply.text =
                            '[' + name + ']的角色已取消參與(' + participate_player + '/2)' ;
                    }
                    return rply;
                }
            }
        }
    }
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

module.exports = {
	battles:battles,
    Reset: Reset
};


