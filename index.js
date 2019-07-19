var express = require('express');//
var bodyParser = require('body-parser');
var app = express();//262

var http = require('http').Server(app);
var io = require('socket.io')(http);

var Character = require('./roll/Character.js');
var battles = require('./roll/battle.js');
var special = require('./roll/special.js');
var re = require('./roll/analytics.js');

var channelAccessToken = process.env.LINE_CHANNEL_ACCESSTOKEN;
var channelSecret = process.env.LINE_CHANNEL_SECRET;
var linebot = require('linebot');
var channelId='1567989750';
var bot = linebot({
	channelId: channelId,
	channelSecret: channelSecret,
	channelAccessToken: channelAccessToken
});

const Discord = require('discord.js');
const client = new Discord.Client();
 

var jsonParser = bot.parser();
var cat='';
var input='';
var battle=0;
var a=0;
var to_web_msg='',to_switch=0;
Character.load_player_data();
var Menu = JSON.parse('{"type":"flex","contents":{"type":"carousel","contents":[{"type":"bubble","body":{"type":"box","layout":"vertical","spacing":"xs","contents":[{"type":"text","text":"角色相關選單","size":"xl","align":"center","weight":"bold"},{"type":"button","style":"secondary","color":"#bdf7a3","action":{"type":"postback","label":"玩家情報","data":"玩家自身情報"}},{"type":"button","style":"secondary","color":"#fae178","action":{"type":"postback","label":"角色建立","data":"角色建立"}},{"type":"button","style":"secondary","color":"#04d756","action":{"type":"postback","label":"-----------","data":" "}},{"type":"button","style":"secondary","color":"#04d756","action":{"type":"postback","label":"-----------","data":" "}}]}},{"type":"bubble","body":{"type":"box","layout":"vertical","spacing":"xs","contents":[{"type":"text","text":"武器相關選單","size":"xl","align":"center","weight":"bold"},{"type":"button","style":"secondary","color":"#bdf7a3","action":{"type":"postback","label":"武器查看","data":"武器查看"}},{"type":"button","style":"secondary","color":"#fae178","action":{"type":"postback","label":"武器製作","data":"武器_製作Link"}},{"type":"button","color":"#a8fde9","style":"secondary","action":{"type":"postback","label":"武器破壞 主武器","data":"武器破壞 主武器"}},{"type":"button","style":"secondary","color":"#e67ffb","action":{"type":"postback","label":"武器破壞 副武器","data":"武器破壞 副武器"}}]}},{"type":"bubble","body":{"type":"box","layout":"vertical","spacing":"xs","contents":[{"type":"text","text":"技能相關選單","size":"xl","align":"center","weight":"bold"},{"type":"button","style":"secondary","color":"#bdf7a3","action":{"type":"postback","label":"技能查看","data":"玩家技能"}},{"type":"button","style":"secondary","color":"#04d756","action":{"type":"postback","label":"-----------","data":" "}},{"type":"button","style":"secondary","color":"#04d756","action":{"type":"postback","label":"-----------","data":" "}},{"type":"button","style":"secondary","color":"#04d756","action":{"type":"postback","label":"-----------","data":" "}}]}},{"type":"bubble","body":{"type":"box","layout":"vertical","spacing":"xs","contents":[{"type":"text","text":"抽卡相關選單","size":"xl","align":"center","weight":"bold"},{"type":"button","style":"secondary","color":"#bdf7a3","action":{"type":"postback","label":"卡池資訊","data":"卡池資訊"}},{"type":"button","style":"secondary","color":"#fae178","action":{"type":"postback","label":"水晶時代抽卡","data":"水晶時代抽卡"}},{"type":"button","style":"secondary","color":"#a8fde9","action":{"type":"postback","label":"水晶時代10連抽","data":"水晶時代10連抽"}},{"type":"button","style":"secondary","color":"#04d756","action":{"type":"postback","label":"-----------","data":" "}}]}}]},"altText":"選單"}');

bot.on('postback', function (event) {
    let a = event.source.userId;
    var b = '';
    event.source.profile().then(function (profile) {
        b = profile.displayName;
		var myResult = event.postback.data;
		if (myResult != '') {
			var msg;
			msg=re.parseInput(event.rplyToken, myResult, a, b);
			event.reply(msg);
		}

    });
});


