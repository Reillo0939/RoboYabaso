var Character = require('./Character.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

function weapon_make(id,name,species,Wname) {
    var player = Character.get_player_data();
    for (var i = 0; i < player.length; i++) {
        if (player[i].ID == id) {
            console.log(player[i].Weaponry);
            if (player[i].Weaponry == undefined) {
                player[i].Weaponry = {};
                player[i].Weaponry.main = {};
                player[i].Weaponry.secondary = {};
            }
            rply.text = '[' + name + ']';
            rply.text += '\n武器名稱：' + player[i].Weaponry.Name;
            rply.text += '\n武器種類：' + player[i].Weaponry.Type;
            rply.text += '\n基礎傷害：' + player[i].Weaponry.Damage;
            rply.text += '\n子彈數：' + player[i].Weaponry.MBullet +
                '\n連發數：' + player[i].Weaponry.Burst;
            rply.text += '\n射程：' + player[i].Weaponry.Range +
                '\n精準度：' + player[i].Weaponry.Precision;
            return rply;
        }
    }

}
function weapon_break(id,name) {
var WMK;
  for(var i=0;i<ox.oL();i++){
	if(ox.oC(i,0)==id){
		if(ox.oC(i,19)==0){
			rply.text='['+name+']'+'你沒有武器';
			return rply;
			}
			WMK='0';
			ox.WM(i,WMK);
			rply.text='['+name+']'+'已破壞完成';
			return rply;
		}

  }
	}

function weapon_view(id, name) {
    var player = Character.get_player_data();
    for (var i = 0; i < player.length; i++){
        
        if (player[i].ID == id) {
            console.log(player[i].ID);
            rply.text = '[' + name + ']';
            rply.text += '\n武器名稱：' + player[i].Weaponry.Name;
            rply.text += '\n武器種類：' + player[i].Weaponry.Type;
            rply.text += '\n基礎傷害：' + player[i].Weaponry.Damage;
            rply.text += '\n子彈數：' + player[i].Weaponry.MBullet+
                '\n連發數：' + player[i].Weaponry.Burst;
            rply.text += '\n射程：' + player[i].Weaponry.Range+
                '\n精準度：' + player[i].Weaponry.Precision
						;
			return rply;

  }
	}
}

module.exports = {
	weapon_make:weapon_make,
	weapon_break:weapon_break,
	weapon_view:weapon_view
};


