var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

function Help() {
rply =' 
【夢之領域BOT】v0.00001,
\n 例如輸入2d6+1　攻撃！\,
\n 會輸出）2d6+1：攻撃  9[6+3]+1 = 10\,
\n 如上面一樣,在骰子數字後方隔空白位打字,可以進行發言。\,
\n 以下還有其他例子\,
\n 5 3D6 	：分別骰出5次3d6\,
\n D66 D66s ：骰出D66 s小者固定在前\,
\n 5B10：不加總的擲骰 會進行小至大排序 \,
\n 5B10 9：如上,另外計算其中有多少粒大於9 \,
\n 5U10 8：進行5D10 每骰出一粒8會有一粒獎勵骰 \,
\n 5U10 8 9：如上,另外計算其中有多少粒大於9 \,
\n Choice：啓動語choice/隨機/選項/選1\,
\n (問題)(啓動語)(問題)  (選項1) (選項2) \,
\n 例子 隨機收到聖誕禮物數 1 2 3 >4  \,
\n 輸入87 ?????????? \',
\n bot距離 x1 y1 x2 y2 text  \,
	\n 輸出兩點距離(向下取整數)  \'
return rply;	
}



module.exports = {
	Help:Help
};
