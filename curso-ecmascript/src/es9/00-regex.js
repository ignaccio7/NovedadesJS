// más detalle en : https://platzi.com/cursos/expresiones-regulares/
// para capturar en grupo, valores que se encuetran en una expresión regular

const regex = /(\d{4})-(\d{2})-(\d{2})/;

// es un manejo de fechas de año (4), mes(2), día(2)

// para validar el grupo de elementos, si cumple con estandar de regex
let cadena = '2023-01-03';
const matchers = regex.exec(cadena);

//En lugar de utilziar console.log, utilizamos console.table para mostrar la información en formato de tabla
console.log(matchers);
console.table(matchers);

// conesto podemos pasar por un valor o una validación que queramos hacer sobre el string
// para obtener un elemento y seguir avanzando