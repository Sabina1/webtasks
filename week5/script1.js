function click(){
	var a = document.querySelector("#s11").value;
	var b = document.querySelector("#s12").value;
	var c = document.querySelector("#s13").value;
	var d = document.querySelector("#s21").value;
	var e = document.querySelector("#s22").value;
	var f = document.querySelector("#s23").value;
	var g = document.querySelector("#s31").value;
	var h = document.querySelector("#s32").value;
	var i = document.querySelector("#s33").value;
	var ltor = a*e*i+b*f*g+c*d*h;
	var rtol = c*e*g+f*h*a+i*d*b;
	var result = ltor - rtol;
	console.log(g);
	document.querySelector("#result").innerHTML = result;
}
document.querySelector("#determinant").addEventListener('click',click);
