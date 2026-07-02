 let compra = 300000; // ("IVA incluido")
 let iva = 0.19;
 let precio_sin_iva = compra / (1 + iva);
 let iva_calculado = compra - precio_sin_iva;

 console.log("el precio sin IVA es: " + precio_sin_iva);
 console.log("el IVA calculado es: " + iva_calculado);