function createNode(num){
	var newItem = document.createElement("span");
	newItem.style.height = num;
	newItem.setAttribute("class","box");
    return newItem;
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
	var queue = document.getElementById("queue");
	var len = queue.childNodes.length;
	if(len >= 60){
		alert("已超过60，无法输入");
	}else if(parseInt(inputValue)>=10 && parseInt(inputValue)<=100){
		var newNode = createNode(inputValue);
		queue.insertBefore(newNode,queue.childNodes[0]);
	}	
}

function rightIn(){
	var inputValue = document.getElementById("inputValue").value;
	var queue = document.getElementById("queue");
	var len = queue.childNodes.length;
	if(len >= 60){
		alert("已超过60，无法输入");
	}else if(parseInt(inputValue)>=10 && parseInt(inputValue)<=100){
		var newNode = createNode(inputValue);
		queue.appendChild(newNode);
	}
}

function sortInput(){
	var queue = document.getElementById("queue");
	var len = queue.childNodes.length;
	for(var j = 0; j < len-1; j++){
		for(var i = 0; i < len-1-j; i++){
			if(parseInt(queue.childNodes[i].style.height) > parseInt(queue.childNodes[i+1].style.height)){
				var node = queue.removeChild(queue.childNodes[i]);
				queue.insertBefore(node,queue.childNodes[i+1]);
			}
		}
	}
}

function init(){
	document.getElementById("left_in_btn").onclick = leftIn;
	document.getElementById("right_in_btn").onclick = rightIn;
	document.getElementById("left_out_btn").onclick = leftOut;
	document.getElementById("right_out_btn").onclick = rightOut;
	document.getElementById("sort_input").onclick = sortInput;
	var queue = document.getElementById("queue");	
	queue.onclick = function(){
		queue.removeChild(event.target);	
	};
}

init();

