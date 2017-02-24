window.onload=function(){
	zhiZhenTransform();
}
/* 钟表刻度线*/
var ds = 6;
var num = 60;
while(num > 0) {
	var div = document.createElement("div");
	var keXian = document.querySelector("#zb_inner");
	if(ds * num % 90 == 0) {
		div.classList.add("kexian2");
	} else if(ds * num % 90 != 0 && ds * num % 30 == 0) {
		div.classList.add("kexian3");
	} else {
		div.classList.add("kexian1");
	}
	div.style.transform = "rotate(" + ds * num + "deg)";
	keXian.appendChild(div);
	num--;
}
/* 钟表指针*/
var miaoZhen=document.querySelector(".zhizhen1");
var fenZhen=document.querySelector(".zhizhen2");
var shiZhen=document.querySelector(".zhizhen3");
var miaoNum=document.querySelector(".zb_hour");
var fenNum=document.querySelector(".zb_minute");
var shiNum=document.querySelector(".zb_second");

function zhiZhenTransform(){
	var timeNow=new Date();
	var h=timeNow.getHours();
	var m=timeNow.getMinutes();
	var s=timeNow.getSeconds();
	var sDuShu=360*s/60;
	var mDuShu=360*m/60+sDuShu/60;
	var hDuShu=360*(h%12)/12+mDuShu/12;
//	console.log(h+" => "+hDuShu);
//	console.log(m+" => "+mDuShu);
//	console.log(s+" => "+sDuShu);
	miaoZhen.style.transform = "rotate(" + sDuShu + "deg)";
	fenZhen.style.transform = "rotate(" + mDuShu + "deg)";
	shiZhen.style.transform = "rotate(" + hDuShu + "deg)";
	t=setTimeout(function(){
		zhiZhenTransform()
	},500)
}
