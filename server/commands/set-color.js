var commander = require('../commander.js');
module.exports = (led,params) => {
	commander.clearAll();
	led.color(params.rgb)
}