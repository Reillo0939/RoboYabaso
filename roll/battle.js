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
var BattleRound = 0;
var Designation = null;
var start=0;
var ot= new Date();;
function Reset() {
    BattleRound = 0;
    Designation = null;
    player = Character.get_player_data();
    for (var fd = 0; fd < player.length; fd++) {
        player[fd].participate = 0; 
        player[fd].HP = player[fd].MHP; 
        player[fd].CE = player[fd].MCE; 
        player[fd].Alive = 1;
        player[fd].Action = 0;
        player[fd].MaxAction = 2;
        if (player[fd].Reaction >= 100) player[fd].MaxAction++;
        player[fd].MovingDistance = 3;
        player[fd].Status = {};
        player[fd].Round = 0;
        player[fd].Position = {};
        player[fd].Position.x = 0;
        player[fd].Position.y = 0;
        if (player[fd].Camp = 'G.U.') player[fd].Shield = player[fd].MShield; 
        if (player[fd].Weaponry == undefined) {
            player[fd].Weaponry = {};
            player[fd].Weaponry.main = {};
            player[fd].Weaponry.secondary = {};
        }
        if (player[fd].Weaponry.main.Type = '槍械') player[fd].Weaponry.main.Bullet = player[fd].Weaponry.main.MBullet;
        if (player[fd].Weaponry.secondary.Type = '槍械') player[fd].Weaponry.secondary.Bullet = player[fd].Weaponry.secondary.MBullet;
        if (player[fd].Weaponry.main.Type = '複合武器') player[fd].Weaponry.main.Fire_Bullet = player[fd].Weaponry.main.Fire_MBullet;
    }
}

/*setInterval(function(){
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
			},1000);*/



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

    if (trigger.match(/^測試模式$/) != null) mode = 1;

    if (mode == 1) {
        Melee(id, name, 2, trigger, mainMsg);
        return rply;
    }
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
function Melee(id, name, limit, trigger, mainMsg) {
    rply.text = '';
    if (start == 0) {
        if (trigger.match(/^戰鬥參與$/) != null) {
            var participate_player = 0;
            for (var fd = 0; fd < player.length; fd++) {
                if (player[fd].participate == 1) participate_player++;
            }
            if (participate_player >= limit) {
                rply.text = '人數已滿';
                return rply;
            }
            for (var fd = 0; fd < player.length; fd++) {
                if (player[fd].ID == id) {
                    if (player[fd].Camp == 'A.A.U.F') {
                        player[fd].participate = 1;
                        participate_player = 0;
                        for (var i = 0; i < player.length; i++) {
                            if (player[i].participate == 1) participate_player++;
                        }
                        rply.text =
                            '[' + name + ']的角色[' + player[fd].Name + ']已參與 (' + participate_player + '/' + limit + ')';
                    }
                    if (player[fd].Camp == 'G.U.') {
                        player[fd].participate = 1;
                        participate_player = 0;
                        for (var i = 0; i < player.length; i++) {
                            if (player[i].participate == 1) participate_player++;
                        }
                        rply.text =
                            '[' + name + ']的角色[' + player[fd].Name + ']已參與 (' + participate_player + '/' + limit + ')';
                    }
                    return rply;
                }
            }
        }
        if (trigger.match(/^取消參與$/) != null) {
            for (var fd = 0; fd < player.length; fd++) {
                if (player[fd].ID == id) {
                    if (player[fd].participate == 1) {
                        player[fd].participate = 0;
                        var participate_player = 0;
                        for (var i = 0; i < player.length; i++) {
                            if (player[i].participate == 1) participate_player++;
                        }
                        rply.text =
                            '[' + name + ']的角色[' + player[fd].Name + ']已取消參與(' + participate_player + '/' + limit + ')';
                    }
                    return rply;
                }
            }
        }
        if (trigger.match(/^戰鬥開始$/) != null) {
            start = 1;
            for (var fd = 0; fd < player.length; fd++) {
                if (player[fd].participate == 1) {
                    player[fd].Position.x = rollbase.Dice(25);
                    player[fd].Position.y = rollbase.Dice(25);
                }
            }
        }
    }
    if (start == 1) {
        if (Designation == null) {
                for (var turn = 150; turn >= 0; turn--) {
                    for (var fd = 0; fd < player.length; fd++) {
                        if (player[fd].Reaction == turn && player[fd].Round == BattleRound && player[fd].participate == 1 && player[fd].Alive == 1) {
                      
                            Designation = fd;
                            rply.text = '回合' + BattleRound + '----' + player[fd].Name + '的回合';
                            return rply;
                        }
                    }
                }
                BattleRound++;
        }
        if (trigger.match(/^跳過$/) != null) {
            player[Designation].Round++;
            player[Designation].Action = 0;
            Designation = null;
        }
        if (trigger.match(/^重置$/) != null) {
            Reset();
            rply.text = '重置';
            return rply;
        }
    }
}
module.exports = {
	battles:battles,
    Reset: Reset
};


