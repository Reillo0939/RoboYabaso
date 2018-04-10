var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var ox = require('./Character.js');
var rply ={type : 'text'}; //type是必需的,但可以更改
var player= new Array();;
var start=0;
var hit=1;
var f41=0;
var self=0;
var ds=0;
var damage;
var rnggg;
var mode;
function dd() {
player.length=0;
}
function battles(id,name,ab) {
	var ggg,ttt;
	let msgSplitor = (/\S+/ig);	
	let mainMsg = ab.match(msgSplitor); //定義輸入字串
	let trigger = mainMsg[0].toString()
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	/*if(trigger.match(/^2人對戰模式$/) != null && start==0){
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
	}*/
	/*if(trigger.match(/^愚人節boss活動/) != null && start==0){
		mode=21;
		dd();
	        rply.text='已轉為討伐愚人節boss模式(8人)';
		return rply;
	}*/
	if(trigger.match(/^2人棋盤模式/) != null && start==0){
		mode=12;
		dd();
	        rply.text='已轉為2人棋盤模式';
		return rply;
	}
	if(trigger.match(/^3人棋盤模式/) != null && start==0){
		mode=13;
		dd();
	        rply.text='已轉為3人棋盤模式';
		return rply;
	}
	if(trigger.match(/^4人棋盤模式/) != null && start==0){
		mode=14;
		dd();
	        rply.text='已轉為4人棋盤模式';
		return rply;
	}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	rply.text='';
	/*if(mode==1){
		ga(2,mainMsg,trigger,id,name);
		return rply;
	}
	if(mode==2){
ga(4,mainMsg,trigger,id,name);
		return rply;
	}
		if(mode==3){
			ga(8,mainMsg,trigger,id,name);
		return rply;
		}
	if(mode==21){
			boss01(8,mainMsg,trigger,id,name);
		return rply;
		}*/
		if(mode==12){
			cb(2,mainMsg,trigger,id,name);
		return rply;
		}
		if(mode==13){
			cb(3,mainMsg,trigger,id,name);
		return rply;
		}
		if(mode==14){
			cb(4,mainMsg,trigger,id,name);
		return rply;
		}
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
/*function ga(aaab,mainMsg,trigger,id,name){
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
					if(player[i][1]==mainMsg[1] ){
						rnggg=rollbase.Dice(100);
						if(rnggg > (20 + parseInt(player[i][7]) - parseInt(player[self][7]) ) ){
							damage=Math.round(player[self][6]*(rollbase.Dice(10)+5)*0.1);
							player[i][2]=player[i][2]-damage;
							rply.text=player[i][1]+
							'\nHP '+player[i][2]+'/'+player[i][3]+'(-'+damage+')'+
							'\nbata粒子 '+player[i][4]+'/'+player[i][5];
							self++;
							if(player[i][2]<=0){
								if(i<self)self--;
								rply.text=rply.text+'\n'+player[i][1]+'已倒地';
								
								player.splice(i,1);
							}
							
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
								rply.text=rply.text+'\n'+player[k][1];
							}
							
							return rply;
						}
						else{
							self++;
							if(self>=player.length)self=0;
							rply.text=player[i][1]+'閃避成功'+
							'\nHP '+player[i][2]+'/'+player[i][3]+
							'\nbata粒子 '+player[i][4]+'/'+player[i][5]+
							'\n\n輪到'+player[self][1]+'的回合了'+
							'\n 可用選項：攻擊 目標'+
							'\n 目標有';
							for(var k=0;k<player.length;k++){
								rply.text=rply.text+'\n'+player[k][1];
							}
							return rply;
						}
					}
				}
			}
			if(trigger.match(/^跳過/) != null && start==1){
					self++;
					if(self>=player.length)self=0;
					rply.text='輪到'+player[self][1]+'的回合了'+
							'\n 可用選項：攻擊 目標'+
							'\n 目標有';
				for(var k=0;k<player.length;k++){
					if(player[k][1]!=player[self][1])rply.text=rply.text+'\n'+player[k][1];
				}
				return rply;
		}
		if(trigger.match(/^我命令你死去/) != null && start==1){
								player[self][2]=0;
								rply.text=player[self][1]+'已倒地';
								player.splice(self,1);
							if(player.length==1){
								rply.text+='\n'+ player[0][1]+'勝利';
								start=0;
								dd();
								return rply;
							}
							self++;
					if(self>=player.length)self=0;
					rply.text='輪到'+player[self][1]+'的回合了'+
							'\n 可用選項：攻擊 目標'+
							'\n 目標有';
				for(var k=0;k<player.length;k++){
					if(player[k][1]!=player[self][1])rply.text=rply.text+'\n'+player[k][1];
				}
				return rply;
		}
			if(trigger.match(/^m/) != null){
			}
			else{
			rply.text='輪到'+player[self][1]+'的回合了'+
							'\n 可用選項：攻擊 目標'+
							'\n 目標有';
				for(var k=0;k<player.length;k++){
					if(player[k][1]!=player[self][1])rply.text=rply.text+'\n'+player[k][1];
				}
				return rply;
			}
				
		}
			
}*/
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
function cb(aaab,mainMsg,trigger,id,name){
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
		od[0]=ox.oC(i,0);//ID
    	od[1]=ox.oC(i,1);//名字
    	od[2]=ox.oC(i,5);//生命值
		od[3]=ox.oC(i,5);//生命值
		od[4]=ox.oC(i,6);//Bata粒子適性
		od[5]=ox.oC(i,6);//Bata粒子適性
		od[6]=ox.oC(i,7);//物理適性
		od[7]=ox.oC(i,8);//反應力
		od[8]=ox.oC(i,9);//放出適性
		od[9]=ox.oC(i,10);//火屬適性
		od[10]=ox.oC(i,11);//水屬適性
		od[11]=ox.oC(i,12);//風屬適性
		od[12]=ox.oC(i,13);//土屬適性
		od[13]=ox.oC(i,15);//控制能力
		od[14]=ox.oC(i,3);//陣營
		od[15]=ox.oC(i,17);//金幣
		od[16]=0;//x
		od[17]=0;//y
		var WMK=ox.oC(i,19);
		var WV = WMK.split(','); //定義輸入字串
		od[27]=WV[6];//武器名稱
		od[18]=WV[0];//武器種類
		od[19]=WV[1];//基礎傷害
		od[20]=WV[2];//現有子彈
		od[21]=WV[2];//總子彈
		od[22]=WV[3];//傷害倍率
		od[23]=WV[4];//連發數
		od[24]=WV[5];//射程
		od[25]=0;//架槍等動作
		od[26]=0;//命中(狙擊)
		player[player.length]=od;
		rply.text=name+'你的'+od[1]+'已參與\n'+
			'HP '+od[2]+'/'+od[3]+
			'\nbata粒子 '+od[4]+'/'+od[5]+
			'\n物理適性 '+od[6]+
			'\n反應力'+od[7]+
			'\n武器名稱：'+WV[6];
			if(WV[0]==1)rply.text+='\n武器種類：手槍';
			if(WV[0]==2)rply.text+='\n武器種類：重型手槍';
			if(WV[0]==3)rply.text+='\n武器種類：衝鋒槍';
			if(WV[0]==4)rply.text+='\n武器種類：短步槍';
			if(WV[0]==5)rply.text+='\n武器種類：步槍';
			if(WV[0]==6)rply.text+='\n武器種類：狙擊槍';
			if(WV[0]==7)rply.text+='\n武器種類：大口徑狙擊槍';
			if(WV[0]==8)rply.text+='\n武器種類：火炮';
			if(WV[0]==9)rply.text+='\n武器種類：短近距離武器';
			if(WV[0]==10)rply.text+='\n武器種類：中近距離武器';
			if(WV[0]==11)rply.text+='\n武器種類：長近距離武器';
			if(WV[0]<9)rply.text+='\n子彈數：'+WV[2]+'/'+WV[2];
			rply.text+='\n目前參與人數： '+player.length+'/'+aaab;;
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
			ds=1;
			var ff=rollbase.Dice(aaab)-1;
				player[ff][16]=1;
				player[ff][17]=1;
				ff++;
			if(ff>=aaab)ff=0;
				player[ff][16]=10;
				player[ff][17]=10;
				ff++;
			if(ff>=aaab)ff=0;
			if(aaab>=3){
				player[ff][16]=10;
				player[ff][17]=1;
				ff++;
			}
			if(ff>=aaab)ff=0;
			if(aaab>=4){
				player[ff][16]=1;
				player[ff][17]=10;
			}
			var rt=BR();
			rply.text=rt;
			return rply;
		}
		if(start==1){
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^攻擊$/) != null && mainMsg[1] != null &&player[self][18]>=9 && player[self][18]<=11 ){
				for(var i=0;i<player.length;i++){
					if(player[i][1]==mainMsg[1] ){
						var temp =0;
						temp = Math.ceil((Math.pow(Math.pow(player[i][16]-player[self][16],2)+Math.pow(player[i][17]-player[self][17],2),0.5)));
						if(temp>player[self][24]){
							rply.text='距離'+player[i][1]+'太遠，無法攻擊';
							return rply;
						}
						rnggg=rollbase.Dice(100);
						Hit=rollbase.Dice(100);
						Critical=rollbase.Dice(100);
						if(Hit>100 && player[self][18]==9){
							ds++;
							if(ds==3){self++;ds=1;}
							if(self>=player.length)self=0;
							rply.text=player[i][1]+'沒有命中'+
							'\n\n'+BR();
			return rply;
						}
						if(Hit>85 && player[self][18]==10){
							ds++;
							if(ds==3){self++;ds=1;}
							if(self>=player.length)self=0;
							rply.text=player[i][1]+'沒有命中'+
							'\n\n'+BR();
			return rply;
						}
							if(Hit>70 && player[self][18]==11){
								ds++;
							if(ds==3){self++;ds=1;}
							if(self>=player.length)self=0;
							rply.text=player[i][1]+'沒有命中'+
							'\n\n'+BR();
			return rply;
							}
						if(rnggg > (20 + parseInt(player[i][7]) - parseInt(player[self][7]) ) ){
						
							damage=Math.round(player[self][19]*player[self][22]*(rollbase.Dice(10)+5)*0.1);
							if(Critical>=65 && player[self][18]==9)damage=damage*1.5;
							if(Critical>=55 && player[self][18]==10)damage=damage*1.5;
							if(Critical>=45 && player[self][18]==11)damage=damage*1.5;
							player[i][2]=player[i][2]-damage;
								rply.text=player[i][1]+
							'\nHP '+player[i][2]+'/'+player[i][3];
							rply.text+='(-'+damage+')';
							if(Critical>=65 && player[self][18]==9)rply.text+='Critical';
							if(Critical>=55 && player[self][18]==10)rply.text+='Critical';
							if(Critical>=45 && player[self][18]==11)rply.text+='Critical';
							rply.text+='\nbata粒子 '+player[i][4]+'/'+player[i][5];
							ds++
							if(ds==3){self++;ds=1;}
							if(player[i][2]<=0){
								if(i<self)self--;
								rply.text=rply.text+'\n'+player[i][1]+'已倒地';
								
								player.splice(i,1);
							}
							
							if(player.length==1){
								rply.text+='\n'+ player[0][1]+'勝利';
								start=0;
								dd();
								return rply;
							}
							if(self>=player.length)self=0;
							rply.text=rply.text+'\n\n'+BR();
			return rply;
						}
						else{
						ds++;
							if(ds==3){self++;ds=1;}
							if(self>=player.length)self=0;
							rply.text=player[i][1]+'閃避成功'+
							'\nHP '+player[i][2]+'/'+player[i][3]+
							'\nbata粒子 '+player[i][4]+'/'+player[i][5]+
							'\n\n'+BR();
			return rply;
						}
					}
				}
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^單發射擊$/) != null && mainMsg[1] != null &&player[self][18]>=1 && player[self][18]<=5 && player[self][20]>0){
				for(var i=0;i<player.length;i++){
					if(player[i][1]==mainMsg[1] ){
						var temp =0;
						temp = Math.ceil((Math.pow(Math.pow(player[i][16]-player[self][16],2)+Math.pow(player[i][17]-player[self][17],2),0.5)));
						if(temp>player[self][24]){
							rply.text='距離'+player[i][1]+'太遠，無法攻擊';
							return rply;
						}
						rnggg=rollbase.Dice(100);
						Hit=rollbase.Dice(100);
						Critical=rollbase.Dice(100);
						if(Hit>80 && player[self][18]==1){
							ds++;
							if(ds==3){self++;ds=1;}
							if(self>=player.length)self=0;
							rply.text=player[i][1]+'沒有命中'+
							'\n\n'+BR();
			return rply;
						}
						if(Hit>80 && player[self][18]==2){
							ds++;
							if(ds==3){self++;ds=1;}
							if(self>=player.length)self=0;
							rply.text=player[i][1]+'沒有命中'+
							'\n\n'+BR();
			return rply;
						}
							if(Hit>40 && player[self][18]==3){
								ds++;
							if(ds==3){self++;ds=1;}
							if(self>=player.length)self=0;
							rply.text=player[i][1]+'沒有命中'+
							'\n\n'+BR();
			return rply;
							}
		  if(Hit>50 && player[self][18]==4){
								ds++;
							if(ds==3){self++;ds=1;}
							if(self>=player.length)self=0;
							rply.text=player[i][1]+'沒有命中'+
							'\n\n'+BR();
			return rply;
							}
			if(Hit>60 && player[self][18]==5){
								ds++;
							if(ds==3){self++;ds=1;}
							if(self>=player.length)self=0;
							rply.text=player[i][1]+'沒有命中'+
							'\n\n'+BR();
			return rply;
							}
						if(rnggg > (20 + parseInt(player[i][7]) - parseInt(player[self][7]) ) ){
						damage=Math.round(player[self][19]*player[self][22]*(rollbase.Dice(10)+5)*0.1);
							if(Critical>=50 && player[self][18]==1)damage=parseInt(damage*1.5);
							if(Critical>=60 && player[self][18]==2)damage=parseInt(damage*1.5);
							if(Critical>=20 && player[self][18]==3)damage=parseInt(damage*1.5);
							if(Critical>=30 && player[self][18]==4)damage=parseInt(damage*1.5);
							if(Critical>=40 && player[self][18]==5)damage=parseInt(damage*1.5);
							player[i][2]=player[i][2]-damage;
							rply.text=player[i][1]+
							'\nHP '+player[i][2]+'/'+player[i][3];

							
							rply.text+='(-'+damage+')';
							if(Critical>=50 && player[self][18]==9)rply.text+='Critical';
							if(Critical>=60 && player[self][18]==10)rply.text+='Critical';
							if(Critical>=20 && player[self][18]==11)rply.text+='Critical';
							if(Critical>=30 && player[self][18]==10)rply.text+='Critical';
							if(Critical>=40 && player[self][18]==11)rply.text+='Critical';
							rply.text+='\nbata粒子 '+player[i][4]+'/'+player[i][5];
							player[self][20]--;
							ds++
							if(ds==3){self++;ds=1;}
							if(player[i][2]<=0){
								if(i<self)self--;
								rply.text=rply.text+'\n'+player[i][1]+'已倒地';
								
								player.splice(i,1);
							}
							
							if(player.length==1){
								rply.text+='\n'+ player[0][1]+'勝利';
								start=0;
								dd();
								return rply;
							}
							if(self>=player.length)self=0;
							rply.text=rply.text+'\n\n'+BR();
			return rply;
						}
						else{
						ds++;
							if(ds==3){self++;ds=1;}
							if(self>=player.length)self=0;
							rply.text=player[i][1]+'閃避成功'+
							'\nHP '+player[i][2]+'/'+player[i][3]+
							'\nbata粒子 '+player[i][4]+'/'+player[i][5]+
							'\n\n'+BR();
			return rply;
						}
					}
				}
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^連發射擊$/) != null && mainMsg[1] != null &&player[self][18]>=1 && player[self][18]<=5 && player[self][20]>1){
				for(var i=0;i<player.length;i++){
					if(player[i][1]==mainMsg[1] ){
						var temp =0;
						temp = Math.ceil((Math.pow(Math.pow(player[i][16]-player[self][16],2)+Math.pow(player[i][17]-player[self][17],2),0.5)));
						if(temp>player[self][24]){
							rply.text='距離'+player[i][1]+'太遠，無法攻擊';
							return rply;
						}
						console.log(player[self][23]);
						var bh=player[self][23];
						if(bh>player[self][20]){bh=player[self][20];}
						var hhiitt=[];
						var hitd=[];
				for(var o=0;o<bh;o++){
					rnggg=rollbase.Dice(100);
					Hit=rollbase.Dice(100);
					Critical=rollbase.Dice(100);
						
					if(o==0){
							hhiitt[o]=0;
							hitd[o]='miss';
						if(Hit<=80 && player[self][18]==1){
							hhiitt[o]=Math.round(player[self][19]*player[self][22]*(rollbase.Dice(10)+5)*0.1);
							if(Critical>=50 && player[self][18]==1)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=60 && player[self][18]==2)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=20 && player[self][18]==3)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=30 && player[self][18]==4)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=40 && player[self][18]==5)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							hitd[o]=hhiitt[o];
							if(Critical>=50 && player[self][18]==9)hitd[o]+='(Critical)';
							if(Critical>=60 && player[self][18]==10)hitd[o]+='(Critical)';
							if(Critical>=20 && player[self][18]==11)hitd[o]+='(Critical)';
							if(Critical>=30 && player[self][18]==10)hitd[o]+='(Critical)';
							if(Critical>=40 && player[self][18]==11)hitd[o]+='(Critical)';
							if(rnggg <  (parseInt(player[i][7])-20)){
								hhiitt[o]=0;
								hitd[o]='dodge';
							}
						}
						if(Hit<=80 && player[self][18]==2){
							hhiitt[o]=Math.round(player[self][19]*player[self][22]*(rollbase.Dice(10)+5)*0.1);
							if(Critical>=50 && player[self][18]==1)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=60 && player[self][18]==2)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=20 && player[self][18]==3)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=30 && player[self][18]==4)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=40 && player[self][18]==5)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							hitd[o]=hhiitt[o];
							if(Critical>=50 && player[self][18]==9)hitd[o]+='(Critical)';
							if(Critical>=60 && player[self][18]==10)hitd[o]+='(Critical)';
							if(Critical>=20 && player[self][18]==11)hitd[o]+='(Critical)';
							if(Critical>=30 && player[self][18]==10)hitd[o]+='(Critical)';
							if(Critical>=40 && player[self][18]==11)hitd[o]+='(Critical)';
							if(rnggg <  (parseInt(player[i][7])-20)){
								hhiitt[o]=0;
								hitd[o]='dodge';
							}
						}
						if(Hit<=40 && player[self][18]==3){
							hhiitt[o]=Math.round(player[self][19]*player[self][22]*(rollbase.Dice(10)+5)*0.1);
							if(Critical>=50 && player[self][18]==1)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=60 && player[self][18]==2)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=20 && player[self][18]==3)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=30 && player[self][18]==4)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=40 && player[self][18]==5)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							hitd[o]=hhiitt[o];
							if(Critical>=50 && player[self][18]==9)hitd[o]+='(Critical)';
							if(Critical>=60 && player[self][18]==10)hitd[o]+='(Critical)';
							if(Critical>=20 && player[self][18]==11)hitd[o]+='(Critical)';
							if(Critical>=30 && player[self][18]==10)hitd[o]+='(Critical)';
							if(Critical>=40 && player[self][18]==11)hitd[o]+='(Critical)';
							if(rnggg <  (parseInt(player[i][7])-20)){
								hhiitt[o]=0;
								hitd[o]='dodge';
							}
						}
						if(Hit<=50 && player[self][18]==4){
							hhiitt[o]=Math.round(player[self][19]*player[self][22]*(rollbase.Dice(10)+5)*0.1);
							if(Critical>=50 && player[self][18]==1)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=60 && player[self][18]==2)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=20 && player[self][18]==3)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=30 && player[self][18]==4)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=40 && player[self][18]==5)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							hitd[o]=hhiitt[o];
							if(Critical>=50 && player[self][18]==9)hitd[o]+='(Critical)';
							if(Critical>=60 && player[self][18]==10)hitd[o]+='(Critical)';
							if(Critical>=20 && player[self][18]==11)hitd[o]+='(Critical)';
							if(Critical>=30 && player[self][18]==10)hitd[o]+='(Critical)';
							if(Critical>=40 && player[self][18]==11)hitd[o]+='(Critical)';
							if(rnggg <  (parseInt(player[i][7])-20)){
								hhiitt[o]=0;
								hitd[o]='dodge';
							}
						}
						if(Hit<=60 && player[self][18]==5){
							hhiitt[o]=Math.round(player[self][19]*player[self][22]*(rollbase.Dice(10)+5)*0.1);
							if(Critical>=50 && player[self][18]==1)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=60 && player[self][18]==2)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=20 && player[self][18]==3)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=30 && player[self][18]==4)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=40 && player[self][18]==5)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							hitd[o]=hhiitt[o];
							if(Critical>=50 && player[self][18]==9)hitd[o]+='(Critical)';
							if(Critical>=60 && player[self][18]==10)hitd[o]+='(Critical)';
							if(Critical>=20 && player[self][18]==11)hitd[o]+='(Critical)';
							if(Critical>=30 && player[self][18]==10)hitd[o]+='(Critical)';
							if(Critical>=40 && player[self][18]==11)hitd[o]+='(Critical)';
							if(rnggg <  (parseInt(player[i][7])-20)){
								hhiitt[o]=0;
								hitd[o]='dodge';
							}
						}

					}
					if(o>0){
						hhiitt[o]=0;
						hitd[o]='miss';
						if(Hit<=60 && player[self][18]==1){
							hhiitt[o]=Math.round(player[self][19]*player[self][22]*(rollbase.Dice(10)+5)*0.1);
							if(Critical>=50 && player[self][18]==1)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=60 && player[self][18]==2)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=20 && player[self][18]==3)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=30 && player[self][18]==4)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=40 && player[self][18]==5)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							hitd[o]=hhiitt[o];
							if(Critical>=50 && player[self][18]==9)hitd[o]+='(Critical)';
							if(Critical>=60 && player[self][18]==10)hitd[o]+='(Critical)';
							if(Critical>=20 && player[self][18]==11)hitd[o]+='(Critical)';
							if(Critical>=30 && player[self][18]==10)hitd[o]+='(Critical)';
							if(Critical>=40 && player[self][18]==11)hitd[o]+='(Critical)';
							if(rnggg <  (parseInt(player[i][7])-20)){
								hhiitt[o]=0;
								hitd[o]='dodge';
							}
						}
						if(Hit<=60 && player[self][18]==2){
							hhiitt[o]=Math.round(player[self][19]*player[self][22]*(rollbase.Dice(10)+5)*0.1);
							if(Critical>=50 && player[self][18]==1)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=60 && player[self][18]==2)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=20 && player[self][18]==3)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=30 && player[self][18]==4)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=40 && player[self][18]==5)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							hitd[o]=hhiitt[o];
							if(Critical>=50 && player[self][18]==9)hitd[o]+='(Critical)';
							if(Critical>=60 && player[self][18]==10)hitd[o]+='(Critical)';
							if(Critical>=20 && player[self][18]==11)hitd[o]+='(Critical)';
							if(Critical>=30 && player[self][18]==10)hitd[o]+='(Critical)';
							if(Critical>=40 && player[self][18]==11)hitd[o]+='(Critical)';
							if(rnggg <  (parseInt(player[i][7])-20)){
								hhiitt[o]=0;
								hitd[o]='dodge';
							}
						}
						if(Hit<=20 && player[self][18]==3){
							hhiitt[o]=Math.round(player[self][19]*player[self][22]*(rollbase.Dice(10)+5)*0.1);
							if(Critical>=50 && player[self][18]==1)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=60 && player[self][18]==2)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=20 && player[self][18]==3)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=30 && player[self][18]==4)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=40 && player[self][18]==5)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							hitd[o]=hhiitt[o];
							if(Critical>=50 && player[self][18]==9)hitd[o]+='(Critical)';
							if(Critical>=60 && player[self][18]==10)hitd[o]+='(Critical)';
							if(Critical>=20 && player[self][18]==11)hitd[o]+='(Critical)';
							if(Critical>=30 && player[self][18]==10)hitd[o]+='(Critical)';
							if(Critical>=40 && player[self][18]==11)hitd[o]+='(Critical)';
							if(rnggg <  (parseInt(player[i][7])-20)){
								hhiitt[o]=0;
								hitd[o]='dodge';
							}
						}
						if(Hit<=30 && player[self][18]==4){
							hhiitt[o]=Math.round(player[self][19]*player[self][22]*(rollbase.Dice(10)+5)*0.1);
							if(Critical>=50 && player[self][18]==1)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=60 && player[self][18]==2)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=20 && player[self][18]==3)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=30 && player[self][18]==4)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=40 && player[self][18]==5)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							hitd[o]=hhiitt[o];
							if(Critical>=50 && player[self][18]==9)hitd[o]+='(Critical)';
							if(Critical>=60 && player[self][18]==10)hitd[o]+='(Critical)';
							if(Critical>=20 && player[self][18]==11)hitd[o]+='(Critical)';
							if(Critical>=30 && player[self][18]==10)hitd[o]+='(Critical)';
							if(Critical>=40 && player[self][18]==11)hitd[o]+='(Critical)';
							if(rnggg <  (parseInt(player[i][7])-20)){
								hhiitt[o]=0;
								hitd[o]='dodge';
							}
						}
						if(Hit<=40 && player[self][18]==5){
							hhiitt[o]=Math.round(player[self][19]*player[self][22]*(rollbase.Dice(10)+5)*0.1);
							if(Critical>=50 && player[self][18]==1)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=60 && player[self][18]==2)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=20 && player[self][18]==3)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=30 && player[self][18]==4)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical>=40 && player[self][18]==5)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							hitd[o]=hhiitt[o];
							if(Critical>=50 && player[self][18]==9)hitd[o]+='(Critical)';
							if(Critical>=60 && player[self][18]==10)hitd[o]+='(Critical)';
							if(Critical>=20 && player[self][18]==11)hitd[o]+='(Critical)';
							if(Critical>=30 && player[self][18]==10)hitd[o]+='(Critical)';
							if(Critical>=40 && player[self][18]==11)hitd[o]+='(Critical)';
							if(rnggg <  (parseInt(player[i][7])-20)){
								hhiitt[o]=0;
								hitd[o]='dodge';
							}
						}
					}
				}
					damage=0;
						for(var o=0;o<bh;o++){
							damage+=hhiitt[o];
						}
						player[i][2]=player[i][2]-damage;
							rply.text=player[i][1]+
							'\nHP '+player[i][2]+'/'+player[i][3];
							rply.text+='('
							for(var o=0;o<bh;o++){
							if(hhiitt[o]==0){
								rply.text+=hitd[o];
								if(o<(bh-1))rply.text+=','
							}
							else{
								rply.text+='-'+hitd[o];
								if(o<(bh-1))rply.text+=','
							}
							}
							rply.text+=')';
							rply.text+='\nbata粒子 '+player[i][4]+'/'+player[i][5];
							player[self][20]-=bh;
							ds++
							if(ds==3){self++;ds=1;}
							if(player[i][2]<=0){
								if(i<self)self--;
								rply.text=rply.text+'\n'+player[i][1]+'已倒地';
								
								player.splice(i,1);
							}
							
							if(player.length==1){
								rply.text+='\n'+ player[0][1]+'勝利';
								start=0;
								dd();
								return rply;
							}
							if(self>=player.length)self=0;
							rply.text=rply.text+'\n\n'+BR();
			return rply;

					}
				}
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^裝填子彈$/) != null && player[self][18]>=1 && player[self][18]<=8 && player[self][20]!=player[self][21]){
					player[self][20]=player[self][21];
					ds++
					if(ds==3){self++;ds=1;}
					if(self>=player.length)self=0;
					rply.text+='\n\n'+BR();
			return rply;
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^移動/) != null && start==1 &&  mainMsg[1] != null){
				let xxyy = mainMsg[1].split(','); //定義輸入字串
				if(isNaN(xxyy[0])==0 && isNaN(xxyy[1])==0){
					var temp =0;
						temp = Math.ceil((Math.pow(Math.pow(Math.floor(xxyy[0])-player[self][16],2)+Math.pow(Math.floor(xxyy[1])-player[self][17],2),0.5)));
						if(temp>3){
							rply.text='距離太遠，無法移動';
							return rply;
						}
						else{
							if(xxyy[0]>=1 && xxyy[0]<=10 && xxyy[1]>=1 && xxyy[1]<=10){ 
							rply.text='已移動到 座標'+Math.floor(xxyy[0])+','+Math.floor(xxyy[1]);
							player[self][16]=Math.floor(xxyy[0]);
							player[self][17]=Math.floor(xxyy[1]);
							}
							else{
								rply.text='位置錯誤，無法移動';
							return rply;
							}
						}
				}
				else{
					rply.text='格式錯誤';
					return rply;
				}
				ds++
					if(ds==3){self++;ds=1;}
					if(self>=player.length)self=0;
					rply.text+='\n\n'+BR();
			return rply;
		}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(trigger.match(/^跳過/) != null && start==1){
					self++;
					ds=1;
					if(self>=player.length)self=0;
					rply.text=BR();
			return rply;
		}
		if(trigger.match(/^GM-消滅$/) != null && start==1){
								player[self][2]=0;
								rply.text=player[self][1]+'已撤退';
								player.splice(self,1);
							if(player.length==1){
								rply.text+='\n'+ player[0][1]+'勝利';
								start=0;
								dd();
								return rply;
							}
							self++;
							ds=1;
					if(self>=player.length)self=0;
							rply.text+='\n\n'+BR();
			return rply;
		}
			if(trigger.match(/^回合/) != null){
							rply.text=BR();
			return rply;
			}
		}
			
}


