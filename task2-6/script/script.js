function createNode(content){
	var newItem = document.createElement("span");
	var textNode = document.createTextNode(content);
	newItem.appendChild(textNode);
	newItem.setAttribute("class","box");
    return newItem ;
}

function rightOut(){
	var queue = document.getElementById("queue");
	var len = document.getElementById("queue").childNodes.length;
	if(len>0){
		queue.removeChild(queue.childNodes[len-1]);
	}
}

function leftOut(){
	var queue = document.getElementById("queue");
	if(queue.childNodes.length > 0){
		queue.removeChild(queue.childNodes[0]);	
	}
}

function leftIn(){
	var inputValue = document.getElementById("inputValue").value;
	if(inputValue.length>0){
		var inputArray = inputValue.split(/\r|,|，|、|\s/);
		var len = inputArray.length;
		var queue = document.getElementById("queue");
		for(var i = 0;i<len;i++){
			var newNode = createNode(inputArray[i]);	
			queue.insertBefore(newNode,queue.childNodes[0]);
		}	
	}
}

function rightIn(){
	var inputValue = document.getElementById("inputValue").value;
	if(inputValue.length>0){
		var inputArray = inputValue.split(/\r|,|，|、|\s/);
		var len = inputArray.length;
		var queue = document.getElementById("queue");
		for(var i = 0;i<len;i++){
			var newNode = createNode(inputArray[i]);
			queue.appendChild(newNode);
		}
	}
}

function inquiry(){
	var queue = document.getElementById("queue").children;
	var len = queue.length;
	var inquiryInput = document.getElementById("inquiry_input").value;
	var reg = eval("/"+inquiryInput+"/g");
	for(var i = 0;i<len;i++){
		var str = queue[i].innerHTML.toString();
		var str = queue[i].innerHTML.replace(reg,"<span style='color:blue;'>" + inquiryInput + "</span>");
		queue[i].innerHTML = str;
	}
	
}

function init(){
	document.getElementById("left_in_btn").onclick = leftIn;
	document.getElementById("right_in_btn").onclick = rightIn;
	document.getElementById("left_out_btn").onclick = leftOut;
	document.getElementById("right_out_btn").onclick = rightOut;
	document.getElementById("inquiry").onclick = inquiry;
	var queue = document.getElementById("queue");	
	queue.onclick = function(){
		queue.removeChild(event.target);	
	};
}

init();

