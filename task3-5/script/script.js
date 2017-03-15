function execution(){
	var order = document.getElementById("input_order").value;
	var box = document.getElementById("box");
	var boxHead = document.getElementById("box_head");
	var boxBody = document.getElementById("box_body");
	var headTop = boxHead.getBoundingClientRect().top;
	var bodyTop = boxBody.getBoundingClientRect().top;
	var headLeft = boxHead.getBoundingClientRect().left;
	var bodyLeft = boxBody.getBoundingClientRect().left;
	if(order == "MOV BOT"){
		var top = parseInt(box.style.top) + 40;
		if(top < 400){
			box.style.transform = "rotate(90deg)";
			var player = box.animate([
				{transform:'rotate(90deg)'},
				{transform:'rotate(180deg)'}
			],500);
			player.addEventListener('finish',function(){
				box.style.transform = 'rotate(180deg)';
			});
			var id = setInterval(moveBack,20);
			function moveBack(){
				if(parseInt(box.style.top) == top){
					clearInterval(id);	
				}else{
					box.style.top = parseInt(box.style.top) + 1 + "px";
				}		
			}
		}
	}
	if(order == "MOV RIG"){
		var left = parseInt(box.style.left) + 41;
		if(left<950){
			var player = box.animate([
				{transform:'rotate(0deg)'},
				{transform:'rotate(90deg)'}
			],500);
			player.addEventListener('finish',function(){
				box.style.transform = 'rotate(90deg)';
			});
			var id = setInterval(moveRight,20);
			function moveRight(){
				if(parseInt(box.style.left) == left){
					clearInterval(id);					
				}else{
					box.style.left = parseInt(box.style.left) + 1 + "px";			
				}
			}
		}
	}
	if(order == "MOV TOP"){
		var top = parseInt(box.style.top) -40;
		if(top > 0){
			box.style.transform = "rotate(90deg)";
			var player = box.animate([
				{transform:'rotate(90deg)'},
				{transform:'rotate(0deg)'}
			],500);
			player.addEventListener('finish',function(){
				box.style.transform = "rotate(0deg)";
			});
			var id = setInterval(moveForward,20);
			function moveForward(){
				if(parseInt(box.style.top) == top ){
					clearInterval(id);		
				}else{
					box.style.top = parseInt(box.style.top) - 1 + "px";
				}
			}
		}
	}
	if(order == "MOV LEF"){
		var left = parseInt(box.style.left) -41;
		if(left > 500){
			var player = box.animate([
				{transform:'rotate(0deg)'},
				{transform:'rotate(-90deg)'}
			],500);
			player.addEventListener('finish',function(){
				box.style.transform = 'rotate(-90deg)';
			});
			var id = setInterval(moveLeft,20);
			function moveLeft(){
				if(parseInt(box.style.left) == left ){
					clearInterval(id);		
				}else{
					box.style.left = parseInt(box.style.left) - 1 + "px";
				}
			}
		}
	}
	if(order == "TRA BOT"){
		var top = parseInt(box.style.top) + 40;
		if(top < 400){
			var id = setInterval(moveBack,20);
			function moveBack(){
				if(parseInt(box.style.top) == top){
					clearInterval(id);	
				}else{
					box.style.top = parseInt(box.style.top) + 1 + "px";
				}		
			}
		}
	}
	if(order == "TRA RIG"){
		var left = parseInt(box.style.left) + 41;
		if(left<950){
			var id = setInterval(moveRight,20);
			function moveRight(){
				if(parseInt(box.style.left) == left){
					clearInterval(id);					
				}else{
					box.style.left = parseInt(box.style.left) + 1 + "px";			
				}
			}
		}
	}
	if(order == "TRA TOP"){
		var top = parseInt(box.style.top) -40;
		if(top > 0){
			var id = setInterval(moveForward,20);
			function moveForward(){
				if(parseInt(box.style.top) == top ){
					clearInterval(id);		
				}else{
					box.style.top = parseInt(box.style.top) - 1 + "px";
				}
			}
		}
	}
	if(order == "TRA LEF"){
		var left = parseInt(box.style.left) -40;
		if(left > 500){
			var id = setInterval(moveLeft,20);
			function moveLeft(){
				if(parseInt(box.style.left) == left ){
					clearInterval(id);		
				}else{
					box.style.left = parseInt(box.style.left) - 1 + "px";
				}
			}
		}
	}
	if(order == "GO"){
		if(headTop < bodyTop){
			var top = parseInt(box.style.top) -40;
			if(top > 0){
			    var id = setInterval(moveForward,20);
				function moveForward(){
					if(parseInt(box.style.top) == top ){
						clearInterval(id);		
					}else{
						box.style.top = parseInt(box.style.top) - 1 + "px";
					}
				}
			}
		}else if(headTop > bodyTop){
			var top = parseInt(box.style.top) + 40;
			if(top < 400){
				var id = setInterval(moveBack,20);
				function moveBack(){
					if(parseInt(box.style.top) == top){
						clearInterval(id);	
					}else{
						box.style.top = parseInt(box.style.top) + 1 + "px";
					}		
				}
			}
		}else if(headLeft > bodyLeft){
			var left = parseInt(box.style.left) + 41;
			if(left<950){
				var id = setInterval(moveRight,20);
				function moveRight(){
					if(parseInt(box.style.left) == left){
						clearInterval(id);					
					}else{
						box.style.left = parseInt(box.style.left) + 1 + "px";			
					}
				}
			}
		}else{
			var left = parseInt(box.style.left) - 41;
			if(left > 500){
				var id = setInterval(moveLeft,20);
				function moveLeft(){
					if(parseInt(box.style.left) == left){
						clearInterval(id);				
					}else{
						box.style.left = parseInt(box.style.left) - 1 + "px";
					}
				}
			}
		}
	}
	if(order == "TUN LEF"){
		if(headTop < bodyTop){
			var player = box.animate([
				{transform:'rotate(0deg)'},
				{transform:'rotate(-90deg)'}
			],500);
			player.addEventListener('finish',function(){
				box.style.transform = 'rotate(-90deg)';
			});
		}else if(headTop > bodyTop){
			box.style.transform = 'rotate(-180deg)';
			var player = box.animate([
				{transform:'rotate(-180deg)'},
				{transform:'rotate(-270deg)'}
			],500);
			player.addEventListener('finish',function(){
				box.style.transform = 'rotate(-270deg)';
			});
		}else if(headLeft < bodyLeft){
			box.style.transform = "rotate(-90deg)";
			var player = box.animate([
				{transform:'rotate(-90deg)'},
				{transform:'rotate(-180deg)'}
			],500);
			player.addEventListener('finish',function(){
				box.style.transform = 'rotate(-180deg)';
			});
		}else{
			box.style.transform = "rotate(90deg)";
			var player = box.animate([
				{transform:'rotate(90deg)'},
				{transform:'rotate(0deg)'}
			],500);
			player.addEventListener('finish',function(){
				box.style.transform = "rotate(0deg)";
			});
		}
	}
	if(order == "TUN RIG"){
		if(headTop < bodyTop){
			var player = box.animate([
				{transform:'rotate(0deg)'},
				{transform:'rotate(90deg)'}
			],500);
			player.addEventListener('finish',function(){
				box.style.transform = 'rotate(90deg)';
			});
		}else if(headTop > bodyTop){
			box.style.transform = 'rotate(180deg)';
			var player = box.animate([
				{transform:'rotate(180deg)'},
				{transform:'rotate(270deg)'}
			],500);
			player.addEventListener('finish',function(){
				box.style.transform = 'rotate(270deg)';
			});	
		}else if(headLeft < bodyLeft){
			box.style.transform = 'rotate(270deg)';
			var player = box.animate([
				{transform:'rotate(270deg)'},
				{transform:'rotate(360deg)'}
			],500);
			player.addEventListener('finish',function(){
				box.style.transform = 'rotate(360deg)';
			});	
		}else{
			box.style.transform = "rotate(90deg)";
			var player = box.animate([
				{transform:'rotate(90deg)'},
				{transform:'rotate(180deg)'}
			],500);
			player.addEventListener('finish',function(){
				box.style.transform = 'rotate(180deg)';
			});
		}
	}
	if(order == "TUN BAC"){
		if(headTop < bodyTop){
			box.style.transform = "rotate(0deg)";
			var player = box.animate([
				{transform:'rotate(0deg)'},
				{transform:'rotate(180deg)'}
			],1000);
			player.addEventListener('finish',function(){
				box.style.transform = 'rotate(180deg)';
			});
		}else if(headTop > bodyTop){
			box.style.transform = 'rotate(180deg)';
			var player = box.animate([
				{transform:'rotate(180deg)'},
				{transform:'rotate(0deg)'}
			],1000);
			player.addEventListener('finish',function(){
				box.style.transform = 'rotate(0deg)';
			});	
		}else if(headLeft < bodyLeft){
			box.style.transform = 'rotate(-90deg)';
			var player = box.animate([
				{transform:'rotate(-90deg)'},
				{transform:'rotate(-270deg)'}
			],1000);
			player.addEventListener('finish',function(){
				box.style.transform = 'rotate(-270deg)';
			});					
		}else{
			box.style.transform = 'rotate(90deg)';
			var player = box.animate([
				{transform:'rotate(90deg)'},
				{transform:'rotate(270deg)'}
			],1000);
			player.addEventListener('finish',function(){
				box.style.transform = 'rotate(270deg)';
			});	
		}
	}
}

function getOrder(){
	document.getElementById("input_order").value = this.textContent;	
}

function init(){
	document.getElementById("btn").onclick = execution;
	var orderList = document.getElementById("order_list").children;
	var len = orderList.length;
	for(var i = 0;i<len;i++){
		orderList[i].addEventListener("click",getOrder);
	}
	
}

init();
