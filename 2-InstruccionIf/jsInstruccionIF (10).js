function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;

	nota = Math.floor(Math.random() * 10) + 1;

	if(nota > 8){
		alert("EXCELENTE");
	}else if(nota > 4){
		alert("APROBO");
	}else{
		alert("Vamos, la proxima se puede.");
	}


}//FIN DE LA FUNCIÓN