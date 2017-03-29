window.onload=function(){

	document.getElementById("form").onsubmit=function(e){
		e.preventDefault();
	}

	document.getElementById("register").addEventListener("click",function(event){
		event.preventDefault();

		var nombre = document.getElementById('nombre').value;
		var apellido = document.getElementById('apellido').value;
		var correo = document.getElementById('correo').value;
		var pass = document.getElementById('pass').value;

			if(nombre.length!=0 && apellido.length!=0 && correo.length!=0 && pass.length!=0){

					console.log(new Coder(nombre, apellido, correo, pass));
					localStorage.setItem("nuevaCoder",JSON.stringify(new Coder(nombre, apellido, correo, pass)));
					document.getElementById('formulario').reset();
					window.location="home.html";
			}else{
					var validation = document.getElementById("error-datos");
					validation.innerText = "Todos los campos son obligatorios";
			}

	});

	//funcion constructora del objeto Coder:
	function Coder(nombre, apellido, correo, pass){

		this.nombre = nombre;
		this.apellido = apellido;
		this.correo = correo;
		this.pass = pass;

	};

	//funcion para validar nombre y apellidos:
	var datosCoder = document.getElementsByTagName('input');
	var namesValidate = function(e){
		var codigoTecla = e.keyCode;
			if((codigoTecla>=97 && codigoTecla<=122) || (codigoTecla>=65 && codigoTecla<=90)|| codigoTecla==39 || codigoTecla == 32){
				this.nextElementSibling.nextElementSibling.innerText = "";
				return true;
			}else{
				this.nextElementSibling.nextElementSibling.innerText = "* Solo puede ingresar letras."
				return false;
			}
	}
	datosCoder[0].onkeypress=namesValidate;
	datosCoder[1].onkeypress=namesValidate;

	//Funcion para validar campos vacíos y capitalizar datos:
	var completarForm = function(e){

		if(this.value.trim().length== 0) { //Si input está vacío.
			 this.value ="";
			 this.nextElementSibling.nextElementSibling.innerText= "* Este campo es obligatorio.";
		} else {
			this.nextElementSibling.nextElementSibling.innerText= "";
		}

		if(this.getAttribute("type")== "text") { //Si es un input tipo texto: capitalizar.
			var result = "";
			var names = this.value.split(" ");
				for(var i = 0 ; i < names.length ; i++) {
					result += names[i][0].toUpperCase() + names[i].substring(1).toLowerCase() + " ";
				}
				this.value = result;
		}

	}
	for (var inputs in datosCoder) { //Ejecutar la funcion completar datos por c/input:
	datosCoder[inputs].onblur=completarForm;
	}

	//Funcion para validar correo:
	var validateEmail = function(e) {
	    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{1,})+$/;
	    if ( !expr.test(this.value) ) {
	  		this.nextElementSibling.nextElementSibling.innerText= "* Ingrese un correo válido.";
			} else {
				this.nextElementSibling.nextElementSibling.innerText= "";
			}
	}
	datosCoder[2].onkeypress=validateEmail;

	//Funcion para validar password:
	var passNumeric = function(e){
		var codigoTecla = e.keyCode;
		var longitud = this.value.length;

		if(codigoTecla>=48 && codigoTecla<=57 && longitud <=19){
			return true;
		}else{
			return false;
		}
		if(longitud < 5){
			this.nextElementSibling.nextElementSibling.innerText= "* Ingresar solo nùmeros (min. 6 dígitos y max. 20).";
		}

	}
	datosCoder[3].onkeypress=passNumeric;


};
