const prompt = require("prompt-sync")();

let hombres = parseInt(prompt("Ingrese la cantidad de hombres: "));
let mujeres = parseInt(prompt("Ingrese la cantidad de mujeres: "));

let total = hombres + mujeres;

let porcentajeHombres = (hombres * 100) / total;
let porcentajeMujeres = (mujeres * 100) / total;

console.log("Porcentaje de hombres: " + porcentajeHombres.toFixed(2) + "%");
console.log("Porcentaje de mujeres: " + porcentajeMujeres.toFixed(2) + "%");