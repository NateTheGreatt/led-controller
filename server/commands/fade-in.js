var intervals = require('../intervals.js');
module.exports = (led,params)=>{
	intervals.clearAll();
	if(led.intensity()>=100) return;
	var i = led.intensity();
	var iter = setInterval(() => {
		if(i<=100) {
			led.intensity(i);
			i++;
		} else {
			i = 0;
			clearInterval(iter);
		}
	},params.tickrate);
	return iter;
};