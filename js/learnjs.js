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
var preBtn = document.querySelector(".prebtn");
var nextBtn = document.querySelector(".nextbtn");

for(var i = 0, len = imgsBox.length; i < len; i++) {
	imgsBox[i].ydNum = yuanDian[i];
	yuanDian[i].imgNum = imgsBox[i];
	if(i == 0) {
		imgsBox[i].nextSlider = i + 1;
		imgsBox[i].preSlider = len - 1;
	} else if(i < (len - 1) && i > 0) {
		imgsBox[i].nextSlider = i + 1;
		imgsBox[i].preSlider = i - 1;
	} else {
		imgsBox[i].nextSlider = 0;
		imgsBox[i].preSlider = i - 1;
	}
}

preBtn.onclick = function() {
	var imgNum = checkImgSliderNum();
	var imgPre = imgsBox[imgNum].preSlider;
	selectImgSlider(imgPre);
}
nextBtn.onclick = function() {
	var imgNum = checkImgSliderNum();
	var imgNext = imgsBox[imgNum].nextSlider;
	selectImgSlider(imgNext);
}

function checkImgSliderNum() {
	var i;
	for(i = 0, len = imgsBox.length; i < len; i++) {
		if(!imgsBox[i].classList.contains("fade")) {
			return i;
		}
	}
}

for(var i = 0; i < yuanDian.length; i++) {
	(function(i) {
		yuanDian[i].onclick = function() {
			selectImgSlider(i);
		}
	})(i)
}

function selectImgSlider(i) {
	for(var j = 0; j < imgsBox.length; j++) {
		if(!imgsBox[j].classList.contains("fade")) {
			imgsBox[j].classList.add("fade");
		}
		if(yuanDian[j].classList.contains("yd_active")) {
			yuanDian[j].classList.remove("yd_active");
		}
	}
	yuanDian[i].classList.add("yd_active");
	imgsBox[i].classList.remove("fade");
}

