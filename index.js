//---------------------------------------------------------------------------------------------------------
var express = require('express');//
var bodyParser = require('body-parser');
var app = express();//262
//---------------------------------------------------------------------------------------------------------
var http = require('http').Server(app);
var io = require('socket.io')(http);
var linebot = require('linebot');
//---------------------------------------------------------------------------------------------------------
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = process.env.DB_URL;
// Database Name
const dbName = 'dream-realm-v2';
// Create a new MongoClient
const Mongoclient = new MongoClient(url);
//---------------------------------------------------------------------------------------------------------
var Character = require('./roll/Character.js');
var battles = require('./roll/battle.js');
var special = require('./roll/special.js');
var analyze=require('./system/analyze.js');
var re = require('./roll/analytics.js');
//---------------------------------------------------------------------------------------------------------

var bot = linebot({
	channelId: process.env.LINE_CHANNEL_ID,
	channelSecret: process.env.LINE_CHANNEL_SECRET,
	channelAccessToken: process.env.LINE_CHANNEL_ACCESSTOKEN
});
var jsonParser = bot.parser();
/*
const Discord = require('discord.js');
const client = new Discord.Client();
 */


//Character.load_player_data();
var Menu = JSON.parse('{"type":"flex","contents":{"type":"carousel","contents":[{"type":"bubble","body":{"type":"box","layout":"vertical","spacing":"xs","contents":[{"type":"text","text":"角色相關選單","size":"xl","align":"center","weight":"bold"},{"type":"button","style":"secondary","color":"#bdf7a3","action":{"type":"postback","label":"玩家情報","data":"玩家自身情報"}},{"type":"button","style":"secondary","color":"#fae178","action":{"type":"postback","label":"角色建立","data":"角色建立"}},{"type":"button","style":"secondary","color":"#04d756","action":{"type":"postback","label":"-----------","data":" "}},{"type":"button","style":"secondary","color":"#04d756","action":{"type":"postback","label":"-----------","data":" "}}]}},{"type":"bubble","body":{"type":"box","layout":"vertical","spacing":"xs","contents":[{"type":"text","text":"武器相關選單","size":"xl","align":"center","weight":"bold"},{"type":"button","style":"secondary","color":"#bdf7a3","action":{"type":"postback","label":"武器查看","data":"武器查看"}},{"type":"button","style":"secondary","color":"#fae178","action":{"type":"postback","label":"武器製作","data":"武器_製作Link"}},{"type":"button","color":"#a8fde9","style":"secondary","action":{"type":"postback","label":"武器破壞 主武器","data":"武器破壞 主武器"}},{"type":"button","style":"secondary","color":"#e67ffb","action":{"type":"postback","label":"武器破壞 副武器","data":"武器破壞 副武器"}}]}},{"type":"bubble","body":{"type":"box","layout":"vertical","spacing":"xs","contents":[{"type":"text","text":"技能相關選單","size":"xl","align":"center","weight":"bold"},{"type":"button","style":"secondary","color":"#bdf7a3","action":{"type":"postback","label":"技能查看","data":"玩家技能"}},{"type":"button","style":"secondary","color":"#04d756","action":{"type":"postback","label":"-----------","data":" "}},{"type":"button","style":"secondary","color":"#04d756","action":{"type":"postback","label":"-----------","data":" "}},{"type":"button","style":"secondary","color":"#04d756","action":{"type":"postback","label":"-----------","data":" "}}]}},{"type":"bubble","body":{"type":"box","layout":"vertical","spacing":"xs","contents":[{"type":"text","text":"抽卡相關選單","size":"xl","align":"center","weight":"bold"},{"type":"button","style":"secondary","color":"#bdf7a3","action":{"type":"postback","label":"卡池資訊","data":"卡池資訊"}},{"type":"button","style":"secondary","color":"#fae178","action":{"type":"postback","label":"水晶時代抽卡","data":"水晶時代抽卡"}},{"type":"button","style":"secondary","color":"#a8fde9","action":{"type":"postback","label":"水晶時代10連抽","data":"水晶時代10連抽"}},{"type":"button","style":"secondary","color":"#04d756","action":{"type":"postback","label":"-----------","data":" "}}]}}]},"altText":"選單"}');
//---------------------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------------------
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
//---------------------------------------------------------------------------------------------------------
bot.on(	'message', function(event){ 
		if (event.message.type == 'text') { 
			var msg = '';
			let UId = event.source.userId;
			var GId=event.source.groupId
			
			//console.log(c);
			event.source.profile().then(
				function (profile) {
					let UName = profile.displayName;
					//Ca8fea1f8ef1ef2519860ee21fb740fd2   群id
					if (event.message.text == '選單')msg = Menu;
						let time=new Date (new Date().getTime()+28800000);
						Mongoclient.connect(function(err) {
							assert.equal(null, err);
							console.log("Connected successfully to server");
							const db = Mongoclient.db(dbName);
								const collection = db.collection('message');
								collection.insertOne({Time : time,UserName:UName,UserId:UId,GroupId:GId,Message:event.message.text }, function(err, r) {
									assert.equal(null, err);
								});
						});
					msg=analyze.parseInput(UId,UName,event.message.text,event.replyToken);
					if(msg!=-1)event.reply(msg);		 
					if(event.message.text=='重新載入'){
						if(UId=='U7c4779fd913aff927f26d7f6bedd87d1'||UId=='Uc9b4571605aabd3e94edd7c189144278'){
							Character.load_player_data();
							event.reply({ type: 'text', text: '重新載入，請稍後片刻' });	
						}
						else
							event.reply({type: 'text', text: 'GM才能使用' });	
						
					}
					console.log(UId+'   '+UName+'  '+event.message.text+'   ');
				}
			);
		} 
	}
);

//---------------------------------------------------------------------------------------------------------
bot.on('memberJoined', function (event) {
    let a = event.joined.members[0].userId;
    var b = '';
	b=bot.getUserProfile(a);
	b.then(function(Promise ){
		console.log(Promise);
		event.reply('歡迎 '+Promise.displayName+' 加入群組');
	});
	
});
//---------------------------------------------------------------------------------------------------------
bot.on('memberLeft', function (event) {
    let a = event.left.members[0].userId;
    var b = '';
	b=bot.getUserProfile(a);
	b.then(function(Promise){
		console.log(Promise);
		bot.reply(event.replyToken, '看來 '+Promise.displayName+' 離開群組了QAO');
		//event.reply('看來 '+Promise.displayName+' 離開群組了QAO');
	});
});
//---------------------------------------------------------------------------------------------------------
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

http.listen((process.env.PORT || 5000), function(){
  console.log('listening on *:'+(process.env.PORT || 5000));
});

/*
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
client.on('message', msg => { 
  var msga=re.parseInput(0, msg.content, 0, '');
	  
    if(msga)msg.reply("\n"+msga.text);
  
});
 
client.login(process.env.DISCORD_CHANNEL_ACCESSTOKEN);
*/
