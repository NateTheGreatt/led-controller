var commander = require('../commander.js');
module.exports = (led,params)=>{
	commander.clearAll();
	if(led.intensity()>=100) return;
	var i = led.intensity();
	var cmd = setInterval(() => {
		if(i<=100) {
			led.intensity(i);
			i++;
		} else {
			i = 0;
			clearInterval(cmd);
		}
	},params.tickrate);
	return cmd;
};