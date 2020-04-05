
var numero_ingresado = null
var respuesta_correcta = 45
var intentos_realizados = 0

for (var intentos_realizados = 0; numero_ingresado != respuesta_correcta; intentos_realizados++ ){
    numero_ingresado = prompt ("Elige un numero del 0 al 100 ")
    if (numero_ingresado != respuesta_correcta){
      alert ("Intenta otra vez")
    }
  }
  if (intentos_realizados <= 3){
    document.write ("Eres genial, lo lograste en menos de tres intentos\n"); 
  }

  document.write ("Felicidades acertaste el numero y solo te tomo " + intentos_realizados + " intentos " )
