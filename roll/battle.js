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
var mode,xmode;
var ot= new Date();;
var RAAUF=0,RGU=0,HM=0;
function dd() {
HM=0;
player.length=0;
RAAUF=0;
RGU=0;						
}

setInterval(function(){
	var nt = new Date();
	if(start==1)console.log('debug'+(((nt.getTime() - ot.getTime()) / (1000 * 60))));
	if((((nt.getTime() - ot.getTime()) / (1000 * 60)) >=1) && start == 1){
		console.log('debug'+(((nt.getTime() - ot.getTime()) / (1000 * 60))));
				var rr='';
				self++;
				ds=1;
				if(self>=player.length)self=0;
				rr='自動跳過\n\n'+BR();
				bot.push('Ca8fea1f8ef1ef2519860ee21fb740fd2',rr);
				var nowt = new Date();
				ot=nowt;
	}
			},1000);



function battles(id,name,ab) {
	var ggg,ttt;
	let msgSplitor = (/\S+/ig);	
	let mainMsg = ab.match(msgSplitor); //定義輸入字串
	let trigger = mainMsg[0].toString()
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	if (trigger.match(/武器/) != null ){
	if (trigger.match(/製作/)!= null && start==0) return xweapon.weapon_make(id,name,mainMsg[1],mainMsg[2]) ;
	if (trigger.match(/查看/)!= null) return xweapon.weapon_view(id,name) ;
	if (trigger.match(/破壞/)!= null && start==0) return xweapon.weapon_break(id,name) ;
	if (trigger.match(/改造/)!= null && start==0) return xweapon.weapon_retrofit(id,name,mainMsg[1],mainMsg[2]) ;
	}
	if (trigger.match(/玩家/) != null){
	if (trigger.match(/自身情報/)!= null) return ox.CV(id,name) ;
	if (trigger.match(/改名/)!= null && start==0) return ox.CCN(id,name,mainMsg[1]) ;
	if (trigger.match(/列表/)!= null && start==0) return ox.CCL() ;
	}
	if(trigger.match(/^test_mode/) != null && start==0){
		mode=99;
		dd();
	        rply.text='已轉為2人混戰模式\n使用 戰鬥參與 來加入';
		return rply;
	}
	if(trigger.match(/^2人混戰模式/) != null && start==0){
		mode=1;
		dd();
	        rply.text='已轉為2人混戰模式\n使用 戰鬥參與 來加入';
		return rply;
	}
	if(trigger.match(/^3人混戰模式/) != null && start==0){
		mode=2;
		dd();
	        rply.text='已轉為3人混戰模式\n使用 戰鬥參與 來加入';
		return rply;
	}
	if(trigger.match(/^4人混戰模式/) != null && start==0){
		mode=3;
		dd();
	        rply.text='已轉為4人混戰模式\n使用 戰鬥參與 來加入';
		return rply;
	}
if(trigger.match(/^2人陣營模式/) != null && start==0){
		mode=12;
		dd();
	        rply.text='已轉為2人陣營模式\n使用 戰鬥參與 來加入';
		return rply;
	}
	if(trigger.match(/^4人陣營模式/) != null && start==0){
		mode=13;
		dd();
	        rply.text='已轉為4人陣營模式\n使用 戰鬥參與 來加入';
		return rply;
	}
	if(trigger.match(/^6人陣營模式/) != null && start==0){
		mode=14;
		dd();
	        rply.text='已轉為6人陣營模式\n使用 戰鬥參與 來加入';
		return rply;
	}
	if(trigger.match(/^傷害測試模式/) != null && start==0){
		mode=100;
		dd();
	        rply.text='已轉為傷害測試模式\n使用 戰鬥參與 來加入';
		return rply;
	}
	if(trigger.match(/^時間/) != null && start==0){
		var time = new Date();
		var atxu=0;
		atxu=time.getTime()+28800000
		var dt = new Date(atxu);
	        rply.text=dt.getFullYear() +'年' +(dt.getMonth()+1)+'月'+dt.getDate()+'日'+(dt.getHours())+'點'+dt.getMinutes()+'分' ;
		return rply;
	}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	rply.text='';
	if(mode==99){
			ACV(1,mainMsg,trigger,id,name,3);
		return rply;
		}
		if(mode==1){
			ACV(2,mainMsg,trigger,id,name,2);
		return rply;
		}
		if(mode==2){
			ACV(3,mainMsg,trigger,id,name,2);
		return rply;
		}
		if(mode==3){
			ACV(4,mainMsg,trigger,id,name,2);
		return rply;
		}
		if(mode==12){
			ACV(2,mainMsg,trigger,id,name,1);
		return rply;
		}
		if(mode==13){
			ACV(4,mainMsg,trigger,id,name,1);
		return rply;
		}
		if(mode==14){
			ACV(6,mainMsg,trigger,id,name,1);
		return rply;
		}
		if(mode==100){
			ACV(1,mainMsg,trigger,id,name,4);
		return rply;
		}
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
function ACV(aaab,mainMsg,trigger,id,name,mmode){
	xmode=mmode;
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
		var WMK=ox.oC(i,19);
		var WV = WMK.split(','); //定義輸入字串
		var ww=1,yy=0;
		yy=15-WV[0]*5;
		if(yy<=0)yy=0;
		if(WV[0]==9)yy=10;
		if(WV[0]==11)yy=-10;
			ww=Number(Number(WV[1])*0.5+Number(WV[2])*0.2+Number(WV[3])+Number(WV[4])*0.5+Number(WV[6])*0.1)-yy;
		if(Number(ox.oC(i,7))<Number(ww)){
			rply.text=name +'你武器過重 無法參與';
		return rply;
		}
		ggg=i;
		od[0]=ox.oC(i,0);//ID
    	od[1]=ox.oC(i,1);//名字
		
		var HPA=ox.oC(i,5);
		var HPD = HPA.split(','); //定義輸入字串
    	od[2]=HPD[0];//生命值
		od[3]=HPD[0];//生命值
		od[38]=HPD[1];//護甲與現有護盾
		od[39]=HPD[1];//護盾上限
		
		od[4]=Number(ox.oC(i,6));//Bata粒子適性
		od[5]=Number(ox.oC(i,6));//Bata粒子適性
		od[6]=Number(ox.oC(i,7));//物理適性
		od[7]=Number(ox.oC(i,8));//反應力
		od[8]=Number(ox.oC(i,9));//放出適性
		od[9]=Number(ox.oC(i,10));//火屬適性
		od[10]=Number(ox.oC(i,11));//水屬適性
		od[11]=Number(ox.oC(i,12));//風屬適性
		od[12]=Number(ox.oC(i,13));//土屬適性
		od[13]=Number(ox.oC(i,15));//控制能力
		od[14]=ox.oC(i,3);//陣營
		if(mmode==1){
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
		}
		if(mmode>=2){
			if(HM>=aaab ){
			rply.text='人數已滿';
		return rply;
		}
			HM++;
		}
		od[15]=ox.oC(i,17);//金幣
		od[16]=0;//x
		od[17]=0;//y
		
		od[27]=WV[5];//武器名稱
		od[18]=Number(WV[0]);//武器種類
		od[19]=Number(WV[1]);//基礎傷害
		od[20]=Number(WV[2]);//現有子彈
		od[21]=Number(WV[2]);//總子彈
		od[22]=Number(WV[3]);//連發數
		od[23]=Number(WV[4]);//射程
		od[24]=Number(WV[6]);//精準
		od[25]=0;//架槍等動作
		od[26]=0;//命中(狙擊),能量倍率
		od[35]='';//狙擊對象
		
		var AAA=ox.oC(i,21);
		var Askill = AAA.split('|'); //定義輸入字串
		var par = Askill[0].split(',');
		od[28]=par;
		par = Askill[1].split(',');
		od[29]=par;
		par = Askill[2].split(',');
		od[30]=par;
		par = Askill[3].split(',');
		od[31]=par;
		par = Askill[4].split(',');
		od[32]=par;
		od[33]=2;//可行動次數
		od[34]=1;//閃避倍率
		od[36]=3;//移動距離
		od[37]=[];
		if(WV[0]==6){od[34]=1.2;od[36]=4;}
		if(WV[0]==7)od[34]=0.5;
		if(WV[0]==8)od[34]=0.25;
		if(WV[0]==1 || WV[0]==9)od[33]=3;
		if(WV[0]==10)od[36]=5;
		player[player.length]=od;
		
		rply.text=name+'你的'+od[1]+'已參與\n'+
			'陣營'+od[14]+
			'\nHP '+od[2]+'/'+od[3];
		if(od[14]=='A.A.U.F')rply.text+='\n護甲 '+od[38];
		if(od[14]=='G.U.')rply.text+='\n護盾 '+od[38]+'/'+od[39];
		rply.text+='\nbata粒子 '+od[4]+'/'+od[5]+
			'\n物理適性 '+od[6]+
			'\n反應力'+od[7]+
			'\n武器名稱：'+WV[5];
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
			if(WV[0]<9)rply.text+='\n子彈數：'+WV[2]+'/'+WV[2];
			if(od[28][0]!=0)rply.text+='\n技能1：'+od[28][0];
			if(od[29][0]!=0)rply.text+='\n技能2：'+od[29][0];
			if(od[30][0]!=0)rply.text+='\n技能3：'+od[30][0];
			if(od[31][0]!=0)rply.text+='\n技能4：'+od[31][0];
			if(od[32][0]!=0)rply.text+='\n技能5：'+od[32][0];
			if(mmode==1){
			rply.text+='\n目前參與人數： \n'+
			'AAUF：'+RAAUF+'/'+(aaab/2)+
			'\nGU：'+RGU+'/'+(aaab/2);
			}
			if(mmode>=2){
			rply.text+='\n目前參與人數： \n'+
			HM+'/'+aaab;
			}
			rply.text+='\n可用指令 \n取消參與';
		return rply;
  }
	}
}
		if(trigger.match(/^取消參與$/) != null&& start==0){
			var od=[];
			for(var i=0;i<player.length;i++){
				if(player[i][0]==id){
					od[1]=player[i][1];
					if(mmode==1){
					if(player[i][14]=='A.A.U.F')RAAUF--;
					if(player[i][14]=='G.U.')RGU--;
					player.splice(i,1);
					rply.text=name+'你的'+od[1]+'已取消參與'		
						+'\n目前參與人數： \n'+
			'AAUF：'+RAAUF+'/'+(aaab/2)+
			'\nGU：'+RGU+'/'+(aaab/2);
					return rply; 
					}
					if(mmode>=2){
						HM--;
						player.splice(i,1);
						rply.text=name+'你的'+od[1]+'已取消參與'+
						'\n目前參與人數： \n'+HM+'/'+aaab;
						return rply; 
					}
				}
			}
			
		}
		
		if(trigger.match(/^戰鬥開始$/) != null && start==0 && player.length==aaab){
			
			start=1;
			self=0;
			ds=1;
			player.sort(function (a,b){return b[7]-a[7]});
		if(mmode==1){
			if(aaab==2){
				if(player[0][14]=='A.A.U.F'){
					player[0][16]=26;
					player[0][17]=13;
					player[1][16]=26;
					player[1][17]=39;
				}
				else{
					player[0][16]=26;
					player[0][17]=39;
					player[1][16]=26;
					player[1][17]=13;
				}
			}
				if(aaab==4){
					var af=1,gf=1;
				for(var g=0;g<4;g++){
					if(player[g][14]=='A.A.U.F'){
					player[g][16]=1+17*af;
					player[g][17]=11;
					af++;
				}
				else{
					player[g][16]=1+17*gf;
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
							player[g][16]=26;
							player[g][17]=13;
						}
						else{
							player[g][16]=13*af;
							player[g][17]=6;
						}
					
					af+=2;
				}
				else{
					if(g==0){
							player[g][16]=26;
							player[g][17]=39;
						}
					else{
						player[g][16]=13*gf;
						player[g][17]=46;
						}
					gf+=2;
					}
				}
				}
		}
