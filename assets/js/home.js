
var nombre = document.getElementById('nombre-coder');
var apellido = document.getElementById('apellido-coder');
var correo = document.getElementById('correo-coder');
var pass = document.getElementById('pass-coder');
//devolviendo datos del objet en localstorage:
var objetoCoder = JSON.parse(localStorage.getItem("nuevaCoder"));

nombre.innerText=objetoCoder.nombre;
apellido.innerText=objetoCoder.apellido;
correo.innerText=objetoCoder.correo;
pass.innerText=objetoCoder.pass;

function Coder(nombre, apellido, correo, pass){

	this.nombre = nombre;
	this.apellido = apellido;
	this.correo = correo;
	this.pass = pass;

};

document.getElementsByTagName("button")[0].addEventListener("click",function(){
		window.location="edit.html";
});
