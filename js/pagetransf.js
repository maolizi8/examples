var paginator='<div class="pagenator">';
paginator+='<button class="prepage" onclick="prePage()">&larr;上一页</button>';
paginator+='<button class="nextpage" onclick="nextPage()">下一页&rarr;</button></div>';
$(".main").append(paginator);

var liLen=$(".h_aside_list li").length;
	
function currListLi(){
	var i;
	for (i=0;i<liLen;i++) {
		if ($($(".h_aside_list li")[i]).hasClass("li_active")) {
			return i;
		}
	}
}

function prePage(){
	var prePage=currListLi()-1;
	if(prePage>=0){
		console.log(prePage);
		$(".h_aside_list li").removeClass("li_active");
		$($(".h_aside_list li")[prePage]).addClass("li_active");
		$(".main").css("display", "none");
		$($(".main")[prePage]).css("display", "block");
		$(window).scrollTop(0);
	}
}
function nextPage(){
	var nextPage=currListLi()+1;
	if(nextPage<liLen){
		$(".h_aside_list li").removeClass("li_active");
		$($(".h_aside_list li")[nextPage]).addClass("li_active");
		$(".main").css("display", "none");
		$($(".main")[nextPage]).css("display", "block");
		$(window).scrollTop(0);
	}
}
