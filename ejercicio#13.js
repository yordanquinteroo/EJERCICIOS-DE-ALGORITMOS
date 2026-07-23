const prompt = require("prompt-sync")();

let horas = parseFloat(prompt("Ingrese las horas trabajadas: "));
let valorHora = parseFloat(prompt("Ingrese el valor por hora: "));

let salario = horas * valorHora;

console.log("El salario es: $" + salario.toFixed(2));