if(mmode==2){
			if(aaab==2){
					player[0][16]=13;
					player[0][17]=13;
					player[1][16]=39;
					player[1][17]=39;
			}
				if(aaab==3){
					player[0][16]=13;
					player[0][17]=13;
					
					player[1][16]=39;
					player[1][17]=39;
					
					player[2][16]=26;
					player[2][17]=26;
					
				}
				if(aaab==4){
					player[0][16]=13;
					player[0][17]=13;
					player[1][16]=39;
					player[1][17]=39;
					
					player[2][16]=13;
					player[2][17]=39;
					player[3][16]=39;
					player[3][17]=13;
				}
				
		}
		if(mmode==3){
			player[0][16]=25;
					player[0][17]=25;
		}
		if(mmode==4){
			console.log('debug01');
			var od=[];
od[0]='dummy';//1D
    	od[1]='測傷用';//名字
    	od[2]=999;//生命值
		od[3]=999;//生命值
		od[4]=0;//Bata粒子適性
		od[5]=0;//Bata粒子適性
		od[6]=0;//物理適性
		od[7]=0;//反應力
		od[8]=0;//放出適性
		od[9]=0;//火屬適性
		od[10]=0;//水屬適性
		od[11]=0;//風屬適性
		od[12]=0;//土屬適性
		od[13]=0;//控制能力
		od[14]='A.A.U.F';//陣營
		od[15]=0;//金幣
		od[16]=0;//x
		od[17]=0;//y
		
		od[27]='無';//武器名稱
		od[18]=1;//武器種類
		od[19]=1;//基礎傷害
		od[20]=1;//現有子彈
		od[21]=1;//總子彈
		od[22]=1;//連發數
		od[23]=1;//射程
		od[24]=1;//精準
		od[25]=0;//架槍等動作
		od[26]=0;//命中(狙擊)
		od[35]='';//狙擊對象
		od[28]=0;
		od[29]=0;
		od[30]=0;
		od[31]=0;
		od[32]=0;
		od[33]=2;//可行動次數
		od[34]=0;//閃避倍率
		od[36]=0;//移動距離
		od[37]=[];
		od[38]=0;
		player[player.length]=od;
		console.log('debug02');
					player[0][16]=25;
					player[0][17]=25;
					player[1][16]=25;
					player[1][17]=25;
		}
			var rt=BR();
			rply.text=rt;
			ot=new Date();
			return rply;
		}
		
		if(start==1){
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^近戰攻擊$/) != null && mainMsg[1] != null &&player[self][18]>=9 && player[self][18]<=11 ){
				ot=new Date();
			
				for(var i=0;i<player.length;i++){
					if(player[i][1]==mainMsg[1] ){
						var temp =0;
						temp = Math.ceil(Math.pow(Math.pow(player[i][16]-player[self][16],2)+Math.pow(player[i][17]-player[self][17],2),0.5)*10)/10;
						if(temp>player[self][23]){
							 
							rply.text='距離'+player[i][1]+'太遠，無法攻擊';
							
							return rply;
						}
						rnggg=rollbase.Dice(100);
						Hit=rollbase.Dice(100);
						Critical=rollbase.Dice(100);
						if(Hit>player[self][24]){
							rply.text=player[self][1]+'沒有命中'+
							'\n\n'+BR();
							ds++;
							if(ds==player[self][33]+1){self++;ds=1;}
							if(self>=player.length)self=0;
							
			return rply;
						}
						
						if(rnggg > ( parseInt(player[i][7]) - parseInt(player[self][7]) ) * player[i][34] ){
							if(player[self][37][1]==1){
								damage=Math.round(player[self][19]*(rollbase.Dice(2001)-1)/100)/10;
							}
							else{
								damage=Math.round(player[self][19]*(rollbase.Dice(401)+799)/100)/10;
							}
							player[self][16]=player[i][16];
						player[self][17]=player[i][17];
							if(Hit<=(player[self][24]*0.2))damage=parseInt(damage*2);

							if(player[i][14]=='G.U.' && player[i][38]>0){
								player[i][38]=player[i][38]-damage;
								if(player[i][38]<=0)player[i][38]=0;
								rply.text=player[i][1]+
							    '\nHP '+player[i][2]+'/'+player[i][3];
								rply.text+='\n護盾 '+player[i][38]+'/'+player[i][39];
								rply.text+='(-'+damage+')';
								if(Hit<=(player[self][24]*0.2))rply.text+='Critical';
							}
							if(player[i][14]=='G.U.' && player[i][38]<=0){
								player[i][2]=player[i][2]-damage;
								rply.text=player[i][1]+
							    '\nHP '+player[i][2]+'/'+player[i][3];
								rply.text+='(-'+damage+')';
								if(Hit<=(player[self][24]*0.2))rply.text+='Critical';
								rply.text+='\n護盾 '+player[i][38]+'/'+player[i][39];
							}
							if(player[i][14]=='A.A.U.F'){
								var RI=1-(player[i][38]/(player[i][38]+150));
								RI=RI.toFixed(3);
								damage=damage*RI;
								
								player[i][2]=player[i][2]-damage;
								rply.text=player[i][1]+
							    '\nHP '+player[i][2]+'/'+player[i][3];
								rply.text+='(-'+damage+')';
								if(Hit<=(player[self][24]*0.2))rply.text+='Critical';
								rply.text+='\n護甲 '+player[i][38];
							}
							
							
							rply.text+='\nbata粒子 '+player[i][4]+'/'+player[i][5];
							ds++;
							if(ds==player[self][33]+1){self++;ds=1;}
							if(player[i][2]<=0){
								if(i<self)self--;
								rply.text=rply.text+'\n'+player[i][1]+'已撤退';
								
								player.splice(i,1);
							}
							//----------------------------------------------
							if(winner(mmode)!='no winner'){
								console.log('no winner');
								rply.text=winner(mmode);
								return rply;
							}
							//------------------------------------------------------------------
							
							if(self>=player.length)self=0;
							rply.text=rply.text+'\n\n'+BR();
			return rply;
						}
						else{
							rply.text=player[i][1]+'閃避成功'+
							'\nHP '+player[i][2]+'/'+player[i][3]+
							'\nbata粒子 '+player[i][4]+'/'+player[i][5];
						ds++;
							if(ds==player[self][33]+1){self++;ds=1;}
							if(self>=player.length)self=0;
							
							rply.text+='\n\n'+BR();
			return rply;
						}
					}
				}
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^單發射擊$/) != null && mainMsg[1] != null &&player[self][18]>=1 && player[self][18]<=5 && player[self][20]>0){
				
				ot=new Date();
		
				for(var i=0;i<player.length;i++){
					if(player[i][1]==mainMsg[1] ){
						var temp,ones =0;
						temp = Math.ceil(Math.pow(Math.pow(player[i][16]-player[self][16],2)+Math.pow(player[i][17]-player[self][17],2),0.5)*10)/10;
						ones=player[self][23];
						if(player[self][18]==5)ones+=5;
						if(temp>ones){
							
							rply.text='距離'+player[i][1]+'太遠，無法攻擊';
							return rply;
						}
						rnggg=rollbase.Dice(100);
						Hit=rollbase.Dice(100);
						player[self][20]--;
						if(Hit>player[self][24]){
							ds++;
							if(ds==player[self][33]+1){self++;ds=1;}
							if(self>=player.length)self=0;
							rply.text=player[self][1]+'沒有命中'+
							'\n\n'+BR();
			return rply;
						}
						
						if(rnggg > ( parseInt(player[i][7]) - parseInt(player[self][7]) ) * player[i][34] ){
							damage=Math.round(player[self][19]*(rollbase.Dice(401)+799)/100)/10;
							if(Hit<=(player[self][24]*0.2))damage=parseInt(damage*2);
							
						if(player[i][14]=='G.U.' && player[i][38]>0){
								player[i][38]=player[i][38]-damage;
								if(player[i][38]<=0)player[i][38]=0;
								rply.text=player[i][1]+
							    '\nHP '+player[i][2]+'/'+player[i][3];
								rply.text+='\n護盾 '+player[i][38]+'/'+player[i][39];
								rply.text+='(-'+damage+')';
								if(Hit<=(player[self][24]*0.2))rply.text+='Critical';
							}
							if(player[i][14]=='G.U.' && player[i][38]<=0){
								player[i][2]=player[i][2]-damage;
								rply.text=player[i][1]+
							    '\nHP '+player[i][2]+'/'+player[i][3];
								rply.text+='(-'+damage+')';
								if(Hit<=(player[self][24]*0.2))rply.text+='Critical';
								rply.text+='\n護盾 '+player[i][38]+'/'+player[i][39];
							}
							if(player[i][14]=='A.A.U.F'){
								var RI=1-(player[i][38]/(player[i][38]+150));
								RI=RI.toFixed(3);
								damage=damage*RI;
								
								player[i][2]=player[i][2]-damage;
								rply.text=player[i][1]+
							    '\nHP '+player[i][2]+'/'+player[i][3];
								rply.text+='(-'+damage+')';
								if(Hit<=(player[self][24]*0.2))rply.text+='Critical';
								rply.text+='\n護甲 '+player[i][38];
							}
							
							rply.text+='\nbata粒子 '+player[i][4]+'/'+player[i][5];
							
							ds++
							if(ds==player[self][33]+1){self++;ds=1;}
							if(player[i][2]<=0){
								if(i<self)self--;
								rply.text=rply.text+'\n'+player[i][1]+'已撤退';
								
								player.splice(i,1);
							}
							
							//----------------------------------------------
							if(winner(mmode)!='no winner'){
								rply.text=winner(mmode);
								return rply;
							}
							//------------------------------------------------------------------
							if(self>=player.length)self=0;
							rply.text=rply.text+'\n\n'+BR();
			return rply;
						}
						else{
						ds++;
							if(ds==player[self][33]+1){self++;ds=1;}
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
				
				ot=new Date();

				
				for(var i=0;i<player.length;i++){
					if(player[i][1]==mainMsg[1] ){
						var temp =0;
						temp = Math.ceil(Math.pow(Math.pow(player[i][16]-player[self][16],2)+Math.pow(player[i][17]-player[self][17],2),0.5)*10)/10;
						if(temp>player[self][23]){
							 
							rply.text='距離'+player[i][1]+'太遠，無法攻擊';
							return rply;
						}
						var bh=player[self][22];			
						if(bh>player[self][20]){bh=player[self][20];}
						var hhiitt=[];
						var hitd=[];
				for(var o=0;o<bh;o++){
					rnggg=rollbase.Dice(100);
					Hit=rollbase.Dice(100);
						
							hhiitt[o]=0;
							hitd[o]='miss';
							if(Hit<=player[self][24]){
								hhiitt[o]=Math.round(player[self][19]*(rollbase.Dice(401)+799)/100)/10;
								if(Hit<=(player[self][24]*0.2))hhiitt[o]=parseInt(hhiitt[o]*2);
								hitd[o]=hhiitt[o];
								if(Hit<=(player[self][24]*0.2))hitd[o]+='(Critical)';
								if(rnggg <(( parseInt(player[i][7]) - parseInt(player[self][7]) ) * player[i][34])){
									hhiitt[o]=0;
									hitd[o]='dodge';
								}
							}
					}
					
							damage=0;
							damagR=0;
							DC=0;
						
							
							if(player[i][14]=='G.U.' && player[i][38]>0){
								for(var o=0;o<bh;o++){
									if(damage<player[i][38])damage+=hhiitt[o];
									if(damage>=player[i][38]{
										if(DC==0)DC=o;
										damagR+=hhiitt[o];
									}
									}
								
							player[i][38]=player[i][38]-damage;
							if(player[i][38]<=0)player[i][38]=0;
							player[i][2]=player[i][2]-damagR;
							rply.text=player[i][1]+
							'\nHP '+player[i][2]+'/'+player[i][3];
							
							if(DC!=0){
							
							rply.text+='('
							for(var o=DC;o<bh;o++){
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
							}
								rply.text+='\n護盾 '+player[i][38]+'/'+player[i][39];
								rply.text+='('
							for(var o=0;o<DC;o++){
							if(hhiitt[o]==0){
								rply.text+=hitd[o];
								if(o<(DC-1))rply.text+=','
							}
							else{
								rply.text+='-'+hitd[o];
								if(o<(DC-1))rply.text+=','
							}
							}
							rply.text+=')';
							}
							
							if(player[i][14]=='G.U.' && player[i][38]<=0){
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
								
								rply.text+='\n護盾 '+player[i][38]+'/'+player[i][39];
							}
							if(player[i][14]=='A.A.U.F'){
								var RI=1-(player[i][38]/(player[i][38]+150));
								RI=RI.toFixed(3);
								damage=damage*RI;
								
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
								rply.text+='\n護甲 '+player[i][38];
							}
							
					
						
						
							
							rply.text+='\nbata粒子 '+player[i][4]+'/'+player[i][5];
							player[self][20]-=bh;
							ds++;
							if(ds==player[self][33]+1){self++;ds=1;}
							if(player[i][2]<=0){
								if(i<self)self--;
								rply.text=rply.text+'\n'+player[i][1]+'已撤退';
								
								player.splice(i,1);
							}
							
							//----------------------------------------------
							if(winner(mmode)!='no winner'){
								rply.text=winner(mmode);
								return rply;
							}
							//------------------------------------------------------------------
							if(self>=player.length)self=0;
							rply.text=rply.text+'\n\n'+BR();
			return rply;

					}
				}
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^裝填子彈$/) != null && player[self][18]>=1 && player[self][18]<=8 && player[self][20]!=player[self][21]){
					ot=new Date();
					player[self][20]=player[self][21];
					rply.text='子彈數：'+player[self][20]+'/'+player[self][21];
					ds++;
					if(ds==player[self][33]+1){self++;ds=1;}
					if(self>=player.length)self=0;
					rply.text=rply.text+'\n\n'+BR();
			return rply;
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^能源充填$/) != null  && player[self][4]!=player[self][5]){
					ot=new Date();
					player[self][4]+=player[self][5]*0.2+20;
					if(player[self][4]>player[self][5])player[self][4]=player[self][5];
					rply.text=player[i][1]+
							'\nHP '+player[i][2]+'/'+player[i][3];
							rply.text+='\nbata粒子 '+player[i][4]+'/'+player[i][5]+'(+'+(player[self][5]*0.2+20)+')';
					ds++;
					if(ds==player[self][33]+1){self++;ds=1;}
					if(self>=player.length)self=0;
					rply.text=rply.text+'\n\n'+BR();
			return rply;
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^瞄準$/) != null && player[self][18]==6 && player[self][20]>0 && mainMsg[1] != null ){
					ot=new Date();
					for(var i=0;i<player.length;i++){
					if(player[i][1]==mainMsg[1] ){
						player[self][35]=mainMsg[1];
						rply.text='已瞄準['+mainMsg[1]+']';
						player[self][25]=1;//架槍等動作
						player[self][34]=0.6;
					player[self][26]=rollbase.Dice(61)-31+player[self][24];//命中(狙擊)
					rply.text+='命中可能性：'+player[self][26];
					ds++;
					if(ds==player[self][33]+1){self++;ds=1;}
					if(self>=player.length)self=0;
					rply.text+='\n\n'+BR();
					
			break;
					}
						else{
							rply.text='沒有此目標';	
						}
						
					}
					
			return rply;
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^射擊$/) != null && mainMsg[1] != null && player[self][18]==6 && player[self][20]>0 && player[self][25]==1){
				
				ot=new Date();

				
				
				for(var i=0;i<player.length;i++){
					if(player[i][1]==mainMsg[1] ){
						var temp =0;
						temp = Math.ceil(Math.pow(Math.pow(player[i][16]-player[self][16],2)+Math.pow(player[i][17]-player[self][17],2),0.5)*10)/10;
						if(temp>player[self][23]){
							 
							rply.text='距離'+player[i][1]+'太遠，無法攻擊';
							return rply;
						}
						rnggg=rollbase.Dice(100);
						Hit=rollbase.Dice(100);
						player[self][20]--;
						if(Hit>player[self][26] && player[self][35]==mainMsg[1]){
								rply.text=player[self][1]+'沒有命中';
								player[self][25]=0;
								player[self][34]=1.2;
								player[self][35]='';
							ds++;
							if(ds==player[self][33]+1){self++;ds=1;}
							if(self>=player.length)self=0;
							
								rply.text+='\n\n'+BR();
							return rply;
						}
					if(Hit>player[self][26]-50 && player[self][35]!=mainMsg[1] ){
								rply.text=player[self][1]+'沒有命中';
								player[self][25]=0;
								player[self][34]=1.2;
								player[self][35]='';
							ds++;
							if(ds==player[self][33]+1){self++;ds=1;}
							if(self>=player.length)self=0;
							
								rply.text+='\n\n'+BR();
							return rply;
						}						
							player[self][35]='';
								damage=Math.round(player[self][19]*(rollbase.Dice(401)+799)/100)/10;
								if(Hit<=(player[self][24]*0.2))damage=damage*2;
							if(player[i][14]=='G.U.' && player[i][38]>0){
								player[i][38]=player[i][38]-damage;
								if(player[i][38]<=0)player[i][38]=0;
								rply.text=player[i][1]+
							    '\nHP '+player[i][2]+'/'+player[i][3];
								rply.text+='\n護盾 '+player[i][38]+'/'+player[i][39];
								rply.text+='(-'+damage+')';
								if(Hit<=(player[self][24]*0.2))rply.text+='Critical';
							}
							if(player[i][14]=='G.U.' && player[i][38]<=0){
								player[i][2]=player[i][2]-damage;
								rply.text=player[i][1]+
							    '\nHP '+player[i][2]+'/'+player[i][3];
								rply.text+='(-'+damage+')';
								if(Hit<=(player[self][24]*0.2))rply.text+='Critical';
								rply.text+='\n護盾 '+player[i][38]+'/'+player[i][39];
							}
							if(player[i][14]=='A.A.U.F'){
								var RI=1-(player[i][38]/(player[i][38]+150));
								RI=RI.toFixed(3);
								damage=damage*RI;
								
								player[i][2]=player[i][2]-damage;
								rply.text=player[i][1]+
							    '\nHP '+player[i][2]+'/'+player[i][3];
								rply.text+='(-'+damage+')';
								if(Hit<=(player[self][24]*0.2))rply.text+='Critical';
								rply.text+='\n護甲 '+player[i][38];
							}
							rply.text+='\nbata粒子 '+player[i][4]+'/'+player[i][5];
							player[self][25]=0;
							player[self][34]=1.2;
							ds++;
							if(ds==player[self][33]+1){self++;ds=1;}
							if(player[i][2]<=0){
								if(i<self)self--;
								rply.text=rply.text+'\n'+player[i][1]+'已撤退';
								
								player.splice(i,1);
							}
							
							//----------------------------------------------
							if(winner(mmode)!='no winner'){
								rply.text=winner(mmode);
								return rply;
							}
							//------------------------------------------------------------------
							
							if(self>=player.length)self=0;
							rply.text=rply.text+'\n\n'+BR();
			return rply;
					}
				}
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^架槍$/) != null && player[self][18]==7 && player[self][25]==0){
					ot=new Date();
					player[self][25]=2;//架槍等動作
					player[self][34]=0;//閃避倍率
					rply.text+='架槍完畢'+'\n\n';
					ds++;
					
							if(ds==player[self][33]+1){self++;ds=1;}
							if(self>=player.length)self=0;
					rply.text+=BR()
			return rply;
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^高速架槍$/) != null && player[self][18]==7 && player[self][25]==0 && player[self][4]>=(player[self][5]*0.6)){
					ot=new Date();
					if(player[self][4]<(player[self][5]*0.6)){
							rply.text='Bata粒子過少，無法架槍';
							return rply;
						}
						player[self][4]-=Math.floor(player[self][5]*0.6);
					player[self][25]=2;//架槍等動作
					player[self][34]=0;//閃避倍率
					rply.text+='架槍完畢'+'\n\n';
					rply.text+=BR()
			return rply;
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^解除架槍$/) != null && player[self][18]==7 && player[self][25]>=2){
		ot=new Date();
					player[self][25]=0;//架槍等動作
					player[self][34]=0.5;//閃避倍率
					rply.text+='解除架槍完畢'+'\n\n';
					ds++;
					if(ds==player[self][33]+1){self++;ds=1;}
					if(self>=player.length)self=0;
					rply.text+=BR()
			return rply;
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^瞄準$/) != null && player[self][18]==7 && player[self][25]>=2 && mainMsg[1] != null ){
					ot=new Date();
					for(var i=0;i<player.length;i++){
					if(player[i][1]==mainMsg[1] ){
						player[self][35]=mainMsg[1];
						rply.text='已瞄準['+mainMsg[1]+']';
						player[self][25]=3;//架槍等動作
					player[self][26]=rollbase.Dice(61)-31+player[self][24];//命中(狙擊)
					rply.text+='命中可能性：'+player[self][26]+'\n\n';
					ds++;
					if(ds==player[self][33]+1){self++;ds=1;}
					if(self>=player.length)self=0;
					rply.text+=BR();
					break;
					}
						else{
							rply.text='沒有此目標';
						}
						
					}
					
			return rply;
					
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^射擊$/) != null && mainMsg[1] != null && player[self][18]==7 && player[self][20]>0 && player[self][25]==3){
				
				ot=new Date();

				
				
				for(var i=0;i<player.length;i++){
					if(player[i][1]==mainMsg[1] ){
						var temp =0;
						temp = Math.ceil(Math.pow(Math.pow(player[i][16]-player[self][16],2)+Math.pow(player[i][17]-player[self][17],2),0.5)*10)/10;
						if(temp>player[self][24]){
							
							rply.text='距離'+player[i][1]+'太遠，無法攻擊';
							return rply;
						}
						rnggg=rollbase.Dice(100);
						Hit=rollbase.Dice(100);
						Critical=rollbase.Dice(100);
						player[self][20]--;
						if(Hit>player[self][26] && player[self][35]==mainMsg[1]){
								rply.text=player[self][1]+'沒有命中';
								player[self][25]=2;
								player[self][35]='';
							ds++;
							if(ds==player[self][33]+1){self++;ds=1;}
							if(self>=player.length)self=0;
							
								rply.text+='\n\n'+BR();
							return rply;
						}
					if(Hit>player[self][26]-50 && player[self][35]!=mainMsg[1] ){
								rply.text=player[self][1]+'沒有命中';
								player[self][25]=2;
								player[self][35]='';
							ds++;
							if(ds==player[self][33]+1){self++;ds=1;}
							if(self>=player.length)self=0;
							
								rply.text+='\n\n'+BR();
							return rply;
						}						
						player[self][35]='';
						damage=Math.round(player[self][19]*(rollbase.Dice(401)+799)/100)/10;
							if(Hit<=(player[self][24]*0.2))damage=damage*2;
							if(player[i][14]=='G.U.' && player[i][38]>0){
								player[i][38]=player[i][38]-damage;
								if(player[i][38]<=0)player[i][38]=0;
								rply.text=player[i][1]+
							    '\nHP '+player[i][2]+'/'+player[i][3];
								rply.text+='\n護盾 '+player[i][38]+'/'+player[i][39];
								rply.text+='(-'+damage+')';
								if(Hit<=(player[self][24]*0.2))rply.text+='Critical';
							}
							if(player[i][14]=='G.U.' && player[i][38]<=0){
								player[i][2]=player[i][2]-damage;
								rply.text=player[i][1]+
							    '\nHP '+player[i][2]+'/'+player[i][3];
								rply.text+='(-'+damage+')';
								if(Hit<=(player[self][24]*0.2))rply.text+='Critical';
								rply.text+='\n護盾 '+player[i][38]+'/'+player[i][39];
							}
							if(player[i][14]=='A.A.U.F'){
								var RI=1-(player[i][38]/(player[i][38]+150));
								RI=RI.toFixed(3);
								damage=damage*RI;
								
								player[i][2]=player[i][2]-damage;
								rply.text=player[i][1]+
							    '\nHP '+player[i][2]+'/'+player[i][3];
								rply.text+='(-'+damage+')';
								if(Hit<=(player[self][24]*0.2))rply.text+='Critical';
								rply.text+='\n護甲 '+player[i][38];
							}
							rply.text+='\nbata粒子 '+player[i][4]+'/'+player[i][5];
							player[self][25]=2;
							ds++;
							if(ds==player[self][33]+1){self++;ds=1;}
							if(player[i][2]<=0){
								if(i<self)self--;
								rply.text=rply.text+'\n'+player[i][1]+'已撤退';
								
								player.splice(i,1);
							}
							
							//----------------------------------------------
							if(winner(mmode)!='no winner'){
								rply.text=winner(mmode);
								return rply;
							}
							//------------------------------------------------------------------
							if(self>=player.length)self=0;
							rply.text=rply.text+'\n\n'+BR();
			return rply;
					}
				}
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^定樁$/) != null && player[self][18]==8 && player[self][25]==0){
					ot=new Date();
					player[self][25]=2;//架槍等動作
					player[self][34]=0;//閃避倍率
					rply.text+='定樁完畢'+'\n\n';
					ds++;
					if(ds==player[self][33]+1){self++;ds=1;}
					if(self>=player.length)self=0;
					rply.text+=BR();
			return rply;
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^解除定樁$/) != null && player[self][18]==8 && player[self][25]>=2){
					ot=new Date();
					player[self][25]=0;//架槍等動作
					player[self][34]=0.25;//閃避倍率
					rply.text+='解除定樁完畢'+'\n\n';
					ds++;
					if(ds==player[self][33]+1){self++;ds=1;}
					if(self>=player.length)self=0;
					rply.text+=BR()
			return rply;
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^定位$/) != null && player[self][18]==8 && player[self][25]==2 &&  mainMsg[1] != null){
				ot=new Date();
				let xxyy = mainMsg[1].split(','); //定義輸入字串
				if(isNaN(xxyy[0])==0 && isNaN(xxyy[1])==0){
					temp = Math.ceil(Math.pow(Math.pow(player[i][16]-player[self][16],2)+Math.pow(player[i][17]-player[self][17],2),0.5)*10)/10;
						if(temp>player[self][24]){
							rply.text='距離'+player[i][1]+'太遠，無法定位';
							return rply;
						}
					player[self][35]=mainMsg[1];
				}
				else{ 
					rply.text='格式錯誤';
					return rply;
				}
				player[self][25]=3;//架槍等動作
					ds++;
					if(ds==player[self][33]+1){self++;ds=1;}
					if(self>=player.length)self=0;
					rply.text+=BR()
			return rply;
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^炮擊$/) != null  && player[self][18]==8 && player[self][20]>0 && player[self][25]==3){
				ot=new Date();
				let xxyy = player[self][35].split(','); //定義輸入字串
				if(isNaN(xxyy[0])==0 && isNaN(xxyy[1])==0){
					var temp =0;
						
						rnggg=rollbase.Dice(100);
						Hit=rollbase.Dice(100);
						player[self][20]--;
					for(var f=0;f<player.length;f++){
						if(xxyy[0]==player[f][16] && xxyy[1]==player[f][17]){
							damage=Math.round(player[self][19]*(rollbase.Dice(100)+player[self][24])/10)/10;
							player[f][2]=player[f][2]-damage;
							rply.text+=player[f][1]+
							'\nHP '+player[f][2]+'/'+player[f][3];
							rply.text+='(-'+damage+')\n';
							
						}
					}
					
							player[self][25]=2;
							ds++;
							if(ds==player[self][33]+1){self++;ds=1;}
						for(var f=0;f<player.length;f++){
							if(player[f][2]<=0){
								if(f<self)self--;
								if(f==self){self--;ds=1;}
								rply.text=rply.text+'\n'+player[f][1]+'已撤退';
								player.splice(f,1);
							}
						}
							
								if(player.length==0){
								rply.text+='\n'+'平手';
								start=0;
								dd();
								return rply;
							}
							//----------------------------------------------
							if(winner(mmode)!='no winner'){
								rply.text=winner(mmode);
								return rply;
							}
							//------------------------------------------------------------------
							if(self>=player.length)self=0;
							rply.text=rply.text+'\n\n'+BR();
			return rply;
				}
				else{ 
					rply.text='格式錯誤';
					return rply;
				}
						
					
			}
			
			//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^技能$/) != null && mainMsg[1] != null ){
				ot=new Date();
				if(player[self][Number(mainMsg[1])+27]==null || player[self][Number(mainMsg[1])+27][0]==0){
					rply.text='沒有這個技能';
							return rply;
				}
				clearTimeout(AJT);

				for(var i=0;i<player.length;i++){
					
						if(player[self][Number(mainMsg[1])+27][1]=='被動'){
							if(player[self][4]<(player[self][5]*player[self][Number(mainMsg[1])+27][3]/100)){
							rply.text='Bata粒子過少，無法發動';
							return rply;
						}
						
						if(player[self][Number(mainMsg[1])+27][2]==1){
							if(player[self][37][1]==1){
								player[self][37][1]=0;
								rply.text='已關閉狂暴插件\nbata粒子 '+player[i][4]+'/'+player[i][5];
							}
							else{
							player[self][4]-=player[self][5]*player[self][Number(mainMsg[1])+27][3]/100;
							player[self][37][1]=1;
							rply.text='已開啟狂暴插件\nbata粒子 '+player[i][4]+'/'+player[i][5];
							}
							ds++;
							if(ds==player[self][33]+1){self++;ds=1;}
							if(self>=player.length)self=0;
							rply.text+='\n'+BR();
							
							return rply;
						}
						
						if(player[self][Number(mainMsg[1])+27][2]==2){
							if(player[self][37][2]==1){
								player[self][36]--;
								player[self][37][2]=0;
								rply.text='已關閉加速插件\nbata粒子 '+player[i][4]+'/'+player[i][5];
							}
							else{
								player[self][4]-=player[self][5]*player[self][Number(mainMsg[1])+27][3]/100;
								player[self][36]++;
							player[self][37][2]=1;
							rply.text='已開啟加速插件\nbata粒子 '+player[i][4]+'/'+player[i][5];
							}
							ds++;
							if(ds==player[self][33]+1){self++;ds=1;}
							if(self>=player.length)self=0;
							rply.text+='\n'+BR();
							
							return rply;
						}
						if(player[self][Number(mainMsg[1])+27][2]==3){
							if(player[self][37][3]==1){
								player[self][33]--;
								player[self][37][3]=0;
								rply.text='已關閉過載插件\nbata粒子 '+player[i][4]+'/'+player[i][5];
							}
							else{
							player[self][4]-=player[self][5]*player[self][Number(mainMsg[1])+27][3]/100;
							player[self][33]++;
							player[self][37][3]=1;
							rply.text='已開啟過載插件\nbata粒子 '+player[i][4]+'/'+player[i][5];
							}
							rply.text+='\n'+BR(1);
							return rply;
						}
						}
						
						
						if(player[self][Number(mainMsg[1])+27][1]=='攻擊' && mainMsg[2] != null){
							if(player[i][1]==mainMsg[2] ){
							var temp =0;
							temp = Math.ceil(Math.pow(Math.pow(player[i][16]-player[self][16],2)+Math.pow(player[i][17]-player[self][17],2),0.5)*10)/10;
							if(temp>Number(player[self][Number(mainMsg[1])+27][4])){
								rply.text='距離'+player[i][1]+'太遠，無法攻擊';
								return rply;
							}
							rnggg=rollbase.Dice(100);
							Critical=rollbase.Dice(100);	
							rply.text=player[self][1]+'：\n'+player[self][Number(mainMsg[1])+27][6]+'\n';
							if(rnggg > (20 + parseInt(player[i][7]) - parseInt(player[self][7]) ) ){
							damage=Math.round(Number(player[self][Number(mainMsg[1])+27][3])*(rollbase.Dice(10)+5)*0.1);
								if(Critical<=Number(player[self][Number(mainMsg[1])+27][5]))damage=parseInt(damage*1.5);
								player[i][2]=player[i][2]-damage;
								rply.text+=player[i][1]+
								'\nHP '+player[i][2]+'/'+player[i][3];
								rply.text+='(-'+damage+')';
								if(Critical<=50 && player[self][18]==9)rply.text+='Critical';
								rply.text+='\nbata粒子 '+player[i][4]+'/'+player[i][5];
								
								ds++;
								if(ds==player[self][33]+1){self++;ds=1;}
								if(self>=player.length)self=0;
								if(player[i][2]<=0){
									if(i<self)self--;
									rply.text=rply.text+'\n'+player[i][1]+'已撤退';
									
									player.splice(i,1);
								}
								
								//----------------------------------------------
							if(winner(mmode)!='no winner'){
								rply.text=winner(mmode);
								return rply;
							}
							//------------------------------------------------------------------
								if(self>=player.length)self=0;
								rply.text=rply.text+'\n\n'+BR();
				return rply;
							}
							else{
							ds++;
								if(ds==player[self][33]+1){self++;ds=1;}
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
			}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^移動$/) != null && start==1 &&  mainMsg[1] != null && player[self][25]<2){
				
				ot=new Date();

				
				let xxyy = mainMsg[1].split(','); //定義輸入字串
				if(isNaN(xxyy[0])==0 && isNaN(xxyy[1])==0){
					var temp =0;
						temp = Math.ceil(Math.pow(Math.pow(Math.floor(xxyy[0])-player[self][16],2)+Math.pow(Math.floor(xxyy[1])-player[self][17],2),0.5)*10)/10;
						if(temp>player[self][36]){
											 
							rply.text='距離太遠，無法移動';
							return rply;
						}
						else{
							if(xxyy[0]>=1 && xxyy[0]<=51 && xxyy[1]>=1 && xxyy[1]<=51){ 
							
							rply.text='已移動到 座標'+Math.floor(xxyy[0]*10)/10+','+Math.floor(xxyy[1]*10)/10;
							player[self][16]=Math.floor(xxyy[0]*10)/10;
							player[self][17]=Math.floor(xxyy[1]*10)/10;
							if(player[self][20]==0 && player[self][18]==3)player[self][20]=player[self][21];
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
				ds++;
							if(ds==player[self][33]+1){self++;ds=1;}
							if(self>=player.length)self=0;
					rply.text+='\n\n'+BR();
			return rply;
		}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^磁懸推進$/) != null && start==1 &&  mainMsg[1] != null && player[self][14]=='A.A.U.F'){
				
				
				ot=new Date();
				
				
				let xxyy = mainMsg[1].split(','); //定義輸入字串
				if(isNaN(xxyy[0])==0 && isNaN(xxyy[1])==0){
					var temp =0;
						temp = Math.ceil(Math.pow(Math.pow(Math.floor(xxyy[0])-player[self][16],2)+Math.pow(Math.floor(xxyy[1])-player[self][17],2),0.5)*10)/10;
						if(temp>player[self][4]/10){
											
							rply.text='Bata粒子過少，無法移動';
							return rply;
						}
						else{
							if(xxyy[0]>=1 && xxyy[0]<=51 && xxyy[1]>=1 && xxyy[1]<=51){ 
							player[self][4]-=temp*10;
							rply.text='已移動到 座標'+Math.floor(xxyy[0]*10)/10+','+Math.floor(xxyy[1]*10)/10;
							player[self][16]=Math.floor(xxyy[0]*10)/10;
							player[self][17]=Math.floor(xxyy[1]*10)/10;
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
				ds++;
							if(ds==player[self][33]+1){self++;ds=1;}
							if(self>=player.length)self=0;
					rply.text+='\n\n'+BR();
			return rply;
		}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^脈衝推進$/) != null && start==1 &&  mainMsg[1] != null && player[self][14]=='G.U.'){
				
				ot=new Date();

				
				let xxyy = mainMsg[1].split(','); //定義輸入字串
				if(isNaN(xxyy[0])==0 && isNaN(xxyy[1])==0){
					var temp =0;
						temp = Math.ceil(Math.pow(Math.pow(Math.floor(xxyy[0])-player[self][16],2)+Math.pow(Math.floor(xxyy[1])-player[self][17],2),0.5)*10)/10;
						if(temp>player[self][4]/20){
											
							rply.text='Bata粒子過少，無法移動';
							return rply;
						}
						else{
							if(xxyy[0]>=1 && xxyy[0]<=51 && xxyy[1]>=1 && xxyy[1]<=51){ 
							player[self][4]-=temp*20;
							rply.text='已移動到 座標'+Math.floor(xxyy[0]*10)/10+','+Math.floor(xxyy[1]*10)/10;
							player[self][16]=Math.floor(xxyy[0]*10)/10;
							player[self][17]=Math.floor(xxyy[1]*10)/10;
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
				ds++;
							if(ds==player[self][33]+1){self++;ds=1;}
							if(self>=player.length)self=0;
					rply.text+='\n\n'+BR();
			return rply;
		}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^強力射擊$/) != null && mainMsg[1] != null &&player[self][18]==2  && player[self][20]>0){
				
				ot=new Date();
		
				
				
				for(var i=0;i<player.length;i++){
					if(player[i][1]==mainMsg[1] ){
						var temp =0;
						if(player[self][4]<(player[self][5]*0.5)){
							rply.text='Bata粒子過少，無法攻擊';
							return rply;
						}
						temp = Math.ceil(Math.pow(Math.pow(player[i][16]-player[self][16],2)+Math.pow(player[i][17]-player[self][17],2),0.5)*10)/10;
						if(temp>(player[self][23]+3)){
							
							rply.text='距離'+player[i][1]+'太遠，無法攻擊';
							return rply;
						}
						player[self][4]-=player[self][5]*0.5;
						rnggg=rollbase.Dice(100);
						Hit=rollbase.Dice(100);
						player[self][20]--;
						if(Hit>(player[self][24]+20)){
							ds++;
							if(ds==player[self][33]+1){self++;ds=1;}
							if(self>=player.length)self=0;
							rply.text=player[self][1]+'沒有命中'+
							'\n\n'+BR();
			return rply;
						}
						
						if(rnggg > ( parseInt(player[i][7]) - parseInt(player[self][7]) ) * player[i][34] ){
							damage=Math.round(player[self][19]*(rollbase.Dice(401)+799)*1.5/100)/10;
							if(Hit<=(player[self][24]*0.2))damage=parseInt(damage*2);
							if(player[i][14]=='G.U.' && player[i][38]>0){
								player[i][38]=player[i][38]-damage;
								if(player[i][38]<=0)player[i][38]=0;
								rply.text=player[i][1]+
							    '\nHP '+player[i][2]+'/'+player[i][3];
								rply.text+='\n護盾 '+player[i][38]+'/'+player[i][39];
								rply.text+='(-'+damage+')';
								if(Hit<=(player[self][24]*0.2))rply.text+='Critical';
							}
							if(player[i][14]=='G.U.' && player[i][38]<=0){
								player[i][2]=player[i][2]-damage;
								rply.text=player[i][1]+
							    '\nHP '+player[i][2]+'/'+player[i][3];
								rply.text+='(-'+damage+')';
								if(Hit<=(player[self][24]*0.2))rply.text+='Critical';
								rply.text+='\n護盾 '+player[i][38]+'/'+player[i][39];
							}
							if(player[i][14]=='A.A.U.F'){
								var RI=1-(player[i][38]/(player[i][38]+150));
								RI=RI.toFixed(3);
								damage=damage*RI;
								
								player[i][2]=player[i][2]-damage;
								rply.text=player[i][1]+
							    '\nHP '+player[i][2]+'/'+player[i][3];
								rply.text+='(-'+damage+')';
								if(Hit<=(player[self][24]*0.2))rply.text+='Critical';
								rply.text+='\n護甲 '+player[i][38];
							}
							rply.text+='\nbata粒子 '+player[i][4]+'/'+player[i][5];
							
							ds++
							if(ds==player[self][33]+1){self++;ds=1;}
							if(player[i][2]<=0){
								if(i<self)self--;
								rply.text=rply.text+'\n'+player[i][1]+'已撤退';
								
								player.splice(i,1);
							}
							
							//----------------------------------------------
							if(winner(mmode)!='no winner'){
								rply.text=winner(mmode);
								return rply;
							}
							//------------------------------------------------------------------
							if(self>=player.length)self=0;
							rply.text=rply.text+'\n\n'+BR();
			return rply;
						}
						else{
						ds++;
							if(ds==player[self][33]+1){self++;ds=1;}
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
			if(id==player[self][0] && trigger.match(/^戰術治療$/) != null && mainMsg[1] != null && player[self][18]==4){
				
				ot=new Date();
		
				for(var i=0;i<player.length;i++){
					if(player[i][1]==mainMsg[1] ){
						var temp =0;
						if(player[self][4]<(player[self][5]*0.6)){
							rply.text='Bata粒子過少，無法治療';
							return rply;
						}
						temp = Math.ceil(Math.pow(Math.pow(player[i][16]-player[self][16],2)+Math.pow(player[i][17]-player[self][17],2),0.5)*10)/10;
						if(temp>(1)){
							
							rply.text='距離'+player[i][1]+'太遠，無法治療';
							return rply;
						}
						player[self][4]-=player[self][5]*0.6;
						
						
						damage=player[i][3]*0.1+20;
							if(player[i][2]+damage>player[i][3]){
								damage=player[i][3]-player[i][2];
							}
							player[i][2]+=damage;
							rply.text=player[i][1]+
							'\nHP '+player[i][2]+'/'+player[i][3];
							rply.text+='(+'+damage+')';
							if(player[i][14]=='G.U.')rply.text+='\n護盾 '+player[i][38]+'/'+player[i][39];
							if(player[i][14]=='A.A.U.F')rply.text+='\n護甲 '+player[i][38];
							rply.text+='\nbata粒子 '+player[i][4]+'/'+player[i][5];
							ds++;
							if(ds==player[self][33]+1){self++;ds=1;}
							if(self>=player.length)self=0;
							rply.text=rply.text+'\n\n'+BR();
			return rply;
						
					}
				}
			}
			//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^移動突擊$/) != null && mainMsg[1] != null	&& player[self][18]==11 && player[self][33]+1-ds>=2 ){
				ot=new Date();
			
				for(var i=0;i<player.length;i++){
					if(player[i][1]==mainMsg[1] ){
						var temp =0;
						temp = Math.ceil(Math.pow(Math.pow(player[i][16]-player[self][16],2)+Math.pow(player[i][17]-player[self][17],2),0.5)*10)/10;
						if(temp>player[self][23]+3){
							rply.text='距離'+player[i][1]+'太遠，無法攻擊';
							return rply;
						}
						player[self][16]=player[i][16];
						player[self][17]=player[i][17];
						rnggg=rollbase.Dice(100);
						Hit=rollbase.Dice(100);
						Critical=rollbase.Dice(100);
						var addda=0,addga=0;
						if(temp>=1){addda=1.25;addga=5;}
						if(temp>=2){addda=1.5;addga=10;}
						if(temp>=3){addda=2;addga=15;}
						if(Hit>(player[self][24]-addga)){
							ds+=2;
							if(ds==player[i][33]+1){self++;ds=1;}
							if(self>=player.length)self=0;
							rply.text=player[self][1]+'沒有命中'+
							'\n\n'+BR();
			return rply;
						}
						
						if(rnggg > ( parseInt(player[i][7]) - parseInt(player[self][7]) ) * player[i][34] ){
						if(player[self][37][1]==1){
							damage=Math.round(player[self][19]*(rollbase.Dice(2001)-1)*addda/100)/10;
						}
						else{
							damage=Math.round(player[self][19]*(rollbase.Dice(401)+799)*addda/100)/10;
						}
							
							if(Hit<=((player[self][24]-addga)*0.2))damage=parseInt(damage*2);

							if(player[i][14]=='G.U.' && player[i][38]>0){
								player[i][38]=player[i][38]-damage;
								if(player[i][38]<=0)player[i][38]=0;
								rply.text=player[i][1]+
							    '\nHP '+player[i][2]+'/'+player[i][3];
								rply.text+='\n護盾 '+player[i][38]+'/'+player[i][39];
								rply.text+='(-'+damage+')';
								if(Hit<=(player[self][24]*0.2))rply.text+='Critical';
							}
							if(player[i][14]=='G.U.' && player[i][38]<=0){
								player[i][2]=player[i][2]-damage;
								rply.text=player[i][1]+
							    '\nHP '+player[i][2]+'/'+player[i][3];
								rply.text+='(-'+damage+')';
								if(Hit<=(player[self][24]*0.2))rply.text+='Critical';
								rply.text+='\n護盾 '+player[i][38]+'/'+player[i][39];
							}
							if(player[i][14]=='A.A.U.F'){
								var RI=1-(player[i][38]/(player[i][38]+150));
								RI=RI.toFixed(3);
								damage=damage*RI;
								
								player[i][2]=player[i][2]-damage;
								rply.text=player[i][1]+
							    '\nHP '+player[i][2]+'/'+player[i][3];
								rply.text+='(-'+damage+')';
								if(Hit<=(player[self][24]*0.2))rply.text+='Critical';
								rply.text+='\n護甲 '+player[i][38];
							}
							rply.text+='\nbata粒子 '+player[i][4]+'/'+player[i][5];
							ds+=2;
							if(ds==player[self][33]+1){self++;ds=1;}
							if(player[i][2]<=0){
								if(i<self)self--;
								rply.text=rply.text+'\n'+player[i][1]+'已撤退';
								
								player.splice(i,1);
							}
						//----------------------------------------------
							if(winner(mmode)!='no winner'){
								rply.text=winner(mmode);
								return rply;
							}
							//------------------------------------------------------------------
							
							if(self>=player.length)self=0;
							rply.text=rply.text+'\n\n'+BR();
			return rply;
						}
						else{
							rply.text=player[i][1]+'閃避成功'+
							'\nHP '+player[i][2]+'/'+player[i][3]+
							'\nbata粒子 '+player[i][4]+'/'+player[i][5];
						ds+=2;
							if(ds==player[self][33]+1){self++;ds=1;}
							if(self>=player.length)self=0;
							
							rply.text+='\n\n'+BR();
			return rply;
						}
					}
				}
			}
		//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^能量放出$/) != null && mainMsg[1] != null &&player[self][18]==12 && player[self][4]>=(player[self][5]*0.1)){
				
				ot=new Date();
		
				
				
				for(var i=0;i<player.length;i++){
					if(player[i][1]==mainMsg[1] ){
						var temp =0;
						if(player[self][4]<(player[self][5]*0.1)){
							rply.text='Bata粒子過少，無法攻擊';
							return rply;
						}
						temp = Math.ceil(Math.pow(Math.pow(player[i][16]-player[self][16],2)+Math.pow(player[i][17]-player[self][17],2),0.5)*10)/10;
						if(temp>(player[self][23]+3)){
							
							rply.text='距離'+player[i][1]+'太遠，無法攻擊';
							return rply;
						}
						player[self][4]-=(player[self][5]*0.1);
						rnggg=rollbase.Dice(100);
						player[self][20]--;
							
							damage=Math.round(player[self][19]*(rollbase.Dice(401)+799)*(100+player[self][26]*100)*0.01/100)/10;
							player[self][26]=0;
							if(player[i][14]=='G.U.' && player[i][38]>0){
								player[i][38]=player[i][38]-damage;
								if(player[i][38]<=0)player[i][38]=0;
								rply.text=player[i][1]+
							    '\nHP '+player[i][2]+'/'+player[i][3];
								rply.text+='\n護盾 '+player[i][38]+'/'+player[i][39];
								rply.text+='(-'+damage+')';
								if(Hit<=(player[self][24]*0.2))rply.text+='Critical';
							}
							if(player[i][14]=='G.U.' && player[i][38]<=0){
								player[i][2]=player[i][2]-damage;
								rply.text=player[i][1]+
							    '\nHP '+player[i][2]+'/'+player[i][3];
								rply.text+='(-'+damage+')';
								if(Hit<=(player[self][24]*0.2))rply.text+='Critical';
								rply.text+='\n護盾 '+player[i][38]+'/'+player[i][39];
							}
							if(player[i][14]=='A.A.U.F'){
								var RI=1-(player[i][38]/(player[i][38]+150));
								RI=RI.toFixed(3);
								damage=damage*RI;
								
								player[i][2]=player[i][2]-damage;
								rply.text=player[i][1]+
							    '\nHP '+player[i][2]+'/'+player[i][3];
								rply.text+='(-'+damage+')';
								if(Hit<=(player[self][24]*0.2))rply.text+='Critical';
								rply.text+='\n護甲 '+player[i][38];
							}
							rply.text+='\nbata粒子 '+player[i][4]+'/'+player[i][5];
							
							ds++
							if(ds==player[self][33]+1){self++;ds=1;}
							if(player[i][2]<=0){
								if(i<self)self--;
								rply.text=rply.text+'\n'+player[i][1]+'已撤退';
								
								player.splice(i,1);
							}
							
							//----------------------------------------------
							if(winner(mmode)!='no winner'){
								rply.text=winner(mmode);
								return rply;
							}
							//------------------------------------------------------------------
							if(self>=player.length)self=0;
							rply.text=rply.text+'\n\n'+BR();
							return rply;
						
					}
				}
			}
	//-----------------------------------------------------------------------------------------------------------------------------------------------------
			if(id==player[self][0] && trigger.match(/^聚能$/) != null &&player[self][18]==12 && player[self][4]>=(player[self][5]*0.2)){
					ot=new Date();
					if(player[self][4]<(player[self][5]*0.2)){
							rply.text='Bata粒子過少，聚能失敗';
							return rply;
						}
						player[self][4]-=player[self][5]*0.2;
						player[self][26]++;
					rply.text+='已聚能'+player[self][26]+'次\n\n';
					if(player[self][26]%2==0){
					ds++;
					if(ds==player[self][33]+1){self++;ds=1;}
					if(self>=player.length)self=0;
					}
					rply.text+=BR();
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
		if(trigger.match(/^GM-消滅$/) != null && start==1 && xmode!=4){
								player[self][2]=0;
								rply.text=player[self][1]+'已撤退';
								player.splice(self,1);
								//----------------------------------------------
							if(winner(mmode)!='no winner'){
								rply.text=winner(mmode);
								return rply;
							}
							//------------------------------------------------------------------
							ds=1;
					if(self>=player.length)self=0;
							rply.text+='\n\n'+BR();
			return rply;
		}
		if(trigger.match(/^關閉測傷$/) != null && start==1 && mmode==4){

								rply.text='已關閉測傷';
								player.splice(1,1);
								start=0;
								RAAUF=0;
								RGU=0;
								dd();
			return rply;
		}
			if(trigger.match(/^回合/) != null){
							rply.text=BR(1);
			return rply;
			}
		}
			
}

function BR(nb){
	ot=new Date();
	var rr;
	var ff='';
	if(xmode==4){
		player[self][2]=player[self][3];
		player[self][4]=player[self][5];
		if(player[self][0]=='dummy'){
			self++;
					ds=1;
					if(self>=player.length)self=0;
					rr=BR();
			return rr;
		}
	}
	if(nb!=1 && player[self][37][3]==1 && ds==1){
		player[self][2]-=Math.floor(player[self][3]*0.1);
		if(player[self][2]<=0){
			ff='\n'+player[self][1]+'無法負荷過載而撤退\n';
								
								player.splice(self,1);
								if(self>=player.length)self=0;
								
								//----------------------------------------------
							if(winner(xmode)!='no winner'){
								rply.text=winner(xmode);
								return rply;
							}
							//------------------------------------------------------------------
		}
	}
	
	rr=ff+'輪到'+player[self][1]+'的第'+ds+'次行動'+
			'\n陣營'+player[self][14]+
			'\nHP '+player[self][2]+'/'+player[self][3]+
			'\nbata粒子 '+player[self][4]+'/'+player[self][5]+
			'\n位置 '+player[self][16]+','+player[self][17]+
			'\n可移動距離 '+player[self][36];
	if(player[self][18]<9)rr+='\n子彈數：'+player[self][20]+'/'+player[self][21];
	
	if(player[self][37][1]==1)rr+='\n狂暴插件啟動中';
	if(player[self][37][2]==1)rr+='\n加速插件啟動中';
	if(player[self][37][3]==1)rr+='\n過載插件啟動中';
			rr+='\n 可用選項：';
			if(xmode==4){
				rr+='\n關閉測傷';
			}
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
				rr+='\n能源充填 (+Bata粒子20%,+Bata粒子20)';
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
			if(player[self][18]==2 && player[self][4]>=(player[self][5]*0.5)){
				rr+='\n強力射擊 目標 (-Bata粒子50%,攻擊1.5倍,射程+3,精準+20)';
			}			
			if(player[self][18]==4 && player[self][4]>=(player[self][5]*0.6)){
				rr+='\n戰術治療 目標 (-Bata粒子60%,+HP10%,+HP20,射程<1)';
			}	
			
			if(player[self][18]==6 && player[self][20]>0){
				rr+='\n瞄準 目標';
			}	
			if(player[self][18]==6 && player[self][20]>0 && player[self][25]==1){
				rr+='\n射擊 目標';
			}			
			if(player[self][18]==7 && player[self][25]==0){
				rr+='\n架槍';
			}
			if(player[self][18]==7 && player[self][25]==0 && player[self][4]>=(player[self][5]*0.6)){
				rr+='\n高速架槍 (-Bata粒子60%,-0行動)';
			}
			if(player[self][18]==7 && player[self][25]>=2){
				rr+='\n解除架槍';
			}
			if(player[self][18]==7 && player[self][20]>0 && player[self][25]>=2){
				rr+='\n瞄準 目標';
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
				rr+='\n定位 x座標,y座標';
			}
			if(player[self][18]==8 && player[self][20]>0 && player[self][25]==3){
				rr+='\n炮擊';
			}			
			if(player[self][18]>=9 && player[self][18]<=11){
				rr+='\n近戰攻擊 目標';
			}
			if(player[self][18]==11 && player[self][33]+1-ds>=2){
				rr+='\n移動突擊 目標 (-2行動,射程+3,依距離增傷(最多2倍)與減少精準,攻擊後移動)';
			}		
			if(player[self][18]==12 && player[self][4]>=(player[self][5]*0.1)){
				rr+='\n能量放出 目標 (-Bata粒子10%)';
			}
			if(player[self][18]==12 && player[self][4]>=(player[self][5]*0.2)){
				rr+='\n聚能 (-Bata粒子20%,每使用一次能讓下次能量放出+100%的傷害)';
			}			
			for(kkkk=1;kkkk<=5;kkkk++){
			if(player[self][27+kkkk][0]!=0 && player[self][27+kkkk][1]=="攻擊")rr+='\n技能 '+kkkk+' 目標('+ player[self][27+kkkk][0]+')';
			
			if(player[self][27+kkkk][0]!=0 && player[self][27+kkkk][1]=="被動")rr+='\n技能 '+kkkk+' ('+ player[self][27+kkkk][0]+' -'+player[self][27+kkkk][3]+'%)';
			}
			rr+='\n 目標有';
			for(var k=0;k<player.length;k++){
								rr=rr+'\n'+player[k][1]+' '+player[k][16]+','+player[k][17]+'('
								+Math.ceil((Math.pow(Math.pow(player[k][16]-player[self][16],2)+Math.pow(player[k][17]-player[self][17],2),0.5)))
								+')';
							}
			return rr;
}

function winner(mmodes){
	if(mmodes==1){
						var ap=0,gp=0,re;
							for(var g=0;g<player.length;g++){
								if(player[g][14]=='A.A.U.F')ap++;
								if(player[g][14]=='G.U.')gp++;
							}
								if(ap==0){
									
								for(var uu=0;uu<player.length;uu++){
									  for(var fgg=0;fgg<ox.oL();fgg++){
										if(ox.oC(fgg,0)==player[uu][0]){
									var GGP=1+((player.length-1)*2);
									ox.GP(fgg,Number(ox.oC(fgg,18))+Number(GGP));
										}
									  }
								}
								re+='\nG.U勝利';
								start=0;
								RAAUF=0;
								RGU=0;
								dd();
								return re;
							}
							if(gp==0){
								for(var uu=0;uu<player.length;uu++){
									  for(var fgg=0;fgg<ox.oL();fgg++){
										if(ox.oC(fgg,0)==player[uu][0]){
									var GGP=1+((player.length-1)*2);
									ox.GP(fgg,Number(ox.oC(fgg,18))+Number(GGP));
										}
									  }
								}
								re+='\nA.A.U.F勝利';
								start=0;
								RAAUF=0;
								RGU=0;
								dd();
								return re;
							}
							}
							
							if(mmodes==2){
						
								if(player.length==1){
									  for(var fgg=0;fgg<ox.oL();fgg++){
										if(ox.oC(fgg,0)==player[0][0]){
									var GGP=100;
									ox.oA(fgg,Number(ox.oC(fgg,17))+Number(GGP));
										}
								}
								re+='\n'+player[0][1]+'獲得最後勝利';
								start=0;
								RAAUF=0;
								RGU=0;
								dd();
								return re;
							}
							
							}
							re='no winner';
							return re;
}

module.exports = {
	battles:battles,
	dd:dd
};


