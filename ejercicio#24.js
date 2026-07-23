var prestamo = parseFloat(prompt("Ingrese el monto del préstamo:"));

var tasa = 0.05;
var anios = 5;

var interesAnual = prestamo * tasa;
var interesPrimerMes = interesAnual / 12;
var interesTercerTrimestre = interesAnual / 4;
var interesTotal = interesAnual * anios;
var totalPagar = prestamo + interesTotal;

console.log("Intereses pagados en un año: $" + interesAnual);
console.log("Intereses del tercer trimestre: $" + interesTercerTrimestre);
console.log("Intereses del primer mes: $" + interesPrimerMes);
console.log("Total a pagar incluyendo intereses: $" + totalPagar);