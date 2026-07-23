var nombre = prompt("Ingrese el nombre del aprendiz:");
var direccion = prompt("Ingrese la dirección:");
var anioNacimiento = parseInt(prompt("Ingrese el año de nacimiento:"));

var anioActual = new Date().getFullYear();
var edad = anioActual - anioNacimiento;

console.log("Nombre: " + nombre);
console.log("Dirección: " + direccion);
console.log("Año de nacimiento: " + anioNacimiento);
console.log("Edad: " + edad + " años");