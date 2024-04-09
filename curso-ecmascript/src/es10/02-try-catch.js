// parámetro catch puede ser opcional (Manejo de errores)
//puedo hacer que lo muestre

try {
    hello ();
} catch (error) {
    console.log(error);
}
// ReferenceError: hello is not defined
//     at Object.<anonymous> (c:\Users\Usuario\ECMA-Vale\js\CursoEcmaScript\src\tempCodeRunnerFile.js:2:5)
//     (...)

//puedo hacer que no lo muestre y personalizarlo

try {
    onotherFn();
} catch {
    console.log("esto es un error")
}
//CUIDADO!!! En este último caso no sabré qué está pasando.
//No sabré el motivo por el cual pasó a catch