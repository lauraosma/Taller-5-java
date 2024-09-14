// definimos constates de los empleados y su estado
const empleados = [
    { nombre: "Juan", estado: "activo" },
    { nombre: "María", estado: "inactivo" },
    { nombre: "Pedro", estado: "inactivo" },
    { nombre: "Ana", estado: "activo" },
    { nombre: "Luis", estado: "activo" },
];

// filtramos por los que esten activos
const activos = empleados.filter(item => item.estado === "activo");
// mostramos los activos    
console.log(activos);