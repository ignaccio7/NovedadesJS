class Player {
    constructor(nombre, colorSombrero) {
        //atributos con su contexto
        this.nombre = nombre;
        this.colorSombrero = colorSombrero;
    }
    //Metodos
    saludar() {
        return `Hola soy ${this.nombre} y mi sombrero es ${this.colorSombrero}`;
    }

    get getNombre(){
        return this.nombre;
    }
    set setNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }
}

//Creacion de jugadores (Objetos)
let player1 = new Player('Mario', 'Rojo');
let player2 = new Player('Luigi', 'Verde');

console.log(player1);//Player {nombre: 'Mario', colorSombrero: 'Rojo'}
console.log(player2);////Player {nombre: 'Luigi', colorSombrero: 'Verde'}

//Llamar metodos de los jugadores (Objetos)
console.log(player1.saludar()); // Hola soy Mario y mi sombrero es Rojo

//GET
console.log(player1.getNombre); // Mario
//SET 
player1.setNombre = 'Alberto';
console.log(player1.nombre);// Alberto