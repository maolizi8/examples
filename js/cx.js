var cityList = {
			"A": ["鞍山", "安庆", "安阳", "安顺", "安康", "阿克苏"],
			"B": ["北京", "保定", "包头", "巴彦淖尔", "本溪", "蚌埠", "亳州", "滨州", "北海", "百色", "巴中", "毕节", "保山", "宝鸡", "白银", "巴音郭楞"],
			"C": ["承德", "沧州", "长治", "赤峰", "朝阳", "长春", "常州", "滁州", "池州", "长沙", "常德", "郴州", "潮州", "重庆", "成都", "楚雄", "昌吉"],
			"D": ["大同", "大连", "丹东", "大庆", "东营", "德州", "东莞", "德阳", "达州", "大理", "定西"],
			"E": ["鄂尔多斯", "恩施"],
			"F": ["抚顺", "阜新", "阜阳", "福州", "抚州", "佛山"],
			"G": ["赣州", "广州", "桂林", "贵港", "广元", "广安", "贵阳", "巩义"],
			"H": ["邯郸", "衡水", "呼和浩特", "呼伦贝尔", "葫芦岛", "哈尔滨", "淮安", "杭州", "湖州", "合肥", "淮南", "淮北", "黄山", "菏泽", "鹤壁", "黄石", "黄冈", "湖北省直辖", "衡阳", "怀化", "惠州", "河源", "河池", "海口", "红河", "汉中", "哈密"],
			"J": ["晋城", "晋中", "锦州", "吉林", "鸡西", "佳木斯", "嘉兴", "金华", "景德镇", "九江", "吉安", "济南", "济宁", "焦作", "济源", "荆门", "荆州", "江门", "揭阳", "嘉峪关", "酒泉", "江阴"],
			"K": ["开封", "昆明", "克拉玛依", "喀什"],
			"L": ["廊坊", "临汾", "吕梁", "辽阳", "连云港", "丽水", "六安", "龙岩", "莱芜", "临沂", "聊城", "洛阳", "漯河", "娄底", "柳州", "泸州", "乐山", "凉山", "六盘水", "丽江", "临沧", "拉萨", "兰州"],
			"M": ["牡丹江", "马鞍山", "茂名", "梅州", "绵阳", "眉山"],
			"N": ["南京", "南通", "宁波", "南平", "宁德", "南昌", "南阳", "南宁", "内江", "南充"],
			"P": ["盘锦", "莆田", "萍乡", "平顶山", "濮阳", "攀枝花", "普洱", "平凉"],
			"Q": ["秦皇岛", "齐齐哈尔", "七台河", "衢州", "泉州", "青岛", "清远", "钦州", "黔西南", "黔东南", "黔南", "曲靖", "庆阳"],
			"R": ["日照"],
			"S": ["石家庄", "朔州", "沈阳", "四平", "双鸭山", "绥化", "上海", "苏州", "宿迁", "绍兴", "宿州", "三明", "上饶", "三门峡", "商丘", "十堰", "随州", "邵阳", "韶关", "深圳", "汕头", "三亚", "遂宁", "商洛", "石嘴山"],
			"T": ["天津", "唐山", "太原", "通辽", "铁岭", "通化", "泰州", "台州", "铜陵", "泰安", "铜仁", "铜川", "天水"],
			"W": ["乌海", "乌兰察布", "无锡", "温州", "芜湖", "潍坊", "威海", "武汉", "梧州", "文山", "渭南", "吴忠", "乌鲁木齐"],
			"X": ["邢台", "忻州", "兴安盟", "锡林郭勒盟", "徐州", "宣城", "厦门", "新余", "新乡", "许昌", "信阳", "襄阳", "孝感", "咸宁", "湘潭", "湘西", "西双版纳", "西安", "咸阳", "西宁"],
			"Y": ["阳泉", "运城", "营口", "延边朝鲜族", "盐城", "扬州", "鹰潭", "宜春", "烟台", "宜昌", "岳阳", "益阳", "永州", "阳江", "云浮", "玉林", "宜宾", "雅安", "玉溪", "延安", "榆林", "银川", "伊犁"],
			"Z": ["张家口", "镇江", "舟山", "漳州", "淄博", "枣庄", "郑州", "周口", "驻马店", "株洲", "珠海", "湛江", "肇庆", "中山", "自贡", "资阳", "遵义", "昭通", "张掖"]
		};


/*js 写法 */

