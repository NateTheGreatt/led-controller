var five = require("johnny-five");

var board = new five.Board({port:'COM3'});

board.on("ready", function() {

	// long hand constructor
	// new five.Led.RGB({
	//   pins: {
	//     red: 9,
	//     green: 10,
	//     blue: 11
	//   }
	// });
	
	// short hand constructor
	var led = new five.Led.RGB([9,10,11]);

	this.repl.inject({
		led: led
	});

	led.on();
	led.color("#ffffff");

	led.blink(1000);


});