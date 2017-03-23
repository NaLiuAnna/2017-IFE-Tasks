function checkTel(){
	var telRule = /\b1[3458]\d{9}\b|\b17[^49]\d{9}\b/;
	var inputTel = document.getElementById('tel').value;
	var telResult = telRule.test(inputTel);
	document.getElementById('TelResult').innerHTML = telResult;

}

function checkWord(){
	var inputString = document.getElementById('sentence').value;
	var index = inputString.split(' ');
	var flag = false;
	for(var i = 0;i<index.length-1;i++){
		var sub1 = index[i];
		var sub2 = index[i+1];
		if(sub1 == sub2){
			flag = true;
		}
	}
	document.getElementById('WordResult').innerHTML = flag;	
}

function init(){
	document.getElementById('checkTelBtn').onclick = checkTel;
	document.getElementById('checkWordBtn').onclick = checkWord;
}

init();
