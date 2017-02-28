function drawDuojiaoXing(id,total,nextnum) {
	if ((nextnum*2)>=total) {
		nextnum-=1;
	}
	var canv = document.querySelector(id);
	var context = canv.getContext("2d");
	context.fillStyle = "#EEEEFF";
	context.fillRect(0, 0, 140, 140);
	var n = 0;
	var dx = 70;
	var dy = 70;
	var s = 70;
	context.beginPath();
	context.fillStyle = 'rgb(100,255,100)';
	context.strokeStyle = 'rgb(0,0,100)';
	var x = Math.sin(0);
	var y = Math.cos(0);
	var dig = Math.PI / total * (2*nextnum);
	for(var i = 0; i < total; i++) {
		var x = Math.sin(i * dig);
		var y = Math.cos(i * dig);
		context.lineTo(dx + x * s, dy + y * s);
	}
	context.closePath();
	context.fill();
	context.stroke();
}
drawDuojiaoXing("#canvas1",30,11);
drawDuojiaoXing("#canvas2",5,2);