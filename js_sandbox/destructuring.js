// Destructuting Assignment

let a, b;
[a, b] = [100, 200];
// Rest Pattern
[a, b, ...rest] = [100, 200, 300, 400, 500, 600];

({a, b} = {a: 100, b: 200, c: 300, d: 400, e: 500, g: 600});
({a, b, ...rest} = {a: 100, b: 200, c: 300, d: 400, e: 500, g: 600});

console.log(rest);

// Array Destructuring

// const people = ['Jack', 'Jill', 'Joe'];
// const [person1, person2, person3] = people;

// console.log(person1, person2, person3);

// Parse array returned from function
function getPeople(){
    return ['John', 'Beth', 'Mike'];
}

let person1, person2, person3;
[person1, person2, person3] = getPeople();

console.log(person1, person2, person3);

// Object Destructing
const person = {
    name: 'John Doe',
    age: '26',
    city: 'Miami',
    gender: 'Male',
    sayHello: function(){
        console.log('Hello');
    }
}

// Old ES5
// const name = person.name,
//       age = person.age,
//       city = person.city,
//       gender = person.gender;

// New ES6 Destructuring
const {name, age, city, gender, sayHello} = person;

console.log(name, age, city, gender);

sayHello();