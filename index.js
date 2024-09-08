const mineflayer = require('mineflayer')
const fs = require('fs');
const { keep_alive } = require("./keep_alive");
let rawdata = fs.readFileSync('config.json');
let data = JSON.parse(rawd
var moving = 0;
var connected = 0;
var actions = [ 'run', 'back', 'left', 'right']
var lastaction;
var pi = 3.14159;
var moveinterval = 2; // 2 second movement interval
var maxrandom = 5; // 0-5 seconds added to movement interval (randomly)
var host = data["FRANCIISCO2712"];
var username = data["beniciof2017"]
var bot = mineflayer.createBot({
  host: COMPASBENY.aternos,
  username:beniciof2017
});
function getRandomArbitrary(min, max) {
       return Math.random() * (max - min) + min;

}
bot.on('login',function(){
	console.log("Logged In")
});
bot.on('time', function() {
    if (connected <1) {
        return;
    }
    if (lasttime<0) {
        lasttime = bot.time.age;
    } else {
        var randomadd = Math.random() * maxrandom * 20;
        var interval = moveinterval*20 + randomadd;
        if (bot.time.age - lasttime > interval) {
            if (moving == 1) {
                bot.setControlState(lastaction,false);
                moving = 0;
                lasttime = bot.time.age;
            } else {
                var yaw = Math.random()*pi - (0.5*pi);
                var pitch = Math.random()*pi - (0.5*pi);
                bot.look(yaw,pitch,false);
                lastaction = actions[Math.floor(Math.random() * actions.length)];
                bot.setControlState(lastaction,true);
                moving = 1;
                lasttime = bot.time.age;
                bot.activateItem();
            }
        }
    }
});

bot.on('spawn',function() {
    connected=1;
});

