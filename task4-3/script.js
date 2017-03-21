var container = document.getElementById('container');
var clientMenu = document.getElementById('clientMenu');

function menuEvent(event){
	if(event.clientX + 200 > screen.availWidth){
		clientMenu.style.left = event.clientX - 200 - 10 + 'px';
	}else{
		clientMenu.style.left = event.clientX - 10 +'px';
	}
	if(event.clentY + 80 > screen.availHeight){
		clientMenu.style.top = event.clientY - 10 - 80 + 'px';
	}else{
		clientMenu.style.top = event.clientY - 10 + 'px';
	}
	clientMenu.style.visibility = 'visible';
	return false;
}

function hiddenMenu(){
	clientMenu.style.visibility = 'hidden';
}

function init(){
	container.oncontextmenu = menuEvent;
	container.onclick = hiddenMenu;
}

init();
