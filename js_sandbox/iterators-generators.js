// Iterators example
// function nameIterator(names){
//     let nextIndex = 0;

//     return {
//         next: function(){
//             return nextIndex < names.length ?
//             {value : names[nextIndex++], done: false} :
//             {done: true}
//         }
//     }
// }

// // Create an array of names
// const namesArr = ['Jack', 'Jill', 'Joe'];
// // Init iterator and pass in the names array
// const names = nameIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next());

// Generator Example
// function* sayNames(){
//     yield 'Jack';
//     yield 'Jill';
//     yield 'Joe';
// }

// const names = sayNames();

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next());

// ID creator
function* createIds() {
    let id = 1;

    while (true) {
        yield id++;
    }
}

const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
