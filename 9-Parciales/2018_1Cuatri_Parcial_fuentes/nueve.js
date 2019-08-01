function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var respuesta;

    var contadorTempPares = 0;
    var pesoMaximo = 0;
    var pesoMinimo = 101;
    var marcaPesoMaximo;
    var contadorTempCero = 0;
    var contador = 0;
    var pesoTotal = 0;
    var promedio;

    do{
        marca = prompt("Ingrese la marca");

        peso = prompt("Ingrese el peso de 1 a 100");
        peso = parseInt(peso);
        
        while(isNaN(peso) || peso < 1 || peso > 100  ){
            peso = prompt("ERROR Ingrese el peso de 1 a 100");
            peso = parseInt(peso);
        }

        temperatura = prompt("Ingrese la temperatura de -30 a 30");
        temperatura = parseInt(temperatura);

        while(isNaN(temperatura) || temperatura < -30 || temperatura > 30  ){
            temperatura = prompt("ERROR Ingrese la temperatura de -30 a 30");
            temperatura = parseInt(temperatura);
        }

        if(temperatura%2 == 0){
            contadorTempPares++;
        }

        if(peso > pesoMaximo){
            pesoMaximo = peso;
            marcaPesoMaximo = marca;
        }

        if(temperatura < 0){
            contadorTempCero++;
        }

        contador++;
        pesoTotal += peso;

        if(peso < pesoMinimo){
            pesoMinimo = peso;
        }

        respuesta = prompt("Ingrese n para terminar, s para continuar");

        while( respuesta != "n" && respuesta != "s" ){
            respuesta = prompt("ERROR Ingrese n para terminar, s para continuar");
        }

    }while(respuesta != "n");

    promedio = pesoTotal / contador;

    document.write("Temperaturas pares " + contadorTempPares + "<br>");
    document.write("Marca producto mas pesado " + marcaPesoMaximo + "<br>");
    document.write("Productos a menos de cero grados " + contadorTempCero + "<br>");
    document.write("Promedio de pesos " + promedio + "<br>");
    document.write("Peso maximo " + pesoMaximo + " y peso minimo" + pesoMinimo + "<br>");





}