function mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var respuesta='si';
	var maximo, minimo;

	while(respuesta!='no')
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		while(isNaN(numero)){
			numero = prompt("Ingrese un numero");
			numero = parseInt(numero);
		}
		contador++;

		if(contador == 1){
			maximo = numero;
			minimo = numero;
		}else{
			if(numero > maximo){
				maximo = numero;
			}
			if(numero < minimo){
				minimo = numero;
			}

		}
		respuesta = prompt("Escriba no para terminar");
	}

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;


}//FIN DE LA FUNCIÓN