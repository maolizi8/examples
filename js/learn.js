/* 公共 菜单栏和底部 start*/
$(function() {
	var header = '<div class="header" id="header">';
	header += '<div class="title"><a href="../index.html" class="liz_index">liz学习空间</a>';
	header += '<a href="index.html" class="liz_menu">学习笔记</a></div>';
	header += '<div class="header-r fade">';
	header += '<button class="menu-btn" onclick="dispMenuSection()">menu</button>';
	header += '</div></div><div id="nav"></div>';
	$(".container").prepend(header);
	$("#nav").load("index.html #nav");
	$(".container").append('<div id="foot"></div>');
	$("#foot").load("index.html #footer");
	document.title = "liz学习笔记-" + $(".h_aside_list li:first-child").text();
});
$(".h_aside_list li").click(function() {
	var that = this;
	$(".h_aside_list li").removeClass("li_active");
	$(that).addClass("li_active");
	document.title = "liz学习笔记-" + $(that).text();
	$(".main").css("display", "none");
	$("#" + $(this).attr("data-target")).css("display", "block");
});

function dispMenuSection() {
	alert("menu is progressing");
}
/* 公共 菜单栏和底部 end*/

/* 公共 翻页 start*/
var paginator = '<div class="pagenator">';
paginator += '<button class="prepage" onclick="prePage()">&larr;上一页</button>';
paginator += '<button class="nextpage" onclick="nextPage()">下一页&rarr;</button></div>';
$(".main").append(paginator);

var liLen = $(".h_aside_list li").length;

function currListLi() {
	var i;
	for(i = 0; i < liLen; i++) {
		if($($(".h_aside_list li")[i]).hasClass("li_active")) {
			return i;
		}
	}
}

function prePage() {
	var prePage = currListLi() - 1;
	if(prePage >= 0) {
		console.log(prePage);
		$(".h_aside_list li").removeClass("li_active");
		$($(".h_aside_list li")[prePage]).addClass("li_active");
		$(".main").css("display", "none");
		$($(".main")[prePage]).css("display", "block");
		$(window).scrollTop(0);
	}
}

function nextPage() {
	var nextPage = currListLi() + 1;
	if(nextPage < liLen) {
		$(".h_aside_list li").removeClass("li_active");
		$($(".h_aside_list li")[nextPage]).addClass("li_active");
		$(".main").css("display", "none");
		$($(".main")[nextPage]).css("display", "block");
		$(window).scrollTop(0);
	}
}
/* 公共 翻页 end*/
