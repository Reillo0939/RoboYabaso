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
var Designation = 9999;
var start=0;
var ot= new Date();;
function Reset() {
    start = 0;
    BattleRound = 0;
    Designation = 9999;
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
        if (player[fd].Camp == 'G.U.') player[fd].Shield = player[fd].MShield; 
        if (player[fd].Weaponry == undefined) {
            player[fd].Weaponry = {};
            player[fd].Weaponry.main = {};
            player[fd].Weaponry.secondary = {};
        }
        if (player[fd].Weaponry.main.Type == '槍械') player[fd].Weaponry.main.Bullet = player[fd].Weaponry.main.MBullet;
        if (player[fd].Weaponry.secondary.Type == '槍械') player[fd].Weaponry.secondary.Bullet = player[fd].Weaponry.secondary.MBullet;
        if (player[fd].Weaponry.main.Type == '複合武器') player[fd].Weaponry.main.Fire_Bullet = player[fd].Weaponry.main.Fire_MBullet;
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
        if (trigger.match(/製作/) != null) return exports.weapon.weapon_make(id, name, mainMsg[1], mainMsg[2], mainMsg[3], mainMsg[4], mainMsg[5]);
        if (trigger.match(/查看/) != null) return exports.weapon.weapon_view(id, name);
        if (trigger.match(/破壞/) != null) return exports.weapon.weapon_break(id, name, mainMsg[1]);
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
        if (trigger.match(/^測試移動$/) != null) {

                       
            for (var fd = 0; fd < player.length; fd++) {
                if (player[fd].participate == 1) {
                    player[fd].Position.x = 12;
                    player[fd].Position.y = 12;
                }
            }
            Designation = 9999;
                      
        }
        if (trigger.match(/^近戰攻擊$/) != null && id == player[Designation].ID && mainMsg[1] != null && (player[Designation].Weaponry.main.Type == '近距離武器' || player[Designation].Weaponry.main.Type == '複合武器' || player[Designation].Weaponry.secondary.Type == '近距離武器')) {
            for (var target = 0; target < player.length; target++) {
                if (player[target].Name == mainMsg[1] && player[Designation].Position.x == player[target].Position.x && player[Designation].Position.y == player[target].Position.y) {
                    var Damage = [];
                    if (player[Designation].Weaponry.main.Type == '近距離武器') {
                        for (i = 0; i < player[Designation].Weaponry.main.max_combo; i++) {
                            var addition = Math.floor((player[Designation].Fighting - 10) / 10) * 0.1 + 1;
                           
                            Damage[i] = {};
                            Damage[i].Damage = Math.round(player[Designation].Weaponry.main.Damage * (rollbase.Dice(51) + 74) * 0.01 * addition);
                        }
                        var x = Damage.length;
                        if (player[Designation].Weaponry.main.mode == player[Designation].Weaponry.secondary.mode) {
                            var addition = Math.floor((player[Designation].Fighting - 10) / 10) * 0.1 + 1;  
                            for (i = x; i < player[Designation].Weaponry.secondary.max_combo + x; i++) {
                                
                                Damage[i] = {};
                                Damage[i].Damage = Math.round(player[Designation].Weaponry.secondary.Damage * (rollbase.Dice(51) + 74) * 0.01 * addition);
                            }
                        }
                    }
                    if (player[Designation].Weaponry.main.Type != '近距離武器' && player[Designation].Weaponry.secondary.Type == '近距離武器') {
                        for (i = 0; i < player[Designation].Weaponry.secondary.max_combo; i++) {
                            var addition = Math.floor((player[Designation].Fighting - 10) / 10) * 0.1 + 1;
                                Damage[i] = {};
                            Damage[i].Damage = Math.round(player[Designation].Weaponry.secondary.Damage * (rollbase.Dice(51) + 74) * 0.01 * addition);
                            } 
                    }
                    if (player[Designation].Weaponry.main.Type == '複合武器') {
                        for (i = 0; i < player[Designation].Weaponry.main.Fighting_max_combo; i++) {
                            var addition = Math.floor((player[Designation].Fighting - 10) / 10) * 0.1 + 1;
                            var x = Damage.length;
                            Damage[i] = {};
                            
                            Damage[i].Damage = Math.round(player[Designation].Weaponry.main.Fighting_Damage * (rollbase.Dice(51) + 74) * 0.01 * addition);
                            
                        }
                    }
                    var Avoid = (player[target].Fighting - player[Designation].Fighting) *2 + 50;
                    var Critical = (player[Designation].Fighting - player[target].Fighting) + 20;
                    for (i = 0; i < Damage.length; i++) {
                        var Probability = rollbase.Dice(100);
                        if (Probability <= Avoid) {
                            Damage[i].status = 'Avoid';
                            Damage[i].Damage = 0;
                        }
                        else {
                            Probability = rollbase.Dice(100);
                            if (Probability <= Critical) {
                                Damage[i].status = 'Critical';
                                Damage[i].Damage = Math.round(Damage[i].Damage*1.5);
                            }
                            if (player[target].Weaponry.main.mode == '盾' && player[target].Weaponry.main.Type == '近距離武器') {               
                                Probability = rollbase.Dice(100);
                                if (Probability <= player[target].Weaponry.main.Defense) {
                                    Damage[i].status = 'Hinder';
                                    Damage[i].Damage = 0;
                                }
                            }
                            if (player[target].Weaponry.main.mode == '盾' && player[target].Weaponry.secondary.Type == '近距離武器') {
                                Probability = rollbase.Dice(100);
                                if (Probability <= player[target].Weaponry.secondary.Defense) {
                                    Damage[i].status = 'Hinder';
                                    Damage[i].Damage = 0;
                                }
                            }
                            if (player[target].Weaponry.main.Fighting_mode == '盾' && player[target].Weaponry.main.Type == '複合武器') {
                                Probability = rollbase.Dice(100);
                                if (Probability <= player[target].Weaponry.main.Fighting_Defense) {
                                    Damage[i].status = 'Hinder';
                                    Damage[i].Damage = 0;
                                }
                            }
                        }
                    }
                    if (player[target].Camp == 'A.A.U.F') {
                        for (i = 0; i < Damage.length; i++) {
                            Damage[i].Damage = Math.round(Damage[i].Damage * (1 - (player[target].Defense / (player[target].Defense + 150))));
                            player[target].HP -= Damage[i].Damage;
                        }
                    }
                    if (player[target].Camp == 'G.U.') {
                        for (i = 0; i < Damage.length; i++)player[target].HP -= Damage[i].Damage;
                    }
                    rply.text = player[target].Name + 'HP' + player[target].HP + '/' + player[target].MHP +'\n(';
                    for (i = 0; i < Damage.length; i++) {       
                        if (Damage[i].Damage == 0) rply.text += Damage[i].status;
                        if (Damage[i].Damage > 0) rply.text += '-' + Damage[i].Damage;
                        if (Damage[i].status == 'Critical') rply.text += '[' + Damage[i].status + ']';
                        if (i != Damage.length - 1) rply.text += ',';
                    }
                    rply.text += ')\n';
                    player[Designation].Action++;
                    if (player[Designation].Action == player[Designation].MaxAction) {
                        player[Designation].Action = 0;
                        player[Designation].Round++;
                    }
                    Designation = 9999;
                }
            }
        }
        if (trigger.match(/^移動$/) != null && id == player[Designation].ID && mainMsg[1] != null ) {
            let xxyy = mainMsg[1].split(','); //定義輸入字串
            if (isNaN(xxyy[0]) == 0 && isNaN(xxyy[1]) == 0) {
                var temp = 0;
                temp = Math.pow(Math.pow(Math.floor(xxyy[0]) - player[Designation].Position.x, 2) + Math.pow(Math.floor(xxyy[1]) - player[Designation].Position.y, 2), 0.5);
                if (temp > player[Designation].MovingDistance) {

                    rply.text = '距離太遠，無法移動';
                    return rply;
                }
                else {
                    if (xxyy[0] >= 1 && xxyy[0] <= 25 && xxyy[1] >= 1 && xxyy[1] <= 25) {

                        rply.text = '已移動到 座標' + xxyy[0] + ',' + xxyy[1] +'\n';
                        player[Designation].Position.x = xxyy[0] ;
                        player[Designation].Position.y = xxyy[1];
                        player[Designation].Action++;
                        if (player[Designation].Action == player[Designation].MaxAction) {
                            player[Designation].Action = 0;
                            player[Designation].Round++;
                        }
                        Designation = 9999;
                    }
                    else {
                        rply.text = '位置錯誤，無法移動';
                        return rply;
                    }
                }
            }
            else {
                rply.text = '格式錯誤';
                return rply;
            }
        }
        if (trigger.match(/^跳過$/) != null) {
            player[Designation].Round++;
            player[Designation].Action = 0;
            Designation = 9999;
           
        }
        if (trigger.match(/^重置$/) != null) {
            Reset();
            rply.text = '重置';
            return rply;
        }
        if (Designation == 9999) {
            for (var fd = 0; fd < player.length; fd++) {
                if (player[fd].participate == 1 && player[fd].Alive == 1 && player[fd].HP <= 0) {
                    player[fd].Alive = 0;
                    rply.text += player[fd].Name + '撤退\n';
                    var count = 0;
                    for (var i = 0; i < player.length; i++) {
                        if (player[i].participate == 1 && player[i].Alive == 1) count++;
                    }
                    if (count == 1) {
                        for (var i = 0; i < player.length; i++) {
                            if (player[i].participate == 1 && player[i].Alive == 1) {
                                rply.text += player[i].Name + '取得勝利';
                                return rply;
                                Reset();
                            }
                        }
                    }
                }
            }
            for (var turn = 150; turn >= 0; turn--) {
                var AddRound = 0;
                    for (var fd = 0; fd < player.length; fd++) {
                        if (player[fd].Round == BattleRound && player[fd].participate == 1 && player[fd].Alive == 1) {
                            AddRound++;
                            if (player[fd].Reaction == turn) {

                                Designation = fd;
                                rply.text += '[回合' + BattleRound + ']\n' + player[Designation].Name + ' 的回合第' + (player[Designation].Action + 1) + '次行動\n';
                                for (var i = 0; i < player.length; i++) {
                                    if (player[i].participate == 1 && player[i].Alive == 1) {
                                        rply.text +='------------------------------\n'+ player[i].Name + ' HP:' + player[i].HP + '/' + player[i].MHP + ' CE:' + player[i].CE + '/' + player[i].MCE +
                                            ' x:' + player[i].Position.x + ' y:' + player[i].Position.y +'\n';
                                    }
                                }
                                rply.text += '------------------------------\n移動 x,y\n';
                                if (player[Designation].Weaponry.main.Type == '近距離武器' || player[Designation].Weaponry.main.Type == '複合武器' || player[Designation].Weaponry.secondary.Type == '近距離武器')
                                    rply.text += '近戰攻擊 目標';
                                return rply;
                            }
                        }
                    }
                if (AddRound == 0) BattleRound++;
                }
                
        }
       
    }
}
module.exports = {
	battles:battles,
    Reset: Reset
};


