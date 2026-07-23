var hombres = parseInt(prompt("Ingrese la cantidad de hombres:"));
var mujeres = parseInt(prompt("Ingrese la cantidad de mujeres:"));

var total = hombres + mujeres;

var porcentajeHombres = (hombres * 100) / total;
var porcentajeMujeres = (mujeres * 100) / total;

console.log("Porcentaje de hombres: " + porcentajeHombres + "%");
console.log("Porcentaje de mujeres: " + porcentajeMujeres + "%");