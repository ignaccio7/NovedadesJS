// Con fromEntries ES10,se puede transformar un array de arrays a un objeto

const entries = new Map ([["name", "Oscar"], ["age", 24]]);
    console.log(entries);
    console.log(Object.fromEntries(entries));

    // Map(2) { 'name' => 'Oscar', 'age' => 24 }
    // { name: 'Oscar', age: 24 }

    //otro ejemplo sin Map
const entrie = [
    ["name", "Vale"],
    ["age", 43],
  ];
  console.log("Array original", entrie);
  // Array origintal [ [ 'name', 'Vale' ], [ 'age', 43 ] ]
  console.log("Array transformado a object", Object.fromEntries(entrie));
  // Array transformado a object { name: 'Vale, age: 43 }