var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply ={type : 'text'}; //type是必需的,但可以更改



function CardH(id) {
let rplyArr = [
	'\[000] [UR] [None] 沒有東西', 
	'\[001] [N] [Item] 鼠的畫 \n增加[095] [SSR] [Partner] 鼠 的經驗值1', 
	'\[002] [N] [Item] 雷洛的程式 \n增加[096] [SSR] [Partner] 雷洛 的經驗值1', 
	'\[003] [N] [Item] 一定墜落的翅膀 \n增加[097] [SSR] [Partner] Wings 的經驗值1點',
	'\[004] [N] [Item] 雷銘的筆 \n增加[098] [SSR] [Partner] 雷銘 的經驗值1',
	'\[005] [N] [Item] 夜月的肝 \n增加[099] [SSR] [Partner] 夜月 的經驗值1',
	'\[006] [N] [Accessories] 火之庇護 \n 增加火屬適性5%',
	'\[007] [N] [Accessories] 水之庇護 \n 增加水屬適性5%',
	'\[008] [N] [Accessories] 風之庇護 \n 增加風屬適性5%',
	'\[009] [N] [Accessories] 土之庇護 \n 增加土屬適性5%',
	'\[010] [N] [Skill] 熱量控制',
	'\[011] [N] [Skill] 燃燒現象',
	'\[012] [N] [Skill] 質能轉換-水',
	'\[013] [N] [Skill] 水流控制',
	'\[014] [N] [Skill] 簡單氣壓控制',
	'\[015] [N] [Skill] 強制位移',
	'\[016] [N] [Skill] 密度控制-物',
	'\[017] [N] [Skill] 土牆建立',
	'\[018] [N] [Skill] 磁懸推進',
	'\[019] [N] [Skill] 連結武裝切換',
	'\[020] [N] [Skill] 複合武器切換',
	'\[021] [N] [Skill] 能量轉換概論',
	'\[022] [N] [Skill] 能量放出實驗',
	'\[023] [UR] [None] 暫無卡片', 
	'\[024] [UR] [None] 暫無卡片', 
	'\[025] [UR] [None] 暫無卡片', 
	'\[026] [UR] [None] 暫無卡片', 
	'\[027] [UR] [None] 暫無卡片', 
	'\[028] [UR] [None] 暫無卡片', 
	'\[029] [UR] [None] 暫無卡片', 
	'\[030] [N] [Item] 偽裝成[R]的[N]卡',
	'\[031] [R] [Item] 鼠的畫ex \n增加[095] [SSR] [Partner] 鼠 的經驗值5',
	'\[032] [R] [Item] 雷洛那有點強的bot \n增加[096] [SSR] [Partner] 雷洛 的經驗值5',
	'\[033] [R] [Item] 翅膀那雷神 \n增加[097] [SSR] [Partner] Wings 的經驗值5',
	'\[034] [R] [Item] 雷銘的0.2mm自動鉛筆 \n增加[098] [SSR] [Partner] 雷銘 的經驗值5',
	'\[035] [R] [Item] 夜月那快撐不住的肝  \n增加[099] [SSR] [Partner] 夜月 的經驗值5',
	'\[036] [R] [Skill] 熱距離延長',
	'\[037] [R] [Skill] 燃燒現象強化',
	'\[038] [R] [Skill] 水壓提升(小)',
	'\[039] [R] [Skill] 造霧',
	'\[040] [R] [Skill] 噴氣移動',
	'\[041] [R] [Skill] 位移加速',
	'\[042] [R] [Skill] 沙漠化',
	'\[043] [R] [Skill] 流沙',
	'\[044] [R] [Skill] 墊步突擊',
	'\[045] [R] [Skill] 誤差修正',
	'\[046] [R] [Skill] 雷達',
	'\[047] [R] [Skill] 能量壓縮實驗',
	'\[048] [R] [Skill] 簡單建構模擬',
	'\[049] [UR] [None] 暫無卡片', 
	'\[050] [UR] [None] 暫無卡片', 
	'\[051] [UR] [None] 暫無卡片', 
	'\[052] [UR] [None] 暫無卡片', 
	'\[053] [UR] [None] 暫無卡片', 
	'\[054] [UR] [None] 暫無卡片', 
	'\[055] [UR] [None] 暫無卡片', 
	'\[056] [UR] [None] 暫無卡片', 
	'\[057] [UR] [None] 暫無卡片', 
	'\[058] [UR] [None] 暫無卡片', 
	'\[059] [UR] [None] 暫無卡片', 
	'\[060] [N] [Item] 偽裝成[SR]的[N]卡',
	'\[061] [SR] [Item] 鼠那超進步的畫 \n增加[095] [SSR] [Partner] 鼠 的經驗值10',
	'\[062] [SR] [Item] 雷洛那超簡潔的程式 \n增加[096] [SSR] [Partner] 雷洛 的經驗值10',
	'\[063] [SR] [Item] 翅膀雷好雷滿  \n增加[097] [SSR] [Partner] Wings 的經驗值10',
	'\[064] [SR] [Item] 雷銘的用不壞的平板 \n增加[098] [SSR] [Partner] 雷銘 的經驗值10',
	'\[065] [SR] [Item] 夜月那超越人類的肝 \n增加[099] [SSR] [Partner] 夜月 的經驗值10',
	'\[066] [SR] [Skill] 燃燒標記',
	'\[067] [SR] [Skill] 創水控制',
	'\[068] [SR] [Skill] 風壓推移',
	'\[069] [SR] [Skill] 點石成金',
	'\[070] [SR] [Skill] 全彈射擊',
	'\[071] [SR] [Skill] 極速穿擊',
	'\[072] [SR] [Skill] 具現化武裝:27mm炮',
	'\[073] [SR] [Skill] 具現化武裝:八連裝導彈倉',
	'\[074] [SR] [Skill] 屬性纏繞',
	'\[075] [UR] [None] 暫無卡片', 
	'\[076] [UR] [None] 暫無卡片', 
	'\[077] [UR] [None] 暫無卡片', 
	'\[078] [UR] [None] 暫無卡片', 
	'\[079] [UR] [None] 暫無卡片', 
	'\[080] [UR] [None] 暫無卡片', 
	'\[081] [UR] [None] 暫無卡片', 
	'\[082] [UR] [None] 暫無卡片', 
	'\[083] [UR] [None] 暫無卡片', 
	'\[084] [UR] [None] 暫無卡片', 
	'\[085] [UR] [None] 暫無卡片', 
	'\[086] [UR] [None] 暫無卡片', 
	'\[087] [UR] [None] 暫無卡片', 
	'\[088] [UR] [None] 暫無卡片', 
	'\[089] [UR] [None] 暫無卡片', 
	'\[090] [N] [Item] 偽裝成[SSR]的[N]卡',
	'\[091] [SSR] [Accessories] 颶風之神 \n 增加風屬適性20%', 
	'\[092] [SSR] [Accessories] 烈火之神 \n 增加火屬適性20%', 
	'\[093] [SSR] [Accessories] 大海之神 \n 增加水屬適性20%',
	'\[094] [SSR] [Accessories] 大地之神 \n 增加土屬適性20%',
	'\[095] [SSR] [Partner] 鼠 \n增加控制能力5點(LV1)，每提升1級多加1點，升級為UR時多加1點'+
	'\n升級至LV2需100經驗\n升級至LV3需200經驗\n升級至LV4需400經驗\n升級至LV5需800經驗'+
	'\n升級至UR需2000經驗\n可增加[095] [SSR] [Partner] 鼠 的經驗值100',
	
	'\[096] [SSR] [Partner] 雷洛 \n增加Bata粒子適性10點(LV1)，每提升1級多加5點，升級為UR時多加10點'+
	'\n升級至LV2需100經驗\n升級至LV3需200經驗\n升級至LV4需400經驗\n升級至LV5需800經驗'+
	'\n升級至UR需2000經驗\n可增加[096] [SSR] [Partner] 雷洛 的經驗值100',
	
	'\[097] [SSR] [Partner] Wings \n增加物理適性5點(LV1)，每提升1級多加1點，升級為UR時多加1點'+
	'\n升級至LV2需100經驗\n升級至LV3需200經驗\n升級至LV4需400經驗\n升級至LV5需800經驗'+
	'\n升級至UR需2000經驗\n可增加[097] [SSR] [Partner] Wings 的經驗值100',
	
	'\[098] [SSR] [Partner] 雷銘 \n增加10點生命值(LV1)，每提升1級多加5點，升級為UR時多加10點'+
	'\n升級至LV2需100經驗\n升級至LV3需200經驗\n升級至LV4需400經驗\n升級至LV5需800經驗'+
	'\n升級至UR需2000經驗\n可增加[098] [SSR] [Partner] 雷銘 的經驗值100',
	
	'\[099] [SSR] [Partner] 夜月 \n增反應力5點(LV1)，每提升1級多加1點，升級為UR時多加1點'+
	'\n升級至LV2需100經驗\n升級至LV3需200經驗\n升級至LV4需400經驗\n升級至LV5需800經驗'+
	'\n升級至UR需2000經驗\n可增加[099] [SSR] [Partner] 夜月 的經驗值100',
	
	'\[100] [SSR] [Skill] 萬物燃盡',
	'\[101] [SSR] [Skill] 水刃劃出',
	'\[102] [SSR] [Skill] 風壓炸裂',
	'\[103] [SSR] [Skill] 大地石封',
	'\[104] [SSR] [Skill] 具現化武裝:電磁軌加速炮',
	'\[105] [SSR] [Skill] 具現化武裝:浮游護盾',
	'\[106] [SSR] [Skill] 具現化概論'
	
];
if(Number(id)>106){rply.text='施工中';}
else{
rply.text=rplyArr[Number(id)];}
return rply;
}
module.exports = {
	CardH:CardH
};
