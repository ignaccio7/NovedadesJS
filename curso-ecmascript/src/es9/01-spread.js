// operador de propagación cómo funciona con conceptos en objetos

// ahora admite el uso de rest y spread con objetos

// operador de ...y copiar lo que está en las claves en nuestros objetos

const user = { username: 'gndx', age:34, country: 'CO'};
const { username, ...values } = user;

console.log(username); //gndx
// separamos el username, como se indica en la línea 2, por eso lo podemos declarar
console.log(values); //{ age: 34, country: 'CO' }
// y con ..values asignamos el resto de valores a dicho elemento, y por eso lo llamamos

// tiene sentido para transformar objetos y arreglos y haceindo manipulaciones para obtener ciertos objetos