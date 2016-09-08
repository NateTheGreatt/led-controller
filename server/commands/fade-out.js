var intervals = require('../intervals.js');
module.exports = (led,params)=>{
	intervals.clearAll();
	if(led.intensity()<=0) return;
	var i = led.intensity();
	var iter = setInterval(() => {
		if(i>=0) {
			led.intensity(i);
			i--;
		} else {
			i = 100;
			clearInterval(iter);
		}
	},params.tickrate);
	return iter;
};