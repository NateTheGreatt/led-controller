var commands = [];
module.exports = {
	clearAll () {
		commands.forEach(cmd=>clearInterval(cmd));
	},
	add (cmd) {
		if(cmd) commands.push(cmd);
	}
}
