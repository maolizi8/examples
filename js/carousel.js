
var carouselFigure = function(target) {
	var target = document.querySelector(target);
	var carousel = document.createElement("div");
	carousel.className = "carousel";
	for(var i = 1; i < arguments.length; i++) {
		var crsFigure = document.createElement("div");
		crsFigure.className = "crs_figure";
		crsFigure.style.backgroundImage = "url("+arguments[i]+")";
		if(i == 1) {
			crsFigure.classList.add("crx_active");
		}
		carousel.appendChild(crsFigure);
	}
	var preBtn = document.createElement("div");
	preBtn.innerHTML="<";
	preBtn.className = "pre_btn";
	preBtn.onclick=preFigure;
	var nextBtn = document.createElement("div");
	nextBtn.innerHTML=">";
	nextBtn.className = "next_btn";
	nextBtn.onclick=nextFigure;
	carousel.appendChild(preBtn);
	carousel.appendChild(nextBtn);
	target.appendChild(carousel);
}
var getIndex=function(target,obj){
	for (var i=0;i<obj.length;i++) {
		if (obj[i]==target) {
			return i;
		}
	}
}
var getPreIndex=function(index,obj){
	if (index==0) {
		return obj.length-1;
	} else{
		return index-1;
	}
}
var getNextIndex=function(index,obj){
	if (index==obj.length-1) {
		return 0;
	} else{
		return index+1;
	}
}
var preFigure=function(){
	var target=document.getElementsByClassName("crx_active")[0];
	var list=document.getElementsByClassName("crs_figure");
	var index=getIndex(target,list);
	for (var i=0;i<list.length;i++) {
		list[i].classList.remove("crx_active");
	}
	var preIndex=getPreIndex(index,list);
	list[preIndex].classList.add("crx_active");
}
var nextFigure=function(){
	var target=document.getElementsByClassName("crx_active")[0];
	var list=document.getElementsByClassName("crs_figure");
	var index=getIndex(target,list);
	for (var i=0;i<list.length;i++) {
		list[i].classList.remove("crx_active");
	}
	var nextIndex=getNextIndex(index,list);
	list[nextIndex].classList.add("crx_active");
}
