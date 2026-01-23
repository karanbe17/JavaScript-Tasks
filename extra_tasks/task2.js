// // Array Destructuring 

// const racers = ["Ferrari", "Mercedes", "Red Bull", "McLaren"];

// const [winner,...others] = racers;

// console.log(winner);
// console.log(...others);

// // new keyword

// function User(name, age){
//     this.name = name;
//     this.age = age;
// }

// const user1 = new User("Karan", 21);
// const user2 = new User("Sam", 25);

// console.log(user1);
// console.log(user2);

// // Prototype chain example

// const parent = {
//     breathe(species){
//         console.log(`${species} is breathing`);
//     }
// }

// const child = {
//     conn(name){
//         console.log(`${name} is a dog.`);
//     }
// }

// Object.setPrototypeOf(child, parent);

// const final = {
//     name: "Tommy",
//     species: "Siberian husky"
// }

// Object.setPrototypeOf(final, child);

// final.conn(final.name);
// final.breathe(final.species);   



