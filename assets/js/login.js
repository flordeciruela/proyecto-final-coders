//
var objetoCoder = JSON.parse(localStorage.getItem("nuevaCoder"));
document.getElementById('login').addEventListener("click",function(){

	var inputEmail = document.getElementById('email-validate');
	var inputPass = document.getElementById('pass-validate');

	if(inputEmail.value == objetoCoder.correo && inputPass.value == objetoCoder.pass) {
		window.location="home.html";
	} else {
		alert("Datos incorrectos, intente nuevamente o registrese.");
		inputEmail.readOnly = true;
		inputPass.readOnly = true;
	}

});