bot.on('message', function(event) 
	{ 
		if (event.message.type == 'text') { 
			var msg = '';
			let a = event.source.userId;
			let b='';
			var c=event.source.groupId
			
			console.log(c);
			event.source.profile().then(
				function (profile) {
					b = profile.displayName;
					//Ca8fea1f8ef1ef2519860ee21fb740fd2   群id
					if(battle==1){
						if(event.message.text=='戰鬥模式關閉'){
							battle=0;
							io.emit('chat message', '['+b+']：'+event.message.text);
							bot.push('Ca8fea1f8ef1ef2519860ee21fb740fd2', '已關閉戰鬥模式' );
							io.emit('chat message', "已關閉戰鬥模式<br>");
						}
						msg = battles.battles(a,b,event.message.text);
						event.reply(msg);
						io.emit('chat message', msg.text.replace(/\n/g,"<br>"));
					}
					if(battle==2){
						if(event.message.text=='特殊模式關閉'){
							battle=0;
							bot.push('Ca8fea1f8ef1ef2519860ee21fb740fd2', '已關閉戰鬥模式' );
						}
						msg = special.main(a,b,event.message.text);
						event.reply(msg);
					}
					if(battle==0){
						if(event.message.text=='小型pvp測試'){
							battle=2;
							bot.push('Ca8fea1f8ef1ef2519860ee21fb740fd2', '特殊模式已啟動' );
						}
						if(event.message.text=='戰鬥模式啟動'){
							battle=1;
							battles.Reset();
							io.emit('chat message', '['+b+']：'+event.message.text);
							bot.push('Ca8fea1f8ef1ef2519860ee21fb740fd2', '已啟動戰鬥模式' );
							io.emit('chat message', "已啟動戰鬥模式<br>");
						}
						msg =re.parseInput(event.rplyToken, event.message.text,a,b);	
						if(event.message.text=='武裝裝甲聯合戰線'){
							event.reply([{
							type: 'image',
							originalContentUrl: 'https://2.bp.blogspot.com/-b7JvOc_z2SU/WqfgwGgmylI/AAAAAAAADJI/k1rhP5ERtycFl6D4OqCEip1ShubvAbedgCLcBGAs/s1600/AAUF.jpg',
							previewImageUrl: 'https://2.bp.blogspot.com/-b7JvOc_z2SU/WqfgwGgmylI/AAAAAAAADJI/k1rhP5ERtycFl6D4OqCEip1ShubvAbedgCLcBGAs/s1600/AAUF.jpg'
							},
							{ type: 'text', text: '武裝裝甲聯合戰線是由數個高發展高技術的國家，\n以人才技術互通協約所產生的武裝研究機關。' }]);
						}
						if(event.message.text=='蓋爾奇亞聯合'){
							event.reply([{
							type: 'image',
							originalContentUrl: 'https://1.bp.blogspot.com/-esavyLGBQ8I/WqfgwIWh0XI/AAAAAAAADJM/ZYR8ZXdjkzgOzGc_VEetoGgtHPEvSbzUwCLcBGAs/s1600/GU.jpg',
							previewImageUrl: 'https://1.bp.blogspot.com/-esavyLGBQ8I/WqfgwIWh0XI/AAAAAAAADJM/ZYR8ZXdjkzgOzGc_VEetoGgtHPEvSbzUwCLcBGAs/s1600/GU.jpg'
							},
							{ type: 'text', text: '蓋爾奇亞聯合是研究水晶能量的聯合陣營，與聯合外的部分國家互相簽定了人才技術互通協約。' }]
							);
						}
						var test=event.message.text.split('-');
						if(test[0]=='sticker'){
							event.reply({
							type: 'image',
							originalContentUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/'+test[1]+'/android/sticker.png',
							previewImageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/'+test[1]+'/android/sticker.png'
							}
							);
						}
						if (event.message.text == '選單')msg = Menu;
						if(!msg && c=='Ca8fea1f8ef1ef2519860ee21fb740fd2')to_web_msg='['+b+']：'+event.message.text,io.emit('chat message', to_web_msg.replace(/\n/g,"<br>"));;
						event.reply(msg);		 
					}
					if(event.message.text=='重新載入'){
						if(a=='U7c4779fd913aff927f26d7f6bedd87d1'||a=='Uc9b4571605aabd3e94edd7c189144278'){
							Character.load_player_data();
							event.reply({ type: 'text', text: '重新載入，請稍後片刻' });	
						}
						else{
							event.reply({type: 'text', text: 'GM才能使用' });	
						}
					}
					console.log(a+'   '+b+'  '+event.message.text+'   '+cat);
				}
			);
		} 
	}
);
app.set('port', (process.env.PORT || 5000));
app.get('/', function(req, res) {
res.sendFile(__dirname + '/index.html');
});

app.use('/socket.io', express.static(__dirname + '/socket.io'));
app.use('/LIFF', express.static(__dirname + '/LIFF'));
app.use('/OAO', express.static(__dirname +'/OAO'));
app.post('/', jsonParser);


/*app.post('/', jsonParser, function(req, res) {
});*/

/*app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});*/
var tit=0;
io.on('connection', function(socket){
	socket.on('chat message', function(msg,UUID,Name){
		var ionm,Not_instruction=0;
		if(battle==0){
		ionm=re.parseInput(0, msg, UUID, Name);
		if(msg=='武裝裝甲聯合戰線'|| msg=='AAUF')ionm = { type: 'text', text: '武裝裝甲聯合戰線是由數個高發展高技術的國家，\n以人才技術互通協約所產生的武裝研究機關。' };
		if(msg=='蓋爾奇亞聯合'|| msg=='GU')ionm =  { type: 'text', text: '蓋爾奇亞聯合是研究水晶能量的聯合陣營，與聯合外的部分國家互相簽定了人才技術互通協約。' };
		}
		if(msg=='重新載入'){
			if(UUID=='U7c4779fd913aff927f26d7f6bedd87d1'||UUID=='Uc9b4571605aabd3e94edd7c189144278'){
				Character.load_player_data();
				Character.CK();
				io.emit('chat message', "重新載入，請稍後片刻");
			}
			else{
				io.emit('chat message', "GM才能使用");
			}
		}
		if(!ionm && Not_instruction==0)ionm={},ionm.text='['+Name+']：'+msg,Not_instruction=1;
		if(Not_instruction==1){
			io.emit('chat message', ionm.text.replace(/\n/g,"<br>"));
		}
		if(Not_instruction==0)io.emit('chat message', ionm.text.replace(/\n/g,"<br>"));
	})
	socket.on('test', function(t){
		tit+=t;
		io.emit('test', tit);
	})
  });
http.listen((process.env.PORT || 5000), function(){
  console.log('listening on *:'+(process.env.PORT || 5000));
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
client.on('message', msg => { 
  var msga=re.parseInput(0, msg.content, 0, '');
	  
    if(msga)msg.reply("\n"+msga.text);
  
});
 
client.login(process.env.DISCORD_CHANNEL_ACCESSTOKEN);

