function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var msj;

switch(mesDelAño){
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
        msj = "Falta para el invierno.";
        break;
    case "Julio":
    case "Agosto":
        msj = "Abrigate que hace frio.";
        break;
    default:
        msj = "Ya pasamos el frio, ahora calor!!!."
}


alert (msj);




}//FIN DE LA FUNCIÓN