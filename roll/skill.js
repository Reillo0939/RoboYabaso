var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var ox = require('./Character.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

function skill_make(id,name,position,STR) {
  for(var i=0;i<ox.oL();i++){
	if(ox.oC(i,0)==id){
		if(ox.oC(i,3)=='A.A.U.F'){
			rply.text=name+' 此系統只開放給GU使用';
			return rply;
		}
		var AAA=ox.oC(i,21);
		console.log('1');
		console.log(AAA);
		var Askill = AAA.split('|'); //定義輸入字串
		console.log('2');
		var Par = STR.split(',');
		console.log('3');
	
		if(Number(position)>5 && Number(position)<1){
			rply.text=name+' 沒有這個技能格';
			return rply;
		}
		if(Askill[Number(position)-1]!=0){
			rply.text=name+' 技能格已有技能';
			return rply;
		}
		if(Par[0]=='攻擊'){
	if(STR.length!=7){
			rply.text=name+' 格式錯誤';
			return rply;
		}
		Askill[Number(position)-1]=Par[0];
			if(Par[1]=='無'){Askill[Number(position)-1]+=','+Par[1];}
			if(Par[1]=='火'){Askill[Number(position)-1]+=','+Par[1];}
			if(Par[1]=='水'){Askill[Number(position)-1]+=','+Par[1];}
			if(Par[1]=='風'){Askill[Number(position)-1]+=','+Par[1];}
			if(Par[1]=='土'){Askill[Number(position)-1]+=','+Par[1];}
			if(Par[1]!='無' && Par[1]!='火' && Par[1]!='水' && Par[1]!='風' && Par[1]!='土'){
				rply.text=name+' 沒有這個屬性';
			return rply;
			}
			
			Askill[Number(position)-1]+=','+Number(Par[2]);
			Askill[Number(position)-1]+=','+Number(Par[3]);
			Askill[Number(position)-1]+=','+Number(Par[4]);
			if(Par[5]==null){
				rply.text=name+' 技能沒有名字';
			return rply;
			}
			Askill[Number(position)-1]+=','+Par[5];
			Askill[Number(position)-1]+=','+Par[6];
			var SMK=Askill[0]+'|'+Askill[1]+'|'+Askill[2]+'|'+Askill[3]+'|'+Askill[4];
			ox.SM(i,SMK);
			rply.text=name+'已製作完成';
			return rply;
		}
		else{
			rply.text=name+' 沒有這個類型';
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
			rply.text=name+'你沒有武器';
			return rply;
			}
			WMK='0';
			ox.WM(i,WMK);
			rply.text=name+'已破壞完成';
			return rply;
		}

  }
	}

function weapon_view(id,name) {
var WMK;
  for(var i=0;i<ox.oL();i++){
	if(ox.oC(i,0)==id){
		if(ox.oC(i,19)==0){
			rply.text=name+'你沒有武器';
			return rply;
			}
			WMK=ox.oC(i,19);
			let WV = WMK.split(','); //定義輸入字串
			var ww=1;
			rply.text='';
			rply.text=name;
			rply.text+='\n武器名稱：'+WV[6];
			if(WV[0]==1){rply.text+='\n武器種類：手槍';ww=0.04;}
			if(WV[0]==2){rply.text+='\n武器種類：重型手槍';ww=0.1;}
			if(WV[0]==3){rply.text+='\n武器種類：衝鋒槍';ww=0.06;}
			if(WV[0]==4){rply.text+='\n武器種類：短步槍';ww=0.05;}
			if(WV[0]==5){rply.text+='\n武器種類：步槍';ww=0.05;}
			if(WV[0]==6){rply.text+='\n武器種類：狙擊槍';ww=0.13;}
			if(WV[0]==7){rply.text+='\n武器種類：大口徑狙擊槍';ww=0.22;}
			if(WV[0]==8){rply.text+='\n武器種類：火炮';ww=0.5;}
			if(WV[0]==9){rply.text+='\n武器種類：短近距離武器';ww=0.15;}
			if(WV[0]==10){rply.text+='\n武器種類：中近距離武器';ww=0.3;}
			if(WV[0]==11){rply.text+='\n武器種類：長近距離武器';ww=0.4;}
			rply.text+= '\n基礎傷害：'+WV[1]+
						'\n子彈數：'+WV[2]+
						'\n傷害倍率：'+WV[3]+
						'\n連發數：'+WV[4]+
						'\n射程：'+WV[5]+
						'\n武器重量：'+(WV[1]*WV[2]*ww)+
						'\n可改造次數：'+WV[8]
						;
			if(Number(ox.oC(i,7))<Number((WV[1]*WV[2]*ww)))rply.text+='\n注意：武器過重'
			return rply;

  }
	}
}
function weapon_retrofit(id,name,species,amount) {
var WMK;
  for(var i=0;i<ox.oL();i++){
	if(ox.oC(i,0)==id){
		if(ox.oC(i,19)==0){
			rply.text=name+'你沒有武器';
			return rply;
			}
			WMK=ox.oC(i,19);
			let WV = WMK.split(','); //定義輸入字串
			var ww=1;
			rply.text='';
			rply.text=name;
			rply.text+='\n武器名稱：'+WV[6];
			amount=Number(amount);
			WV[1]=Number(WV[1]);
			WV[2]=Number(WV[2]);
			WV[3]=Number(WV[3]);
			WV[4]=Number(WV[4]);
			WV[5]=Number(WV[5]);
			if(species!='基礎傷害' && species!='子彈數'&& species!='傷害倍率' && species!='連發數' && species!='射程'){
				rply.text='';
			rply.text=name;
			rply.text+=' 沒有該種改造類型';
			return rply;
			}
			if(WV[8]<amount){
			rply.text='';
			rply.text=name;
			rply.text+=' 改造次數不夠';
			return rply;
			}
			
			if(WV[0]==1){
				rply.text+='\n武器種類：手槍';
			ww=0.04;
				if(species=='基礎傷害'){WV[1]+=(1*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='子彈數'){WV[2]+=(1*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='傷害倍率'){WV[3]+=(0.15*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='連發數'){WV[4]+=(0.5*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='射程'){WV[5]+=(0.5*amount);WV[8]-=Math.abs(1*amount);}
			}
			if(WV[0]==2){
				rply.text+='\n武器種類：重型手槍';
				ww=0.1;
				if(species=='基礎傷害'){WV[1]+=(1.5*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='子彈數'){WV[2]+=(1*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='傷害倍率'){WV[3]+=(0.2*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='連發數'){WV[4]+=(0.5*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='射程'){WV[5]+=(0.5*amount);WV[8]-=Math.abs(1*amount);}
			}
			if(WV[0]==3){
				rply.text+='\n武器種類：衝鋒槍';
				ww=0.06;
				if(species=='基礎傷害'){WV[1]+=(1*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='子彈數'){WV[2]+=(1*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='傷害倍率'){WV[3]+=(0.1*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='連發數'){WV[4]+=(0.5*amount);WV[8]-=Math.abs((1*amount));}
				if(species=='射程'){WV[5]+=(0.25*amount);WV[8]-=Math.abs(1*amount);}
				}
				
			if(WV[0]==4){
				rply.text+='\n武器種類：短步槍';
				ww=0.05;
				if(species=='基礎傷害'){WV[1]+=(1*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='子彈數'){WV[2]+=(1*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='傷害倍率'){WV[3]+=(0.15*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='連發數'){WV[4]+=(0.5*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='射程'){WV[5]+=(0.5*amount);WV[8]-=Math.abs(1*amount);}
			}
			if(WV[0]==5){
				rply.text+='\n武器種類：步槍';
				ww=0.05;
				if(species=='基礎傷害'){WV[1]+=(1*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='子彈數'){WV[2]+=(1*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='傷害倍率'){WV[3]+=(0.15*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='連發數'){WV[4]+=(0.5*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='射程'){WV[5]+=(0.5*amount);WV[8]-=Math.abs(1*amount);}
			}
			if(WV[0]==6){
				rply.text+='\n武器種類：狙擊槍';
				ww=0.13;
				if(species=='基礎傷害'){WV[1]+=(1.1*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='子彈數'){WV[2]+=(1*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='傷害倍率'){WV[3]+=(0.12*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='射程'){WV[5]+=(0.75*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='連發數'){rply.text=name + ' 無法改造的類型';return rply;}
			}
			if(WV[0]==7){
				rply.text+='\n武器種類：大口徑狙擊槍';
				ww=0.22;
				if(species=='基礎傷害'){WV[1]+=(1.2*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='子彈數'){WV[2]+=(1*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='傷害倍率'){WV[3]+=(0.15*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='射程'){WV[5]+=(1*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='連發數'){rply.text=name + ' 無法改造的類型';return rply;}
			}
			if(WV[0]==8){
				rply.text+='\n武器種類：火炮';
				ww=0.5;
				if(species=='基礎傷害'){WV[1]+=(1*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='子彈數'){WV[2]+=(1*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='傷害倍率'){WV[3]+=(0.02*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='射程'){WV[5]+=(1*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='連發數'){rply.text=name + ' 無法改造的類型';return rply;}
			}
			if(WV[0]==9){
				rply.text+='\n武器種類：短近距離武器';
				ww=0.15;
				if(species=='基礎傷害'){WV[1]+=(1*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='傷害倍率'){WV[3]+=(0.1*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='射程'){WV[5]+=(0.1*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='連發數'){rply.text=name + ' 無法改造的類型';return rply;}
				if(species=='子彈數'){rply.text=name + ' 無法改造的類型';return rply;}
			}
			if(WV[0]==10){
				rply.text+='\n武器種類：中近距離武器';
				ww=0.3;
				if(species=='基礎傷害'){WV[1]+=(1*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='傷害倍率'){WV[3]+=(0.1*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='射程'){WV[5]+=(0.1*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='連發數'){rply.text=name + ' 無法改造的類型';return rply;}
				if(species=='子彈數'){rply.text=name + ' 無法改造的類型';return rply;}
			}
			if(WV[0]==11){
				rply.text+='\n武器種類：長近距離武器';
				ww=0.4;
				if(species=='基礎傷害'){WV[1]+=(1*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='傷害倍率'){WV[3]+=(0.1*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='射程'){WV[5]+=(0.1*amount);WV[8]-=Math.abs(1*amount);}
				if(species=='連發數'){rply.text=name + ' 無法改造的類型';return rply;}
				if(species=='子彈數'){rply.text=name + ' 無法改造的類型';return rply;}
			}
			WMK=WV[0]+','+WV[1].toString() +','+WV[2].toString() +','+WV[3].toString()+','+WV[4].toString()+','+WV[5].toString()+','+WV[6]+','+WV[7]+','+WV[8];
			ox.WM(i,WMK);
			rply.text+= '\n基礎傷害：'+WV[1]+
						'\n子彈數：'+WV[2]+
						'\n傷害倍率：'+WV[3]+
						'\n連發數：'+WV[4]+
						'\n射程：'+WV[5]+
						'\n武器重量：'+(WV[1]*WV[2]*ww)+
						'\n可改造次數：'+WV[8]
						;
			if(Number(ox.oC(i,7))<Number((WV[1]*WV[2]*ww)))rply.text+='\n注意：武器過重';
			return rply;

  }
	}
}
module.exports = {
	skill_make:skill_make
};


