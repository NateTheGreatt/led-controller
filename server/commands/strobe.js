var toggled = false;
module.exports = (led,params)=>{
	if(toggled) led.stop().on();
	else led.strobe(params.rate);
	toggled = !toggled;
}