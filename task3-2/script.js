function checkName(){
	var name = document.getElementById("nameInput");
	name.parentNode.children[2].style.display = "none";
	name.parentNode.children[3].style.display = "none";
	name.parentNode.children[4].style.display = "none";
	name.parentNode.children[5].style.display = "none";
	var len = name.value.length;
	var reslen = 0;
	for(var i = 0 ; i < len; i++){
		if(name.value.charCodeAt(i) >= 0 && name.value.charCodeAt(i) < 128){
			reslen += 1;
		}else{
			reslen += 2;
		}
	}
	if(reslen == 0){
		name.parentNode.children[4].style.display = "block";
		name.parentNode.children[1].style.border = "2px solid #db020d";
		return false;
	}else if(reslen < 4 || reslen > 16){
		name.parentNode.children[5].style.display = "block";
		name.parentNode.children[1].style.border = "2px solid #db020d";
		return false;
	}else{
		name.parentNode.children[3].style.display = "block";
		name.parentNode.children[1].style.border = "2px solid #59b840";
		return true;
	}

}

function checkPassword(){
	var password = document.getElementById("passwordInput");
	password.parentNode.children[2].style.display = "none";
	password.parentNode.children[3].style.display = "none";
	password.parentNode.children[4].style.display = "none";
	password.parentNode.children[5].style.display = "none";
	var len = password.value.length;
	var reslen = 0;
	for(var i = 0;i<len;i++){
		var ascii = password.value.charCodeAt(i);
		if(ascii>=42 && ascii<=57){
			reslen++;		
		}else if(ascii>=65 && ascii<=90){
			reslen++;
		}else if(ascii>=97 && ascii<=122){
			reslen++;
		}
	}
	if(reslen == 0){
		password.parentNode.children[4].style.display = "block";
		password.parentNode.children[1].style.border = "2px solid #db020d";
		return false;
	}else if(reslen>=8 && reslen <=20){
		password.parentNode.children[3].style.display = "block";
		password.parentNode.children[1].style.border = "2px solid #59b840";
		return true;	
	}else{
		password.parentNode.children[5].style.display = "block";
		password.parentNode.children[1].style.border = "2px solid #db020d";
		return false;		
	}
}

function checkTwice(){
	var twice = document.getElementById("twiceInput");
	twice.parentNode.children[2].style.display = "none";
	twice.parentNode.children[3].style.display = "none";
	twice.parentNode.children[4].style.display = "none";
	twice.parentNode.children[5].style.display = "none";
	var password1 = document.getElementById("passwordInput").value;
	var password2 = document.getElementById("twiceInput").value;
	if(password2.length == 0){
		twice.parentNode.children[4].style.display = "block";
		twice.parentNode.children[1].style.border = "2px solid #db020d";
		return false;
	}else if(password1 == password2){
		twice.parentNode.children[3].style.display = "block";
		twice.parentNode.children[1].style.border = "2px solid #59b840";
		return true;
	}else{
		twice.parentNode.children[5].style.display = "block";
		twice.parentNode.children[1].style.border = "2px solid #db020d";	
		return false;
	}
}

function checkEmail(){
	var email = document.getElementById("emialInput");
	email.parentNode.children[2].style.display = "none";
	email.parentNode.children[3].style.display = "none";
	email.parentNode.children[4].style.display = "none";
	email.parentNode.children[5].style.display = "none";
	var inputEmail = email.value;
	if(inputEmail.match(/.+@.+/)){
		email.parentNode.children[3].style.display = "block";
		email.parentNode.children[1].style.border = "2px solid #59b840";
		return true;
	}else if(inputEmail.length == 0){
		email.parentNode.children[4].style.display = "block";
		email.parentNode.children[1].style.border = "2px solid #db020d";
		return false;
	}else{
		email.parentNode.children[5].style.display = "block";
		email.parentNode.children[1].style.border = "2px solid #db020d";
		return false;
	}
}

function checkPhone(){
	var phone = document.getElementById("telInput");
	phone.parentNode.children[2].style.display = "none";
	phone.parentNode.children[3].style.display = "none";
	phone.parentNode.children[4].style.display = "none";
	phone.parentNode.children[5].style.display = "none";
	var inputPhone = phone.value;
	if(inputPhone.match(/1[34578]\d{9}/)){
		phone.parentNode.children[3].style.display = "block";
		phone.parentNode.children[1].style.border = "2px solid #59b840";
		return true;
	}else if(inputPhone == ""){
		phone.parentNode.children[4].style.display = "block";
		phone.parentNode.children[1].style.border = "2px solid #db020d";
		return false;
	}else{
		phone.parentNode.children[5].style.display = "block";
		phone.parentNode.children[1].style.border = "2px solid #db020d";
		return false;	
	}
}

function checkAll(){
	var flagN = checkName();
	var flagp = checkPassword();
	var flagT = checkTwice();
	var flagE = checkEmail();
	var flagP = checkPhone();
	if(flagN && flagP && flagT && flagE && flagP){
		alert("提交成功");
	}else{
		alert("提交失败");
	}
}

function getFocus(){
	this.parentNode.children[2].style.display = "block";
	this.parentNode.children[3].style.display = "none";
	this.parentNode.children[4].style.display = "none";
	this.parentNode.children[5].style.display = "none";
}

function init(){
	document.getElementById("nameInput").addEventListener("focus",getFocus);
	document.getElementById("nameInput").addEventListener("blur",checkName);
	document.getElementById("passwordInput").addEventListener("focus",getFocus);
	document.getElementById("passwordInput").addEventListener("blur",checkPassword);
	document.getElementById("twiceInput").addEventListener("focus",getFocus);
	document.getElementById("twiceInput").addEventListener("blur",checkTwice);
	document.getElementById("emialInput").addEventListener("focus",getFocus);
	document.getElementById("emialInput").addEventListener("blur",checkEmail);
	document.getElementById("telInput").addEventListener("focus",getFocus);
	document.getElementById("telInput").addEventListener("blur",checkPhone);
	document.getElementById("btn").addEventListener("click",checkAll);
}

init();
