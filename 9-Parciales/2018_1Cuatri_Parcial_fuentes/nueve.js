function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var respuesta;

    do{
        marca = prompt("Ingrese la marca");
        do{
            peso = prompt("Ingrese el peso");
            peso = parseInt(peso);
        }while(isNaN(peso) || peso < 1 || peso > 100  )
        do{
            temperatura = prompt("Ingrese la temperatura");
            temperatura = parseInt(temperatura);
        }while(isNaN(temperatura) || temperatura < -30 || temperatura > 30  )


        do{
            temperatura = prompt("Ingrese la temperatura");
            temperatura = parseInt(temperatura);
        }while( respuesta != "n" && respuesta != "s" )

    }

}
