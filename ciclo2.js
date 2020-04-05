var numero_ingresado = null
var respuesta_correcta = 45
var intentos_realizados = 0

do {

  intentos_realizados++
  numero_ingresado = prompt ("Elige  un numero del 0 al 100 ")
  if (numero_ingresado != respuesta_correcta){
    alert ("Intenta otra vez")
  }
} while (numero_ingresado != respuesta_correcta)

document.write ("Felicidades acertaste el numero y solo te tomo " + intentos_realizados + " intentos. " )
