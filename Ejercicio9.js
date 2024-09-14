// creamos una lista con nombres en minusculas
let usuarios = [ "Laura", "Valentina", "Camila", "Fabio", "Andres",];

// usamos la opcion map para convertir todos los nombres en mayusculas

let usuariosMayusculas = usuarios.map(usuarios => usuarios.toUpperCase());

// mostramos el resultado por consola
console.log(usuariosMayusculas);