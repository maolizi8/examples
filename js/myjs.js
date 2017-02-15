function getScrollTop() {
		var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		return scrollTop;
	}

function setScrollTop(scroll_top) {
		document.documentElement.scrollTop = scroll_top;
		window.pageYOffset = scroll_top;
		document.body.scrollTop = scroll_top;
	}