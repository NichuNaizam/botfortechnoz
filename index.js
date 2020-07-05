const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');

const mineflayer = require('mineflayer');

const prefix = 't!';

client.on('ready' ,async=> {
    console.log("Bot Ready");
});

client.on('message',message => {

    if(message.author.bot)return;
    if(message.channel.id == "728901827277619240"){
        message.delete();
        bot.chat(message.author.username + " > " + `${message}`);
    }

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();

    switch(command){
        case 'ping':
            message.reply("Pong");
            message.react('🏓');
        break;
    }
});

client.login(config.TOKEN);

// aternos bot code!

const bot = mineflayer.createBot({
    host: "technodreamcity.aternos.me",
    username: "TechnozBot",
    version: "1.15.2" 
});

bot.on("move", function() {
    //triggers when the bot moves
  
    bot.setControlState("jump", true); //continuously jumps
    setTimeout(() => {
      //sets a delay
      bot.setControlState("jump", false); //stops jumping
    }, 1000); //delay time
  
    setTimeout(() => {
      //sets a delay
      bot.setControlState("forward", true); //continuously walks forward
      setTimeout(() => {
        //sets a delay
        bot.setControlState("forward", false); //stops walking forward
      }, 500); //delay time
    }, 1000); //delay time
  
    setTimeout(() => {
      //sets a delay
      bot.setControlState("back", true); //continuously walks backwards
      setTimeout(() => {
        //sets a delay
        bot.setControlState("back", false); //stops walking backwards
      }, 500); //delay time
    }, 2000); //delay time
  
    setTimeout(() => {
      //sets a delay
      bot.setControlState("right", true); //continuously walks right
      setTimeout(() => {
        //sets a delay
        bot.setControlState("right", false); //stops walking right
      }, 2000); //delay time
    }, 500); //delay time
  
    setTimeout(() => {
      //sets a delay
      bot.setControlState("left", true); //continuously walks lefz
      setTimeout(() => {
        //sets a delay
        bot.setControlState("left", false); //stops walking left
      }, 2000); //delay time
    }, 500); //delay time
  });

bot.on('message',botmessage=>{
    client.channels.cache.get("728901827277619240").send(`${botmessage}`);
});

bot.on('login', () =>{
    bot.chat("hello im Techozbot, create for technoz by NichuNaizam")
});
