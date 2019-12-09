// const sayHello = function(){
//     console.log('Hello');
// }

// const sayHello = () =>{
//     console.log('Hello');
// }

// One line function does not need braces
// const sayHello = () => console.log('Hello');

// return function
// const sayHello = function(){
//     return 'Hello';
// }

// // One line return 
// const sayHello = () => 'Hello';

// return object
// const sayHello = () => ({ msg: 'Hello'});

// console.log(sayHello());

// Single pram does not need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

// Multiple param need parenthesis
// const sayHello = (firstname, lastname) => console.log(`Hello ${firstname} ${lastname}`);

// sayHello('Brad', 'Traversy');

const users = ['Varun', 'Vipul', 'Pari'];

// const namelengths = users.map(function(name){
//     return name.length;
// });

// Shorter
// const namelengths = users.map((name) =>{
//     return name.length;
// });

// Shortest
const namelengths = users.map(name => name.length );

console.log(namelengths);
