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
	document.title="liz学习笔记-"+$(".h_aside_list li:first-child").text();
});
$(".h_aside_list li").click(function() {
	var that = this;
	$(".h_aside_list li").removeClass("li_active");
	$(that).addClass("li_active");
	document.title="liz学习笔记-"+$(that).text();
	$(".main").css("display", "none");
	$("#" + $(this).attr("data-target")).css("display", "block");
});

function dispMenuSection(){
	alert("menu");
}
