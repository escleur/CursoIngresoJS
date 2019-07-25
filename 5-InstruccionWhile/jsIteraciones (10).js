function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var numero;
	var respuesta="si";
	var sumaNegativos = 0;
	var sumaPositivos = 0;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;


	while(respuesta!="no")
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		while(isNaN(numero)){
			numero = prompt("Ingrese un numero");
			numero = parseInt(numero);
		}

		if(numero > 0){
			sumaPositivos += numero;
			contadorPositivos++;
		}else if(numero < 0){
			sumaNegativos += numero;
			contadorNegativos++;
		}else{
			contadorCeros++;
		}

		if(numero%2 == 0){
			contadorPares++;
		}

		respuesta = prompt("Ingrese no para terminar");
	
	}

	document.write("1-Suma negativos " + sumaNegativos);
	document.write("<br>2-Suma positivos " + sumaPositivos);
	document.write("<br>3-Cantidad positivos " + contadorPositivos);
	document.write("<br>4-Cantidad negativos " + contadorNegativos);
	document.write("<br>5-Cantidad ceros " + contadorCeros);
	document.write("<br>6-Cantidad pares " + contadorPares);
	document.write("<br>7-Promedio positivos " + (sumaPositivos / contadorPositivos));
	document.write("<br>8-Promedio negativos " + (sumaNegativos / contadorNegativos));
	document.write("<br>0-Diferencia entre positivos y negativos " + (sumaPositivos - sumaNegativos));



}//FIN DE LA FUNCIÓN