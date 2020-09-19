const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json");

const movie = require('./handlers/movie.js');
const help = require('./handlers/help.js')
const joke = require('./handlers/joke.js')

client.on("ready", () => {
  console.log(`Ready`); 
  client.user.setActivity(`Ready`);
});

client.on("message", async message => {
  command = message.content.split(' ')[0]
  args = message.content.replace(command, '').split(' ')
  argsText = message.content.replace(command, '')
  
  //console.log(message)
  // Register Command Handlers
  if (command === "!movie") {
    movie.handle(message, argsText, config.imdb_key);
  }
  if (command === "!help") {
    help.handle(message);
  }
  if (command === "!joke") {
    joke.handle(message);
  }
});

client.login(config.token);

  
