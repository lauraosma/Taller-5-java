// Definimos un array de precios
const compras = [
    {producto: "Tv Samsung", precio: 4500 },
    {producto: "Tv LG", precio: 40000 },
    {producto: "Celular Samsung", precio: 3000 },
    {producto: "Celular Motorola", precio: 70000 },
    {producto: "Tv kalley", precio: 50000 },
    {producto: "Tv panasonic", precio: 59000},
    {producto:"airpods", precio: 60000},
    {producto:"airpods", precio:10650},
    {producto:"Camara inteligente", precio:15000},
    {producto:"Alexa", precio:10000},
    {producto:"Alexa", precio:35000},
];

// utilizamos el metodo some() para validar si algun producto tiene descuento

const Descuentos = compras.some(compras => compras.precio * 0.15);
// mostramos por consola si se cumple la condicion
console.log(Descuentos);