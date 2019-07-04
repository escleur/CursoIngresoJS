/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numeroUno;
    var numeroDos;

    numeroUno = document.getElementById("numeroUno").value;
    numeroUno = parseInt(numeroUno);

    numeroDos = document.getElementById(numeroDos).value;
    numeroDos = parseInt(numeroDos);

    alert("La suma es " + (numeroUno + numeroDos));
}

