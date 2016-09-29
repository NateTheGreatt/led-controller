const Color = require('color');

var toggled = false;
var lastColor;
module.exports = (led,params) => {
	if(toggled) {
		led.stop().on();
		led.color(lastColor.hexString());
	} else {
		var current = led.color();
		lastColor = Color().rgb(current.red,current.green,current.blue);
		led.strobe(1800);
		led.color('#ff0000');
	}
	toggled = !toggled;
}
