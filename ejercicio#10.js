var tienda = {
    descuento: 0.10
};
var cliente = {
    nombre: "Yordan",
    compras: 100000
};
cliente.descuento = tienda.descuento * cliente.compras;

console.log(cliente.nombre + " tiene un descuento de: " + cliente.descuento);
console.log("El total a pagar es: " + (cliente.compras - cliente.descuento));