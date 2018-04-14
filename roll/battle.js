var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var ox = require('./Character.js');
var xweapon=require('./weapon.js');
var faf = require('../index.js');
var AJT=0;
var channelAccessToken = process.env.LINE_CHANNEL_ACCESSTOKEN;
var channelSecret = process.env.LINE_CHANNEL_SECRET;
var linebot = require('linebot');///030
 var channelId='1567989750';
var bot = linebot({
  channelId: channelId,
  channelSecret: channelSecret,
  channelAccessToken: channelAccessToken
});





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
var RAAUF=0,RGU=0;
function dd() {
player.length=0;
RAAUF=0;
								RGU=0;
}
function battles(id,name,ab) {
	var ggg,ttt;
	let msgSplitor = (/\S+/ig);	
	let mainMsg = ab.match(msgSplitor); //定義輸入字串
	let trigger = mainMsg[0].toString()
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	if (trigger.match(/武器/) != null && start==0){
	if (trigger.match(/製作/)!= null) return xweapon.weapon_make(id,name,mainMsg[1],mainMsg[2]) ;
	if (trigger.match(/查看/)!= null) return xweapon.weapon_view(id,name) ;
	if (trigger.match(/破壞/)!= null) return xweapon.weapon_break(id,name) ;
	}
	if(trigger.match(/^2人棋盤模式/) != null && start==0){
		mode=2;
		dd();
	        rply.text='已轉為2人棋盤模式';
		return rply;
	}
	if(trigger.match(/^3人棋盤模式/) != null && start==0){
		mode=3;
		dd();
	        rply.text='已轉為3人棋盤模式';
		return rply;
	}
	if(trigger.match(/^4人棋盤模式/) != null && start==0){
		mode=4;
		dd();
	        rply.text='已轉為4人棋盤模式';
		return rply;
	}
if(trigger.match(/^2人陣營模式/) != null && start==0){
		mode=12;
		dd();
	        rply.text='已轉為2人陣營模式';
		return rply;
	}
	if(trigger.match(/^4人陣營模式/) != null && start==0){
		mode=13;
		dd();
	        rply.text='已轉為4人陣營模式';
		return rply;
	}
	if(trigger.match(/^6人陣營模式/) != null && start==0){
		mode=14;
		dd();
	        rply.text='已轉為6人陣營模式';
		return rply;
	}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	rply.text='';
		if(mode==2){
			cb(2,mainMsg,trigger,id,name);
		return rply;
		}
		if(mode==3){
			cb(3,mainMsg,trigger,id,name);
		return rply;
		}
		if(mode==4){
			cb(4,mainMsg,trigger,id,name);
		return rply;
		}
		if(mode==12){
			ACV(2,mainMsg,trigger,id,name);
		return rply;
		}
		if(mode==13){
			ACV(4,mainMsg,trigger,id,name);
		return rply;
		}
		if(mode==14){
			ACV(6,mainMsg,trigger,id,name);
		return rply;
		}
}
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
		od[18]=Number(WV[0]);//武器種類
		od[19]=Number(WV[1]);//基礎傷害
		od[20]=Number(WV[2]);//現有子彈
		od[21]=Number(WV[2]);//總子彈
		od[22]=Number(WV[3]);//傷害倍率
		od[23]=Number(WV[4]);//連發數
		od[24]=Number(WV[5]);//射程
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
				player[ff][16]=25;
				player[ff][17]=25;
				ff++;
			if(ff>=aaab)ff=0;
			if(aaab>=3){
				player[ff][16]=25;
				player[ff][17]=1;
				ff++;
			}
			if(ff>=aaab)ff=0;
			if(aaab>=4){
				player[ff][16]=1;
				player[ff][17]=25;
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
							rply.text=player[self][1]+'沒有命中'+
							'\n\n'+BR();
			return rply;
						}
						if(Hit>85 && player[self][18]==10){
							ds++;
							if(ds==3){self++;ds=1;}
							if(self>=player.length)self=0;
							rply.text=player[self][1]+'沒有命中'+
							'\n\n'+BR();
			return rply;
						}
							if(Hit>70 && player[self][18]==11){
								rply.text=player[self][1]+'沒有命中';
								ds++;
							if(ds==3){self++;ds=1;}
							if(self>=player.length)self=0;
							
							rply.text+='\n\n'+BR();
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
							rply.text=player[i][1]+'閃避成功'+
							'\nHP '+player[i][2]+'/'+player[i][3]+
							'\nbata粒子 '+player[i][4]+'/'+player[i][5];
						ds++;
							if(ds==3){self++;ds=1;}
							if(self>=player.length)self=0;
							
							rply.text+='\n\n'+BR();
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
						player[self][20]--;
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
							if(Critical<=50 && player[self][18]==1)damage=parseInt(damage*1.5);
							if(Critical<=60 && player[self][18]==2)damage=parseInt(damage*1.5);
							if(Critical<=20 && player[self][18]==3)damage=parseInt(damage*1.5);
							if(Critical<=30 && player[self][18]==4)damage=parseInt(damage*1.5);
							if(Critical<=40 && player[self][18]==5)damage=parseInt(damage*1.5);
							player[i][2]=player[i][2]-damage;
							rply.text=player[i][1]+
							'\nHP '+player[i][2]+'/'+player[i][3];

							
							rply.text+='(-'+damage+')';
							if(Critical<=50 && player[self][18]==9)rply.text+='Critical';
							if(Critical<=60 && player[self][18]==10)rply.text+='Critical';
							if(Critical<=20 && player[self][18]==11)rply.text+='Critical';
							if(Critical<=30 && player[self][18]==10)rply.text+='Critical';
							if(Critical<=40 && player[self][18]==11)rply.text+='Critical';
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
			if(id==player[self][0] && trigger.match(/^連發射擊$/) != null && mainMsg[1] != null &&player[self][18]>=1 && player[self][18]<=5 && player[self][20]>1){
				for(var i=0;i<player.length;i++){
					if(player[i][1]==mainMsg[1] ){
						var temp =0;
						temp = Math.ceil((Math.pow(Math.pow(player[i][16]-player[self][16],2)+Math.pow(player[i][17]-player[self][17],2),0.5)));
						if(temp>player[self][24]){
							rply.text='距離'+player[i][1]+'太遠，無法攻擊';
							return rply;
						}
						console.log(player[self][23]+'  1');
												console.log(player[self][20]+'  2');
						var bh=player[self][23];
												console.log(bh+'  3');
						if(bh>player[self][20]){bh=player[self][20];}
												console.log(bh+'  4');
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
							if(Critical<=50 && player[self][18]==1)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=60 && player[self][18]==2)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=20 && player[self][18]==3)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=30 && player[self][18]==4)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=40 && player[self][18]==5)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							hitd[o]=hhiitt[o];
							if(Critical<=50 && player[self][18]==1)hitd[o]+='(Critical)';
							if(Critical<=60 && player[self][18]==2)hitd[o]+='(Critical)';
							if(Critical<=20 && player[self][18]==3)hitd[o]+='(Critical)';
							if(Critical<=30 && player[self][18]==4)hitd[o]+='(Critical)';
							if(Critical<=40 && player[self][18]==5)hitd[o]+='(Critical)';
							if(rnggg <  (parseInt(player[i][7])-20)){
								hhiitt[o]=0;
								hitd[o]='dodge';
							}
						}
						if(Hit<=80 && player[self][18]==2){
							hhiitt[o]=Math.round(player[self][19]*player[self][22]*(rollbase.Dice(10)+5)*0.1);
							if(Critical<=50 && player[self][18]==1)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=60 && player[self][18]==2)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=20 && player[self][18]==3)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=30 && player[self][18]==4)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=40 && player[self][18]==5)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							hitd[o]=hhiitt[o];
							if(Critical<=50 && player[self][18]==1)hitd[o]+='(Critical)';
							if(Critical<=60 && player[self][18]==2)hitd[o]+='(Critical)';
							if(Critical<=20 && player[self][18]==3)hitd[o]+='(Critical)';
							if(Critical<=30 && player[self][18]==4)hitd[o]+='(Critical)';
							if(Critical<=40 && player[self][18]==5)hitd[o]+='(Critical)';
							if(rnggg <  (parseInt(player[i][7])-20)){
								hhiitt[o]=0;
								hitd[o]='dodge';
							}
						}
						if(Hit<=40 && player[self][18]==3){
							hhiitt[o]=Math.round(player[self][19]*player[self][22]*(rollbase.Dice(10)+5)*0.1);
							if(Critical<=50 && player[self][18]==1)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=60 && player[self][18]==2)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=20 && player[self][18]==3)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=30 && player[self][18]==4)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=40 && player[self][18]==5)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							hitd[o]=hhiitt[o];
							if(Critical<=50 && player[self][18]==1)hitd[o]+='(Critical)';
							if(Critical<=60 && player[self][18]==2)hitd[o]+='(Critical)';
							if(Critical<=20 && player[self][18]==3)hitd[o]+='(Critical)';
							if(Critical<=30 && player[self][18]==4)hitd[o]+='(Critical)';
							if(Critical<=40 && player[self][18]==5)hitd[o]+='(Critical)';
							if(rnggg <  (parseInt(player[i][7])-20)){
								hhiitt[o]=0;
								hitd[o]='dodge';
							}
						}
						if(Hit<=50 && player[self][18]==4){
							hhiitt[o]=Math.round(player[self][19]*player[self][22]*(rollbase.Dice(10)+5)*0.1);
							if(Critical<=50 && player[self][18]==1)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=60 && player[self][18]==2)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=20 && player[self][18]==3)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=30 && player[self][18]==4)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=40 && player[self][18]==5)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							hitd[o]=hhiitt[o];
							if(Critical<=50 && player[self][18]==1)hitd[o]+='(Critical)';
							if(Critical<=60 && player[self][18]==2)hitd[o]+='(Critical)';
							if(Critical<=20 && player[self][18]==3)hitd[o]+='(Critical)';
							if(Critical<=30 && player[self][18]==4)hitd[o]+='(Critical)';
							if(Critical<=40 && player[self][18]==5)hitd[o]+='(Critical)';
							if(rnggg <  (parseInt(player[i][7])-20)){
								hhiitt[o]=0;
								hitd[o]='dodge';
							}
						}
						if(Hit<=60 && player[self][18]==5){
							hhiitt[o]=Math.round(player[self][19]*player[self][22]*(rollbase.Dice(10)+5)*0.1);
							if(Critical<=50 && player[self][18]==1)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=60 && player[self][18]==2)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=20 && player[self][18]==3)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=30 && player[self][18]==4)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=40 && player[self][18]==5)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							hitd[o]=hhiitt[o];
							if(Critical<=50 && player[self][18]==1)hitd[o]+='(Critical)';
							if(Critical<=60 && player[self][18]==2)hitd[o]+='(Critical)';
							if(Critical<=20 && player[self][18]==3)hitd[o]+='(Critical)';
							if(Critical<=30 && player[self][18]==4)hitd[o]+='(Critical)';
							if(Critical<=40 && player[self][18]==5)hitd[o]+='(Critical)';
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
							if(Critical<=50 && player[self][18]==1)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=60 && player[self][18]==2)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=20 && player[self][18]==3)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=30 && player[self][18]==4)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=40 && player[self][18]==5)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							hitd[o]=hhiitt[o];
							if(Critical<=50 && player[self][18]==1)hitd[o]+='(Critical)';
							if(Critical<=60 && player[self][18]==2)hitd[o]+='(Critical)';
							if(Critical<=20 && player[self][18]==3)hitd[o]+='(Critical)';
							if(Critical<=30 && player[self][18]==4)hitd[o]+='(Critical)';
							if(Critical<=40 && player[self][18]==5)hitd[o]+='(Critical)';
							if(rnggg <  (parseInt(player[i][7])-20)){
								hhiitt[o]=0;
								hitd[o]='dodge';
							}
						}
						if(Hit<=60 && player[self][18]==2){
							hhiitt[o]=Math.round(player[self][19]*player[self][22]*(rollbase.Dice(10)+5)*0.1);
							if(Critical<=50 && player[self][18]==1)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=60 && player[self][18]==2)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=20 && player[self][18]==3)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=30 && player[self][18]==4)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=40 && player[self][18]==5)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							hitd[o]=hhiitt[o];
							if(Critical<=50 && player[self][18]==1)hitd[o]+='(Critical)';
							if(Critical<=60 && player[self][18]==2)hitd[o]+='(Critical)';
							if(Critical<=20 && player[self][18]==3)hitd[o]+='(Critical)';
							if(Critical<=30 && player[self][18]==4)hitd[o]+='(Critical)';
							if(Critical<=40 && player[self][18]==5)hitd[o]+='(Critical)';
							if(rnggg <  (parseInt(player[i][7])-20)){
								hhiitt[o]=0;
								hitd[o]='dodge';
							}
						}
						if(Hit<=20 && player[self][18]==3){
							hhiitt[o]=Math.round(player[self][19]*player[self][22]*(rollbase.Dice(10)+5)*0.1);
							if(Critical<=50 && player[self][18]==1)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=60 && player[self][18]==2)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=20 && player[self][18]==3)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=30 && player[self][18]==4)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=40 && player[self][18]==5)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							hitd[o]=hhiitt[o];
							if(Critical<=50 && player[self][18]==1)hitd[o]+='(Critical)';
							if(Critical<=60 && player[self][18]==2)hitd[o]+='(Critical)';
							if(Critical<=20 && player[self][18]==3)hitd[o]+='(Critical)';
							if(Critical<=30 && player[self][18]==4)hitd[o]+='(Critical)';
							if(Critical<=40 && player[self][18]==5)hitd[o]+='(Critical)';
							if(rnggg <  (parseInt(player[i][7])-20)){
								hhiitt[o]=0;
								hitd[o]='dodge';
							}
						}
						if(Hit<=30 && player[self][18]==4){
							hhiitt[o]=Math.round(player[self][19]*player[self][22]*(rollbase.Dice(10)+5)*0.1);
							if(Critical<=50 && player[self][18]==1)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=60 && player[self][18]==2)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=20 && player[self][18]==3)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=30 && player[self][18]==4)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=40 && player[self][18]==5)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							hitd[o]=hhiitt[o];
							if(Critical<=50 && player[self][18]==1)hitd[o]+='(Critical)';
							if(Critical<=60 && player[self][18]==2)hitd[o]+='(Critical)';
							if(Critical<=20 && player[self][18]==3)hitd[o]+='(Critical)';
							if(Critical<=30 && player[self][18]==4)hitd[o]+='(Critical)';
							if(Critical<=40 && player[self][18]==5)hitd[o]+='(Critical)';
							if(rnggg <  (parseInt(player[i][7])-20)){
								hhiitt[o]=0;
								hitd[o]='dodge';
							}
						}
						if(Hit<=40 && player[self][18]==5){
							hhiitt[o]=Math.round(player[self][19]*player[self][22]*(rollbase.Dice(10)+5)*0.1);
							if(Critical<=50 && player[self][18]==1)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=60 && player[self][18]==2)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=20 && player[self][18]==3)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=30 && player[self][18]==4)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=40 && player[self][18]==5)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							hitd[o]=hhiitt[o];
							if(Critical<=50 && player[self][18]==1)hitd[o]+='(Critical)';
							if(Critical<=60 && player[self][18]==2)hitd[o]+='(Critical)';
							if(Critical<=20 && player[self][18]==3)hitd[o]+='(Critical)';
							if(Critical<=30 && player[self][18]==4)hitd[o]+='(Critical)';
							if(Critical<=40 && player[self][18]==5)hitd[o]+='(Critical)';
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
					ds++;
					if(ds==3){self++;ds=1;}
					if(self>=player.length)self=0;
					rply.text+=BR();
			return rply;
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^能源充填$/) != null  && player[self][4]!=player[self][5]){
					player[self][4]=player[self][5];
					ds++;
					if(ds==3){self++;ds=1;}
					if(self>=player.length)self=0;
					rply.text+=BR();
			return rply;
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^瞄準$/) != null && player[self][18]==6 && player[self][20]>0 ){
					player[self][25]=1;//架槍等動作
					player[self][26]=rollbase.Dice(100);//命中(狙擊)
					rply.text+='命中可能性：'+player[self][26];
					ds++;
					if(ds==3){self++;ds=1;}
					if(self>=player.length)self=0;
					rply.text+='\n\n'+BR();
			return rply;
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^射擊$/) != null && mainMsg[1] != null && player[self][18]==6 && player[self][20]>0 && player[self][25]==1){
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
						player[self][20]--;
						if(Hit>player[self][26] ){
								rply.text=player[self][1]+'沒有命中';
								player[self][25]=0;
							ds++;
							
							if(ds==3){self++;ds=1;}
							if(self>=player.length)self=0;
							
								rply.text+='\n\n'+BR();
							
							
			return rply;
						}

						damage=Math.round(player[self][19]*player[self][22]*(rollbase.Dice(10)+5)*0.1);
							if(Critical<=30)damage=parseInt(damage*1.5);
							player[i][2]=player[i][2]-damage;
							rply.text=player[i][1]+
							'\nHP '+player[i][2]+'/'+player[i][3];

							
							rply.text+='(-'+damage+')';
							if(Critical<=30 )rply.text+='Critical';
							rply.text+='\nbata粒子 '+player[i][4]+'/'+player[i][5];
							player[self][25]=0;
							ds++;
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
			if(id==player[self][0] && trigger.match(/^架槍$/) != null && player[self][18]==7 && player[self][25]==0){
					player[self][25]=2;//架槍等動作
					rply.text+='架槍完畢'+'\n\n';
					ds++;
					if(ds==3){self++;ds=1;}
					if(self>=player.length)self=0;
					rply.text+=BR()
			return rply;
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^解除架槍$/) != null && player[self][18]==7 && player[self][25]>=2){
					player[self][25]=0;//架槍等動作
					rply.text+='解除架槍完畢'+'\n\n';
					ds++;
					if(ds==3){self++;ds=1;}
					if(self>=player.length)self=0;
					rply.text+=BR()
			return rply;
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^瞄準$/) != null && player[self][18]==7 && player[self][25]>=2){
					player[self][25]=3;//架槍等動作
					player[self][26]=rollbase.Dice(100);//命中(狙擊)
					rply.text+='命中可能性：'+player[self][26]+'\n\n';
					ds++;
					if(ds==3){self++;ds=1;}
					if(self>=player.length)self=0;
					rply.text+=BR()
			return rply;
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^射擊$/) != null && mainMsg[1] != null && player[self][18]==7 && player[self][20]>0 && player[self][25]==3){
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
						player[self][20]--;
						if(Hit>player[self][26] ){
							player[self][25]=2;
							rply.text=player[self][1]+'沒有命中';
							ds++;
							if(ds==3){self++;ds=1;}
							if(self>=player.length)self=0;
						
							rply.text+='\n\n'+BR();
							
			return rply;
						}

						damage=Math.round(player[self][19]*player[self][22]*(rollbase.Dice(10)+5)*0.1);
							if(Critical<=10)damage=parseInt(damage*1.5);
							player[i][2]=player[i][2]-damage;
							rply.text=player[i][1]+
							'\nHP '+player[i][2]+'/'+player[i][3];

							
							rply.text+='(-'+damage+')';
							if(Critical<=10 )rply.text+='Critical';
							rply.text+='\nbata粒子 '+player[i][4]+'/'+player[i][5];
							player[self][25]=2;
							ds++;
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
			if(id==player[self][0] && trigger.match(/^定樁$/) != null && player[self][18]==8 && player[self][25]==0){
					player[self][25]=2;//架槍等動作
					rply.text+='定樁完畢'+'\n\n';
					ds++;
					if(ds==3){self++;ds=1;}
					if(self>=player.length)self=0;
					rply.text+=BR()
			return rply;
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^解除定樁$/) != null && player[self][18]==8 && player[self][25]>=2){
					player[self][25]=0;//架槍等動作
					rply.text+='解除定樁完畢'+'\n\n';
					ds++;
					if(ds==3){self++;ds=1;}
					if(self>=player.length)self=0;
					rply.text+=BR()
			return rply;
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^定位$/) != null && player[self][18]==8 && player[self][25]==2){
					player[self][25]=3;//架槍等動作
					ds++;
					if(ds==3){self++;ds=1;}
					if(self>=player.length)self=0;
					rply.text+=BR()
			return rply;
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^炮擊$/) != null && mainMsg[1] != null && player[self][18]==8 && player[self][20]>0 && player[self][25]==3){
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
						player[self][20]--;
					for(var f=0;f<player.length;f++){
						if(player[i][16]==player[f][16] && player[i][17]==player[f][17]){
							damage=Math.round((rollbase.Dice(player[self][19])*player[self][22]*(rollbase.Dice(10)+5)*0.1));
							player[f][2]=player[f][2]-damage;
							rply.text+=player[f][1]+
							'\nHP '+player[f][2]+'/'+player[f][3];
							rply.text+='(-'+damage+')\n';
							
						}
					}
					
							player[self][25]=2;
							ds++
							if(ds==3){self++;ds=1;}
						for(var f=0;f<player.length;f++){
							if(player[f][2]<=0){
								if(f<self)self--;
								if(f==self){self--;ds=1;}
								rply.text=rply.text+'\n'+player[f][1]+'已倒地';
								player.splice(f,1);
							}
						}
							if(player.length==1){
								rply.text+='\n'+ player[0][1]+'勝利';
								start=0;
								dd();
								return rply;
							}
								if(player.length==0){
								rply.text+='\n'+'沒有人勝利';
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
			if(id==player[self][0] && trigger.match(/^移動/) != null && start==1 &&  mainMsg[1] != null && player[self][25]<2){
				
				let xxyy = mainMsg[1].split(','); //定義輸入字串
				if(isNaN(xxyy[0])==0 && isNaN(xxyy[1])==0){
					var temp =0;
						temp = Math.ceil((Math.pow(Math.pow(Math.floor(xxyy[0])-player[self][16],2)+Math.pow(Math.floor(xxyy[1])-player[self][17],2),0.5)));
						if(temp>3){
							rply.text='距離太遠，無法移動';
							return rply;
						}
						else{
							if(xxyy[0]>=1 && xxyy[0]<=25 && xxyy[1]>=1 && xxyy[1]<=25){ 
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
			if(id==player[self][0] && trigger.match(/^磁懸推進/) != null && start==1 &&  mainMsg[1] != null && player[self][14]=='A.A.U.F'){
				
				let xxyy = mainMsg[1].split(','); //定義輸入字串
				if(isNaN(xxyy[0])==0 && isNaN(xxyy[1])==0){
					var temp =0;
						temp = Math.ceil((Math.pow(Math.pow(Math.floor(xxyy[0])-player[self][16],2)+Math.pow(Math.floor(xxyy[1])-player[self][17],2),0.5)));
						if(temp>(Math.floor(player[self][4])/10)){
							rply.text='Bata粒子過少，無法移動';
							return rply;
						}
						else{
							if(xxyy[0]>=1 && xxyy[0]<=25 && xxyy[1]>=1 && xxyy[1]<=25){ 
							player[self][4]-=temp*10;
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
			if(id==player[self][0] && trigger.match(/^脈衝推進/) != null && start==1 &&  mainMsg[1] != null && player[self][14]=='G.U.'){
				
				let xxyy = mainMsg[1].split(','); //定義輸入字串
				if(isNaN(xxyy[0])==0 && isNaN(xxyy[1])==0){
					var temp =0;
						temp = Math.ceil((Math.pow(Math.pow(Math.floor(xxyy[0])-player[self][16],2)+Math.pow(Math.floor(xxyy[1])-player[self][17],2),0.5)));
						if(temp>(Math.floor(player[self][4])/20)){
							rply.text='Bata粒子過少，無法移動';
							return rply;
						}
						else{
							if(xxyy[0]>=1 && xxyy[0]<=25 && xxyy[1]>=1 && xxyy[1]<=25){ 
							player[self][4]-=temp*20;
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




//--------------------------------------------------------------------------------------------------------------------------------------------------------------
function ACV(aaab,mainMsg,trigger,id,name){
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
		  
		if(ox.oC(i,19)==0){
			rply.text=name+'你沒有武器';
		return rply;
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
		if(RAAUF>=(aaab/2) && od[14]=='A.A.U.F'){
			rply.text='AAUF人數已滿';
		return rply;
		}
		if(RGU>=(aaab/2) && od[14]=='G.U.'){
			rply.text='GU人數已滿';
		return rply;
		}
		if(od[14]=='A.A.U.F')RAAUF++;
		if(od[14]=='G.U.')RGU++;
		console.log(RAAUF+'  '+RGU);
		od[15]=ox.oC(i,17);//金幣
		od[16]=0;//x
		od[17]=0;//y
		var WMK=ox.oC(i,19);
		var WV = WMK.split(','); //定義輸入字串
		od[27]=WV[6];//武器名稱
		od[18]=Number(WV[0]);//武器種類
		od[19]=Number(WV[1]);//基礎傷害
		od[20]=Number(WV[2]);//現有子彈
		od[21]=Number(WV[2]);//總子彈
		od[22]=Number(WV[3]);//傷害倍率
		od[23]=Number(WV[4]);//連發數
		od[24]=Number(WV[5]);//射程
		od[25]=0;//架槍等動作
		od[26]=0;//命中(狙擊)
		player[player.length]=od;
		rply.text=name+'你的'+od[1]+'已參與\n'+
			'陣營'+od[14]+
			'\nHP '+od[2]+'/'+od[3]+
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
					if(player[i][14]=='A.A.U.F')RAAUF--;
					if(player[i][14]=='G.U.')RGU--;
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
			ds=1;
			player.sort(function (a,b){return b[7]-a[7]});
			if(aaab==2){
				if(player[0][14]=='A.A.U.F'){
					player[0][16]=13;
					player[0][17]=13;
					player[1][16]=13;
					player[1][17]=38;
				}
				else{
					player[0][16]=13;
					player[0][17]=38;
					player[1][16]=13;
					player[1][17]=13;
				}
			}
				if(aaab==4){
					var af=1,gf=1;
				for(var g=0;g<4;g++){
					if(player[g][14]=='A.A.U.F'){
					player[g][16]=1+8*af;
					player[g][17]=10;
					af++;
				}
				else{
					player[g][16]=1+8*gf;
					player[g][17]=41;
					gf++;
					}
				}
				}
				if(aaab==6){
					var af=1,gf=1;
				for(var g=0;g<6;g++){
					if(player[g][14]=='A.A.U.F'){
						if(g==0){
							player[g][16]=13;
							player[g][17]=13;
						}
						else{
							player[g][16]=1+8*af;
							player[g][17]=6;
						}
					
					af++;
				}
				else{
					if(g==0){
							player[g][16]=13;
							player[g][17]=38;
						}
					else{
						player[g][16]=1+8*gf;
						player[g][17]=45;
						}
					gf++;
					}
				}
				}
			var rt=BR();
			rply.text=rt;
			 AJT = setTimeout(function(){
				 clearTimeout(AJT);
				var rr='';
				self++;
				ds=1;
				if(self>=player.length)self=0;
				rr='自動跳過\n\n'+BR();
				bot.push('Ca8fea1f8ef1ef2519860ee21fb740fd2',rr);
				 AJT = setTimeout(function(){
					var rr='';
					self++;
					ds=1;
					if(self>=player.length)self=0;
					rr='自動跳過\n\n'+BR();
					bot.push('Ca8fea1f8ef1ef2519860ee21fb740fd2',rr);
				},180000);

			},180000);
			return rply;
		}
		
		if(start==1){
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^攻擊$/) != null && mainMsg[1] != null &&player[self][18]>=9 && player[self][18]<=11 ){
				clearTimeout(AJT);
				 AJT = setTimeout(function(){
					 clearTimeout(AJT);
				var rr='';
				self++;
				ds=1;
				if(self>=player.length)self=0;
				rr='自動跳過\n\n'+BR();
				bot.push('Ca8fea1f8ef1ef2519860ee21fb740fd2',rr);
				 AJT = setTimeout(function(){
					var rr='';
					self++;
					ds=1;
					if(self>=player.length)self=0;
					rr='自動跳過\n\n'+BR();
					bot.push('Ca8fea1f8ef1ef2519860ee21fb740fd2',rr);
				},180000);

			},180000);
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
							rply.text=player[self][1]+'沒有命中'+
							'\n\n'+BR();
			return rply;
						}
						if(Hit>85 && player[self][18]==10){
							ds++;
							if(ds==3){self++;ds=1;}
							if(self>=player.length)self=0;
							rply.text=player[self][1]+'沒有命中'+
							'\n\n'+BR();
			return rply;
						}
							if(Hit>70 && player[self][18]==11){
								rply.text=player[self][1]+'沒有命中';
								ds++;
							if(ds==3){self++;ds=1;}
							if(self>=player.length)self=0;
							
							rply.text+='\n\n'+BR();
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
								rply.text=rply.text+'\n'+player[i][1]+'已撤退';
								
								player.splice(i,1);
							}
						var ap=0,gp=0;
							for(var g=0;g<player.length;g++){
								if(player[g][14]=='A.A.U.F')ap++;
								if(player[g][14]=='G.U.')gp++;
							}
								if(ap==0){
								rply.text+='\nG.U勝利';
								start=0;
								RAAUF=0;
								RGU=0;
								dd();
								return rply;
							}
							if(gp==0){
								rply.text+='\nA.A.U.F勝利';
								start=0;
								RAAUF=0;
								RGU=0;
								dd();
								return rply;
							}
							
							if(self>=player.length)self=0;
							rply.text=rply.text+'\n\n'+BR();
			return rply;
						}
						else{
							rply.text=player[i][1]+'閃避成功'+
							'\nHP '+player[i][2]+'/'+player[i][3]+
							'\nbata粒子 '+player[i][4]+'/'+player[i][5];
						ds++;
							if(ds==3){self++;ds=1;}
							if(self>=player.length)self=0;
							
							rply.text+='\n\n'+BR();
			return rply;
						}
					}
				}
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^單發射擊$/) != null && mainMsg[1] != null &&player[self][18]>=1 && player[self][18]<=5 && player[self][20]>0){
				
				clearTimeout(AJT);
				 AJT = setTimeout(function(){
				var rr='';
				self++;
				ds=1;
				if(self>=player.length)self=0;
				rr='自動跳過\n\n'+BR();
				bot.push('Ca8fea1f8ef1ef2519860ee21fb740fd2',rr);
				 AJT = setTimeout(function(){
					var rr='';
					self++;
					ds=1;
					if(self>=player.length)self=0;
					rr='自動跳過\n\n'+BR();
					bot.push('Ca8fea1f8ef1ef2519860ee21fb740fd2',rr);
				},180000);

			},180000);
				
				
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
						player[self][20]--;
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
							if(Critical<=50 && player[self][18]==1)damage=parseInt(damage*1.5);
							if(Critical<=60 && player[self][18]==2)damage=parseInt(damage*1.5);
							if(Critical<=20 && player[self][18]==3)damage=parseInt(damage*1.5);
							if(Critical<=30 && player[self][18]==4)damage=parseInt(damage*1.5);
							if(Critical<=40 && player[self][18]==5)damage=parseInt(damage*1.5);
							player[i][2]=player[i][2]-damage;
							rply.text=player[i][1]+
							'\nHP '+player[i][2]+'/'+player[i][3];

							
							rply.text+='(-'+damage+')';
							if(Critical<=50 && player[self][18]==9)rply.text+='Critical';
							if(Critical<=60 && player[self][18]==10)rply.text+='Critical';
							if(Critical<=20 && player[self][18]==11)rply.text+='Critical';
							if(Critical<=30 && player[self][18]==10)rply.text+='Critical';
							if(Critical<=40 && player[self][18]==11)rply.text+='Critical';
							rply.text+='\nbata粒子 '+player[i][4]+'/'+player[i][5];
							
							ds++
							if(ds==3){self++;ds=1;}
							if(player[i][2]<=0){
								if(i<self)self--;
								rply.text=rply.text+'\n'+player[i][1]+'已撤退';
								
								player.splice(i,1);
							}
							
							var ap=0,gp=0;
							for(var g=0;g<player.length;g++){
								if(player[g][14]=='A.A.U.F')ap++;
								if(player[g][14]=='G.U.')gp++;
							}
								if(ap==0){
								rply.text+='\nG.U勝利';
								start=0;
								RAAUF=0;
								RGU=0;
								dd();
								return rply;
							}
							if(gp==0){
								rply.text+='\nA.A.U.F勝利';
								start=0;
								RAAUF=0;
								RGU=0;
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
				
				clearTimeout(AJT);
				 AJT = setTimeout(function(){
				var rr='';
				self++;
				ds=1;
				if(self>=player.length)self=0;
				rr='自動跳過\n\n'+BR();
				bot.push('Ca8fea1f8ef1ef2519860ee21fb740fd2',rr);
				 AJT = setTimeout(function(){
					var rr='';
					self++;
					ds=1;
					if(self>=player.length)self=0;
					rr='自動跳過\n\n'+BR();
					bot.push('Ca8fea1f8ef1ef2519860ee21fb740fd2',rr);
				},180000);

			},180000);
				
				for(var i=0;i<player.length;i++){
					if(player[i][1]==mainMsg[1] ){
						var temp =0;
						temp = Math.ceil((Math.pow(Math.pow(player[i][16]-player[self][16],2)+Math.pow(player[i][17]-player[self][17],2),0.5)));
						if(temp>player[self][24]){
							rply.text='距離'+player[i][1]+'太遠，無法攻擊';
							return rply;
						}
						console.log(player[self][23]+'  1');
												console.log(player[self][20]+'  2');
						var bh=player[self][23];
												console.log(bh+'  3');
						if(bh>player[self][20]){bh=player[self][20];}
												console.log(bh+'  4');
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
							if(Critical<=50 && player[self][18]==1)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=60 && player[self][18]==2)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=20 && player[self][18]==3)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=30 && player[self][18]==4)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=40 && player[self][18]==5)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							hitd[o]=hhiitt[o];
							if(Critical<=50 && player[self][18]==1)hitd[o]+='(Critical)';
							if(Critical<=60 && player[self][18]==2)hitd[o]+='(Critical)';
							if(Critical<=20 && player[self][18]==3)hitd[o]+='(Critical)';
							if(Critical<=30 && player[self][18]==4)hitd[o]+='(Critical)';
							if(Critical<=40 && player[self][18]==5)hitd[o]+='(Critical)';
							if(rnggg <  (parseInt(player[i][7])-20)){
								hhiitt[o]=0;
								hitd[o]='dodge';
							}
						}
						if(Hit<=80 && player[self][18]==2){
							hhiitt[o]=Math.round(player[self][19]*player[self][22]*(rollbase.Dice(10)+5)*0.1);
							if(Critical<=50 && player[self][18]==1)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=60 && player[self][18]==2)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=20 && player[self][18]==3)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=30 && player[self][18]==4)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=40 && player[self][18]==5)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							hitd[o]=hhiitt[o];
							if(Critical<=50 && player[self][18]==1)hitd[o]+='(Critical)';
							if(Critical<=60 && player[self][18]==2)hitd[o]+='(Critical)';
							if(Critical<=20 && player[self][18]==3)hitd[o]+='(Critical)';
							if(Critical<=30 && player[self][18]==4)hitd[o]+='(Critical)';
							if(Critical<=40 && player[self][18]==5)hitd[o]+='(Critical)';
							if(rnggg <  (parseInt(player[i][7])-20)){
								hhiitt[o]=0;
								hitd[o]='dodge';
							}
						}
						if(Hit<=40 && player[self][18]==3){
							hhiitt[o]=Math.round(player[self][19]*player[self][22]*(rollbase.Dice(10)+5)*0.1);
							if(Critical<=50 && player[self][18]==1)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=60 && player[self][18]==2)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=20 && player[self][18]==3)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=30 && player[self][18]==4)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=40 && player[self][18]==5)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							hitd[o]=hhiitt[o];
							if(Critical<=50 && player[self][18]==1)hitd[o]+='(Critical)';
							if(Critical<=60 && player[self][18]==2)hitd[o]+='(Critical)';
							if(Critical<=20 && player[self][18]==3)hitd[o]+='(Critical)';
							if(Critical<=30 && player[self][18]==4)hitd[o]+='(Critical)';
							if(Critical<=40 && player[self][18]==5)hitd[o]+='(Critical)';
							if(rnggg <  (parseInt(player[i][7])-20)){
								hhiitt[o]=0;
								hitd[o]='dodge';
							}
						}
						if(Hit<=50 && player[self][18]==4){
							hhiitt[o]=Math.round(player[self][19]*player[self][22]*(rollbase.Dice(10)+5)*0.1);
							if(Critical<=50 && player[self][18]==1)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=60 && player[self][18]==2)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=20 && player[self][18]==3)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=30 && player[self][18]==4)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=40 && player[self][18]==5)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							hitd[o]=hhiitt[o];
							if(Critical<=50 && player[self][18]==1)hitd[o]+='(Critical)';
							if(Critical<=60 && player[self][18]==2)hitd[o]+='(Critical)';
							if(Critical<=20 && player[self][18]==3)hitd[o]+='(Critical)';
							if(Critical<=30 && player[self][18]==4)hitd[o]+='(Critical)';
							if(Critical<=40 && player[self][18]==5)hitd[o]+='(Critical)';
							if(rnggg <  (parseInt(player[i][7])-20)){
								hhiitt[o]=0;
								hitd[o]='dodge';
							}
						}
						if(Hit<=60 && player[self][18]==5){
							hhiitt[o]=Math.round(player[self][19]*player[self][22]*(rollbase.Dice(10)+5)*0.1);
							if(Critical<=50 && player[self][18]==1)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=60 && player[self][18]==2)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=20 && player[self][18]==3)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=30 && player[self][18]==4)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=40 && player[self][18]==5)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							hitd[o]=hhiitt[o];
							if(Critical<=50 && player[self][18]==1)hitd[o]+='(Critical)';
							if(Critical<=60 && player[self][18]==2)hitd[o]+='(Critical)';
							if(Critical<=20 && player[self][18]==3)hitd[o]+='(Critical)';
							if(Critical<=30 && player[self][18]==4)hitd[o]+='(Critical)';
							if(Critical<=40 && player[self][18]==5)hitd[o]+='(Critical)';
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
							if(Critical<=50 && player[self][18]==1)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=60 && player[self][18]==2)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=20 && player[self][18]==3)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=30 && player[self][18]==4)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=40 && player[self][18]==5)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							hitd[o]=hhiitt[o];
							if(Critical<=50 && player[self][18]==1)hitd[o]+='(Critical)';
							if(Critical<=60 && player[self][18]==2)hitd[o]+='(Critical)';
							if(Critical<=20 && player[self][18]==3)hitd[o]+='(Critical)';
							if(Critical<=30 && player[self][18]==4)hitd[o]+='(Critical)';
							if(Critical<=40 && player[self][18]==5)hitd[o]+='(Critical)';
							if(rnggg <  (parseInt(player[i][7])-20)){
								hhiitt[o]=0;
								hitd[o]='dodge';
							}
						}
						if(Hit<=60 && player[self][18]==2){
							hhiitt[o]=Math.round(player[self][19]*player[self][22]*(rollbase.Dice(10)+5)*0.1);
							if(Critical<=50 && player[self][18]==1)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=60 && player[self][18]==2)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=20 && player[self][18]==3)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=30 && player[self][18]==4)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=40 && player[self][18]==5)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							hitd[o]=hhiitt[o];
							if(Critical<=50 && player[self][18]==1)hitd[o]+='(Critical)';
							if(Critical<=60 && player[self][18]==2)hitd[o]+='(Critical)';
							if(Critical<=20 && player[self][18]==3)hitd[o]+='(Critical)';
							if(Critical<=30 && player[self][18]==4)hitd[o]+='(Critical)';
							if(Critical<=40 && player[self][18]==5)hitd[o]+='(Critical)';
							if(rnggg <  (parseInt(player[i][7])-20)){
								hhiitt[o]=0;
								hitd[o]='dodge';
							}
						}
						if(Hit<=20 && player[self][18]==3){
							hhiitt[o]=Math.round(player[self][19]*player[self][22]*(rollbase.Dice(10)+5)*0.1);
							if(Critical<=50 && player[self][18]==1)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=60 && player[self][18]==2)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=20 && player[self][18]==3)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=30 && player[self][18]==4)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=40 && player[self][18]==5)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							hitd[o]=hhiitt[o];
							if(Critical<=50 && player[self][18]==1)hitd[o]+='(Critical)';
							if(Critical<=60 && player[self][18]==2)hitd[o]+='(Critical)';
							if(Critical<=20 && player[self][18]==3)hitd[o]+='(Critical)';
							if(Critical<=30 && player[self][18]==4)hitd[o]+='(Critical)';
							if(Critical<=40 && player[self][18]==5)hitd[o]+='(Critical)';
							if(rnggg <  (parseInt(player[i][7])-20)){
								hhiitt[o]=0;
								hitd[o]='dodge';
							}
						}
						if(Hit<=30 && player[self][18]==4){
							hhiitt[o]=Math.round(player[self][19]*player[self][22]*(rollbase.Dice(10)+5)*0.1);
							if(Critical<=50 && player[self][18]==1)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=60 && player[self][18]==2)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=20 && player[self][18]==3)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=30 && player[self][18]==4)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=40 && player[self][18]==5)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							hitd[o]=hhiitt[o];
							if(Critical<=50 && player[self][18]==1)hitd[o]+='(Critical)';
							if(Critical<=60 && player[self][18]==2)hitd[o]+='(Critical)';
							if(Critical<=20 && player[self][18]==3)hitd[o]+='(Critical)';
							if(Critical<=30 && player[self][18]==4)hitd[o]+='(Critical)';
							if(Critical<=40 && player[self][18]==5)hitd[o]+='(Critical)';
							if(rnggg <  (parseInt(player[i][7])-20)){
								hhiitt[o]=0;
								hitd[o]='dodge';
							}
						}
						if(Hit<=40 && player[self][18]==5){
							hhiitt[o]=Math.round(player[self][19]*player[self][22]*(rollbase.Dice(10)+5)*0.1);
							if(Critical<=50 && player[self][18]==1)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=60 && player[self][18]==2)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=20 && player[self][18]==3)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=30 && player[self][18]==4)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							if(Critical<=40 && player[self][18]==5)hhiitt[o]=parseInt(hhiitt[o]*1.5);
							hitd[o]=hhiitt[o];
							if(Critical<=50 && player[self][18]==1)hitd[o]+='(Critical)';
							if(Critical<=60 && player[self][18]==2)hitd[o]+='(Critical)';
							if(Critical<=20 && player[self][18]==3)hitd[o]+='(Critical)';
							if(Critical<=30 && player[self][18]==4)hitd[o]+='(Critical)';
							if(Critical<=40 && player[self][18]==5)hitd[o]+='(Critical)';
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
								rply.text=rply.text+'\n'+player[i][1]+'已徹退';
								
								player.splice(i,1);
							}
							
							var ap=0,gp=0;
							for(var g=0;g<player.length;g++){
								if(player[g][14]=='A.A.U.F')ap++;
								if(player[g][14]=='G.U.')gp++;
							}
								if(ap==0){
								rply.text+='\nG.U勝利';
								start=0;
								RAAUF=0;
								RGU=0;
								dd();
								return rply;
							}
							if(gp==0){
								rply.text+='\nA.A.U.F勝利';
								start=0;
								RAAUF=0;
								RGU=0;
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
					ds++;
					if(ds==3){self++;ds=1;}
					if(self>=player.length)self=0;
					rply.text+=BR();
			return rply;
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^能源充填$/) != null  && player[self][4]!=player[self][5]){
					player[self][4]=player[self][5];
					ds++;
					if(ds==3){self++;ds=1;}
					if(self>=player.length)self=0;
					rply.text+=BR();
			return rply;
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^瞄準$/) != null && player[self][18]==6 && player[self][20]>0 ){
					player[self][25]=1;//架槍等動作
					player[self][26]=rollbase.Dice(100);//命中(狙擊)
					rply.text+='命中可能性：'+player[self][26];
					ds++;
					if(ds==3){self++;ds=1;}
					if(self>=player.length)self=0;
					rply.text+='\n\n'+BR();
			return rply;
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^射擊$/) != null && mainMsg[1] != null && player[self][18]==6 && player[self][20]>0 && player[self][25]==1){
				
				clearTimeout(AJT);
				 AJT = setTimeout(function(){
				var rr='';
				self++;
				ds=1;
				if(self>=player.length)self=0;
				rr='自動跳過\n\n'+BR();
				bot.push('Ca8fea1f8ef1ef2519860ee21fb740fd2',rr);
				 AJT = setTimeout(function(){
					var rr='';
					self++;
					ds=1;
					if(self>=player.length)self=0;
					rr='自動跳過\n\n'+BR();
					bot.push('Ca8fea1f8ef1ef2519860ee21fb740fd2',rr);
				},180000);

			},180000);
				
				
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
						player[self][20]--;
						if(Hit>player[self][26] ){
								rply.text=player[self][1]+'沒有命中';
								player[self][25]=0;
							ds++;
							
							if(ds==3){self++;ds=1;}
							if(self>=player.length)self=0;
							
								rply.text+='\n\n'+BR();
							
							
			return rply;
						}

						damage=Math.round(player[self][19]*player[self][22]*(rollbase.Dice(10)+5)*0.1);
							if(Critical<=30)damage=parseInt(damage*1.5);
							player[i][2]=player[i][2]-damage;
							rply.text=player[i][1]+
							'\nHP '+player[i][2]+'/'+player[i][3];

							
							rply.text+='(-'+damage+')';
							if(Critical<=30 )rply.text+='Critical';
							rply.text+='\nbata粒子 '+player[i][4]+'/'+player[i][5];
							player[self][25]=0;
							ds++;
							if(ds==3){self++;ds=1;}
							if(player[i][2]<=0){
								if(i<self)self--;
								rply.text=rply.text+'\n'+player[i][1]+'已撤退';
								
								player.splice(i,1);
							}
							
							var ap=0,gp=0;
							for(var g=0;g<player.length;g++){
								if(player[g][14]=='A.A.U.F')ap++;
								if(player[g][14]=='G.U.')gp++;
							}
								if(ap==0){
								rply.text+='\nG.U勝利';
								start=0;
								RAAUF=0;
								RGU=0;
								dd();
								return rply;
							}
							if(gp==0){
								rply.text+='\nA.A.U.F勝利';
								start=0;
								RAAUF=0;
								RGU=0;
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
			if(id==player[self][0] && trigger.match(/^架槍$/) != null && player[self][18]==7 && player[self][25]==0){
					player[self][25]=2;//架槍等動作
					rply.text+='架槍完畢'+'\n\n';
					ds++;
					if(ds==3){self++;ds=1;}
					if(self>=player.length)self=0;
					rply.text+=BR()
			return rply;
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^解除架槍$/) != null && player[self][18]==7 && player[self][25]>=2){
		
					player[self][25]=0;//架槍等動作
					rply.text+='解除架槍完畢'+'\n\n';
					ds++;
					if(ds==3){self++;ds=1;}
					if(self>=player.length)self=0;
					rply.text+=BR()
			return rply;
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^瞄準$/) != null && player[self][18]==7 && player[self][25]>=2){
				
	
					player[self][25]=3;//架槍等動作
					player[self][26]=rollbase.Dice(100);//命中(狙擊)
					rply.text+='命中可能性：'+player[self][26]+'\n\n';
					ds++;
					if(ds==3){self++;ds=1;}
					if(self>=player.length)self=0;
					rply.text+=BR()
			return rply;
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^射擊$/) != null && mainMsg[1] != null && player[self][18]==7 && player[self][20]>0 && player[self][25]==3){
				
				clearTimeout(AJT);
				 AJT = setTimeout(function(){
				var rr='';
				self++;
				ds=1;
				if(self>=player.length)self=0;
				rr='自動跳過\n\n'+BR();
				bot.push('Ca8fea1f8ef1ef2519860ee21fb740fd2',rr);
				 AJT = setTimeout(function(){
					var rr='';
					self++;
					ds=1;
					if(self>=player.length)self=0;
					rr='自動跳過\n\n'+BR();
					bot.push('Ca8fea1f8ef1ef2519860ee21fb740fd2',rr);
				},180000);

			},180000);
				
				
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
						player[self][20]--;
						if(Hit>player[self][26] ){
							player[self][25]=2;
							rply.text=player[self][1]+'沒有命中';
							ds++;
							if(ds==3){self++;ds=1;}
							if(self>=player.length)self=0;
						
							rply.text+='\n\n'+BR();
							
			return rply;
						}

						damage=Math.round(player[self][19]*player[self][22]*(rollbase.Dice(10)+5)*0.1);
							if(Critical<=10)damage=parseInt(damage*1.5);
							player[i][2]=player[i][2]-damage;
							rply.text=player[i][1]+
							'\nHP '+player[i][2]+'/'+player[i][3];

							
							rply.text+='(-'+damage+')';
							if(Critical<=10 )rply.text+='Critical';
							rply.text+='\nbata粒子 '+player[i][4]+'/'+player[i][5];
							player[self][25]=2;
							ds++;
							if(ds==3){self++;ds=1;}
							if(player[i][2]<=0){
								if(i<self)self--;
								rply.text=rply.text+'\n'+player[i][1]+'已撤退';
								
								player.splice(i,1);
							}
							
							var ap=0,gp=0;
							for(var g=0;g<player.length;g++){
								if(player[g][14]=='A.A.U.F')ap++;
								if(player[g][14]=='G.U.')gp++;
							}
								if(ap==0){
								rply.text+='\nG.U勝利';
								start=0;
								RAAUF=0;
								RGU=0;
								dd();
								return rply;
							}
							if(gp==0){
								rply.text+='\nA.A.U.F勝利';
								start=0;
								RAAUF=0;
								RGU=0;
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
			if(id==player[self][0] && trigger.match(/^定樁$/) != null && player[self][18]==8 && player[self][25]==0){
				
				
				
				
					player[self][25]=2;//架槍等動作
					rply.text+='定樁完畢'+'\n\n';
					ds++;
					if(ds==3){self++;ds=1;}
					if(self>=player.length)self=0;
					rply.text+=BR()
			return rply;
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^解除定樁$/) != null && player[self][18]==8 && player[self][25]>=2){
				
				

				
					player[self][25]=0;//架槍等動作
					rply.text+='解除定樁完畢'+'\n\n';
					ds++;
					if(ds==3){self++;ds=1;}
					if(self>=player.length)self=0;
					rply.text+=BR()
			return rply;
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^定位$/) != null && player[self][18]==8 && player[self][25]==2){
				
				
					player[self][25]=3;//架槍等動作
					ds++;
					if(ds==3){self++;ds=1;}
					if(self>=player.length)self=0;
					rply.text+=BR()
			return rply;
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^炮擊$/) != null && mainMsg[1] != null && player[self][18]==8 && player[self][20]>0 && player[self][25]==3){
				
				
				clearTimeout(AJT);
				 AJT = setTimeout(function(){
				var rr='';
				self++;
				ds=1;
				if(self>=player.length)self=0;
				rr='自動跳過\n\n'+BR();
				bot.push('Ca8fea1f8ef1ef2519860ee21fb740fd2',rr);
				 AJT = setTimeout(function(){
					var rr='';
					self++;
					ds=1;
					if(self>=player.length)self=0;
					rr='自動跳過\n\n'+BR();
					bot.push('Ca8fea1f8ef1ef2519860ee21fb740fd2',rr);
				},180000);

			},180000);
			
			
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
						player[self][20]--;
					for(var f=0;f<player.length;f++){
						if(player[i][16]==player[f][16] && player[i][17]==player[f][17]){
							damage=Math.round((rollbase.Dice(player[self][19])*player[self][22]*(rollbase.Dice(10)+5)*0.1));
							player[f][2]=player[f][2]-damage;
							rply.text+=player[f][1]+
							'\nHP '+player[f][2]+'/'+player[f][3];
							rply.text+='(-'+damage+')\n';
							
						}
					}
					
							player[self][25]=2;
							ds++
							if(ds==3){self++;ds=1;}
						for(var f=0;f<player.length;f++){
							if(player[f][2]<=0){
								if(f<self)self--;
								if(f==self){self--;ds=1;}
								rply.text=rply.text+'\n'+player[f][1]+'已撤退';
								player.splice(f,1);
							}
						}
							
								if(player.length==0){
								rply.text+='\n'+'沒有人勝利';
								start=0;
								dd();
								return rply;
							}
							var ap=0,gp=0;
							for(var g=0;g<player.length;g++){
								if(player[g][14]=='A.A.U.F')ap++;
								if(player[g][14]=='G.U.')gp++;
							}
								if(ap==0){
								rply.text+='\nG.U勝利';
								start=0;
								RAAUF=0;
								RGU=0;
								dd();
								return rply;
							}
							if(gp==0){
								rply.text+='\nA.A.U.F勝利';
								start=0;
								RAAUF=0;
								RGU=0;
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
			if(id==player[self][0] && trigger.match(/^移動/) != null && start==1 &&  mainMsg[1] != null && player[self][25]<2){
				
				clearTimeout(AJT);
				 AJT = setTimeout(function(){
				var rr='';
				self++;
				ds=1;
				if(self>=player.length)self=0;
				rr='自動跳過\n\n'+BR();
				bot.push('Ca8fea1f8ef1ef2519860ee21fb740fd2',rr);
				 AJT = setTimeout(function(){
					var rr='';
					self++;
					ds=1;
					if(self>=player.length)self=0;
					rr='自動跳過\n\n'+BR();
					bot.push('Ca8fea1f8ef1ef2519860ee21fb740fd2',rr);
				},180000);

			},180000);
				
				let xxyy = mainMsg[1].split(','); //定義輸入字串
				if(isNaN(xxyy[0])==0 && isNaN(xxyy[1])==0){
					var temp =0;
						temp = Math.ceil((Math.pow(Math.pow(Math.floor(xxyy[0])-player[self][16],2)+Math.pow(Math.floor(xxyy[1])-player[self][17],2),0.5)));
						if(temp>3){
							rply.text='距離太遠，無法移動';
							return rply;
						}
						else{
							if(xxyy[0]>=1 && xxyy[0]<=25 && xxyy[1]>=1 && xxyy[1]<=50){ 
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
			if(id==player[self][0] && trigger.match(/^磁懸推進/) != null && start==1 &&  mainMsg[1] != null && player[self][14]=='A.A.U.F'){
				
				
				clearTimeout(AJT);
				 AJT = setTimeout(function(){
				var rr='';
				self++;
				ds=1;
				if(self>=player.length)self=0;
				rr='自動跳過\n\n'+BR();
				bot.push('Ca8fea1f8ef1ef2519860ee21fb740fd2',rr);
				 AJT = setTimeout(function(){
					var rr='';
					self++;
					ds=1;
					if(self>=player.length)self=0;
					rr='自動跳過\n\n'+BR();
					bot.push('Ca8fea1f8ef1ef2519860ee21fb740fd2',rr);
				},180000);

			},180000);
				
				let xxyy = mainMsg[1].split(','); //定義輸入字串
				if(isNaN(xxyy[0])==0 && isNaN(xxyy[1])==0){
					var temp =0;
						temp = Math.ceil((Math.pow(Math.pow(Math.floor(xxyy[0])-player[self][16],2)+Math.pow(Math.floor(xxyy[1])-player[self][17],2),0.5)));
						if(temp>(Math.floor(player[self][4])/10)){
							rply.text='Bata粒子過少，無法移動';
							return rply;
						}
						else{
							if(xxyy[0]>=1 && xxyy[0]<=25 && xxyy[1]>=1 && xxyy[1]<=50){ 
							player[self][4]-=temp*10;
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
			if(id==player[self][0] && trigger.match(/^脈衝推進/) != null && start==1 &&  mainMsg[1] != null && player[self][14]=='G.U.'){
				
				clearTimeout(AJT);
				 AJT = setTimeout(function(){
				var rr='';
				self++;
				ds=1;
				if(self>=player.length)self=0;
				rr='自動跳過\n\n'+BR();
				bot.push('Ca8fea1f8ef1ef2519860ee21fb740fd2',rr);
				 AJT = setTimeout(function(){
					var rr='';
					self++;
					ds=1;
					if(self>=player.length)self=0;
					rr='自動跳過\n\n'+BR();
					bot.push('Ca8fea1f8ef1ef2519860ee21fb740fd2',rr);
				},180000);

			},180000);
				
				let xxyy = mainMsg[1].split(','); //定義輸入字串
				if(isNaN(xxyy[0])==0 && isNaN(xxyy[1])==0){
					var temp =0;
						temp = Math.ceil((Math.pow(Math.pow(Math.floor(xxyy[0])-player[self][16],2)+Math.pow(Math.floor(xxyy[1])-player[self][17],2),0.5)));
						if(temp>(Math.floor(player[self][4])/20)){
							rply.text='Bata粒子過少，無法移動';
							return rply;
						}
						else{
							if(xxyy[0]>=1 && xxyy[0]<=25 && xxyy[1]>=1 && xxyy[1]<=50){ 
							player[self][4]-=temp*20;
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
								var ap=0,gp=0;
							for(var g=0;g<player.length;g++){
								if(player[g][14]=='A.A.U.F')ap++;
								if(player[g][14]=='G.U.')gp++;
							}
								if(ap==0){
								rply.text+='\nG.U勝利';
								start=0;
								RAAUF=0;
								RGU=0;
								dd();
								return rply;
							}
							if(gp==0){
								rply.text+='\nA.A.U.F勝利';
								start=0;
								RAAUF=0;
								RGU=0;
								dd();
								return rply;
							}
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
	
	clearTimeout(AJT);
				 AJT = setTimeout(function(){
				var rr='';
				self++;
				ds=1;
				if(self>=player.length)self=0;
				rr='自動跳過\n\n'+BR();
				bot.push('Ca8fea1f8ef1ef2519860ee21fb740fd2',rr);
				 AJT = setTimeout(function(){
					var rr='';
					self++;
					ds=1;
					if(self>=player.length)self=0;
					rr='自動跳過\n\n'+BR();
					bot.push('Ca8fea1f8ef1ef2519860ee21fb740fd2',rr);
				},180000);

			},180000);
	
	
	
	
	var rr;
	rr='輪到'+player[self][1]+'的第'+ds+'次行動'+
			'\n陣營'+player[self][14]+
			'\nHP '+player[self][2]+'/'+player[self][3]+
			'\nbata粒子 '+player[self][4]+'/'+player[self][5]+
			'\n位置 '+player[self][16]+','+player[self][17];
	if(player[self][18]<9)rr+='\n子彈數：'+player[self][20]+'/'+player[self][21];
			rr+='\n 可用選項：';
			if(player[self][25]<2){
				rr+='\n移動 x座標,y座標';
			}
			if(player[self][25]<2 && player[self][14]=='A.A.U.F'){
				rr+='\n磁懸推進 x座標,y座標';
			}
			if(player[self][25]<2 && player[self][14]=='G.U.'){
				rr+='\n脈衝推進 x座標,y座標';
			}
			if(player[self][4]!=player[self][5]){
				rr+='\n能源充填';
			}
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
			if(player[self][18]==7 && player[self][25]==0){
				rr+='\n架槍';
			}
			if(player[self][18]==7 && player[self][25]>=2){
				rr+='\n解除架槍';
			}
			if(player[self][18]==7 && player[self][20]>0 && player[self][25]>=2){
				rr+='\n瞄準';
			}	
			if(player[self][18]==7 && player[self][20]>0 && player[self][25]==3){
				rr+='\n射擊 目標';
			}		
			if(player[self][18]==8 && player[self][25]==0){
				rr+='\n定樁';
			}
			if(player[self][18]==8 && player[self][25]>=2){
				rr+='\n解除定樁';
			}
			if(player[self][18]==8 && player[self][20]>0 && player[self][25]>=2){
				rr+='\n定位';
			}
			if(player[self][18]==8 && player[self][20]>0 && player[self][25]==3){
				rr+='\n炮擊 目標';
			}			
			if(player[self][18]>=9 && player[self][18]<=11){
				rr+='\n攻擊 目標';
			}
			rr+='\n 目標有';
			for(var k=0;k<player.length;k++){
								rr=rr+'\n'+player[k][1]+' '+player[k][16]+','+player[k][17]+'('
								+Math.ceil((Math.pow(Math.pow(player[k][16]-player[self][16],2)+Math.pow(player[k][17]-player[self][17],2),0.5)))
								+')';
							}
			return rr;
}


module.exports = {
	battles:battles,
	dd:dd
};


