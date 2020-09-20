const Discord = require('discord.js');
const ytdl = require('ytdl-core');

let connection;
let isPlaying;
let dispatcher;

module.exports = { 
	handlePlay: function(message, channel, stream) {
		if (!message.guild) return;
		if (channel == "") {message.channel.send("No music channel is defined in the config file!"); return;}
		
		connection = channel.join()
			.then(connection => {
				console.log("Playing ", stream)
				if (stream.search("youtube.com") == 10) {
					if (ytdl.validateURL(stream)) {
						ytdl.getInfo(ytdl.getURLVideoID(stream)).then(info => {
							const embed = new Discord.MessageEmbed()
								.setColor('#0099ff')
								.setTitle(info.title)
								.setURL(stream)
								.setDescription(stream)
								.setTimestamp()
						
								message.channel.send(embed)
						});

						dispatcher = connection.play(ytdl(stream, { filter: 'audioonly' }));
						
					} else {
						message.channel.send("Youtube Video could not be found!")
					}
				} else {
					const embed = new Discord.MessageEmbed()
						.setColor('#0099ff')
						.setTitle("Playing Stream")
						.setURL(stream)
						.setDescription(stream)
						.setTimestamp()
						
					message.channel.send(embed)
					
					dispatcher = connection.play(stream);

				}
			});
    }
}



