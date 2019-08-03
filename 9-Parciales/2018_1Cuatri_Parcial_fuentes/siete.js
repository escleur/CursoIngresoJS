/*Bienvenidos. 
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) ,
 el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/

function mostrar()
{
    var nota;
    var sexo;
    var sumaTotal = 0;
    var minimoNota;
    var minimoSexo;
    var varonesMayor5 = 0;
    var promedio;

    for(var i = 0; i < 5; i++){
        nota = prompt("Ingrese una nota de 0 a 10");
        nota = parseInt(nota);
        while(isNaN(nota) || nota < 0 || nota > 10){
            nota = prompt("ERROR Ingrese una nota de 0 a 10");
            nota = parseInt(nota);
        }

        sexo = prompt("Ingrese el sexo m o f");
        while(sexo != "m" && sexo != "f"){
            sexo = prompt("ERROR Ingrese el sexo m o f");
        }

        sumaTotal += nota;
        if(i == 0){
            minimoNota = nota;
            minimoSexo = sexo;
        }else if(nota < minimoNota){
            minimoNota = nota;
            minimoSexo = sexo;
        }
        if(sexo == "m" && nota > 5){
            varonesMayor5++;
        }


    }

    promedio = sumaTotal / 5;
    alert("El promedio de notas es " + promedio);
    alert("Nota mas baja " + minimoNota + " y el sexo es " + minimoSexo);
    alert("Cantidad de varones que su nota haya sido mayor o igual a 6 : " + varonesMayor5);
}
