function createNode(num){
	var newItem = document.createElement("span");
	var textNode = document.createTextNode(num);
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
	if(inputValue.length > 0){
		var newNode = createNode(inputValue);
		var queue = document.getElementById("queue");
		queue.insertBefore(newNode,queue.childNodes[0]);
	}	
}

function rightIn(){
	var inputValue = document.getElementById("inputValue").value;
	if(inputValue.length > 0 ){
		var newNode = createNode(inputValue);
		document.getElementById("queue").appendChild(newNode);
	}
}

function init(){
	document.getElementById("left_in_btn").onclick = leftIn;
	document.getElementById("right_in_btn").onclick = rightIn;
	document.getElementById("left_out_btn").onclick = leftOut;
	document.getElementById("right_out_btn").onclick = rightOut;
	var queue = document.getElementById("queue");	
	queue.onclick = function(){
		queue.removeChild(event.target);	
	};
}

init();

