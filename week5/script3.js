function click(){

	var fname = document.getElementById("name").value;//console.log(fname);
	var fsurname = document.getElementById("surname").value;
	var faculty = document.getElementById("faculty").value;

	if (fname=="" && fsurname==""){
		document.getElementById("surname").style.border = "2px solid red";
		document.getElementById("name").style.border = "2px solid red";
		return;}
		document.getElementById("name").style.border = "";
		document.getElementById("surname").style.border = "";


	if(fname==""){
		document.getElementById("name").style.border = "2px solid red";
		return;
	}
	document.getElementById("name").style.border = "";

	if(fsurname==""){
		document.getElementById("surname").style.border = "2px solid red";
		return;
	}
	document.getElementById("surname").style.border = "";

	if(faculty==-1){
		return;
	}
	document.getElementById("name").value="";
	document.getElementById("surname").value="";
	document.getElementById("faculty").value="-1";
	var z = document.createElement('tr');
	var x = document.createElement('td');
	var y = document.createElement('td');
	var v = document.createElement('td');
	x.innerHTML = fname;
	y.innerHTML = fsurname;
	v.innerHTML = faculty;
	z.appendChild(x);
	z.appendChild(y);
	z.appendChild(v);
	var table = document.getElementById('students');
	table.appendChild(z);
	}
document.getElementById("addStudent").addEventListener('click',click);
