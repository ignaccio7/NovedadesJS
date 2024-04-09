class User{
    constructor(name = 'Alvaro', lastName = 'Garzón', age = 25) {
      console.log('New user: ', name, lastName);
      this.name = name;
      this.lastName = lastName;
      this.age = age;
    }
    greeting() {
      //const privateSpeak = this.speak('Hello!'); //dara error
      const privateSpeak = this.#speak('Hello!');
      console.log(privateSpeak);
      return`My name is ${this.name}${this.lastName} and I'm ${this.age} years old`;
    }
    #speak(message) {
      return`Hey! ${message}`;
    }
    get #uAge() {
      returnthis.age;
    }
    set #uAge(n) {
      this.age = n;
    }
  }
  
  const user = new User('Alvaro', 'Garzón', 25);
  const greet = user.greeting();
  console.log(greet);
  //console.log(user.speak("hi!!")); //como ya es privado nose puede
  