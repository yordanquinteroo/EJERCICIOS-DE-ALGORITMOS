const prompt = require("prompt-sync")();

let parcial1 = parseFloat(prompt("Ingrese la nota del primer parcial: "));
let parcial2 = parseFloat(prompt("Ingrese la nota del segundo parcial: "));
let parcial3 = parseFloat(prompt("Ingrese la nota del tercer parcial: "));
let examen = parseFloat(prompt("Ingrese la nota del examen final: "));
let trabajo = parseFloat(prompt("Ingrese la nota del trabajo final: "));

let promedio = (parcial1 + parcial2 + parcial3) / 3;

let notaFinal = (promedio * 0.55) + (examen * 0.30) + (trabajo * 0.15);

console.log("La calificación final es: " + notaFinal.toFixed(2));