function studentForm(){
	document.getElementById("for_student").style.display = "block";
	document.getElementById("for_non_student").style.display = "none";
}

function nonStudentForm(){
	document.getElementById("for_non_student").style.display = "block";
	document.getElementById("for_student").style.display = "none";
}

function showSchool(){
	var schoolName = [
	["北京邮电大学","北京大学","清华大学","北京航空航天大学","北京交通大学","北京理工大学","北京科技大学"],
	["南开大学","天津大学","天津科技大学","天津工业大学","中国民航大学","天津理工大学","天津农学院"],
	["复旦大学","同济大学","上海交通大学","华东理工大学","上海理工大学","上海海事大学","东华大学"],
	]

	var province = document.getElementById("province");
	var school = document.getElementById("school");
	var proSchool = schoolName[province.selectedIndex-1];
	school.length=1;
	for(var i = 0;i<proSchool.length;i++){
		school[i+1] = new Option(proSchool[i],proSchool[i]);	
	}
}

function init(){
	document.getElementById("student").onclick = studentForm ;
	document.getElementById("non_student").onclick = nonStudentForm;
	document.getElementById("province").onchange = showSchool ;
}

init();
