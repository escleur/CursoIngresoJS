function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var msj;

switch (mesDelAño){
    case "Febrero":
        msj = " Este mes no tiene más de 29 días.";
        break;
    default:
        msj = "Este mes tiene 30 o más días";
}
	
	alert(msj);


}//FIN DE LA FUNCIÓN