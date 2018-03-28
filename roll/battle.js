var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var ox = require('./Character.js');
var rply ={type : 'text'}; //type是必需的,但可以更改
var player=[];
var start=0;
var hit=1;
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
if(ab=='戰鬥參與'&& start==0){
	if(player.length==2){
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
			'\n反應力'+od[7];
		return rply;
  }
	}
	
	
}
if(ab=='戰鬥開始' && start==0 && player.length==2){
		start=1;
		
		if(player[0][7]>=player[1][7])hit=0;
	        rply.text='戰鬥展開'+
			'\n'+player[hit][1]+'先手'+
			'\n 可用選項：攻擊';
		return rply;
	}
if(start==1){
	if(id==player[hit][0] && ab='攻擊'){
		player[1-hit][2]=player[1-hit][2]-player[hit][6];
		hit=1-hit;
	}
	if(player[hit][2]<=0){
		rply.text=player[1-hit][1]+'勝利';
		start=0;
		dd();
		return rply;
	}
	rply.text=player[hit][1]+
			'\nHP '+player[hit][2]+'/'+player[hit][3]+
			'\nbata粒子 '+player[hit][4]+'/'+player[hit][5]+
			'\n物理適性 '+player[hit][6]+
			'\n反應力'+player[hit][7]+
		'\n輪到'+player[hit][1]+'的回合了';
		return rply;
	}
}
  

	

//rply.text+='\n多送你一張：';
//let rarity=rollbase.Dice(100);
//ox.oA(ggg,ttt-frequency*100);



module.exports = {
	battles:battles,
	dd:dd
};


