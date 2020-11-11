"use strict";
/* En algunas áreas como finanzas y astronomía, el objeto Number no es suficiente. Se
 * utiliza un tipo numérico adecuado para establecer cosas como la precisión y la
 * exactitud. En este ejemplo usamos el objeto BigNumber. 
 * // doc de BigNumber: https://github.com/MikeMcl/bignumber.js
 * // doc de numeral: http://numeraljs.com/ 
 * */
BigNumber.config({DECIMAL_PLACES: 2, ROUNDING_MODE: BigNumber.ROUND_HALF_UP});
// Definición de constantes
var FMT_ENTERO = "0,0",
    FMT_NUMERO = "0,0.00",
    FMT_MONEDA = "$0,0.00",
    FMT_PORCENTAJE = "0.00%",
    forma = document.getElementById("forma"),
    salidaTortas = document.getElementById("salidaTortas"),
    salidaPagar = document.getElementById("salidaPagar"),
    tortas = document.getElementsByName("tortas"),
    campos = ["nombre", "telefono"],
    salidas = ["salidaNombre", "salidaTelefono"];
forma.addEventListener("submit", procesa, false);

 

function procesa(){
    for (var i = 0, longitud = campos.length;  i<longitud; i++) {
      var campo = forma[campos[i]];
      var salida = document.getElementById(salidas[i]);
      salida.value = campo.value;
    }
}
    
    forma.addEventListener("click", validaTortas, false);
    forma.addEventListener("click", validaPago, false);
    
     
    
    function validaTortas(){
   var tortasSeleccionadas = new Array();
   for (var i = 0, total = tortas.length; i < total; i++) {
      var torta = tortas[i];
      if (torta.checked){
          tortasSeleccionadas.push(torta.value);
      }
   }
   salidaTortas.textContent = tortasSeleccionadas.join(", ") + ". ";    
}

function validaPago(){
    var precio=0;
    for (var w = 0, totalp = tortas.length; w < totalp; w++){
        var pre=tortas[w];
        if(pre.checked){
            precio = precio + parseInt(pre.getAttribute("data-precio"));
            var precioT = numeral(precio).format(FMT_MONEDA);
        }
    }
    salidaPagar.textContent = precioT;
}
