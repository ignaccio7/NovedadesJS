//set es una estructura parecida a un array pero este no admite repetidos
// Crear un Set de nombres de estudiantes
const listaAsistencia = new Set(['Ana', 'Pedro', 'Luis', 'Ana']);

// Agregar un nombre al Set
listaAsistencia.add('Juan');

// Eliminar un nombre del Set
listaAsistencia.delete('Luis');

// Verificar si un nombre se encuentra en el Set
if (listaAsistencia.has('Pedro')) {
  console.log('Pedro asistió a clase');
}

// Obtener la cantidad de estudiantes que asistieron a clase
const cantidadEstudiantes = listaAsistencia.size;
console.log(`Asistieron ${cantidadEstudiantes} estudiantes`);

// Limpiar todos los nombres del Set
listaAsistencia.clear();

console.log(listaAsistencia);