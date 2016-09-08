const edge = require('edge');

var play = edge.func(()=>{/*
	async (input) => {
		var player = new System.Media.SoundPlayer((string)input);
		player.PlaySync();
		return null;
	}
*/});

console.log('playing sound...');
play('koansoundthing.wav');
console.log('done playing');