// utilizando padStart()
const str1 = "hola";
const str2 = str1.padStart(10, "*");
console.log(str2); // Output: *****hola

//utilizando padEnd()
const str3 = "adios";
const str4 = str3.padEnd(10, "-");
console.log(str4); // Output: adios-----

// Si la longitud a rellenar es menor que la cantidad de la 
// longitud del string actual, no se agregará nada.
const str5 = "hello";
const str6 = str5.padEnd(3, ".");
console.log(str6); // Output: hello