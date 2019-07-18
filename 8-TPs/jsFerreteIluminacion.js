/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidad;
    var marca;
    var precioFinal;
    var precioSinDescuento;
    var ingresoBruto;

    cantidad = document.getElementById("Cantidad").value;
    marca    = document.getElementById("Marca").value;

    cantidad = parseInt(cantidad);

    precioSinDescuento = cantidad * 35;

    if(cantidad >= 6){
        precioFinal = precioSinDescuento - (precioSinDescuento * 50 / 100);
    }else if(cantidad == 5){
        if(marca == "ArgentinaLuz"){
            //40%
            precioFinal = precioSinDescuento - (precioSinDescuento * 40 / 100);
        }else{
            //30%
            precioFinal = precioSinDescuento - (precioSinDescuento * 30 / 100);
        }
    }else if(cantidad == 4){
        if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
            //25%
            precioFinal = precioSinDescuento - (precioSinDescuento * 25 / 100);
        }else{
            //20%
            precioFinal = precioSinDescuento - (precioSinDescuento * 20 / 100);
        }
    }else if(cantidad == 3){
        if(marca == "ArgentinaLuz"){
            //15%
            precioFinal = precioSinDescuento - (precioSinDescuento * 15 / 100);
        }else if(marca == "FelipeLamparas"){
            //10%
            precioFinal = precioSinDescuento - (precioSinDescuento * 10 / 100);
        }else{
            //5%
            precioFinal = precioSinDescuento - (precioSinDescuento * 5 / 100);

        }
    }

    if(precioFinal > 120){
        ingresoBruto = (precioFinal * 10 / 100);
        precioFinal = precioFinal + ingresoBruto;
        document.getElementById("precioDescuento").value = precioFinal;
        alert("IIBB Usted pago " + ingresoBruto);
    }else{

        document.getElementById("precioDescuento").value = precioFinal;
    }
}
