const app = new require('koa')();
const IO = require('koa-socket');
const io = new IO();
const five = require('johnny-five');
const colorLerp = require('color-lerp');
const edge = require('edge');


app.use(require('koa-static')(__dirname+'/public'));

io.attach(app);

var board = new five.Board({port:'COM3',repl:false});
var intervals = require('./intervals.js');

function lerp(a, b, f)
{
    return a + f * (b - a);
}

board.on("ready", () => {

	var led = new five.Led.RGB([9,10,11]);

	led.on();

	io.on('led-event',(ctx,data)=>{
		data.params = data.params || {};

		data.params.tickrate = data.params.tickrate || 6;

		// if(!data.params.brightness) {
		// 	intervals.forEach(clearInterval);
		// 	process.nextTick(()=>require('./commands/'+data.command)(led, data.params));
		// } else {
			intervals.add(require('./commands/'+data.command)(led, data.params));
		// }

	})

});


app.listen( process.env.PORT || 3000, '0.0.0.0' );