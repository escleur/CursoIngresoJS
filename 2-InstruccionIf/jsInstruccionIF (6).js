function mostrar()
{
//tomo la edad  
    var edad;

    edad = document.getElementById("edad").value;

    if(edad >= 18){
        alert("Es mayor de edad");
    } else if (edad >= 13){
        alert("Es adolecente");
    }else {
        alert("Es niño");
    }



}//FIN DE LA FUNCIÓN