var a1, a2, text1, text2, text3, div1, div2, div3;
window.onload = function() {
	for(key in cityList) {
		a1 = document.createElement("a");
		a1.href = "javascript:void(0)";
		a1.onclick = selectCities;
		text1 = document.createTextNode(key.toString());
		a1.appendChild(text1);
		document.querySelector("#lc_leters").appendChild(a1);

		div1 = document.createElement("div");
		div2 = document.createElement("div");
		div3 = document.createElement("div");
		div1.classList.add("lc_section");
		div2.classList.add("letter");
		div3.classList.add("lc_names");
		for(var i = 0, len = cityList[key].length; i < len; i++) {
			a2 = document.createElement("a");
			a2.href = "javascript:void(0)";
			text2 = document.createTextNode(cityList[key][i].toString());
			a2.appendChild(text2);
			a2.onclick = changeCityname;
			div3.appendChild(a2);
		}
		text3 = document.createTextNode(key.toString());
		div2.appendChild(text3);
		div1.appendChild(div2);
		div1.appendChild(div3);
		div1.id = "city_" + key.toString().toLowerCase();
		document.querySelector("#lc_cities").appendChild(div1);
	}
}

function selectCities() {
	var letter = this.innerText.toLowerCase();
	var lcCities = document.getElementById("lc_cities");
	var offsetTop = document.getElementById("city_" + letter).offsetTop;
	var scrollTop = offsetTop - lcCities.offsetTop;
	lcCities.scrollTop = scrollTop;
}

function changeCityname() {
	document.getElementById("lc_name").innerText = this.innerText;
}

var hd_location = document.querySelector("#hd_location");
hd_location.addEventListener("mouseover", location_disp);
hd_location.addEventListener("mouseout", location_hide);
var lc_choices = document.querySelector(".lc_choices");
lc_choices.addEventListener("mouseover", location_disp);
lc_choices.addEventListener("mouseout", location_hide);
var icon_location = document.querySelector(".icon_location");

function location_disp() {
	hd_location.classList.add("hd_location_hover");
	icon_location.classList.add("icon_location_hover");
	lc_choices.style.display = "block";
}

function location_hide() {
	hd_location.classList.remove("hd_location_hover");
	icon_location.classList.remove("icon_location_hover");
	lc_choices.style.display = "none";
}

var hd_nav_list = document.querySelectorAll(".hd_nav");
var nav_down_list = document.querySelectorAll(".nav_down");
for(var i = 0; i < hd_nav_list.length; i++) {
	hd_nav_list[i].addEventListener("mouseover", hd_nav_disp);
	hd_nav_list[i].addEventListener("mouseout", hd_nav_hide);
}
for(var i = 0; i < nav_down_list.length; i++) {
	nav_down_list[i].addEventListener("mouseover", hd_nav_down_disp);
	nav_down_list[i].addEventListener("mouseout", hd_nav_down_hide);
}

function hd_nav_disp() {
	var nav_id = this.attributes.getNamedItem("data-target").textContent;
	this.classList.add("hd_nav_hover");
	document.querySelector("#" + nav_id).style.display = "block";
	console.log();
}

function hd_nav_hide() {
	var nav_id = this.attributes.getNamedItem("data-target").textContent;
	this.classList.remove("hd_nav_hover");
	document.querySelector("#" + nav_id).style.display = "none";
}

function hd_nav_down_disp() {
	var nav_id = this.attributes.getNamedItem("id").textContent;
	this.style.display = "block";
	document.querySelector("[data-target='" + nav_id + "']").classList.add("hd_nav_hover");
}

function hd_nav_down_hide() {
	var nav_id = this.attributes.getNamedItem("id").textContent;
	this.style.display = "none";
	document.querySelector("[data-target='" + nav_id + "']").classList.remove("hd_nav_hover");
}

/*js 写法 end*/

/*jquery 写法*/

