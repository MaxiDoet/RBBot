const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json");

const movie = require('./handlers/movie.js');
const help = require('./handlers/help.js')
const music = require('./handlers/music.js')

client.on("ready", () => {
  console.log(`Ready`); 
  client.user.setActivity(`Ready`);
});

client.on("message", async message => {
  const args = message.content.slice(("!").length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  
  console.log("Message: \nCommand:", command, " \nArgs: ", args);
  
  //console.log(message)
  // Register Command Handlers
  if (command === "movie") {
    movie.handle(message, argsText, config.imdb_key);
  }
  if (command === "help") {
    help.handle(message);
  }
  if (command === "play") {
	client.channels.fetch(config.music_channel)
		.then(channel => music.handlePlay(message, channel, args[0]));
  }
});

let token = config.token
client.login(token);

  
