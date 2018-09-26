var Character = require('./Character.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

function weapon_make(id, name, main_or_secondary, Weaponry_Name, Weaponry_Type, Weaponry_mode, Weaponry_complex) {
    rply.text = '';
    console.log(main_or_secondary);
    console.log(Weaponry_Name);
    console.log(Weaponry_Type);
    console.log(Weaponry_mode);
    console.log(Weaponry_complex);
    var player = Character.get_player_data();
    for (var i = 0; i < player.length; i++) {
        if (player[i].ID == id) {
            if (player[i].Weaponry == undefined) {
                player[i].Weaponry = {};
                player[i].Weaponry.main = {};
                player[i].Weaponry.secondary = {};
            }
            if (main_or_secondary != '主武器' || main_or_secondary != '副武器') {
                rply.text = '[' + name + ']缺少主/副武器';
                return rply;
            }
            if (Weaponry_Name == undefined) {
                rply.text = '[' + name + ']缺少武器名稱';
                return rply;
            }
            if (main_or_secondary = '主武器') {
                if (Weaponry_Type != '槍械' || Weaponry_Type != '近距離武器' || Weaponry_Type != '複合武器') {
                    rply.text = '[' + name + ']缺少武器類型 武器類型有\n槍械, 近距離武器, 複合武器';
                    return rply;
                }
                if (Weaponry_Type = '槍械') {
                    if (Weaponry_mode != '手槍' || Weaponry_mode != '步槍' || Weaponry_mode != '狙擊槍' || Weaponry_mode!='能量放出槍') {
                        rply.text = '[' + name + ']缺少武器模組 武器模組有\n手槍, 步槍, 狙擊槍, 能量放出槍';
                        return rply;
                    }
                    player[i].Weaponry.main.Type = '槍械';
                    player[i].Weaponry.main.Name = Weaponry_Name;
                    if (Weaponry_mode == '手槍') {
                        player[i].Weaponry.main.mode = '手槍';
                        player[i].Weaponry.main.Damage = 20;
                        player[i].Weaponry.main.MBullet = 20;
                        player[i].Weaponry.main.Burst = 4;
                        player[i].Weaponry.main.Range = 3;
                        player[i].Weaponry.main.Precision=50;
                    }
                    if (Weaponry_mode == '步槍') {
                        player[i].Weaponry.main.mode = '步槍';
                        player[i].Weaponry.main.Damage = 12;
                        player[i].Weaponry.main.MBullet = 30;
                        player[i].Weaponry.main.Burst = 3;
                        player[i].Weaponry.main.Range = 5;
                        player[i].Weaponry.main.Precision = 55;
                    }
                    if (Weaponry_mode == '狙擊槍') {
                        player[i].Weaponry.main.mode = '狙擊槍';
                        player[i].Weaponry.main.Damage = 50;
                        player[i].Weaponry.main.MBullet = 5;
                        player[i].Weaponry.main.Burst = 1;
                        player[i].Weaponry.main.Range = 12;
                        player[i].Weaponry.main.Precision = 50;
                    }
                    if (Weaponry_mode == '能量放出槍') {
                        player[i].Weaponry.main.mode = '能量放出槍';
                        player[i].Weaponry.main.Damage = 10;
                        player[i].Weaponry.main.MBullet = 1;
                        player[i].Weaponry.main.Burst = 1;
                        player[i].Weaponry.main.Range = 7;
                        player[i].Weaponry.main.Precision = 200;
                    }
                    rply.text = '[' + name + ']' +
                        '\n武器名稱: ' + player[i].Weaponry.main.Name +
                        '\n武器種類: ' + player[i].Weaponry.main.Type +
                        '\n武器模組: ' + player[i].Weaponry.main.mode +
                        '\n基礎傷害: ' + player[i].Weaponry.main.Damage +
                        '\n子彈數: ' + player[i].Weaponry.main.MBullet +
                        '\n最大連發數: ' + player[i].Weaponry.main.Burst +
                        '\n標準射程: ' + player[i].Weaponry.main.Range +
                        '\n標準精準度: ' + player[i].Weaponry.main.Precision;
                }

                if (Weaponry_Type = '近距離武器') {
                    if (Weaponry_mode != '拳' || Weaponry_mode != '刀' || Weaponry_mode != '長槍' || Weaponry_mode != '盾') {
                        rply.text = '[' + name + ']缺少武器模組 武器模組有\n拳, 刀, 槍, 盾';
                        return rply;
                    }
                    player[i].Weaponry.main.Type = '近距離武器';
                    player[i].Weaponry.main.Name = Weaponry_Name;
                    if (Weaponry_mode == '拳') {
                        player[i].Weaponry.main.mode = '拳';
                        player[i].Weaponry.main.Damage = 5;
                        player[i].Weaponry.main.max_combo = 6;
                    }
                    if (Weaponry_mode == '刀') {
                        player[i].Weaponry.main.mode = '刀';
                        player[i].Weaponry.main.Damage = 20;
                        player[i].Weaponry.main.max_combo = 2;
                    }
                    if (Weaponry_mode == '長槍') {
                        player[i].Weaponry.main.mode = '長槍';
                        player[i].Weaponry.main.Damage = 30 ;
                        player[i].Weaponry.main.max_combo = 1;
                    }
                    if (Weaponry_mode == '盾') {
                        player[i].Weaponry.main.mode = '盾';
                        player[i].Weaponry.main.Damage = 5;
                        player[i].Weaponry.main.max_combo = 1;
                        player[i].Weaponry.main.Defense = 50;
                    }
                    rply.text = '[' + name + ']' +
                        '\n武器名稱: ' + player[i].Weaponry.main.Name +
                        '\n武器種類: ' + player[i].Weaponry.main.Type +
                        '\n武器模組: ' + player[i].Weaponry.main.mode +
                        '\n基礎傷害: ' + player[i].Weaponry.main.Damage +
                        '\n連擊數: ' + player[i].Weaponry.main.max_combo;
                    if (player[i].Weaponry.main.mode == '盾') rply.text += '\n格擋率: ' + player[i].Weaponry.main.Defense;
                }

                if (Weaponry_Type = '複合武器') {
                    if (Weaponry_mode != '拳' || Weaponry_mode != '刀' || Weaponry_mode != '長槍' || Weaponry_mode != '盾') {
                        rply.text = '[' + name + ']缺少近距離模組 近距離模組有\n拳, 刀, 槍, 盾';
                        return rply;
                    }
                    if ( Weaponry_complex != '手槍' || Weaponry_complex != '步槍' || Weaponry_complex != '狙擊槍' || Weaponry_complex != '能量放出槍') {
                        rply.text = '[' + name + ']缺少槍械模組 槍械模組有\n手槍, 步槍, 狙擊槍, 能量放出槍';
                        return rply;
                    }
                    player[i].Weaponry.main.Type = '複合武器';
                    player[i].Weaponry.main.Name = Weaponry_Name;
                    if (Weaponry_mode == '拳') {
                        player[i].Weaponry.main.Fighting_mode = '拳';
                        player[i].Weaponry.main.Fighting_Damage = 5;
                        player[i].Weaponry.main.Fighting_max_combo = 3;
                    }
                    if (Weaponry_mode == '刀') {
                        player[i].Weaponry.main.Fighting_mode = '刀';
                        player[i].Weaponry.main.Fighting_Damage = 20;
                        player[i].Weaponry.main.Fighting_max_combo = 1;
                    }
                    if (Weaponry_mode == '長槍') {
                        player[i].Weaponry.main.Fighting_mode = '長槍';
                        player[i].Weaponry.main.Fighting_Damage = 30;
                        player[i].Weaponry.main.Fighting_max_combo = 1;
                    }
                    if (Weaponry_mode == '盾') {
                        player[i].Weaponry.main.Fighting_mode = '盾';
                        player[i].Weaponry.main.Fighting_Damage = 5;
                        player[i].Weaponry.main.Fighting_max_combo = 1;
                        player[i].Weaponry.main.Fighting_Defense = 30;
                    }

                    if (Weaponry_complex == '手槍') {
                        player[i].Weaponry.main.Fire_mode = '手槍';
                        player[i].Weaponry.main.Fire_Damage = 20;
                        player[i].Weaponry.main.Fire_MBullet = 10;
                        player[i].Weaponry.main.Fire_Burst = 4;
                        player[i].Weaponry.main.Fire_Range = 3;
                        player[i].Weaponry.main.Fire_Precision = 40;
                    }
                    if (Weaponry_complex == '步槍') {
                        player[i].Weaponry.main.Fire_mode = '步槍';
                        player[i].Weaponry.main.Fire_Damage = 12;
                        player[i].Weaponry.main.Fire_MBullet = 15;
                        player[i].Weaponry.main.Fire_Burst = 3;
                        player[i].Weaponry.main.Fire_Range = 5;
                        player[i].Weaponry.main.Fire_Precision = 45;
                    }
                    if (Weaponry_complex == '狙擊槍') {
                        player[i].Weaponry.main.Fire_mode = '狙擊槍';
                        player[i].Weaponry.main.Fire_Damage = 50;
                        player[i].Weaponry.main.Fire_MBullet = 1;
                        player[i].Weaponry.main.Fire_Burst = 1;
                        player[i].Weaponry.main.Fire_Range = 12;
                        player[i].Weaponry.main.Fire_Precision = 30;
                    }
                    if (Weaponry_complex == '能量放出槍') {
                        player[i].Weaponry.main.Fire_mode = '能量放出槍';
                        player[i].Weaponry.main.Fire_Damage = 10;
                        player[i].Weaponry.main.Fire_MBullet = 1;
                        player[i].Weaponry.main.Fire_Burst = 1;
                        player[i].Weaponry.main.Fire_Range = 4;
                        player[i].Weaponry.main.Fire_Precision = 200;
                    }
                    rply.text = '[' + name + ']' +
                        '\n武器名稱: ' + player[i].Weaponry.main.Name +
                        '\n武器種類: ' + player[i].Weaponry.main.Type +
                        '\n近距離模組: ' + player[i].Weaponry.main.Fighting_mode +
                        '\n近距離傷害: ' + player[i].Weaponry.main.Fighting_Damage +
                        '\n近距離連擊數: ' + player[i].Weaponry.main.Fighting_max_combo;
                    if (player[i].Weaponry.main.mode == '盾') rply.text += '\n格擋率: ' + player[i].Weaponry.main.Fighting_Defense;
                    rply.text +=
                        '\n槍械模組: ' + player[i].Weaponry.main.Fire_mode +
                        '\n槍械傷害: ' + player[i].Weaponry.main.Fire_Damage +
                        '\n槍械子彈數: ' + player[i].Weaponry.main.Fire_MBullet +
                        '\n槍械最大連發數: ' + player[i].Weaponry.main.Fire_Burst +
                        '\n槍械標準射程: ' + player[i].Weaponry.main.Fire_Range +
                        '\n槍械標準精準度: ' + player[i].Weaponry.main.Fire_Precision;
                }
            }
            if (main_or_secondary = '副武器') {
                if (Weaponry_Type != '槍械' || Weaponry_Type != '近距離武器') {
                    rply.text = '[' + name + ']缺少武器類型 武器類型有\n槍械, 近距離武器';
                    return rply;
                }
                if (Weaponry_Type = '槍械') {
                    if (Weaponry_mode != '手槍' || Weaponry_mode != '能量放出槍') {
                        rply.text = '[' + name + ']缺少武器模組 武器模組有\n手槍, 能量放出槍';
                        return rply;
                    }
                    player[i].Weaponry.secondary.Type = '槍械';
                    player[i].Weaponry.secondary.Name = Weaponry_Name;
                    if (Weaponry_mode == '手槍') {
                        player[i].Weaponry.secondary.mode = '手槍';
                        player[i].Weaponry.secondary.Damage = 20;
                        player[i].Weaponry.secondary.MBullet = 20;
                        player[i].Weaponry.secondary.Burst = 4;
                        player[i].Weaponry.secondary.Range = 3;
                        player[i].Weaponry.secondary.Precision = 50;
                    }
                    if (Weaponry_mode == '能量放出槍') {
                        player[i].Weaponry.secondary.mode = '能量放出槍';
                        player[i].Weaponry.secondary.Damage = 10;
                        player[i].Weaponry.secondary.MBullet = 1;
                        player[i].Weaponry.secondary.Burst = 1;
                        player[i].Weaponry.secondary.Range = 7;
                        player[i].Weaponry.secondary.Precision = 200;
                    }
                    rply.text = '[' + name + ']' +
                        '\n武器名稱: ' + player[i].Weaponry.secondary.Name +
                        '\n武器種類: ' + player[i].Weaponry.secondary.Type +
                        '\n武器模組: ' + player[i].Weaponry.secondary.mode +
                        '\n基礎傷害: ' + player[i].Weaponry.secondary.Damage +
                        '\n子彈數: ' + player[i].Weaponry.secondary.MBullet +
                        '\n最大連發數: ' + player[i].Weaponry.secondary.Burst +
                        '\n標準射程: ' + player[i].Weaponry.secondary.Range +
                        '\n標準精準度: ' + player[i].Weaponry.secondary.Precision;
                }

                if (Weaponry_Type = '近距離武器') {
                    if (Weaponry_mode != '拳' || Weaponry_mode != '刀' || Weaponry_mode != '長槍' || Weaponry_mode != '盾') {
                        rply.text = '[' + name + ']缺少武器模組 武器模組有\n拳, 刀, 槍, 盾';
                        return rply;
                    }
                    player[i].Weaponry.secondary.Type = '近距離武器';
                    player[i].Weaponry.secondary.Name = Weaponry_Name;
                    if (Weaponry_mode == '拳') {
                        player[i].Weaponry.secondary.mode = '拳';
                        player[i].Weaponry.secondary.Damage = 5;
                        player[i].Weaponry.secondary.max_combo = 6;
                    }
                    if (Weaponry_mode == '刀') {
                        player[i].Weaponry.secondary.mode = '刀';
                        player[i].Weaponry.secondary.Damage = 20;
                        player[i].Weaponry.secondary.max_combo = 2;
                    }
                    if (Weaponry_mode == '長槍') {
                        player[i].Weaponry.secondary.mode = '長槍';
                        player[i].Weaponry.secondary.Damage = 30;
                        player[i].Weaponry.secondary.max_combo = 1;
                    }
                    if (Weaponry_mode == '盾') {
                        player[i].Weaponry.secondary.mode = '盾';
                        player[i].Weaponry.secondary.Damage = 5;
                        player[i].Weaponry.secondary.max_combo = 1;
                        player[i].Weaponry.secondary.Defense = 50;
                    }
                    rply.text = '[' + name + ']' +
                        '\n武器名稱: ' + player[i].Weaponry.secondary.Name +
                        '\n武器種類: ' + player[i].Weaponry.secondary.Type +
                        '\n武器模組: ' + player[i].Weaponry.secondary.mode +
                        '\n基礎傷害: ' + player[i].Weaponry.secondary.Damage +
                        '\n連擊數: ' + player[i].Weaponry.secondary.max_combo;
                    if (player[i].Weaponry.secondary.mode == '盾') rply.text +='\n格擋率: ' + player[i].Weaponry.secondary.Defense;
                }
                
                return rply;
            }
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
            rply.text += '\n武器名稱:' + player[i].Weaponry.Name;
            rply.text += '\n武器種類:' + player[i].Weaponry.Type;
            rply.text += '\n基礎傷害:' + player[i].Weaponry.Damage;
            rply.text += '\n子彈數:' + player[i].Weaponry.MBullet+
                '\n連發數:' + player[i].Weaponry.Burst;
            rply.text += '\n射程:' + player[i].Weaponry.Range+
                '\n精準度:' + player[i].Weaponry.Precision
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


