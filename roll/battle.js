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
	rply.text='';
	if(mode==1){
		ga(2,mainMsg,trigger,id,name);
		return rply;
	}
//------------------------------------------------------------------------
	if(mode==2){
ga(4,mainMsg,trigger,id,name);
		return rply;
	}
		if(mode==3){
			ga(8,mainMsg,trigger,id,name);
		return rply;
		}
}
	
function ga(aaab,mainMsg,trigger,id,name){
if(trigger.match(/^戰鬥參與$/) != null && start==0){
	if(player.length==aaab){
		rply.text='已達參與上限';
		return rply;}
var od=[];
  for(var i=0;i<ox.oL();i++){
	if(ox.oC(i,0)==id){
		for(var k=0;k<player.length;k++){
		if(player.length>=1 && id==player[k][0]){
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
			'\n反應力'+od[7]		
			+'\n目前參與人數： '+player.length+'/'+aaab;
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
						+'\n目前參與人數： '+player.length+'/'+aaab;
					return rply; 
				}
			}
			
		}
		if(trigger.match(/^戰鬥開始$/) != null && start==0 && player.length==aaab){
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
							if(player.length==1){
								rply.text+='\n'+ player[0][1]+'勝利';
								start=0;
								dd();
								return rply;
							}
							if(self>=player.length)self=0;
							rply.text=rply.text+'\n\n輪到'+player[self][1]+'的回合了'+
							'\n 可用選項：攻擊 目標'+
							'\n 目標有';
							for(var k=0;k<player.length;k++){
								if(player[k][1]!=player[self][1])rply.text=rply.text+'\n'+player[k][1];
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
				rply.text='輪到'+player[self][1]+'的回合了'+
							'\n 可用選項：攻擊 目標'+
							'\n 目標有';
				for(var k=0;k<player.length;k++){
					if(player[k][1]!=player[self][1])rply.text=rply.text+'\n'+player[k][1];
				}
				return rply;
		}
}
function boss01(aaab,mainMsg,trigger,id,name){
if(trigger.match(/^戰鬥參與$/) != null && start==0){
	if(player.length==aaab){
		rply.text='已達參與上限';
		return rply;}
var od=[];
  for(var i=0;i<ox.oL();i++){
	if(ox.oC(i,0)==id){
		for(var k=0;k<player.length;k++){
		if(player.length>=1 && id==player[k][0]){
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
			'\n反應力'+od[7]		
			+'\n目前參與人數： '+player.length+'/'+aaab;
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
						+'\n目前參與人數： '+player.length+'/'+aaab;
					return rply; 
				}
			}
			
		}
		if(trigger.match(/^戰鬥開始$/) != null && start==0 && player.length==aaab){
			start=1;
			self=0;
			od[0]='boss01';
			od[1]='boss測試';
			od[2]=1000;
			od[3]=1000;
			od[4]=0;
			od[5]=0;
			od[6]=30;
			od[7]=30;
			player[player.length]=od;
			player.sort(function (a,b){return b[7]-a[7]});
			rply.text='戰鬥展開'+
			'\n'+player[self][1]+'先手'+
			'\n 可用選項：攻擊 目標'+
			'\n 目標有';
			for(var k=0;k<player.length;k++){
				if(player[k][1]!=player[self][1])rply.text=rply.text+'\n'+player[k][1];
			}
			if(player[0][0]=='boss01'){
				var atkt;
				for(var j=0;j<player.length;j++){
					var atktt=player;
					atktt.splice(0,1);
					atktt.sort(function (a,b){return b[2]-a[2]});
					atkt=atktt[0][1];
				}
			rply.text+='\n攻擊'+atkt;
				for(var i=0;i<player.length;i++){
					if(player[i][1]==atkt && player[i][1]!=player[self][1]){
						rnggg=rollbase.Dice(100);
						if(rnggg > (20 + parseInt(player[i][7]) - parseInt(player[self][7]) ) ){
							damage=Math.round(player[self][6]*(rollbase.Dice(10)+5)*0.1);
							player[i][2]=player[i][2]-damage;
							rply.text=rply.text+'\n\n'+player[i][1]+
							'\nHP '+player[i][2]+'/'+player[i][3]+'(-'+damage+')'+
							'\nbata粒子 '+player[i][4]+'/'+player[i][5]+
							'\n物理適性 '+player[i][6]+
							'\n反應力'+player[i][7];
							if(player[i][2]<=0){
								rply.text=rply.text+'\n'+player[i][1]+'已倒地';
								player.splice(i,1);
							}
							self++;
							if(player.length==1){
								rply.text+='\n'+ player[0][1]+'勝利';
								start=0;
								dd();
								return rply;
							}
							if(self>=player.length)self=0;
							rply.text=rply.text+'\n\n輪到'+player[self][1]+'的回合了'+
							'\n 可用選項：攻擊 目標'+
							'\n 目標有';
							for(var k=0;k<player.length;k++){
								if(player[k][1]!=player[self][1])rply.text=rply.text+'\n'+player[k][1];
							}
							
							return rply;
						}
						else{
							self++;
							if(self>=player.length)self=0;
							rply.text=rply.text+'\n\n'+player[i][1]+'閃避成功'+
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
							if(player.length==1){
								rply.text+='\n'+ player[0][1]+'勝利';
								start=0;
								dd();
								return rply;
							}
							if(self>=player.length)self=0;
							rply.text=rply.text+'\n\n輪到'+player[self][1]+'的回合了'+
							'\n 可用選項：攻擊 目標'+
							'\n 目標有';
							for(var k=0;k<player.length;k++){
								if(player[k][1]!=player[self][1])rply.text=rply.text+'\n'+player[k][1];
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
				rply.text='輪到'+player[self][1]+'的回合了'+
							'\n 可用選項：攻擊 目標'+
							'\n 目標有';
				for(var k=0;k<player.length;k++){
					if(player[k][1]!=player[self][1])rply.text=rply.text+'\n'+player[k][1];
				}
				return rply;
		}
}

module.exports = {
	battles:battles,
	dd:dd
};


