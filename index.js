const Discord = require('discord.js');
const client = new Discord.Client();

const token = process.env.TOKEN;

const mineflayer = require('mineflayer');


const scaffold = require("mineflayer-scaffold")(mineflayer);
const navigate = require("mineflayer-navigate")(mineflayer);

const prefix = 't!';

client.on('ready', async => {
  console.log("Bot Ready");
});

client.on('message', message => {

  if (message.author.bot) return;
  if (message.channel.id == "728901827277619240") {
    message.delete();
    bot.chat(message.author.username + " > " + `${message}`);
  }

  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).split(' ');
  const command = args.shift().toLowerCase();

  switch (command) {
    case 'ping':
      message.reply("Pong");
      message.react('🏓');
      break;
  }
});

client.login(token);

// aternos bot code!

const bot = mineflayer.createBot({
  host: "technodreamcity.aternos.me",
  username: "TechnozBot",
  version: false,
});

navigate(bot);
scaffold(bot);

bot.on('chat', function (username, botmessage) {

  if (botmessage == "t!come") {
    var target = bot.players[username].entity;
    bot.chat("comming");
    bot.scaffold.to(target.position, function (err) {
      if (err) {
        bot.chat("didn't make it: " + err.code);
      } else {
        bot.chat("made it!");
      }
    });
    if (botmessage == bot.username) {
      bot.chat("I was created for Technoz");
      bot.chat("NichuNaizam created me");
      bot.chat("im just like a discord bot ");
      bot.chat("u guys can send me command");
      bot.chat("my prefix is t!");
      bot.chat("checkout my help command t!help (currently not ready)");
    }
  }
  let outputchannel = client.channels.cache.get("728901827277619240");
  if (!outputchannel) return;
  outputchannel.send(`${username}` + " > " + `${botmessage}`);
});