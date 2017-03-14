function execution(){
	var order = document.getElementById("input_order").value;
	var box = document.getElementById("box");
	var boxHead = document.getElementById("box_head");
	var boxBody = document.getElementById("box_body");
	if(order == "GO"){
		var headTop = boxHead.getBoundingClientRect().top;
		var bodyTop = boxBody.getBoundingClientRect().top;
		var headLeft = boxHead.getBoundingClientRect().left;
		var bodyLeft = boxBody.getBoundingClientRect().left;
		if(headTop < bodyTop){
			var top = parseInt(box.style.top) -40;
			if(top > 0){
				box.style.top = top + "px";
			}
		}else if(headTop > bodyTop){
			var top = parseInt(box.style.top) + 40;
			if(top < 400){
				box.style.top = top + "px";
			}
		}else if(headLeft > bodyLeft){
			var left = parseInt(box.style.left) + 41;
			if(left<950){
				box.style.left = left + "px";	
			}
		}else{
			var left = parseInt(box.style.left) - 41;
			if(left > 500){
				box.style.left = left + "px";	
			}
		}
	}
	if(order == "TUN LEF"){
		box.style.transform = "rotate(270deg)";
	}
	if(order == "TUN RIG"){
		box.style.transform = "rotate(90deg)";
	}	if(order == "TUN BAC"){
		box.style.transform = "rotate(180deg)";
	}
}

function init(){
	document.getElementById("btn").onclick = execution;
}

init();
