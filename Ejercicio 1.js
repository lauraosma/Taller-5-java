// definimos constantes de los productos con sus precios

const electrodomesticos = [
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
// validamos los precios

const Descuentos = electrodomesticos.filter(electrodomesticos => electrodomesticos.precio ) // realizamos el filtro de los precios
.map(electrodomesticos => electrodomesticos.precio * 0.15);// aplicamos el descuento en map para moficar los precios

// mostramos el resultado del filtro

console.log("Tu descuento es: 💰  ", Descuentos);
