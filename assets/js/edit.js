window.onload=function(){
	document.getElementsByTagName("form")[0].onsubmit=function(e){
		e.preventDefault();
	}

	var objetoCoder = JSON.parse(localStorage.getItem("nuevaCoder"));
	var editDatos = document.getElementsByClassName("dato");
	editDatos[0].value = objetoCoder.nombre;
	editDatos[1].value = objetoCoder.apellido;
	editDatos[2].value = objetoCoder.correo;
	editDatos[3].value = objetoCoder.password;

	document.getElementsByTagName("button")[0].addEventListener("click",function(){
		if(editDatos[0].length!=0 && editDatos[1].length!=0 && editDatos[2].length!=0 && editDatos[3].length!=0) {

			objetoCoder.nombre=editDatos[0].value;
			objetoCoder.apellido= editDatos[1].value
			objetoCoder.correo = editDatos[2].value;
			objetoCoder.password = editDatos[3].value;

			localStorage.setItem("nuevaCoder",JSON.stringify(objetoCoder));
			window.location="home.html"
		}else{
			alert("Completar todos los campos.");
		}

	});


};
