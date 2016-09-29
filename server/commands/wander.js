var commander = require('../commander.js');
const colorLerp = require('color-lerp');

function rndColor() {
	return '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
}

module.exports = (led,params)=>{

	commander.clearAll();

	params.steps=parseInt(params.steps);
	
	var i = 0;
	var lastColor = rndColor();
	var lerpArray = colorLerp(rndColor(),lastColor,params.steps,'hex');
	var cmd = setInterval(() => {
		if(lerpArray[i] == undefined) {
			lerpArray = colorLerp(lerpArray[i-1],rndColor(),params.steps,'hex');
			i=0;
		} else {
			led.color(lerpArray[i]);
			i++;
		}
	},params.tickrate);
	return cmd;
};