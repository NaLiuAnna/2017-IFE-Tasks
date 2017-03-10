function btn1(){
	var text = document.getElementById("input1");
	var len = text.value.length;
	var tatallen = 0;
	for(var i = 0;i<len;i++){
		if(text.value.charCodeAt(i) >= 0 &&  text.value.charCodeAt(i) < 128){
			tatallen += 1;		
		}else{
			tatallen += 2;
		}
	}
	if(tatallen>16 || tatallen < 4){
		var form = document.getElementsByClassName("form")[0];
		if(form.children[3]){
			form.removeChild(form.children[3]);
		}
		var p = document.createElement("p");
		var alarm = document.createTextNode("必填，长度为4~16个字符");
		p.appendChild(alarm);
		p.style.color = "#d2d2d2";
		p.style.fontSize = "18px";
		p.style.position = "relative";
		p.style.left = "70px"
		document.getElementsByClassName("form")[0].appendChild(p);
	}else{
		var form = document.getElementsByClassName("form")[0];
		if(form.children[3]){
			form.removeChild(form.children[3]);
		}
		var p = document.createElement("p");
		var alarm = document.createTextNode("名称格式正确");
		p.appendChild(alarm);
		p.style.color = "#84ca74";
		p.style.fontSize = "18px";
		p.style.position = "relative";
		p.style.left = "70px"
		document.getElementById("input1").style.borderColor = "#84ca74";
		document.getElementsByClassName("form")[0].appendChild(p);
	}
}

function btn2(){
	var text = document.getElementById("input2");
	var len = text.value.length;
	var tatallen = 0;
	for(var i = 0;i<len;i++){
		if(text.value.charCodeAt(i) >= 0 &&  text.value.charCodeAt(i) < 128){
			tatallen += 1;		
		}else{
			tatallen += 2;
		}
	}
	if(tatallen>16 || tatallen < 4){
		var form = document.getElementsByClassName("form")[1];
		if(form.children[3]){
			form.removeChild(form.children[3]);
		}
		var p = document.createElement("p");
		var alarm = document.createTextNode("姓名不能为空");
		p.appendChild(alarm);
		p.style.color = "#db0521";
		p.style.fontSize = "18px";
		p.style.position = "relative";
		p.style.left = "70px"
		document.getElementById("input2").style.borderColor = "#db0521";
		document.getElementsByClassName("form")[1].appendChild(p);
	}else{
		var form = document.getElementsByClassName("form")[1];
		if(form.children[3]){
			form.removeChild(form.children[3]);
		}
		var p = document.createElement("p");
		var alarm = document.createTextNode("名称格式正确");
		p.appendChild(alarm);
		p.style.color = "#84ca74";
		p.style.fontSize = "18px";
		p.style.position = "relative";
		p.style.left = "70px"
		document.getElementById("input2").style.borderColor = "#84ca74";
		document.getElementsByClassName("form")[1].appendChild(p);
	}
}

function btn3(){
	var text = document.getElementById("input3");
	var len = text.value.length;
	var tatallen = 0;
	for(var i = 0;i<len;i++){
		if(text.value.charCodeAt(i) >= 0 &&  text.value.charCodeAt(i) < 128){
			tatallen += 1;		
		}else{
			tatallen += 2;
		}
	}
	if(tatallen>16 || tatallen < 4){
		var form = document.getElementsByClassName("form")[2];
		if(form.children[3]){
			form.removeChild(form.children[3]);
		}
		var p = document.createElement("p");
		var alarm = document.createTextNode("名称格式不正确");
		p.appendChild(alarm);
		p.style.color = "#dd0011";
		p.style.fontSize = "18px";
		p.style.position = "relative";
		p.style.left = "70px"
		document.getElementById("input3").style.borderColor = "#dd0011";
		document.getElementsByClassName("form")[2].appendChild(p);
	}else{
		var form = document.getElementsByClassName("form")[2];
		if(form.children[3]){
			form.removeChild(form.children[3]);
		}
		var p = document.createElement("p");
		var alarm = document.createTextNode("名称格式正确");
		p.appendChild(alarm);
		p.style.color = "#84ca74";
		p.style.fontSize = "18px";
		p.style.position = "relative";
		p.style.left = "70px"
		document.getElementById("input3").style.borderColor = "#84ca74";
		document.getElementsByClassName("form")[2].appendChild(p);
	}
}

function init(){
	document.getElementById("btn1").onclick = btn1;
	document.getElementById("btn2").onclick = btn2;
	document.getElementById("btn3").onclick = btn3;

}

init();
