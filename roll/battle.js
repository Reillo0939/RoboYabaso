var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var ox = require('./Character.js');
var rply ={type : 'text'}; //type是必需的,但可以更改
var player= new Array();;
var start=0;
var hit=1;
var f41=0;
var self=0;
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
	if(trigger.match(/^愚人節boss活動/) != null && start==0){
		mode=21;
		dd();
	        rply.text='已轉為討伐愚人節boss模式(8人)';
		return rply;
	}
	if(trigger.match(/^4人棋盤模式/) != null && start==0){
		mode=99;
		dd();
	        rply.text='已轉為4人棋盤模式';
		return rply;
	}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	rply.text='';
	if(mode==1){
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
		}
		if(mode==99){
			cb(4,mainMsg,trigger,id,name);
		return rply;
		}
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
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
			var ff=rollbase.Dice(4)-1;
				player[ff][16]=1;
				player[ff][17]=1;
				ff++;
				if(ff>=4)ff=0;
				player[ff][16]=10;
				player[ff][17]=1;
				ff++;
				if(ff>=4)ff=0;
				player[ff][16]=1;
				player[ff][17]=10;
				ff++;
				if(ff>=4)ff=0;
				player[ff][16]=10;
				player[ff][17]=10;
			rply.text='戰鬥展開'+
			'\n'+player[self][1]+'先手'+
			'\n位置 '+player[self][16]+','+player[self][17]+
			'\n 可用選項：'+
			'\n攻擊 目標'+
			'\n移動 x座標,y座標'+
			'\n 目標有';
			for(var k=0;k<player.length;k++){
								rply.text=rply.text+'\n'+player[k][1]+' '+player[k][16]+','+player[k][17];
							}
			return rply;
		}
		if(start==1){
			if(id==player[self][0] && trigger.match(/^攻擊$/) != null && mainMsg[1] != null ){
				for(var i=0;i<player.length;i++){
					if(player[i][1]==mainMsg[1] ){
						
						var temp =0;
						temp = Math.ceil((Math.pow(Math.pow(player[i][16]-player[self][16],2)+Math.pow(player[i][17]-player[self][17],2),0.5)));
						if(temp>3){
							rply.text='距離'+player[i][1]+'太遠，無法攻擊';
							return rply;
						}
						
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
							rply.text=rply.text+'\n\n輪到'+player[self][1]+'的回合'+
							'\n位置 '+player[self][16]+','+player[self][17]+
							'\n 可用選項：'+
							'\n攻擊 目標'+
							'\n移動 x座標,y座標'+
							'\n 目標有';
							for(var k=0;k<player.length;k++){
								rply.text=rply.text+'\n'+player[k][1]+' '+player[k][16]+','+player[k][17];
							}
							
							return rply;
						}
						else{
							self++;
							if(self>=player.length)self=0;
							rply.text=player[i][1]+'閃避成功'+
							'\nHP '+player[i][2]+'/'+player[i][3]+
							'\nbata粒子 '+player[i][4]+'/'+player[i][5]+
							'\n\n輪到'+player[self][1]+'的回合'+
							'\n位置 '+player[self][16]+','+player[self][17]+
							'\n 可用選項：'+
							'\n攻擊 目標'+
							'\n移動 x座標,y座標'+
							'\n 目標有';
							for(var k=0;k<player.length;k++){
								rply.text=rply.text+'\n'+player[k][1]+' '+player[k][16]+','+player[k][17];
							}
							return rply;
						}
					}
				}
			}
			if(id==player[self][0] && trigger.match(/^移動/) != null && start==1 &&  mainMsg[1] != null){
				let xxyy = mainMsg[1].split(','); //定義輸入字串
				if(isNaN(xxyy[0])==0 && isNaN(xxyy[1])==0){
					var temp =0;
						temp = Math.ceil((Math.pow(Math.pow(xxyy[0]-player[self][16],2)+Math.pow(xxyy[1]-player[self][17],2),0.5)));
						if(temp>3){
							rply.text='距離太遠，無法移動';
							return rply;
						}
						else{
							rply.text='已移動到 座標'+xxyy[0]+','+xxyy[1];
							player[self][16]=xxyy[0];
							player[self][17]=xxyy[1];
						}
				}
				else{
					rply.text='格式錯誤';
					return rply;
				}
					self++;
					if(self>=player.length)self=0;
					rply.text+='\n\n輪到'+player[self][1]+'的回合'+
							'\n位置 '+player[self][16]+','+player[self][17]+
							'\n 可用選項：'+
							'\n攻擊 目標'+
							'\n移動 x座標,y座標'+
							'\n 目標有';
				for(var k=0;k<player.length;k++){
								rply.text=rply.text+'\n'+player[k][1]+' '+player[k][16]+','+player[k][17];
							}
				return rply;
		}
			if(trigger.match(/^跳過/) != null && start==1){
					self++;
					if(self>=player.length)self=0;
					rply.text='輪到'+player[self][1]+'的回合'+
							'\n位置 '+player[self][16]+','+player[self][17]+
							'\n 可用選項：'+
							'\n攻擊 目標'+
							'\n移動 x座標,y座標'+
							'\n 目標有';
				for(var k=0;k<player.length;k++){
								rply.text=rply.text+'\n'+player[k][1]+' '+player[k][16]+','+player[k][17];
							}
				return rply;
		}
		if(trigger.match(/^GM-消滅$/) != null && start==1){
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
							rply.text='輪到'+player[self][1]+'的回合'+
							'\n位置 '+player[self][16]+','+player[self][17]+
							'\n 可用選項：'+
							'\n攻擊 目標'+
							'\n移動 x座標,y座標'+
							'\n 目標有';
				for(var k=0;k<player.length;k++){
								rply.text=rply.text+'\n'+player[k][1]+' '+player[k][16]+','+player[k][17];
							}
				return rply;
		}
			if(trigger.match(/^回合/) != null){
							rply.text='是'+player[self][1]+'的回合'+
							'\n位置 '+player[self][16]+','+player[self][17]+
							'\n 可用選項：'+
							'\n攻擊 目標'+
							'\n移動 x座標,y座標'+
							'\n 目標有';
				for(var k=0;k<player.length;k++){
								rply.text=rply.text+'\n'+player[k][1]+' '+player[k][16]+','+player[k][17];
							}
				return rply;
			}
		}
			
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
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
	
}

module.exports = {
	battles:battles,
	dd:dd
};


