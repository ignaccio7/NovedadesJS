/**
 Optional chaining

Es una forma de evitar errores solicitando propiedades de forma opcional utilizando el símbolo => ? , sirve cuando no estamos seguros de que los valores estén completos.
 */

const users = {
    Julianfam: {
        country: 'CO'
    },
    Camila: {
        country: 'MEX'
    }
}

console.log(users?.Julianfam?.country);

//respuesta: CO // 
console.log(users?.Felipe?.country);
//respuesta: undefined //