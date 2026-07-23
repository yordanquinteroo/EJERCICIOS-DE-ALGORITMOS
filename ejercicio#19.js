var nombre = prompt("Ingrese el nombre del estudiante:");
var programa = prompt("Ingrese el programa de formación:");
var ficha = prompt("Ingrese la ficha:");

var nota1 = parseFloat(prompt("Ingrese la nota 1:"));
var nota2 = parseFloat(prompt("Ingrese la nota 2:"));
var nota3 = parseFloat(prompt("Ingrese la nota 3:"));
var nota4 = parseFloat(prompt("Ingrese la nota 4:"));
var nota5 = parseFloat(prompt("Ingrese la nota 5:"));

var promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

console.log("Nombre: " + nombre);
console.log("Programa de formación: " + programa);
console.log("Ficha: " + ficha);
console.log("Promedio final: " + promedio);