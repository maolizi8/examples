function loadXML(url) {
	if(window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET", url, false);
	xmlhttp.send();
	return xmlhttp.responseXML;
}

var xmlDoc = loadXML("../files/category.xml");
var xmlCDTag = xmlDoc.getElementsByTagName("CD");
var ajaxTBody = document.getElementById("ajax_tbody");
var html = "";
for(var i = 0; i < xmlCDTag.length; i++) {
	html += "<tr onclick='dispDetailInfo(" + i + ")'>";
	html += "<td>" + (xmlCDTag[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue) + "</td>";
	html += "<td>" + (xmlCDTag[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue) + "</td>";
	html += "</tr>";
}
ajaxTBody.innerHTML = html;

function dispDetailInfo(i) {
	var xmlDoc = loadXML("../files/category.xml");
	var xmlCDTag = xmlDoc.getElementsByTagName("CD");
	var dispXMLDetail = document.getElementById("dispxmldetail");
	var xmlDetail = "";
	xmlDetail += "<p>Title: " + (xmlCDTag[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue) + "</p>";
	xmlDetail += "<p>Artist: " + (xmlCDTag[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue) + "</p>";
	xmlDetail += "<p>Year: " + (xmlCDTag[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue) + "</p>";
	xmlDetail += "<p>Country: " + (xmlCDTag[i].getElementsByTagName("COUNTRY")[0].childNodes[0].nodeValue) + "</p>";
	xmlDetail += "<p>Company: " + (xmlCDTag[i].getElementsByTagName("COMPANY")[0].childNodes[0].nodeValue) + "</p>";
	xmlDetail += "<p>Price: " + (xmlCDTag[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue) + "</p>";
	dispXMLDetail.innerHTML = xmlDetail;
}