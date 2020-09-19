var request = require('sync-request');
const Discord = require('discord.js');


module.exports = { 
	handle: function(message, argsText, key) {
		let response
		var res = request('GET', `http://www.omdbapi.com/?apikey=${key}&t=${argsText}`);
		response = JSON.parse(res.getBody('utf8'));
		
		console.log(response)
		if (response.Response == "False") { message.channel.send(`Could not find "${argsText}"!`)} else {
			const embed = new Discord.MessageEmbed()
				.setColor('#0099ff')
				.setTitle(response.Title)
				.setURL('https://discord.js.org/')
				.setAuthor('Movie Info', '', '')
				.setDescription(response.Plot)
				.setThumbnail(response.Poster)
				.addFields(
					{ name: 'Year', value: response.Year },
					{ name: 'Genres', value: response.Genre},
					{ name: 'Actors', value: response.Actors}
				)
				
				.setTimestamp()
				.setImage(response.Poster)
				
				message.channel.send(embed);
		}
        }
}


