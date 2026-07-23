var horas = parseFloat(prompt("Ingrese las horas trabajadas:"));
var valorHora = parseFloat(prompt("Ingrese el valor por hora:"));

var salario = horas * valorHora;

console.log("El salario es: $" + salario);