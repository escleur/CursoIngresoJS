function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero=0;


	while(contador < 5){
		
		numero = prompt("Ingrese numero " + (contador + 1));
		numero = parseInt(numero);

		while(isNaN(numero)){
			numero = prompt("Ingrese numero " + (contador + 1));
			numero = parseInt(numero);
		}

		acumulador += numero;
		contador++;
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN