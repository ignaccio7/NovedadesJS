// Trailing comma en un objeto
const user = {
    name: "John",
    age: 30,
    email: "john@example.com", // <-- Trailing comma
};

// Trailing comma en un array
const arr = [
    1,
    2,
    3, // <-- Trailing comma
];

// Agregar un nuevo elemento en un objeto con trailing comma
user.address = "123 Main St.";
console.log(user); // Output: { name: 'John', age: 30, email: 'john@example.com', address: '123 Main St.' }

// Agregar un nuevo elemento en un array con trailing comma
arr.push(4);
console.log(arr); // Output: [ 1, 2, 3, 4 ]



///---------
const array = [24, 34, 25, 24, , , , 45];
console.log(array); //[ 24, 34, 25, 24, <3 empty items>, 45 ]
console.log(array.length);//8
