// realizamos la constante con los precios de los productos
 const Valores = [
    100.990, 200.990, 20.000, 150.990, 300.990,
    400.990, 250.990, 180.990, 120.990, 80.990,
    100.909, 200.909, 450.000, 150.909, 300.909,
    400.909, 32.000, 180.909, 120.909, 80.909,
    10.990, 20.990, 5.990, 15.990, 30.990,
 ];

 // validamos que el precio sea menor
const menorValor = Valores.some(Valores => Valores > 50.000);
// mostramos los valores menores a 50.000

console.log(menorValor);