module.exports = { 
	handle: function(message) {
		let help
		
		help += "**Help**\n"
		help += "\n"
		help += "**/movie [movie]** Returns some info for a movie."
		help += "** /joke** Returns a programmer joke!"
		
		message.channel.send(help);
	}
}



