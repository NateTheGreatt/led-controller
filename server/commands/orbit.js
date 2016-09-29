
function toRad(deg) {
	return deg*(180/Math.PI);
}

function toDeg(rad) {
	return rad*(Math.PI/180);
}

const Color = require('color');
var commander = require('../commander.js');

module.exports = (led,params) => {
	commander.clearAll();

	var color = Color().hsl(150,100,50);
	var degrees = 0;
	var degreesSaturation = 0;
	var cmd = setInterval(()=>{
		// rotate 1 degree each iteration (rainbow scroll)
		// color.rotate(1);
		// led.color(color.hexString());

		// oscillation of hue
		degrees = degrees % 360;
		degreesSaturation = degreesSaturation % 360;
		color.rotate(0.6 * Math.sin(toRad(degrees)));
		// color.saturation(80 + 20*Math.sin(toRad(degreesSaturation)));
		// color.lightness(75 + 25*Math.sin(toRad(degrees)));
		led.color(color.hexString());
		// console.log(color.hslString());
		degrees+=0.0005;
		// degreesSaturation+=0.00009;
	},params.tickrate);
	return cmd;
}
