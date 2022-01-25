
//const reteFuente = 7;
//const interesAnual30a90 = 1;
//const interesAnual91a180 = 1.5;
//const interesAnual181a270 = 2;
//const interesAnual271a360 = 2.5;

//let dias = 269;
//let inversion = 1000000;


  // console.log(tasa);
 
  

//let totalRecibir = (inversion + ganancia).toFixed(2);

//console.log(ganancia.toFixed(2));

// funcion para determinar el interes diario 
function tasaEfectiva (dias) {

    let interesDiario;

    if (dias >= 30 && dias <= 90) {
        tasa = 1;
     }
     else if (dias >= 91 && dias <= 180) {
         tasa = 1.5;
 
     }
     else if (dias >= 181 && dias <= 270) {
         tasa = 2;
     }
     else if (dias >= 270 && dias <= 360) {
         tasa = 2.5;
     }
 
     else
         tasa = 0;

     return interesDiario = tasa/360;
        
    }

    // funcion para calcular la ganacia de la inversion 
    function calcularGanancia (inversion, interesDiario, dias ) {

        return ((inversion * interesDiario) / 100) * dias;
    }
    //funcion para mostrar al usurio que ingreso valores incorrectos
    function error(dias, inversion){
         if (dias<30 || dias>360 ){
             return ("Porfavor ingresa numero de dias valido!!");
         }
         else if(inversion<100000){
             return ("Ingresa un valor igual o superior a $100.000 para que las ganancias sean representativas");
         }
         else return ("");
    }



//funcion para calcular el resultado con los datos ingresados por el usuario
function calcularResultado() {
     const input1 = document.getElementById("inputInversion");
     const inversion = (input1.value);
      

     const input2 = document.getElementById("inputDias");
     const dias = (input2.value);
        

     const usuarioTonto = error(dias, inversion);
     const ganancia = calcularGanancia(inversion, tasaEfectiva(dias), dias );

    
     document.getElementById("parrafoResultado").innerHTML = "En esta inversion ganas: $" +
                                                                        ganancia.toFixed(2);

     document.getElementById("parrafoResultado2").innerHTML =  "  El interes aplicado es: " + 
                                                                  tasa + "%  Efectivo anual.   " ;

     document.getElementById("parrafoResultado3").innerHTML =  usuarioTonto ;

}




