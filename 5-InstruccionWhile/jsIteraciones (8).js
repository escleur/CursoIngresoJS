function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero=0;
	var respuesta='si';

	while(respuesta == "si"){

		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		while(isNaN(numero)){
			numero = prompt("Ingrese un numero");
			numero = parseInt(numero);
		}

		if(numero >= 0){
			positivo += numero;

		}else{
			negativo *= numero;
		}

		respuesta = prompt("si para continuar");
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN