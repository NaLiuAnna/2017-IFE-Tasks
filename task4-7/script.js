document.getElementById('btn').onclick = nextImg;
var rotate;
var flag;

function nextImg(){
    var imageTeam = document.getElementsByTagName('img');
    for(var i = 0; i < imageTeam.length; i++){
        var rotateY1 = imageTeam[i].style.transform.match(/\d+/);
        var rotateY2;
        if(parseInt(rotateY1) - 45 == 0){
	    flag = i;
            imageTeam[i].width = "500";
            imageTeam[i].height = "500";
            imageTeam[i].style.top = "0px";
            imageTeam[i].style.left = "0px";        
        }else{
            imageTeam[i].width = "100";
            imageTeam[i].height = "100";
            imageTeam[i].style.top = "150px";
            imageTeam[i].style.left = "150px";
        }
        rotateY2 = (parseInt(rotateY1) - 45)%360;
        if(i==0){
           rotate = rotateY2;
        }
        var player = imageTeam[i].animate([
            {transform:"rotateY("+rotateY1+"deg) translateZ(240px)"},
            {transform:"rotateY("+rotateY2+"deg) translateZ(240px)"}
        ],5000);
    }
    player.addEventListener('finish', function() {
        for(var j = 0;j<imageTeam.length;j++){
            imageTeam[j].style.transform = "rotateY("+rotate+"deg) translateZ(240px)";
            console.log(imageTeam[j].style.transform);
            rotate = (rotate+45)%360; 
        }
    });
}

