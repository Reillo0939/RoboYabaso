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
			if(Wname==null){
			rply.text='['+name+']'+'武器沒有名字';
			return rply;
			}
			if(Wname==undefined){
			rply.text='['+name+']'+'武器沒有名字';
			return rply;
			}
			WMK='';
		if(species=='手槍'){
			WMK='1,10,15,3,3,'+Wname+',50,10';
			ox.WM(i,WMK);
			rply.text='['+name+']'+'已製作完成';
			return rply;
		}
		if(species=='重型手槍'){
			WMK='2,20,7,1,4,'+Wname+',70,10';
			ox.WM(i,WMK);
			rply.text='['+name+']'+'已製作完成';
			return rply;
		}
		if(species=='衝鋒槍'){
			WMK='3,8,30,10,4,'+Wname+',20,10';
			ox.WM(i,WMK);
			rply.text='['+name+']'+'已製作完成';
			return rply;
		}
		if(species=='突擊步槍'){
			WMK='4,16,30,5,5,'+Wname+',40,10';
			ox.WM(i,WMK);
			rply.text='['+name+']'+'已製作完成';
			return rply;
		}
		if(species=='射手步槍'){
			WMK='5,12,30,3,8,'+Wname+',70,10';
			ox.WM(i,WMK);
			rply.text='['+name+']'+'已製作完成';
			return rply;
		}
		if(species=='狙擊槍'){
			WMK='6,35,10,1,10,'+Wname+',70,10';
			ox.WM(i,WMK);
			rply.text='['+name+']'+'已製作完成';
			return rply;
		}
		if(species=='大口徑狙擊槍'){
			WMK='7,50,5,1,13,'+Wname+',70,10';
			ox.WM(i,WMK);
			rply.text='['+name+']'+'已製作完成';
			return rply;
		}
		if(species=='火炮'){
			WMK='8,100,1,1,20,'+Wname+',50,10';
			ox.WM(i,WMK);
			rply.text='['+name+']'+'已製作完成';
			return rply;
		}
		if(species=='短近距離武器'){
			WMK='9,20,1,1,0.2,'+Wname+',100,10';
			ox.WM(i,WMK);
			rply.text='['+name+']'+'已製作完成';
			return rply;
		}
		if(species=='中近距離武器'){
			WMK='10,30,1,1,0.5,'+Wname+',85,10';
			ox.WM(i,WMK);
			rply.text='['+name+']'+'已製作完成';
			return rply;
			}
		if(species=='長近距離武器'){
			WMK='11,40,1,1,0.8,'+Wname+',70,10';
			ox.WM(i,WMK);
			rply.text='['+name+']'+'已製作完成';
			return rply;
		}
		if(WMK==''){
			rply.text='['+name+']'+'沒有該種類 有'+
			'\n手槍,\n重型手槍,\n衝鋒槍,\n突擊步槍,\n射手步槍,\n狙擊槍,\n大口徑狙擊槍,\n火炮,\n短近距離武器,\n中近距離武器,\n長近距離武器';
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
			let WV = WMK.split(','); //定義輸入字串
			var ww=1,yy=0;
			yy=15-WV[0]*5;
			if(yy<=0)yy=0;
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
			rply.text+= '\n基礎傷害：'+WV[1]+
						'\n子彈數：'+WV[2]+
						'\n連發數：'+WV[3]+
						'\n射程：'+WV[4]+
						'\n精準度：'+WV[6]+
						'\n武器重量：'+ww+
						'\n可改造次數：'+WV[7]
						;
			if(Number(ox.oC(i,7))<ww)rply.text+='\n注意：武器過重'
			return rply;

  }
	}
}
function weapon_retrofit(id,name,species,amount) {
var WMK;
  for(var i=0;i<ox.oL();i++){
	if(ox.oC(i,0)==id){
		if(ox.oC(i,19)==0){
			rply.text='['+name+']'+'你沒有武器';
			return rply;
			}
			WMK=ox.oC(i,19);
			let WV = WMK.split(','); //定義輸入字串
			rply.text='';
			rply.text='['+name+']';
			rply.text+='\n武器名稱：'+WV[5];
			if(amount==null)amount=0;
			amount=Number(amount);
			if(amount==null)amount=0;
			if(amount==NaN)amount=0;
			WV[1]=Number(WV[1]);
			WV[2]=Number(WV[2]);
			WV[3]=Number(WV[3]);
			WV[4]=Number(WV[4]);
			WV[6]=Number(WV[6]);
			if(species!='基礎傷害' && species!='子彈數'&&  species!='連發數' && species!='射程'&& species!='精準度'){
				rply.text='';
			rply.text='['+name+']';
			rply.text+=' 沒有該種改造類型';
			return rply;
			}
			if(WV[7]<amount){
			rply.text='';
			rply.text='['+name+']';
			rply.text+=' 改造次數不夠';
			return rply;
			}
			
			if(WV[0]==1){
				rply.text+='\n武器種類：手槍';
				if(species=='基礎傷害'){WV[1]+=(0.5*amount);WV[7]-=Math.abs(1*amount);}
				if(species=='子彈數'){WV[2]+=(1*amount);WV[7]-=Math.abs(1*amount);}
				if(species=='連發數'){WV[3]+=(0.5*amount);WV[7]-=Math.abs(1*amount);}
				if(species=='射程'){WV[4]+=(0.5*amount);WV[7]-=Math.abs(1*amount);}
				if(species=='精準度'){WV[6]+=(0.5*amount);WV[7]-=Math.abs(1*amount);}
			}
			if(WV[0]==2){
				rply.text+='\n武器種類：重型手槍';
				if(species=='基礎傷害'){WV[1]+=(0.5*amount);WV[7]-=Math.abs(1*amount);}
				if(species=='子彈數'){WV[2]+=(1*amount);WV[7]-=Math.abs(1*amount);}
				if(species=='連發數'){WV[3]+=(0.5*amount);WV[7]-=Math.abs(1*amount);}
				if(species=='射程'){WV[4]+=(0.5*amount);WV[7]-=Math.abs(1*amount);}
				if(species=='精準度'){WV[6]+=(0.5*amount);WV[7]-=Math.abs(1*amount);}
			}
			if(WV[0]==3){
				rply.text+='\n武器種類：衝鋒槍';
				if(species=='基礎傷害'){WV[1]+=(0.5*amount);WV[7]-=Math.abs(1*amount);}
				if(species=='子彈數'){WV[2]+=(1*amount);WV[7]-=Math.abs(1*amount);}
				if(species=='連發數'){WV[3]+=(0.5*amount);WV[7]-=Math.abs(1*amount);}
				if(species=='射程'){WV[4]+=(0.5*amount);WV[7]-=Math.abs(1*amount);}
				if(species=='精準度'){WV[6]+=(0.5*amount);WV[7]-=Math.abs(1*amount);}
				}
				
			if(WV[0]==4){
				rply.text+='\n武器種類：突擊步槍';
				if(species=='基礎傷害'){WV[1]+=(0.5*amount);WV[7]-=Math.abs(1*amount);}
				if(species=='子彈數'){WV[2]+=(1*amount);WV[7]-=Math.abs(1*amount);}
				if(species=='連發數'){WV[3]+=(0.5*amount);WV[7]-=Math.abs(1*amount);}
				if(species=='射程'){WV[4]+=(0.5*amount);WV[7]-=Math.abs(1*amount);}
				if(species=='精準度'){WV[6]+=(0.5*amount);WV[7]-=Math.abs(1*amount);}
			}
			if(WV[0]==5){
				rply.text+='\n武器種類：射手步槍';
				if(species=='基礎傷害'){WV[1]+=(0.5*amount);WV[7]-=Math.abs(1*amount);}
				if(species=='子彈數'){WV[2]+=(1*amount);WV[7]-=Math.abs(1*amount);}
				if(species=='連發數'){WV[3]+=(0.5*amount);WV[7]-=Math.abs(1*amount);}
				if(species=='射程'){WV[4]+=(0.5*amount);WV[7]-=Math.abs(1*amount);}
				if(species=='精準度'){WV[6]+=(0.5*amount);WV[7]-=Math.abs(1*amount);}
			}
			if(WV[0]==6){
				rply.text+='\n武器種類：狙擊槍';
				if(species=='基礎傷害'){WV[1]+=(1*amount);WV[7]-=Math.abs(1*amount);}
				if(species=='子彈數'){WV[2]+=(1*amount);WV[7]-=Math.abs(1*amount);}
				if(species=='連發數'){rply.text='['+name+']' + + ' 無法改造的類型';return rply;}
				if(species=='射程'){WV[4]+=(0.5*amount);WV[7]-=Math.abs(1*amount);}
				if(species=='精準度'){WV[6]+=(0.5*amount);WV[7]-=Math.abs(1*amount);}
			}
			if(WV[0]==7){
				rply.text+='\n武器種類：大口徑狙擊槍';
				if(species=='基礎傷害'){WV[1]+=(1*amount);WV[7]-=Math.abs(1*amount);}
				if(species=='子彈數'){WV[2]+=(1*amount);WV[7]-=Math.abs(1*amount);}
				if(species=='連發數'){rply.text='['+name+']' + + ' 無法改造的類型';return rply;}
				if(species=='射程'){WV[4]+=(0.5*amount);WV[7]-=Math.abs(1*amount);}
				if(species=='精準度'){WV[6]+=(0.5*amount);WV[7]-=Math.abs(1*amount);}
			}
			if(WV[0]==8){
				rply.text+='\n武器種類：火炮';
				if(species=='基礎傷害'){WV[1]+=(5*amount);WV[7]-=Math.abs(1*amount);}
				if(species=='子彈數'){rply.text='['+name+']' + + ' 無法改造的類型';return rply;}
				if(species=='連發數'){rply.text='['+name+']' + + ' 無法改造的類型';return rply;}
				if(species=='射程'){WV[4]+=(0.5*amount);WV[7]-=Math.abs(1*amount);}
				if(species=='精準度'){WV[6]+=(0.5*amount);WV[7]-=Math.abs(1*amount);}
			}
			if(WV[0]==9){
				rply.text+='\n武器種類：短近距離武器';
				if(species=='基礎傷害'){WV[1]+=(1*amount);WV[7]-=Math.abs(1*amount);}
				if(species=='射程'){rply.text='['+name+']' + ' 無法改造的類型';return rply;}
				if(species=='連發數'){rply.text='['+name+']' + ' 無法改造的類型';return rply;}
				if(species=='子彈數'){rply.text='['+name+']' + ' 無法改造的類型';return rply;}
				if(species=='精準度'){rply.text='['+name+']' + ' 無法改造的類型';return rply;}
			}
			if(WV[0]==10){
				rply.text+='\n武器種類：中近距離武器';
				if(species=='基礎傷害'){WV[1]+=(1*amount);WV[7]-=Math.abs(1*amount);}
				if(species=='射程'){rply.text='['+name+']' + ' 無法改造的類型';return rply;}
				if(species=='連發數'){rply.text='['+name+']' + ' 無法改造的類型';return rply;}
				if(species=='子彈數'){rply.text='['+name+']' + ' 無法改造的類型';return rply;}
				if(species=='精準度'){WV[6]+=(0.5*amount);WV[7]-=Math.abs(1*amount);}
			}
			if(WV[0]==11){
				rply.text+='\n武器種類：長近距離武器';
				if(species=='基礎傷害'){WV[1]+=(1*amount);WV[7]-=Math.abs(1*amount);}
				if(species=='射程'){rply.text='['+name+']' + ' 無法改造的類型';return rply;}
				if(species=='連發數'){rply.text='['+name+']' + ' 無法改造的類型';return rply;}
				if(species=='子彈數'){rply.text='['+name+']' + ' 無法改造的類型';return rply;}
				if(species=='精準度'){WV[6]+=(0.5*amount);WV[7]-=Math.abs(1*amount);}
			}
			
			WMK=WV[0]+','+WV[1].toString() +','+WV[2].toString() +','+WV[3].toString()+','+WV[4].toString()+','+WV[5].toString()+','+WV[6].toString()+','+WV[7].toString();
			ox.WM(i,WMK);
			var ww=1,yy=0;
			yy=15-WV[0]*5;
			if(yy<=0)yy=0;
			ww=Number(Number(WV[1])*0.5+Number(WV[2])*0.2+Number(WV[3])+Number(WV[4])*0.5+Number(WV[6])*0.1)-yy;
			rply.text+= '\n基礎傷害：'+WV[1]+
						'\n子彈數：'+WV[2]+
						'\n連發數：'+WV[3]+
						'\n射程：'+WV[4]+
						'\n精準度：'+WV[6]+
						'\n武器重量：'+ww+
						'\n可改造次數：'+WV[7]
						;
			if(Number(ox.oC(i,7))<Number(ww))rply.text+='\n注意：武器過重';
			return rply;

  }
	}
}
module.exports = {
	weapon_make:weapon_make,
	weapon_break:weapon_break,
	weapon_view:weapon_view,
	weapon_retrofit:weapon_retrofit
};


