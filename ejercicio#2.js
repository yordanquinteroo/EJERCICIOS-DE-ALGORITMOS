function operacionesArimeticas(num1, num2){
    let resultadoSuma = num1 + num2;
    let resultadoResta = num1 - num2;
    let resultadoMultiplicacion = num1 * num2;
    let resultadoDivision = num1 / num2;
    console.log("suma: " + resultadoSuma);
    console.log("resta: " + resultadoResta);
    console.log("multiplicacion: " + resultadoMultiplicacion);
    console.log("division: " + resultadoDivision);
}

operacionesArimeticas(
    parseInt(Math.random() * 100),
    parseInt(Math.random() * 100)
);