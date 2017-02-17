var metaHead1=document.createElement("meta");
var metaHead2=document.createElement("meta");
var metaHead3=document.createElement("meta");
metaHead1.name="author";
metaHead1.content="geqiuli";
metaHead2.name="keywords";
metaHead2.content="HTML, CSS, JavaScript";
metaHead3.name="description";
metaHead3.content="geqiuli learn HTML, CSS, JS, etc.";
document.getElementsByTagName('head')[0].appendChild(metaHead1);
document.getElementsByTagName('head')[0].appendChild(metaHead2);
document.getElementsByTagName('head')[0].appendChild(metaHead3);

var linkHead1=document.createElement("link");
var linkHead2=document.createElement("link");
var linkHead3=document.createElement("link");
linkHead1.href="../imgs/me.ico";
linkHead1.type="image/x-icon";
linkHead1.rel="shortcut icon";
function getScrollTop() {
		var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		return scrollTop;
	}

function setScrollTop(scroll_top) {
		document.documentElement.scrollTop = scroll_top;
		window.pageYOffset = scroll_top;
		document.body.scrollTop = scroll_top;
	}