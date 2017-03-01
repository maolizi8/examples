function drawDuojiaoXing(id,total,nextnum) {
	if ((nextnum*2)>=total) {
		nextnum-=1;
	}
	var canv = document.querySelector(id);
	var context = canv.getContext("2d");
	context.fillStyle = "#EEEEFF";
	context.fillRect(0, 0, 140, 140);
	var n = 0;
	var dx = 70;
	var dy = 70;
	var s = 70;
	context.beginPath();
	context.fillStyle = 'rgb(100,255,100)';
	context.strokeStyle = 'rgb(0,0,100)';
	var x = Math.sin(0);
	var y = Math.cos(0);
	var dig = Math.PI / total * (2*nextnum);
	for(var i = 0; i < total; i++) {
		var x = Math.sin(i * dig);
		var y = Math.cos(i * dig);
		context.lineTo(dx + x * s, dy + y * s);
	}
	context.closePath();
	context.fill();
	context.stroke();
}
drawDuojiaoXing("#canvas1",30,11);
drawDuojiaoXing("#canvas2",5,2);

/* 拖放图片*/
var dradroBox1=document.querySelector("#dado_box1");
var dradroBox2=document.querySelector("#dado_box2");
dradroBox1.addEventListener("dragover",allowdrop);
dradroBox1.addEventListener("drop",dropbox);
dradroBox2.addEventListener("dragover",allowdrop);
dradroBox2.addEventListener("drop",dropbox);

function allowdrop(ev){
	ev.preventDefault();
}

function dragimg(ev){
	ev.dataTransfer.setData("Text",ev.target.id);
}

function dropbox(ev){
	ev.preventDefault();
	var data=ev.dataTransfer.getData("Text");
	ev.target.appendChild(document.getElementById(data));
}

/*本地存储*/
var addLSBtn=document.querySelector(".addls_btn");
var lsTBody=document.querySelector("#ls_tbody");
var addLSBox=document.querySelector(".addls_box");

var addNewLSBtn=document.querySelector("#addnewbtn");
var cancelAdd=document.querySelector("#canceladd");
addLSBtn.onclick=function(){
	addLSBox.classList.remove("fade");
}
cancelAdd.onclick=function(){
	addLSBox.classList.add("fade");
}
addNewLSBtn.onclick=function(){
	var title=document.forms["addls_form"]["title"];
	var author=document.forms["addls_form"]["author"];
	if (!title.value) {
		alert("主题不能为空！");
	} else if(!author.value){
		alert("作者不能为空！");
	}else{
		addNewLS(title.value,author.value);
	}
}
function addNewLS(title,author){
	console.log(title)
	var myContentStore;
	if (localStorage.myContentStore!=null) {
		myContentStore=JSON.parse(localStorage.myContentStore);
		myContentStore.push({"title":title,"author":author});
	}else{
		myContentStore=[{"title":"","author":""}];
		myContentStore[0].title=title;
		myContentStore[0].author=author;
	}
	addLSBox.classList.add("fade");
	localStorage.myContentStore=JSON.stringify(myContentStore);
}
window.onload=loadLSRecords;
function loadLSRecords(){
	lsTBody.innerHTML="";
	var myContentStore;
	var html="";
	if (localStorage.myContentStore!=null) {
		myContentStore=JSON.parse(localStorage.myContentStore);
		for (var i=0;i<myContentStore.length;i++) {
			html+="<tr>";
			html+="<td>"+(i+1)+"</td>";
			html+="<td>"+myContentStore[i].title+"</td>";
			html+="<td>"+myContentStore[i].author+"</td>";
			html+="<td><button onclick='deleteLS("+i+")'>删除</button></td>";
			html+="</tr>";
		}
		lsTBody.innerHTML=html;
	}
}
function deleteLS(num){
	var myContentStore=JSON.parse(localStorage.myContentStore);
	myContentStore.splice(num,1);
	localStorage.myContentStore=JSON.stringify(myContentStore);
	loadLSRecords();
}
