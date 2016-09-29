const app = new require('koa')();
const koaSocket = require('koa-socket');
const io = new koaSocket();
const five = require('johnny-five');

app.use(require('koa-static')(__dirname+'/../client'));

io.attach(app);

var board = new five.Board({port:'COM3',repl:false});
var commander = require('./commander.js');

function lerp(a, b, f) { return a + f * (b - a); }

board.on("ready", () => {

	var led = new five.Led.RGB([9,10,11]);

	led.on();

	io.on('led-event',(ctx,data)=>{
		data.params = data.params || {};
		data.params.tickrate = data.params.tickrate || 16;

		commander.add(require('./commands/'+data.command)(led, data.params));
	});

});



app.listen( process.env.PORT || 3000, '0.0.0.0' );
