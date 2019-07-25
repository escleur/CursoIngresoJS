function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	var numero=0;


	while(respuesta == "si"){
		
		numero = prompt("Ingrese numero " + (contador + 1));
		numero = parseInt(numero);

		while(isNaN(numero)){
			numero = prompt("Ingrese numero " + (contador + 1));
			numero = parseInt(numero);
		}

		acumulador += numero;
		contador++;

		respuesta = prompt("Ingrese si para ingresar otro numero " );

	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN