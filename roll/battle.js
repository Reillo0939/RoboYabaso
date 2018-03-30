var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var ox = require('./Character.js');
var rply ={type : 'text'}; //type是必需的,但可以更改
var player=[];
var start=0;
var hit=1;
var self=0;
var damage;
var rnggg;
var mode;
function IDCA(id,name) {
rply.text=name+'為測試人員';//U7c4779fd913aff927f26d7f6bedd87d1  雷洛Uc9b4571605aabd3e94edd7c189144278屬
if(id=='U7c4779fd913aff927f26d7f6bedd87d1')rply.text=name+'為GM';
if(id=='Uc9b4571605aabd3e94edd7c189144278')rply.text=name+'為GM';
return rply;
}
function dd() {
player.length=0;
}
function battles(id,name,ab) {
	var ggg,ttt;
	let msgSplitor = (/\S+/ig);	
	let mainMsg = ab.match(msgSplitor); //定義輸入字串
	let trigger = mainMsg[0].toString()
	
	if(trigger.match(/^2人對戰模式$/) != null && start==0){
		mode=1;
		dd();
	        rply.text='已轉為2人對戰模式';
		return rply;
	}
	if(trigger.match(/^4人對戰模式$/) != null && start==0){
		mode=2;
		dd();
	        rply.text='已轉為4人對戰模式';
		return rply;
	}
	if(trigger.match(/^8人對戰模式$/) != null && start==0){
		mode=3;
		dd();
	        rply.text='已轉為8人對戰模式';
		return rply;
	}
	if(mode==1){
if(trigger.match(/^戰鬥參與$/) != null && start==0){
	if(player.length==2){
		rply.text='已達參與上限';
		return rply;}
var od=[];
  for(var i=0;i<ox.oL();i++){
	if(ox.oC(i,0)==id){
		for(var j=0;j<player.length;j++){
			if(player.length==1 && ox.oC(i,0)==player[j][0]){
				rply.text='無法重複參與';
			return rply;
			}
		}
		ggg=i;
		od[0]=ox.oC(i,0);
    		od[1]=ox.oC(i,1);
    		od[2]=ox.oC(i,5);
		od[3]=ox.oC(i,5);
		od[4]=ox.oC(i,6);
		od[5]=ox.oC(i,6);
		od[6]=ox.oC(i,7);
		od[7]=ox.oC(i,8);
		player[player.length]=od;
		rply.text=name+'你的'+od[1]+'已參與\n'+
			'HP '+od[2]+'/'+od[3]+
			'\nbata粒子 '+od[4]+'/'+od[5]+
			'\n物理適性 '+od[6]+
			'\n反應力'+od[7]		+'\n目前參與人數： '+player.length+'/2';
		return rply;
  }
	}
}
	if(trigger.match(/^取消參與$/) != null&& start==0){
var od=[];
	for(var i=0;i<player.length;i++)
	if(player[i][0]==id){
		od[1]=player[i][1];
		player.splice(i,1);
		rply.text=name+'你的'+od[1]+'已取消參與'
		+'\n目前參與人數： '+player.length+'/2';
		return rply; }
	
}
if(trigger.match(/^戰鬥開始$/) != null && start==0 && player.length==2){
		start=1;
		
		if(player[0][7]>=player[1][7])hit=0;
	        rply.text='戰鬥展開'+
			'\n'+player[hit][1]+'先手'+
			'\n 可用選項：攻擊';
		return rply;
	}
if(start==1){
	if(id==player[hit][0] && trigger.match(/^攻擊$/) != null){
		
		rnggg=rollbase.Dice(100);
		if(rnggg>(20+parseInt(player[1-hit][7])-parseInt(player[hit][7]))){
			player[1-hit][2]=player[1-hit][2]-player[hit][6];
		hit=1-hit;
		}
		else{
			hit=1-hit;
			rply.text=player[hit][1]+'閃避成功'+
			'\nHP '+player[hit][2]+'/'+player[hit][3]+
			'\nbata粒子 '+player[hit][4]+'/'+player[hit][5]+
			'\n物理適性 '+player[hit][6]+
			'\n反應力'+player[hit][7]+
		'\n輪到'+player[hit][1]+'的回合了'+
		'\n 可用選項：攻擊';
		return rply;
		}
		
	}
	if(player[hit][2]<=0){
		rply.text=player[hit][1]+'\nHP '+player[hit][2]+'/'+player[hit][3]+'(-'+player[1-hit][6]+')'+
			'\nbata粒子 '+player[hit][4]+'/'+player[hit][5]+
			'\n物理適性 '+player[hit][6]+
			'\n反應力'+player[hit][7]+
			'\n' + player[1-hit][1]+'勝利';
		start=0;
		dd();
		hit=1;
		return rply;
	}
	rply.text=player[hit][1]+
			'\nHP '+player[hit][2]+'/'+player[hit][3]+'(-'+player[1-hit][6]+')'+
			'\nbata粒子 '+player[hit][4]+'/'+player[hit][5]+
			'\n物理適性 '+player[hit][6]+
			'\n反應力'+player[hit][7]+
		'\n輪到'+player[hit][1]+'的回合了'+
		'\n 可用選項：攻擊';
		return rply;
		}
	}
//------------------------------------------------------------------------
	if(mode==2){
if(trigger.match(/^戰鬥參與$/) != null && start==0){
	if(player.length==4){
		rply.text='已達參與上限';
		return rply;}
var od=[];
  for(var i=0;i<ox.oL();i++){
	if(ox.oC(i,0)==id){
		if(player.length==1 && ox.oC(i,0)==player[0][0]){
			rply.text='無法重複參與';
		return rply;
		}
		ggg=i;
		od[0]=ox.oC(i,0);
    		od[1]=ox.oC(i,1);
    		od[2]=ox.oC(i,5);
		od[3]=ox.oC(i,5);
		od[4]=ox.oC(i,6);
		od[5]=ox.oC(i,6);
		od[6]=ox.oC(i,7);
		od[7]=ox.oC(i,8);
		player[player.length]=od;
		rply.text=name+'你的'+od[1]+'已參與\n'+
			'HP '+od[2]+'/'+od[3]+
			'\nbata粒子 '+od[4]+'/'+od[5]+
			'\n物理適性 '+od[6]+
			'\n反應力'+od[7]		
			+'\n目前參與人數： '+player.length+'/4';
		return rply;
  }
	}
}
		if(trigger.match(/^取消參與$/) != null&& start==0){
			var od=[];
			for(var i=0;i<player.length;i++){
				if(player[i][0]==id){
					od[1]=player[i][1];
					player.splice(i,1);
					rply.text=name+'你的'+od[1]+'已取消參與'		
						+'\n目前參與人數： '+player.length+'/4';
					return rply; 
				}
			}
			
		}
		if(trigger.match(/^戰鬥開始$/) != null && start==0 && player.length==4){
			start=1;
			self=0;
			player.sort(function (a,b){return b[7]-a[7]});
			rply.text='戰鬥展開'+
			'\n'+player[self][1]+'先手'+
			'\n 可用選項：攻擊 目標'+
			'\n 目標有';
			for(var k=0;k<player.length;k++){
				if(player[k][1]!=player[self][1])rply.text=rply.text+'\n'+player[k][1];
			}
			return rply;
		}
		if(start==1){
			if(id==player[self][0] && trigger.match(/^攻擊$/) != null && mainMsg[1] != null ){
				for(var i=0;i<player.length;i++){
					if(player[i][1]==mainMsg[1] && player[i][1]!=player[self][1]){
						rnggg=rollbase.Dice(100);
						if(rnggg > (20 + parseInt(player[i][7]) - parseInt(player[self][7]) ) ){
							damage=Math.round(player[self][6]*(rollbase.Dice(10)+5)*0.1);
							player[i][2]=player[i][2]-damage;
							rply.text=player[i][1]+
							'\nHP '+player[i][2]+'/'+player[i][3]+'(-'+damage+')'+
							'\nbata粒子 '+player[i][4]+'/'+player[i][5]+
							'\n物理適性 '+player[i][6]+
							'\n反應力'+player[i][7];
							if(player[i][2]<=0){
								rply.text=rply.text+'\n'+player[i][1]+'已倒地';
								player.splice(i,1);
							}
							self++;
							if(self>=player.length)self=0;
							rply.text=rply.text+'\n\n輪到'+player[self][1]+'的回合了'+
							'\n 可用選項：攻擊 目標'+
							'\n 目標有';
							for(var k=0;k<player.length;k++){
								if(player[k][1]!=player[self][1])rply.text=rply.text+'\n'+player[k][1];
							}
							if(player.length==1){
								rply.text= player[0][1]+'勝利';
								start=0;
								dd();
								return rply;
							}
							return rply;
						}
						else{
							self++;
							if(self>=player.length)self=0;
							rply.text=player[i][1]+'閃避成功'+
							'\nHP '+player[i][2]+'/'+player[i][3]+
							'\nbata粒子 '+player[i][4]+'/'+player[i][5]+
							'\n物理適性 '+player[i][6]+
							'\n反應力'+player[i][7]+
							'\n\n輪到'+player[self][1]+'的回合了'+
							'\n 可用選項：攻擊 目標'+
							'\n 目標有';
							for(var k=0;k<player.length;k++){
								if(player[k][1]!=player[self][1])rply.text=rply.text+'\n'+player[k][1];
							}
							return rply;
						}
					}
				}
			}
				rply.text='\n\n輪到'+player[self][1]+'的回合了'+
							'\n 可用選項：攻擊 目標'+
							'\n 目標有';
				for(var k=0;k<player.length;k++){
					if(player[k][1]!=player[self][1])rply.text=rply.text+'\n'+player[k][1];
				}
				return rply;
		}
	}
//------------------------------------------------------------------------
		if(mode==3){
if(trigger.match(/^戰鬥參與$/) != null && start==0){
	if(player.length==8){
		rply.text='已達參與上限';
		return rply;}
var od=[];
  for(var i=0;i<ox.oL();i++){
	if(ox.oC(i,0)==id){
		if(player.length==1 && ox.oC(i,0)==player[0][0]){
			rply.text='無法重複參與';
		return rply;
		}
		ggg=i;
		od[0]=ox.oC(i,0);
    		od[1]=ox.oC(i,1);
    		od[2]=ox.oC(i,5);
		od[3]=ox.oC(i,5);
		od[4]=ox.oC(i,6);
		od[5]=ox.oC(i,6);
		od[6]=ox.oC(i,7);
		od[7]=ox.oC(i,8);
		player[player.length]=od;
		rply.text=name+'你的'+od[1]+'已參與\n'+
			'HP '+od[2]+'/'+od[3]+
			'\nbata粒子 '+od[4]+'/'+od[5]+
			'\n物理適性 '+od[6]+
			'\n反應力'+od[7]		
			+'\n目前參與人數： '+player.length+'/8';
		return rply;
  }
	}
}
		if(trigger.match(/^取消參與$/) != null&& start==0){
			var od=[];
			for(var i=0;i<player.length;i++){
				if(player[i][0]==id){
					od[1]=player[i][1];
					player.splice(i,1);
					rply.text=name+'你的'+od[1]+'已取消參與'		
					+'\n目前參與人數： '+player.length+'/8';
					return rply; 
				}
			}
			
		}
		if(trigger.match(/^戰鬥開始$/) != null && start==0 && player.length==8){
			start=1;
			self=0;
			player.sort(function (a,b){return b[7]-a[7]});
			rply.text='戰鬥展開'+
			'\n'+player[self][1]+'先手'+
			'\n 可用選項：攻擊 目標'+
			'\n 目標有';
			for(var k=0;k<player.length;k++){
				if(player[k][1]!=player[self][1])rply.text=rply.text+'\n'+player[k][1];
			}
			return rply;
		}
		if(start==1){
			if(id==player[self][0] && trigger.match(/^攻擊$/) != null && mainMsg[1] != null ){
				for(var i=0;i<player.length;i++){
					if(player[i][1]==mainMsg[1] && player[i][1]!=player[self][1]){
						rnggg=rollbase.Dice(100);
						if(rnggg > (20 + parseInt(player[i][7]) - parseInt(player[self][7]) ) ){
							damage=Math.round(player[self][6]*(rollbase.Dice(10)+5)*0.1);
							player[i][2]=player[i][2]-damage;
							rply.text=player[i][1]+
							'\nHP '+player[i][2]+'/'+player[i][3]+'(-'+damage+')'+
							'\nbata粒子 '+player[i][4]+'/'+player[i][5]+
							'\n物理適性 '+player[i][6]+
							'\n反應力'+player[i][7];
							if(player[i][2]<=0){
								rply.text=rply.text+'\n'+player[i][1]+'已倒地';
								player.splice(i,1);
							}
							self++;
							if(self>=player.length)self=0;
							rply.text=rply.text+'\n\n輪到'+player[self][1]+'的回合了'+
							'\n 可用選項：攻擊 目標'+
							'\n 目標有';
							for(var k=0;k<player.length;k++){
								if(player[k][1]!=player[self][1])rply.text=rply.text+'\n'+player[k][1];
							}
							if(player.length==1){
								rply.text+= player[0][1]+'勝利';
								start=0;
								dd();
								return rply;
							}
							return rply;
						}
						else{
							self++;
							if(self>=player.length)self=0;
							rply.text=player[i][1]+'閃避成功'+
							'\nHP '+player[i][2]+'/'+player[i][3]+
							'\nbata粒子 '+player[i][4]+'/'+player[i][5]+
							'\n物理適性 '+player[i][6]+
							'\n反應力'+player[i][7]+
							'\n\n輪到'+player[self][1]+'的回合了'+
							'\n 可用選項：攻擊 目標'+
							'\n 目標有';
							for(var k=0;k<player.length;k++){
								if(player[k][1]!=player[self][1])rply.text=rply.text+'\n'+player[k][1];
							}
							return rply;
						}
					}
				}
			}
				rply.text='\n\n輪到'+player[self][1]+'的回合了'+
							'\n 可用選項：攻擊 目標'+
							'\n 目標有';
				for(var k=0;k<player.length;k++){
					if(player[k][1]!=player[self][1])rply.text=rply.text+'\n'+player[k][1];
				}
				return rply;
		}
	}
	//------------------------------------------------------------------------
}
	

//rply.text+='\n多送你一張：';
//let rarity=rollbase.Dice(100);
//ox.oA(ggg,ttt-frequency*100);



module.exports = {
	battles:battles,
	dd:dd
};