/*将城市拼音的首字母、城市名称渲染至下方浮动块中*/
//var a1, a2, div1, div2, div3;
//window.onload = function() {
//	for(key in cityList) {
//		a1 = $("<a></a>").attr("href", "javascript:void(0)").text(key.toString()).click(selectCities);
//		$("#lc_leters").append(a1);
//		div1 = $("<div></div>").attr({
//			"class": "lc_section",
//			"id": "city_" + key.toString().toLowerCase()
//		});
//		div2 = $("<div></div>").attr("class", "letter");
//		div3 = $("<div></div>").attr("class", "lc_names");
//		for(var i = 0, len = cityList[key].length; i < len; i++) {
//			a2 = $("<a></a>").attr("href", "javascript:void(0)").text(cityList[key][i].toString()).click(changeCityname);
//			div3.append(a2);
//		}
//		div2.text(key.toString());
//		div1.append(div2).append(div3);
//		$("#lc_cities").append(div1);
//	}
//}
//
//function selectCities() {
//	$("#lc_cities").scrollTop($("#lc_cities").scrollTop() + $("#city_" + $(this).html().toLowerCase()).position().top - $("#lc_cities").position().top);
//};
//
//function changeCityname() {
//	$("#lc_name").text($(this).text());
//}
//$("#hd_location").hover(location_disp, location_hide);
//$(".lc_choices").hover(location_disp, location_hide);
//
//function location_disp() {
//	$("#hd_location").addClass("hd_location_hover");
//	$(".icon_location").addClass("icon_location_hover");
//	$(".lc_choices").css("display", "block");
//}
//
//function location_hide() {
//	$("#hd_location").removeClass("hd_location_hover");
//	$(".icon_location").removeClass("icon_location_hover");
//	$(".lc_choices").css("display", "none");
//}
//$(".hd_nav").hover(function() {
//	$(this).addClass("hd_nav_hover");
//	$("#" + $(this).attr("data-target").toString()).css("display", "block");
//}, function() {
//	$(this).removeClass("hd_nav_hover");
//	$("#" + $(this).attr("data-target").toString()).css("display", "none");
//});
//$(".nav_down").hover(function() {
//	$(this).css("display", "block");
//	$("[data-target='" + $(this).attr("id").toString() + "']").addClass("hd_nav_hover");
//}, function() {
//	$(this).css("display", "none")
//	$("[data-target='" + $(this).attr("id").toString() + "']").removeClass("hd_nav_hover");
//});

/* 鼠标移动到轮播图时，动画暂停*/
$(".picture_show").hover(function() {
	$(".picture_show").css("animation-play-state", "paused");
	$('pc_jindutiao').css("animation-play-state", "paused");
}, function() {
	$(".picture_show").css("animation-play-state", "running");
	$('pc_jindutiao').css("animation-play-state", "running");
});
$('pc_jindutiao').hover(function() {
	$(".picture_show").css("animation-play-state", "paused");
	$('pc_jindutiao').css("animation-play-state", "paused");
}, function() {
	$(".picture_show").css("animation-play-state", "running");
	$('pc_jindutiao').css("animation-play-state", "running");
});
/* 鼠标移动到轮播图的进度条时，动画暂停*/
$(".mn_down_section_one").hover(mn_detail_disp, mn_detail_hide);
$(".mn_down_section_three").hover(mn_detail_disp, mn_detail_hide);
$(".mn_down_section_detal1").hover(mn_ondetail_disp, mn_ondetail_hide);
$(".mn_down_section_detal2").hover(mn_ondetail_disp, mn_ondetail_hide);

function mn_detail_disp() {
	var detailTarget = $(this).attr("data-target");
	$("." + detailTarget).css("display", "block");
}
function mn_detail_hide() {
	var detailTarget = $(this).attr("data-target");
	$("." + detailTarget).css("display", "none");
}
function mn_ondetail_disp() {
	$(this).css("display", "block");
}
function mn_ondetail_hide() {
	$(this).css("display", "none");
}

/*客服热线弹出框*/
$(".icon_cust_sv").hover(icon_cust_disp, icon_cust_hide);
$(".icon_cust_desc").hover(icon_cust_disp, icon_cust_hide);
function icon_cust_disp() {
	$(".icon_cust_sv").addClass("icon_cust_sv_hover");
	$(".icon_cust_desc").css("display", "block");
}
function icon_cust_hide() {
	$(".icon_cust_sv").removeClass("icon_cust_sv_hover");
	$(".icon_cust_desc").css("display", "none");
}
$(".icon_cust_sv").click(function(obj){
	var event=window.event||obj;
	event.stopPropagation();
	$(".custome_sv_popup").css("display", "block");
});
$(".custome_sv_popup").click(function(obj){
	var event=window.event||obj;
	event.stopPropagation();
	event.stopPropagation();
});
$(".close_btn").click(function(){
	$(".custome_sv_popup").css("display", "none");
});
$("body").click(function(){
	$(".custome_sv_popup").css("display", "none");
});

/* 回到顶部按钮*/
$(window).scroll(function(){
	if ($(window).scrollTop()>700) {
		$('.tothetop').css("display", "block");
	} else{
		$('.tothetop').css("display", "none");
	}
});
$(".icon_tothetop").click(function(){
	$(window).scrollTop(0);
});
$(".icon_tothetop").hover(icon_totop_disp, icon_totop_hide);
$(".icon_tothetop_desc").hover(icon_totop_disp, icon_totop_hide);
function icon_totop_disp() {
	$(".icon_tothetop").addClass("icon_tothetop_hover");
	$(".icon_tothetop_desc").css("display", "block");
}
function icon_totop_hide() {
	$(".icon_tothetop").removeClass("icon_tothetop_hover");
	$(".icon_tothetop_desc").css("display", "none");
}


/*jquery 写法 end*/