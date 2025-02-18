/**
 * En la guardería de Michis "Michilango", están registrando nuevos michis, pero necesitan una forma de identificarlos.

Tu tarea será proveer de una función getId() que se encargue de generar dichos identificadores y, a través de un método .next() se pueda pasar al siguiente identificador, y a través de la propiedad .value se pueda obtener el valor del nuevo identificador.

Cada vez que llame a la función de la siguiente forma debería retornarme un identificador nuevo y completamente diferente:

const id = getId();
id.next().value

El identificador puede ser de cualquier tipo (números o cadenas de texto), la única condición es que cada nuevo identificador que se retorne debe ser completamente diferente a los retornados anteriormente.

Debes usar generadores de JavaScript para resolver este ejercicio. La solución debería tener un input y output como los siguientes:

Ejemplo 1:

Input:

const id = getId()
id.next().value
id.next().value
id.next().value

Output:

1
2
3

Ejemplo 2:

Input:

const id = getId()
id.next().value
id.next().value
id.next().value

Output:

AX6SF5S
G7QNW01
KH3BR02
 * 
 */
/**EL CODIGO EN LOS GENERATOR SE DETIENE DONDE EL YIELD Y CUANDO PONGAMOS NEXT VUELVE A INICIAR DONDE ESTE EL ULTIMO YILED */
function* getId() {
    console.log("entra solo en el 1er next");
    let catID = 1;
    console.log(`catID ${catID}`);
    while (true) {
        console.log("next");
        yield catID++;
    }


}
const it = getId();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());