const obj = {
    MX: 'Mexico',
    CO: 'Colombia',
    CL: 'Chile',
    AR: 'Argentina'
}

// Convierte a los valores de un objeto literal en un array
console.log(Object.values(obj))
// [ 'Mexico', 'Colombia', 'Chile', 'Argentina' ]

// Convierte a los keys de un objeto literal en un array
console.log(Object.keys(obj))
// [ 'MX', 'CO', 'CL', 'AR' ]

//Convierte el valor y su llave en una posicion de un objeto
console.log(Object.entries(obj));
/**
 * [
  [ 'MX', 'Mexico' ],
  [ 'CO', 'Colombia' ],
  [ 'CL', 'Chile' ],
  [ 'AR', 'Argentina' ]
]
 * 
 */