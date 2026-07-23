var capacidad1 = parseFloat(prompt("Ingrese la capacidad del primer balde (litros):"));
var capacidad2 = parseFloat(prompt("Ingrese la capacidad del segundo balde (litros):"));
var capacidad3 = parseFloat(prompt("Ingrese la capacidad del tercer balde (litros):"));

var tiempoPorLitro = 1.5; // horas por litro

var tiempo1 = capacidad1 * tiempoPorLitro;
var tiempo2 = capacidad2 * tiempoPorLitro;
var tiempo3 = capacidad3 * tiempoPorLitro;

console.log("Tiempo para llenar el balde 1: " + tiempo1 + " horas");
console.log("Tiempo para llenar el balde 2: " + tiempo2 + " horas");
console.log("Tiempo para llenar el balde 3: " + tiempo3 + " horas");