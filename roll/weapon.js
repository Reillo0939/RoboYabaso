var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var ox = require('./Character.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

function weapon_make(id,name,species,Wname) {
var WMK;
  for(var i=0;i<ox.oL();i++){
	if(ox.oC(i,0)==id){
		if(ox.oC(i,19)!=0){
			rply.text='['+name+']'+'你已有武器';
			return rply;
			}
		if(Wname=='test'){
			rply.text=species;
			return rply;
		}
			
			
			if(species==null && Wname==null){
				rply.text='缺少 武器種類 武器名稱'+
			'\n種類有'+
			'\n手槍,\n重型手槍,\n衝鋒槍,\n突擊步槍,\n射手步槍,\n狙擊槍,\n大口徑狙擊槍,\n火炮,\n短近距離武器,\n中近距離武器,\n長近距離武器,\n能量放出槍';
			}
			
			if(species!='手槍' ||species!='重型手槍' ||species!='衝鋒槍' ||species!='突擊步槍' ||species!='射手步槍' ||species!='狙擊槍' ||species!='大口徑狙擊槍' ||species!='火炮' ||species!='短近距離武器' ||species!='中近距離武器' ||species!='長近距離武器' ||species!='能量放出槍'){
			rply.text='['+name+']'+'種類錯誤\n種類有'+
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
  for(var i=0;i<ox.oL();i++){
	if(ox.oC(i,0)==id){
		if(ox.oC(i,19)==0){
			rply.text='['+name+']'+'你沒有武器';
			return rply;
			}
			WMK=ox.oC(i,19);
			var WV = WMK.split(','); //定義輸入字串
			var ww=1,yy=0;
			yy=15-WV[0]*5;
			if(yy<=0)yy=0;
			if(WV[0]==9)yy=10;
			if(WV[0]==11)yy=-10;
			ww=Number(Number(WV[1])*0.5+Number(WV[2])*0.2+Number(WV[3])+Number(WV[4])*0.5+Number(WV[6])*0.1)-yy;
			rply.text='';
			rply.text='['+name+']';
			rply.text+='\n武器名稱：'+WV[5];
			if(WV[0]==1)rply.text+='\n武器種類：手槍';
			if(WV[0]==2)rply.text+='\n武器種類：重型手槍';
			if(WV[0]==3)rply.text+='\n武器種類：衝鋒槍';
			if(WV[0]==4)rply.text+='\n武器種類：突擊步槍';
			if(WV[0]==5)rply.text+='\n武器種類：射手步槍';
			if(WV[0]==6)rply.text+='\n武器種類：狙擊槍';
			if(WV[0]==7)rply.text+='\n武器種類：大口徑狙擊槍';
			if(WV[0]==8)rply.text+='\n武器種類：火炮';
			if(WV[0]==9)rply.text+='\n武器種類：短近距離武器';
			if(WV[0]==10)rply.text+='\n武器種類：中近距離武器';
			if(WV[0]==11)rply.text+='\n武器種類：長近距離武器';
			if(WV[0]==12)rply.text+='\n武器種類：能量放出槍';
			rply.text+= '\n基礎傷害：'+WV[1];
			if(WV[0]<=8)rply.text+='\n子彈數：'+WV[2]+
			'\n連發數：'+WV[3];
			rply.text+=	'\n射程：'+WV[4]+
						'\n精準度：'+WV[6]+
						'\n武器重量：'+ww
						;
			if(Number(ox.oC(i,7))<ww)rply.text+='\n注意：武器過重'
			return rply;

  }
	}
}

module.exports = {
	weapon_make:weapon_make,
	weapon_break:weapon_break,
	weapon_view:weapon_view
};