/* 搜索框的自动提示*/
var optionChoices=[{"english":"Alice","chinese":"爱丽丝","meaning":"尊贵的，真诚的"},
{"english":"Amanda","chinese":"阿曼达","meaning":"值得爱的"},
{"english":"Angela","chinese":"安琪拉","meaning":"天使；报信者，安琪儿"},
{"english":"Ann","chinese":"安妮","meaning":"优雅的，仁慈的上帝"},
{"english":"Anna","chinese":"安娜","meaning":"优雅"},
{"english":"Antonia","chinese":"安东妮儿","meaning":"无辞以赞，受尊崇的人"},
{"english":"Audrey","chinese":"奥德莉","meaning":"高贵显赫的人"},
{"english":"Betsy","chinese":"贝琪","meaning":"上帝是誓约"},
{"english":"Betty","chinese":"贝蒂","meaning":"上帝是誓约"},
{"english":"Bonnie","chinese":"邦妮","meaning":"甜美、漂亮、优雅而善良的人"},
{"english":"Bridget","chinese":"布丽姬特","meaning":"强壮，力量"},
{"english":"Caroline","chinese":"卡洛琳","meaning":"骁勇、刚健和强壮的"},
{"english":"Catherine","chinese":"凯瑟琳","meaning":"纯洁的人"},
{"english":"Christine","chinese":"克莉丝汀","meaning":"基督的追随者，门徒"},
{"english":"Claire","chinese":"克莱儿","meaning":"灿烂的；明亮的；聪明的"},
{"english":"Cynthia","chinese":"辛西亚","meaning":"月亮女神黛安娜的称号"},
{"english":"Darlene","chinese":"达莲娜","meaning":"温柔可爱；体贴地爱"},
{"english":"Debby","chinese":"黛碧","meaning":"蜜蜂；蜂王"},
{"english":"Doris","chinese":"多莉丝","meaning":"来自大海的；海洋女神"},
{"english":"Elizabeth","chinese":"伊莉莎白","meaning":"上帝的誓约"},
{"english":"Elsie","chinese":"艾西","meaning":"上帝的誓约，诚实的"},
{"english":"Emma","chinese":"艾玛","meaning":"祖先"},
{"english":"Enid","chinese":"伊妮德","meaning":"纯洁得毫无瑕庛"},
{"english":"Erica","chinese":"艾丽卡","meaning":"有权力的；帝王的；统治者"},
{"english":"Flora","chinese":"弗罗拉","meaning":"花；花之神"},
{"english":"Florence","chinese":"弗罗伦丝","meaning":"开花的或美丽的"},
{"english":"Grace","chinese":"葛瑞丝","meaning":"优雅的。"},
{"english":"Helen","chinese":"海伦","meaning":"火把；光亮的"},
{"english":"Honey","chinese":"汉妮","meaning":"亲爱的人"},
{"english":"Isabel","chinese":"伊莎蓓尔","meaning":"上帝的誓约"},
{"english":"Ivy","chinese":"艾薇","meaning":"希腊传说中的神圣食物"},
{"english":"Janet","chinese":"珍妮特","meaning":"少女，上帝的恩赐"},
{"english":"Jenny","chinese":"珍妮","meaning":"少女"},
{"english":"Jessie","chinese":"婕西","meaning":"上帝的恩宠；财富"},
{"english":"Jessica","chinese":"杰西嘉","meaning":"上帝的恩宠；财富"},
{"english":"Joanna","chinese":"乔安娜","meaning":"上帝仁慈的赠礼"},
{"english":"Judy","chinese":"朱蒂","meaning":"赞美"},
{"english":"Karen","chinese":"凯伦","meaning":"纯洁"},
{"english":"Katherine","chinese":"凯瑟琳","meaning":"纯洁的"},
{"english":"Kay","chinese":"凯伊","meaning":"欣喜的"},
{"english":"Kelly","chinese":"凯莉","meaning":"女战士"},
{"english":"Kitty","chinese":"吉蒂","meaning":"纯洁的"},
{"english":"Kristin","chinese":"克莉丝汀","meaning":"基督的追随者、门徒"},
{"english":"Letitia","chinese":"莉蒂西雅","meaning":"快乐的；欣喜的"},
{"english":"Lillian","chinese":"丽莲","meaning":"一朵百合花，代表纯洁；上帝的誓约"},
{"english":"Linda","chinese":"琳达","meaning":"美丽的人"},
{"english":"Lisa","chinese":"丽莎","meaning":"对神奉献"},
{"english":"Liz","chinese":"莉斯","meaning":"上帝就是誓约"},
{"english":"Lucy","chinese":"露西","meaning":"带来光明和智慧的人"},
{"english":"Lydia","chinese":"莉蒂亚","meaning":"来自里底亚的人，财富"},
{"english":"Maggie","chinese":"玛姬","meaning":"珍珠"},
{"english":"Mamie","chinese":"梅蜜","meaning":"反抗的苦涩；海之女"},
{"english":"Mandy","chinese":"曼蒂","meaning":"值得爱的"},
{"english":"Mary","chinese":"玛丽","meaning":"反抗的苦涩；海之女"},
{"english":"May","chinese":"梅","meaning":"少女，五月"},
{"english":"Melissa","chinese":"蒙丽莎","meaning":"蜂蜜"},
{"english":"Michelle","chinese":"蜜雪儿","meaning":"紫菀花"},
{"english":"Michaelia","chinese":"蜜雪莉雅","meaning":"似上帝的人"},
{"english":"Molly","chinese":"茉莉","meaning":"反抗的苦涩；海之女"},
{"english":"Myra","chinese":"玛拉","meaning":"令人折服的人，非常好的人"},
{"english":"Nancy","chinese":"南茜","meaning":"优雅、温文；保母"},
{"english":"Nicola","chinese":"妮可拉","meaning":"胜利"},
{"english":"Nydia","chinese":"妮蒂亚","meaning":"来自隐居之处的人"},
{"english":"Pandora","chinese":"潘朵拉","meaning":"世界上第一个女人"},
{"english":"Penny","chinese":"潘妮","meaning":"沈默的编织者"},
{"english":"Polly","chinese":"珀莉","meaning":"反抗的苦涩；海之女"},
{"english":"Poppy","chinese":"波比","meaning":"可爱的花朵"},
{"english":"Queena","chinese":"昆娜","meaning":"很高贵、贵族化的"},
{"english":"Rachel","chinese":"瑞琪儿","meaning":"母羊或小羊；和善的、彬彬有礼的"},
{"english":"Roberta","chinese":"萝勃塔","meaning":"辉煌的名声；灿烂"},
{"english":"Rosalind","chinese":"罗莎琳德","meaning":"盛开的玫瑰"},
{"english":"Ruby","chinese":"露比","meaning":"红宝石"},
{"english":"Sandy","chinese":"仙蒂","meaning":"人类的保卫者"},
{"english":"Shirley","chinese":"雪丽","meaning":"来自草地的"},
{"english":"Sophia","chinese":"苏菲亚","meaning":"智慧的人"},
{"english":"Stephanie","chinese":"丝特芬妮","meaning":"王冠；花环；荣誉的标志"},
{"english":"Susan","chinese":"苏珊","meaning":"一朵小百合"},
{"english":"Susie","chinese":"苏西","meaning":"百合花"},
{"english":"Tiffany","chinese":"蒂芙妮","meaning":"薄纱；神圣"},
{"english":"Tina","chinese":"蒂娜","meaning":"娇小玲珑的人"},
{"english":"Valerie","chinese":"瓦勒莉","meaning":"强壮的人；勇敢的人"},
{"english":"Victoria","chinese":"维多利亚","meaning":"胜利"},
{"english":"Vicky","chinese":"维琪","meaning":"胜利"},
{"english":"Virginia","chinese":"维吉妮亚","meaning":"春天；欣欣向荣状"},
{"english":"Vivien","chinese":"维文","meaning":"活跃的"},
{"english":"Wendy","chinese":"温蒂","meaning":"有冒险精神的女孩；白眉毛的"},
{"english":"Yvonne","chinese":"伊芳","meaning":"射手"},
{"english":"Zoe","chinese":"若伊","meaning":"生命"}];

