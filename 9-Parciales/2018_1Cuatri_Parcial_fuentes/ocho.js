/*Bienvenidos. 
Realizar el algoritmo que permita iterar el ingreso de dos datos,
 una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e
  informar al terminar el ingreso por document.write: 
a) La cantidad de números pares. 
b) La cantidad de números impares. 
c) La cantidad de ceros. 
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos. 
f) El número y la letra del máximo y el mínimo.
*/

var respuesta;

function mostrar()
{

    var letra;
    var numero;
    do{

        letra = prompt("Ingrese una letra");
        while(letra.length != 1 || !isNaN(letra)){
            letra = prompt("ERROR Ingrese una letra");
        }
        numero = prompt("Ingrese un numero entre -100 y 100");
        numero = parseInt(numero);
        while(isNaN(numero) || numero < -100 || numero > 100){
            numero = prompt("ERROR Ingrese un numero entre -100 y 100");
        }


        respuesta = prompt("Ingrese s para continuar y n para salir")
        while(respuesta != "s" && respuesta != "n"){
            respuesta = prompt("Error Ingrese s para continuar y n para salir")
        }
    }while(respuesta == "s");
}
