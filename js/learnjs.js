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
/* 钟表时间变化*/
var miaoZhen = document.querySelector(".zhizhen1");
var fenZhen = document.querySelector(".zhizhen2");
var shiZhen = document.querySelector(".zhizhen3");

var shiNum = document.querySelector(".zb_hour");
var fenNum = document.querySelector(".zb_minute");
var miaoNum = document.querySelector(".zb_second");
var theDate = document.querySelector(".zb_date");

setInterval(shiJianTransform, 500)

function shiJianTransform() {
	//指针钟表
	var timeNow = new Date();
	var hour = timeNow.getHours();
	var minute = timeNow.getMinutes();
	var second = timeNow.getSeconds();
	var sDuShu = 360 * second / 60;
	var mDuShu = 360 * minute / 60 + sDuShu / 60;
	var hDuShu = 360 * (hour % 12) / 12 + mDuShu / 12;
	miaoZhen.style.transform = "rotate(" + sDuShu + "deg)";
	fenZhen.style.transform = "rotate(" + mDuShu + "deg)";
	shiZhen.style.transform = "rotate(" + hDuShu + "deg)";

	//数字钟表
	var year = timeNow.getFullYear();
	var mon = timeNow.getMonth() + 1;
	var day = timeNow.getDate();
	shiNum.innerHTML = checkNum(hour);
	fenNum.innerHTML = checkNum(minute);
	miaoNum.innerHTML = checkNum(second);
	theDate.innerHTML = year + "-" + checkNum(mon) + "-" + checkNum(day);

}

function checkNum(n) {
	if(n < 10) {
		return "0" + n;
	} else {
		return n;
	}
}

/* 幻灯片*/
var yuanDian = document.querySelectorAll(".yuandian");
var imgsBox = document.querySelectorAll(".imgs_box");
var preBtn=document.querySelector(".prebtn");
var nextBtn=document.querySelector(".nextbtn");

for (var i=0,len=imgsBox.length;i<len;i++) {
	imgsBox[i].ydNum=yuanDian[i];
	yuanDian[i].imgNum=imgsBox[i];
	if (i==0) {
		imgsBox[i].nextSlider=i+1;
		imgsBox[i].preSlider=len-1;
	} else if(i<(len-1) && i>0){
		imgsBox[i].nextSlider=i+1;
		imgsBox[i].preSlider=i-1;
	}else{
		imgsBox[i].nextSlider=0;
		imgsBox[i].preSlider=i-1;
	}
}
preBtn.onclick=function(){
	var imgNum=checkImgSliderNum();
	var imgNext=imgsBox[imgNum].preSlider;
	console.log();
	
	
}
function checkImgSliderNum(){
	var i;
	for (i=0,len=imgsBox.length;i<len;i++) {
		if(!imgsBox[i].classList.contains("fade")) {
			return i;
		}
	}
}

//for(var i = 0; i < yuanDian.length; i++) {
//	yuanDian[i].addEventListener("click", selectImgSlider(yuanDian[i]))
//}
//
//function selectImgSlider(obj) {
//	for(var j = 0; j < imgsBox.length; j++) {
//		if(!imgsBox[j].classList.contains("fade")) {
//			imgsBox[j].classList.add("fade");
//		}
//		if (yuanDian[j].classList.contains("yd_active")) {
//			yuanDian[j].classList.remove("yd_active");
//		}
//	}
//	obj.classList.add("yd_active");
//	var imgsBoxTarget=obj.getAttribute("data-target");
//	document.querySelector("#"+imgsBoxTarget).classList.remove("fade");
//}

//
//for(var i = 0; i < yuanDian.length; i++) {
//(function(i){
//	yuanDian[i].onclick=function(){
//		selectImgSlider(i);
//	}
//})(i)
//
//	
//}
//
//function selectImgSlider(i){
//	for(var j = 0; j < imgsBox.length; j++) {
//		if(!imgsBox[j].classList.contains("fade")) {
//			imgsBox[j].classList.add("fade");
//		}
//		if (yuanDian[j].classList.contains("yd_active")) {
//			yuanDian[j].classList.remove("yd_active");
//		}
//	}
//	yuanDian[i].classList.add("yd_active");
//	imgsBox[i].classList.remove("fade");
//}

//var selectImgSlider = (function(i)  {
//	for(var j = 0; j < imgsBox.length; j++) {
//		if(!imgsBox[j].classList.contains("fade")) {
//			imgsBox[j].classList.add("fade");
//		}
//		if (yuanDian[j].classList.contains("yd_active")) {
//			yuanDian[j].classList.remove("yd_active");
//		}
//	}
//	yuanDian[i].classList.add("yd_active");
//	imgsBox[i].classList.remove("fade");
//})(i);
