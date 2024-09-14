// Definimos un array de precios
const compras = [
    {producto: "Tv Samsung", precio: 30000 },
    {producto: "Tv LG", precio: 40000 },
    {producto: "Celular Samsung", precio: 90000 },
    {producto: "Celular Motorola", precio: 70000 },
    {producto: "Tv kalley", precio: 50000 },
    {producto: "Tv panasonic", precio: 59000},
    {producto:"airpods", precio: 60000},
    {producto:"airpods", precio:71000},
    {producto:"Camara inteligente", precio:15000},
    {producto:"Alexa", precio:10000},
    {producto:"Alexa", precio:35000},
    {producto:"Roku 4hd", precio:99000},
    {producto:"Roku 3hd", precio:49000},
    {producto:"Celular Kalley", precio:61000},
    {producto:"Celular Iphone", precio:71000},
    {producto:"Audifono inhalambricos", precio:71000},
    {producto:"Mouse", precio:50000},
    {producto:"Celular Redmi", precio:60000},
    {producto:"Celular Xiamo", precio:63000},
    {producto:"Barra de sonido", precio:9800},
];

// Utilizamos el método reduce() para calcular el total de los precios con descuento

const Descuentos = compras.reduce((acumulador, precio) => {
    // Calculamos el precio con descuento multiplicando cada precio por 0.9
    const precioConDescuento = precio * 0.9;
    // Sumamos el precio con descuento al acumulador
    return acumulador + precioConDescuento;
}, 0);

// Mostramos el resultado en la consola
console.log(Descuentos);