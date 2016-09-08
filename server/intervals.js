const loop = require('node-gameloop');

var intervals = [];
module.exports = {
	clearAll: ()=>{
		intervals.forEach(i=>clearInterval(i));
	},
	add: (interval)=>{
		intervals.push(interval);
	}
}