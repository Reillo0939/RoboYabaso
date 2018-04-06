var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var ox = require('./Character.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

function weapon_make(id,name,species,Wname) {
var od=[];
var WMK;
  for(var i=0;i<ox.oL();i++){
	if(ox.oC(i,0)==id){
		if(ox.oC(i,18)!=0){
			rply.text=name+'你已有武器';
			return rply;
			}
			if(Wname==''){
			rply.text=name+'武器沒有名字';
			return rply;
			}
			WMK='';
		if(species=='手槍'){
			WMK='1,10,15,1,3,3,'+Wname;
			ox.WM(i,WMK);
			rply.text=name+'已製作完成';
			return rply;
		}
		if(species=='重型手槍'){
			WMK='2,15,7,1,1,4,'+Wname;
			ox.WM(i,WMK);
			rply.text=name+'已製作完成';
			return rply;
		}
		if(species=='衝鋒槍'){
			WMK='3,8,30,0.8,10,4,'+Wname;
			ox.WM(i,WMK);
			rply.text=name+'已製作完成';
			return rply;
		}
		if(species=='短步槍'){
			WMK='4,12,30,0.8,5,5,'+Wname;
			ox.WM(i,WMK);
			rply.text=name+'已製作完成';
			return rply;
		}
		if(species=='步槍'){
			WMK='5,15,30,1.5,3,8,'+Wname;
			ox.WM(i,WMK);
			rply.text=name+'已製作完成';
			return rply;
		}
		if(species=='狙擊槍'){
			WMK='6,20,10,2,1,10,'+Wname;
			ox.WM(i,WMK);
			rply.text=name+'已製作完成';
			return rply;
		}
		if(species=='大口徑狙擊槍'){
			WMK='7,30,5,2,1,13,'+Wname;
			ox.WM(i,WMK);
			rply.text=name+'已製作完成';
			return rply;
		}
		if(species=='火炮'){
			WMK='8,100,1,1,1,20,'+Wname;
			ox.WM(i,WMK);
			rply.text=name+'已製作完成';
			return rply;
		}
		if(species=='短近距離武器'){
			WMK='9,20,1,1,1,1,'+Wname;
			ox.WM(i,WMK);
			rply.text=name+'已製作完成';
			return rply;
		}
		if(species=='中近距離武器'){
			WMK='10,30,1,1,1,1,'+Wname;
			ox.WM(i,WMK);
			rply.text=name+'已製作完成';
			return rply;
			}
		if(species=='長近距離武器'){
			WMK='11,40,1,1,1,1,'+Wname;
			ox.WM(i,WMK);
			rply.text=name+'已製作完成';
			return rply;
		}
		if(WMK==''){
			rply.text=name+'沒有該種類 有'+
			'\n手槍,重型手槍,衝鋒槍,短步槍,步槍,狙擊槍,\n大口徑狙擊槍,火炮,短近距離武器,中近距離武器,長近距離武器';
			return rply;
		}
  }
	}
}


module.exports = {
	weapon_make:weapon_make
};


