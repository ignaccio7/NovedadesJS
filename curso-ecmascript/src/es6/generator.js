function* iterate(array)  {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(["Oscar", "Alexa", "David", "Gerlis"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);


function* generator() {

    yield 1
    yield 2
    yield 3
}

const gen = generator()

console.log(gen.next().value) //1
console.log(gen.next().value) //2
console.log(gen.next().value) //3

console.log(gen.next()) //{value:undefined, done: true}

const array = [5, 4, 3, 2, 1]

for (let numero of array) {
    console.log(numero) // 5 4 3 2 1
}

const objeto = { a: 1, b: 2, c: 3 }

for (let elemento in objeto) {
    console.log(elemento) // 'a' 'b' 'c'
}

for (let elemento in array) {
    console.log(elemento) // '0' '1' '2' '3' '4'
}