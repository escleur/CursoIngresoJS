function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	switch(mesDelAño){
        case "Febrero":
            msj = "tiene 28 dias";
            break;
        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "Octubre":
        case "Diciembre":
            msj = "tiene 31 dias";
            break;
        default:
            msj = "tiene 30 dias";
                        
    }

    alert(msj);

}//FIN DE LA FUNCIÓN