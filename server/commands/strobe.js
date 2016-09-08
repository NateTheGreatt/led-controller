var strobing = false;
module.exports = (led,params)=>{
	if(strobing) led.stop().on();
	else led.strobe(params.rate);
	strobing = !strobing;
}