var optionLen=optionChoices.length;

var searchInput=document.querySelector("#search_input");
var searchList=document.querySelector(".search_list");
var searchBtn=document.querySelector(".search_btn");
var searchTBody=document.querySelector("#search_tbody");
var searchResultTB=document.querySelector(".search_result");
searchInput.addEventListener("input",dispSearchList);
searchBtn.addEventListener("click",searNameMeaning);
document.body.addEventListener("click",hideSearchList);

function dispSearchList(){
	event.stopPropagation();
	searchList.classList.remove("fade");
	searchList.innerHTML="";
	var searchText=searchInput.value.toLowerCase();
	var j=0;
	for (var i=0;i<optionLen;i++) {
		var optionText=optionChoices[i].english.toLowerCase();
		if (optionText.indexOf(searchText)!=-1 && j<5) {
			var searchLi=document.createElement("li");
			var liText=document.createTextNode(optionChoices[i].english.toLowerCase());
			searchLi.appendChild(liText);
			searchList.appendChild(searchLi);
			//searchLi.addEventListener("click",searchInputText);
			searchLi.onclick=searchInputText;
			j++;
		}
	}
}
function hideSearchList(){
	searchList.classList.add("fade");
}
function searchInputText(){
	event.stopPropagation();
	searchInput.value=this.innerText;
	searchList.classList.add("fade");
}
function searNameMeaning(){
	event.stopPropagation();
	var searchText=searchInput.value.toLowerCase();
	//document.forms["searchnameform"]["englishname"].value;

	console.log(searchText);
	search_tbody.innerHTML="";
	var searchTBTr="";
	var j=0;
	for (var i=0;i<optionLen;i++) {
		var optionText=optionChoices[i].english.toLowerCase();
		if (optionText.indexOf(searchText)!=-1 && j<5) {
			searchTBTr+="<tr>";
			searchTBTr+="<td>"+optionChoices[i].english+"</td>";
			searchTBTr+="<td>"+optionChoices[i].chinese+"</td>";
			searchTBTr+="<td>"+optionChoices[i].meaning+"</td>";
			searchTBTr+="</tr>";
			j++;
		}
	}
	if (j==0) {
			searchTBTr+="<tr>";
			searchTBTr+='<td colspan="3">No Result...</td>';
			searchTBTr+="</tr>";
	}
	searchTBody.innerHTML=searchTBTr;
	searchResultTB.classList.remove("fade");
	searchList.classList.add("fade");
	
}
