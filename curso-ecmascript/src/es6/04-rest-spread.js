// arrays destructuring

let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
// Opcion 1
console.log(a, b);
// Opcion 2
console.log(a, fruits[1]);

// Object destructuring

let user = { username: "Alexa", age: 34 };
let { username, age } = user;
// Opcion 1
console.log(username, age);
// Opcion 2
console.log(username, user.age);

// arrays destructuring
let fruits2 = ['Apple', 'Banana', 'Orange'];
let [,,fruit] = fruits2;

console.log(fruit); /*arroja "Orange"*/

//--------------------
const array = [ 1, 2, 3, 4, 5 ]

const {3: cuatro} = array

console.log(cuatro) // 4

///-----------------------
let fruits3 = ['apple', 'kiwi', 'banana'];
const { 0: first, length, [length - 1]: last } =  fruits3;

console.log(first);   // apple
console.log(length);  // 3
console.log(last);    // banana

//---------spread operator
let person = { name: "Alexa", age: 24 };
let country = "COL"

let data = { ...person, country };
console.log(data);

//--------rest 
function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]+values[1]);
    return num + values[0]+values[1];
}

sum(1, 1, 2, 3)