/**
 Límites numéricos en JavaScript
📏 JavaScript tiene límites numéricos, un máximo 
Number.MAX_SAFE_INTEGER y un mínimo Number.MIN_SAFE_INTEGER. 
Fuera de estos límites, los cálculos matemáticos pueden fallar y 
mostrar resultados erróneos. Con BigInt esto se resuelve.
 */
const aBigNumber = 89072459207420938474565464464;
const anotherBigNumber = BigInt(89072459207420938474565464464);
console.log(aBigNumber);
console.log(anotherBigNumber);