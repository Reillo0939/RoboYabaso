var Character = require('./Character.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

function weapon_make(id,name,species,Wname) {
var WMK;
  for(var i=0;i<ox.oL();i++){
	if(ox.oC(i,0)==id){
		if(ox.oC(i,19)!=0){
			rply.text='['+name+']'+'你已有武器';
			return rply;
			}
			
			
			if(species==undefined && Wname==undefined){
				rply.text='缺少 武器種類 武器名稱'+
			'\n種類有'+
			'\n手槍,\n重型手槍,\n衝鋒槍,\n突擊步槍,\n射手步槍,\n狙擊槍,\n大口徑狙擊槍,\n火炮,\n短近距離武器,\n中近距離武器,\n長近距離武器,\n能量放出槍';
			return rply;
			}
			
			if(Wname==null){
			rply.text='['+name+']'+'武器沒有名稱';
			return rply;
			}
			if(Wname==undefined){
			rply.text='['+name+']'+'武器沒有名稱';
			return rply;
			}
			
			
			
			WMK='';
		if(species=='手槍'){
			WMK='1,10,15,3,3,'+Wname+',50';
			ox.WM(i,WMK);
			rply.text='['+name+']'+'已製作完成';
			return rply;
		}
		if(species=='重型手槍'){
			WMK='2,20,7,1,4,'+Wname+',70';
			ox.WM(i,WMK);
			rply.text='['+name+']'+'已製作完成';
			return rply;
		}
		if(species=='衝鋒槍'){
			WMK='3,8,30,10,4,'+Wname+',20';
			ox.WM(i,WMK);
			rply.text='['+name+']'+'已製作完成';
			return rply;
		}
		if(species=='突擊步槍'){
			WMK='4,16,30,5,5,'+Wname+',40';
			ox.WM(i,WMK);
			rply.text='['+name+']'+'已製作完成';
			return rply;
		}
		if(species=='射手步槍'){
			WMK='5,12,30,3,8,'+Wname+',70';
			ox.WM(i,WMK);
			rply.text='['+name+']'+'已製作完成';
			return rply;
		}
		if(species=='狙擊槍'){
			WMK='6,35,10,1,10,'+Wname+',70';
			ox.WM(i,WMK);
			rply.text='['+name+']'+'已製作完成';
			return rply;
		}
		if(species=='大口徑狙擊槍'){
			WMK='7,50,5,1,13,'+Wname+',70';
			ox.WM(i,WMK);
			rply.text='['+name+']'+'已製作完成';
			return rply;
		}
		if(species=='火炮'){
			WMK='8,100,1,1,20,'+Wname+',50';
			ox.WM(i,WMK);
			rply.text='['+name+']'+'已製作完成';
			return rply;
		}
		if(species=='短近距離武器'){
			WMK='9,20,0,1,0.1,'+Wname+',100';
			ox.WM(i,WMK);
			rply.text='['+name+']'+'已製作完成';
			return rply;
		}
		if(species=='中近距離武器'){
			WMK='10,30,0,1,0.3,'+Wname+',85';
			ox.WM(i,WMK);
			rply.text='['+name+']'+'已製作完成';
			return rply;
			}
		if(species=='長近距離武器'){
			WMK='11,40,0,1,0.5,'+Wname+',70';
			ox.WM(i,WMK);
			rply.text='['+name+']'+'已製作完成';
			return rply;
		}
		if(species=='能量放出槍'){
			WMK='12,20,0,1,10,'+Wname+',100';
			ox.WM(i,WMK);
			rply.text='['+name+']'+'已製作完成';
			return rply;
		}
		rply.text='['+name+']'+'種類錯誤\n種類有'+
			'\n手槍,\n重型手槍,\n衝鋒槍,\n突擊步槍,\n射手步槍,\n狙擊槍,\n大口徑狙擊槍,\n火炮,\n短近距離武器,\n中近距離武器,\n長近距離武器,\n能量放出槍';
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

function weapon_view(id,name) {
var WMK;
    for (var i = 0; i < Character.player.length;i++){
        if (Character.player[i].ID==id){
            rply.text = '[' + name + ']';
            rply.text += '\n武器名稱：' + Character.player[i].Weaponry.Name;
            rply.text += '\n武器種類：' + Character.player[i].Weaponry.Type;
            rply.text += '\n基礎傷害：' + Character.player[i].Weaponry.Damage;
            rply.text += '\n子彈數：' + Character.player[i].Weaponry.MBullet+
                '\n連發數：' + Character.player[i].Weaponry.Burst;
            rply.text += '\n射程：' + Character.player[i].Weaponry.Range+
                '\n精準度：' + Character.player[i].Weaponry.Precision
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


