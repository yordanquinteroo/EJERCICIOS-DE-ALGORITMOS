var individuo = {
    nombre: "Yordan"
};
var capital_de_Yordan = 1000000;
individuo.capital = capital_de_Yordan;

var razon_banco = 0.02; // 2% mensual
var interes_mensual = razon_banco * individuo.capital;

console.log("el capital de " + individuo.nombre + " es: " + razon_banco * individuo.capital + " en el banco"    );