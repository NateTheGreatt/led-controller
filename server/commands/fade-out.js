var commander = require('../commander.js');
module.exports = (led,params)=>{
	commander.clearAll();
	if(led.intensity()<=0) return;
	var i = led.intensity();
	var cmd = setInterval(() => {
		if(i>=0) {
			led.intensity(i);
			i--;
		} else {
			i = 100;
			clearInterval(cmd);
		}
	},params.tickrate);
	return cmd;
};