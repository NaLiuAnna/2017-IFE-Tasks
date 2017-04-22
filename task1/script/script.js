var addImg = document.getElementsByClassName("add_img");
var addedImg = document.getElementById("added_img");
var submit = document.getElementById("submit");


function uploadFile(){  //选择文件
    this.type = "file";
}

function uploadImg(){
    var file = addImg[0].files[0];
    var image = this.nextElementSibling;
    var reader = new FileReader();

    if(/image\/\w+/.test(file.type)){
        reader.readAsDataURL(file);        
    }

    reader.addEventListener("load",function(e){  
        image.src = this.result;
        image.style.display = "block";
        addImg[0].style.display= "none";      
    },false);

}

function submitFile(){
    var typeIndex = document.getElementById("feedback_type").selectedIndex;
    var type =  document.getElementById("feedback_type").options[typeIndex].value;
    var content = document.getElementById("issue_desc").value;
    document.body.innerHTML= type+"    "+content;
}

function init(){
    for(var i = 0;i<addImg.length;i++){
        addImg[i].addEventListener("touchstart",uploadFile,false);
        addImg[i].addEventListener("change",uploadImg,false);
    }

    document.getElementById("submit").addEventListener("touchstart",submitFile,false);
}

init();
