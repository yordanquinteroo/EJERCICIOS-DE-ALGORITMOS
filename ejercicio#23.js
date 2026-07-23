var altura = parseFloat(prompt("Ingrese la altura de la montaña en metros:"));

var alturaBase = 7;
var tiempoBase = 5;

var tiempo = (altura * tiempoBase) / alturaBase;

console.log("Tiempo que tarda en subir: " + tiempo + " horas");