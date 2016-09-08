var intervals = require('../intervals.js');
module.exports = (led,params) => {
	intervals.clearAll();
	led.color(params.rgb)
}