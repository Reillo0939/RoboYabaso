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
		var Askill = AAA.split('|'); //定義輸入字串
		var Par = STR.split(',');
	
		if(Number(position)>5 && Number(position)<1){
			rply.text=name+' 沒有這個技能格';
			return rply;
		}
		if(Askill[Number(position)-1]!=0){
			rply.text=name+' 技能格已有技能';
			return rply;
		}
		if(Par[0]=='攻擊'){
	if(Par.length!=7){
			rply.text=name+' 格式錯誤';
			return rply;
		}
		if(Par[5]==null){
				rply.text=name+' 技能沒有名字';
			return rply;
			}
			Askill[Number(position)-1]=Par[5];
		Askill[Number(position)-1]+=','+Par[0];
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

function skill_view(id,name,position) {
var WMK;
  for(var i=0;i<ox.oL();i++){
	if(ox.oC(i,0)==id){
		position--;
		var AAA=ox.oC(i,21);
		var Askill = AAA.split('|'); //定義輸入字串
		var par = Askill[position].split(',');
		
		if(Askill[position]==0){
			rply.text=name+'這格沒有技能';
			return rply;
			}
			
			rply.text='';
			rply.text=name;
			rply.text+='\n技能名稱：'+par[0]+
						'\n類型：'+par[1]+
						'\n屬性：'+par[2]+
						'\n傷害：'+par[3]+
						'\n射程：'+par[4]+
						'\n報擊率：'+par[5]+
						'\n'+name+'：'+par[6]
						;
			return rply;

  }
	}
}
module.exports = {
	skill_make:skill_make,
	skill_view:skill_view
};