function BR(){
	var rr;
	rr='輪到'+player[self][1]+'的第'+ds+'次行動'+
			'\n位置 '+player[self][16]+','+player[self][17];
	if(player[self][18]<9)rr+='\n子彈數：'+player[self][20]+'/'+player[self][21];
			rr+='\n 可用選項：'+
			'\n移動 x座標,y座標';
			if(player[self][18]>=1 && player[self][18]<=8 && player[self][20]!=player[self][21]){
				rr+='\n裝填子彈';
			}
			if(player[self][18]>=1 && player[self][18]<=5 && player[self][20]>0){
				rr+='\n單發射擊 目標';
			}
			if(player[self][18]>=1 && player[self][18]<=5 && player[self][20]>1){
				rr+='\n連發射擊 目標';
			}			
			if(player[self][18]==6 && player[self][20]>0){
				rr+='\n瞄準';
			}	
			if(player[self][18]==6 && player[self][20]>0 && player[self][25]==1){
				rr+='\n射擊 目標';
			}			
			if(player[self][18]==7 && player[self][20]>0 && player[self][25]==0){
				rr+='\n架槍';
			}
			if(player[self][18]==7 && player[self][20]>0 && player[self][25]==1){
				rr+='\n瞄準';
			}	
			if(player[self][18]==7 && player[self][20]>0 && player[self][25]==2){
				rr+='\n射擊 目標';
			}		
			if(player[self][18]==8 && player[self][20]>0 && player[self][25]==0){
				rr+='\n定樁';
			}
			if(player[self][18]==8 && player[self][20]>0 && player[self][25]==1){
				rr+='\n定位';
			}
			if(player[self][18]==8 && player[self][20]>0 && player[self][25]==2){
				rr+='\n炮擊 目標';
			}			
			if(player[self][18]>=9 && player[self][18]<=11){
				rr+='\n攻擊 目標';
			}
			rr+='\n 目標有';
			for(var k=0;k<player.length;k++){
								rr=rr+'\n'+player[k][1]+' '+player[k][16]+','+player[k][17];
							}
			return rr;
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
/*function boss01(aaab,mainMsg,trigger,id,name){
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
			f41=0;
			var od=[];
			od[0]='boss01';
			od[1]='愚人節boss';
			od[2]=4100;
			od[3]=4100;
			od[4]=0;
			od[5]=0;
			od[6]=45;
			od[7]=40;
			player[player.length]=od;
			player.sort(function (a,b){return b[7]-a[7]});
			rply.text='戰鬥展開'+
			'\n'+player[self][1]+'先手'+
			'\n 可用選項：攻擊 目標'+
			'\n 目標有';
			for(var k=0;k<player.length;k++){
				if(player[k][1]!=player[self][1])rply.text=rply.text+'\n'+player[k][1];
			}
		}
			if(trigger.match(/^戰鬥開始$/) != null && start==0 && player.length<aaab){
			rply.text='人數不足，如果確定要以'+player.length+'的人數開始'+
				'\n請輸入 戰鬥強制開始';
			}
			if(trigger.match(/^戰鬥強制開始/) != null && start==0 && player.length>0){
			start=1;
			self=0;
			f41=0;
			var od=[];
			od[0]='boss01';
			od[1]='愚人節boss';
			od[2]=4100;
			od[3]=4100;
			od[4]=0;
			od[5]=0;
			od[6]=45;
			od[7]=40;
			player[player.length]=od;
			player.sort(function (a,b){return b[7]-a[7]});
			rply.text='戰鬥展開'+
			'\n'+player[self][1]+'先手'+
			'\n 可用選項：攻擊 目標'+
			'\n 目標有';
			for(var k=0;k<player.length;k++){
				rply.text=rply.text+'\n'+player[k][1];
			}
if(player[self][0]=='boss01'){
	var rnggg;
	rnggg=rollbase.Dice(3);
	if(rnggg==1)bossatk();
	if(rnggg==2)bossSkill01();
	if(rnggg==3)bossSkill02();
}
			return rply;
		}
		if(start==1){
			if(id==player[self][0] && trigger.match(/^攻擊$/) != null && mainMsg[1] != null ){
				for(var i=0;i<player.length;i++){
					if(player[i][1]==mainMsg[1]){
						rnggg=rollbase.Dice(100);
						if(rnggg > (20 + parseInt(player[i][7]) - parseInt(player[self][7]) ) ){
							damage=Math.round(player[self][6]*(rollbase.Dice(10)+5)*0.1);
							player[i][2]=player[i][2]-damage;
							rply.text=player[i][1]+
							'\nHP '+player[i][2]+'/'+player[i][3]+'(-'+damage+')'+
							'\nbata粒子 '+player[i][4]+'/'+player[i][5];

							self++;
							if(player[i][2]<=0){
								if(i<self)self--;
								rply.text=rply.text+'\n'+player[i][1]+'已倒地';
								if(player[i][1]=='愚人節boss'){
									if(f41==1){
									player.splice(i,1);
									rply.text+='\n玩家';
									for(var n=0;n<player.length;n++){
										rply.text+='\n'+ player[n][1];
									}
									rply.text+='\n'+'勝利';
									start=0;
									dd();
									return rply;
									}
									else{
										f41++;
										player[i][2]=4100;
										rply.text=rply.text+'\n'+player[i][1]+'：愚人節快樂'+
										'\n'+player[i][1]+
									'\nHP '+player[i][2]+'/'+player[i][3]+
									'\nbata粒子 '+player[i][4]+'/'+player[i][5];
									}
									
								}
								if(player[i][1]!='愚人節boss')player.splice(i,1);
								if(player.length==1){
								rply.text+='\n'+ player[0][1]+'勝利';
								start=0;
								dd();
								return rply;
							}
							}
							if(self>=player.length)self=0;
							rply.text=rply.text+'\n\n輪到'+player[self][1]+'的回合了'+
							'\n 可用選項：攻擊 目標'+
							'\n 目標有';
							for(var k=0;k<player.length;k++){
								rply.text=rply.text+'\n'+player[k][1];
							}
				if(player[self][0]=='boss01'){
	var rnggg;
	rnggg=rollbase.Dice(3);
	if(rnggg==1)bossatk();
	if(rnggg==2)bossSkill01();
	if(rnggg==3)bossSkill02();
}
							return rply;
						}
						else{
							self++;
							if(self>=player.length)self=0;
							rply.text=player[i][1]+'閃避成功'+
							'\nHP '+player[i][2]+'/'+player[i][3]+
							'\nbata粒子 '+player[i][4]+'/'+player[i][5]+
							'\n\n輪到'+player[self][1]+'的回合了'+
							'\n 可用選項：攻擊 目標'+
							'\n 目標有';
							for(var k=0;k<player.length;k++){
								rply.text=rply.text+'\n'+player[k][1];
							}
				if(player[self][0]=='boss01'){
				var rnggg;
				rnggg=rollbase.Dice(3);
				if(rnggg==1)bossatk();
				if(rnggg==2)bossSkill01();
				if(rnggg==3)bossSkill02();
}
}
							return rply;
						}
					}
				}
				if(trigger.match(/^我命令你死去/) != null && start==1){
								player[self][2]=0;
								rply.text=player[self][1]+'已倒地';
								player.splice(self,1);
							if(player.length==1){
								rply.text+='\n'+ player[0][1]+'勝利';
								start=0;
								dd();
								return rply;
							}
							self++;
					if(self>=player.length)self=0;
					rply.text='輪到'+player[self][1]+'的回合了'+
							'\n 可用選項：攻擊 目標'+
							'\n 目標有';
				for(var k=0;k<player.length;k++){
					if(player[k][1]!=player[self][1])rply.text=rply.text+'\n'+player[k][1];
				}
				return rply;
		}
			
					if(trigger.match(/^跳過/) != null&& start==1 && (id=='U7c4779fd913aff927f26d7f6bedd87d1'||id=='Uc9b4571605aabd3e94edd7c189144278')){
					self++;
					if(self>=player.length)self=0;
					rply.text='輪到'+player[self][1]+'的回合了'+
							'\n 可用選項：攻擊 目標'+
							'\n 目標有';
				for(var k=0;k<player.length;k++){
					if(player[k][1]!=player[self][1])rply.text=rply.text+'\n'+player[k][1];
				}
				if(player[self][0]=='boss01'){
				var rnggg;
				rnggg=rollbase.Dice(3);
				if(rnggg==1)bossatk();
				if(rnggg==2)bossSkill01();
				if(rnggg==3)bossSkill02();
}
				return rply;
		}
			
			if(trigger.match(/^m/) != null){
				
			}
			else{
			rply.text='輪到'+player[self][1]+'的回合了'+
							'\n 可用選項：攻擊 目標'+
							'\n 目標有';
				for(var k=0;k<player.length;k++){
					if(player[k][1]!=player[self][1])rply.text=rply.text+'\n'+player[k][1];
				}
				return rply;
			}
		}
}

     function bossatk(){
					var atkt;
				for(var j=0;j<player.length;j++){
					var atktt= new Array();
					var rna=rollbase.Dice(10);
					atktt=atktt.concat(player);
					if(rna<=3)atktt.sort(function (a,b){return a[2]-b[2]});
					if(rna<=6 && rna>=4)atktt.sort(function (a,b){return b[6]-a[6]});
					atkt=atktt[0][1];
					if(atktt[0][1]=='愚人節boss')atkt=atktt[1][1];
					if(rna>=7){
						rnggg=rollbase.Dice(player.length);
					rnggg--;
					atkt=atktt[rnggg][1];
					if(atktt[rnggg][1]=='愚人節boss'){
						rnggg++;
						if((rnggg)>=player.length){rnggg=0;}
						atkt=atktt[rnggg][1];	
						}
					}
				}
			rply.text+='\n\n愚人節boss 攻擊 '+atkt;
				for(var i=0;i<player.length;i++){
					if(player[i][1]==atkt){
						rnggg=rollbase.Dice(100);
						if(rnggg > (20 + parseInt(player[i][7]) - parseInt(player[self][7]) ) ){
							damage=Math.round(player[self][6]*(rollbase.Dice(10)+5)*0.1);
							player[i][2]=player[i][2]-damage;
							rply.text=rply.text+'\n\n'+player[i][1]+
							'\nHP '+player[i][2]+'/'+player[i][3]+'(-'+damage+')'+
							'\nbata粒子 '+player[i][4]+'/'+player[i][5];
							self++;
							if(player[i][2]<=0){
								if(i<self)self--;
								rply.text=rply.text+'\n'+player[i][1]+'已倒地';
								player.splice(i,1);
							}
						
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
function bossSkill01(){
					var atkt;
				for(var j=0;j<player.length;j++){
					var atktt= new Array();
					atktt=atktt.concat(player);
					rnggg=rollbase.Dice(player.length);
					rnggg--;
					atkt=atktt[rnggg][1];
					if(atktt[rnggg][1]=='愚人節boss'){
						rnggg++;
						if((rnggg)>=player.length){rnggg=0;}
						atkt=atktt[rnggg][1];
					
					}
				}
			rply.text+='\n\n愚人節boss 發動技能：反轉 '+atkt;
				for(var i=0;i<player.length;i++){
					if(player[i][1]==atkt){
						rnggg=rollbase.Dice(100);
						if(rnggg >50 ){
							player[i][6]=player[i][6]*-1;
							rply.text=rply.text+'\n\n'+player[i][1]+
							'\nHP '+player[i][2]+'/'+player[i][3]+
							'\n物理適性 '+player[i][6];
							self++;
							if(player[i][2]<=0){
								if(i<self)self--;
								rply.text=rply.text+'\n'+player[i][1]+'已倒地';
								player.splice(i,1);
							}
							
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
							rply.text=rply.text+'\n技能失敗'+'\n'+player[i][1]+
							'\nHP '+player[i][2]+'/'+player[i][3]+
							'\nbata粒子 '+player[i][4]+'/'+player[i][5]+
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

function bossSkill02(){
					var atkt;
				for(var j=0;j<player.length;j++){
					var atktt= new Array();
					atktt=atktt.concat(player);
					atktt.sort(function (a,b){return b[2]-a[2]});
					atkt=atktt[0][1];
					if(atktt[0][1]=='愚人節boss')atkt=atktt[1][1];
				}
			rply.text+='\n\n愚人節boss 發動技能：吸血 '+atkt;
				for(var i=0;i<player.length;i++){
					if(player[i][1]==atkt){
						rnggg=rollbase.Dice(100);
						if(rnggg > (20 + parseInt(player[i][7]) - parseInt(player[self][7]) ) ){
							damage=Math.round(player[self][6]*(rollbase.Dice(10)+5)*0.1);
							player[i][2]=player[i][2]-damage;
							player[self][2]=player[self][2]+damage;
							rply.text=rply.text+'\n\n'+player[i][1]+
							'\nHP '+player[i][2]+'/'+player[i][3]+'(-'+damage+')'+
							'\nbata粒子 '+player[i][4]+'/'+player[i][5]+
							'\n'+player[self][1]+
						'\nHP '+player[self][2]+'/'+player[self][3]+'(+'+damage+')'+
							'\nbata粒子 '+player[self][4]+'/'+player[self][5];
							self++;
							if(player[i][2]<=0){
								if(i<self)self--;
								rply.text=rply.text+'\n'+player[i][1]+'已倒地';
								if(player[i][1]=='愚人節boss'){
									player.splice(i,1);
									rply.text+='\n玩家';
									for(var n=0;n<player.length;n++){
										rply.text+='\n'+ player[0][1];
									}
									rply.text+='\n'+'勝利';
								}
								player.splice(i,1);
							}
							
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
	
}*/


module.exports = {
	battles:battles,
	dd:dd
};


