$(function() {
	var header = '<div class="header" id="header">';
	header += '<div class="title"><h1><a href="index.html">liz学习笔记</a></h1></div>';
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
	$(".h_aside_list li").css({
		"background-color": "#fff",
		"color": "#000"
	});
	$(that).css({
		"background-color": "cornflowerblue",
		"color": "#fff"
	});
	document.title="liz学习笔记-"+$(that).text();
});

$(".h_aside_list li").on("click", function() {
	$(".main").css("display", "none");
	$("#" + $(this).attr("data-target")).css("display", "block");
});

function dispMenuSection(){
	alert("menu");
}
