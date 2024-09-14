// creamos una lista con nombres en minusculas
let nombres = [ "Laura", "Valentina", "Camila", "Fabio", "Andres",];

// usamos la funcion reduce () para concatenar todos los nombres en uan cadema de texto

let cadena = nombres.reduce((acumulador,nombreActual) => {
    return acumulador + " " + nombreActual;
}, "");
// mostramos la cadena por consola
console.log(cadena);