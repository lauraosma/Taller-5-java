// creamos la constante con los estudiantes
const estudiantes = [
    { nombre: "Juan", nota: 80 },
    { nombre: "María", nota: 40 },
    { nombre: "Pedro", nota: 90 },
    { nombre: "Ana", nota: 70 },
    { nombre: "Luis", nota: 50 },

];
// validamos el promedio de las notas

const promedio = estudiantes.reduce((total, item) => total + item.nota /5, 0);

// mostramos el promedio de las notas

console.log("El promedio de las notas es: " + promedio);