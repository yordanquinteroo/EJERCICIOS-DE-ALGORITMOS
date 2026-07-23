var precio = parseFloat(prompt("Ingrese el precio unitario del producto:"));
var cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));
var descuento = parseFloat(prompt("Ingrese el porcentaje de descuento:"));

var subtotal = precio * cantidad;
var valorDescuento = subtotal * (descuento / 100);
var subtotalDescuento = subtotal - valorDescuento;
var iva = subtotalDescuento * 0.19;
var precioNeto = subtotalDescuento + iva;

console.log("Subtotal: $" + subtotal);
console.log("Descuento: $" + valorDescuento);
console.log("Subtotal con descuento: $" + subtotalDescuento);
console.log("IVA (19%): $" + iva);
console.log("Precio neto: $" + precioNeto);