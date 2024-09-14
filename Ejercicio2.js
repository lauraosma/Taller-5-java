// definimos constantes de los estudiantes de psicologia
const estudiantesPsiclogia = [
   { nombre: "Juan", nota: 80 },
   { nombre: "María", nota: 40 },
   { nombre: "Pedro", nota: 90 },
   { nombre: "Ana", nota: 70 },
   { nombre: "Luis", nota: 50 },
     {nombre: "Alejandro", nota: 59},
     {nombre:"lucho", nota: 60},
     {nombre:"cathe", nota:71},
     {nombre:"laura", nota:15},
     {nombre:"rosa", nota:100},
     {nombre:"camilo", nota:35},
     {nombre:"johana", nota:99},
     {nombre:"hugo", nota:49},
     {nombre:"walter", nota:61},
     {nombre:"luisa", nota:71},
     {nombre:"vicente", nota:71},
     {nombre:"andrea", nota:50},
     {nombre:"daniela", nota:60},
     {nombre:"valentina", nota:63},
     {nombre:"kevin", nota:98},
];

// validamos las notas

const notas = estudiantesPsiclogia.filter(estudiantesPsiclogia => estudiantesPsiclogia.nota >= 60)
.map(estudiantesPsiclogia => estudiantesPsiclogia.nombre);
// mostramos los nombres de los estudiantes con nota mayor o igual a 60

console.log("Los Estudiantes aprobados son : ")
console.log(notas);