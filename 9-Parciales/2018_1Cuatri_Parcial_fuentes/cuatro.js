function mostrar()
{
    var numeroUno;
    var numeroDos;
    var resultado;

    numeroUno = prompt("Ingrese el primer numero ");
    numeroDos = prompt("Ingrese el segundo numero ");

    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);

    //si son iguales concatenarlos
    if(numeroUno == numeroDos){
        resultado = "" + numeroUno + numeroDos;
    }else if(numeroUno > numeroDos){//si primer numero mayor que segundo numero
        resultado = numeroUno - numeroDos;
    }else{//si el segundo en mayor o igual
        resultado = numeroUno + numeroDos;
        if(resultado > 10){//si la suma es mayor que 10
            resultado = "la suma es " + resultado + " y supero el 10";
        }
    }

    alert(resultado);
}
