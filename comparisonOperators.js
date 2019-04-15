/* 
if(something){
    do something
}else{
    do something else
}
*/

const id = '100';

//Equal to
if(id == 100){
    console.log('Correct');   
}else{
    console.log('Incorrect');    
}

//Not equal to
if(id != 101){
    console.log('Correct');   
}else{
    console.log('Incorrect');    
}

//Equal to value and datatype
if(id === 100){
    console.log('Correct');   
}else{
    console.log('Incorrect');    
}

//Not equal to value and datatype
if(id !== 101){
    console.log('Correct');   
}else{
    console.log('Incorrect');    
}

//Test if undefined
if(typeof id !== 'undefined'){
    console.log(`The ID is ${id}.`);   
}else{
    console.log('No ID');    
}

//Greater or less than
if(id > 101){
    console.log('Correct');   
}else{
    console.log('Incorrect');    
}

//If else
const color = 'Yellow'

if(color === 'red'){
    console.log('Color is red');   
}else if(color === 'blue'){
    console.log('Color is blue');    
}else{
    console.log('Color is not red or blue');
}

//Logical operator

const name = 'Steve';
const age = 18;

//And &&
if(age > 0 && age<12){
    console.log(`${name} is a child`);    
}else if(age > 12 && age<=19){
    console.log(`${name} is a teenager`);    
}else{
    console.log(`${name} is an adult`);    
}

//Or ||
if(age < 16 || age > 65){
    console.log(`${name} is not elegible for race`);   
}else{
    console.log(`${name} is elegible for race`);    
}

//Ternary operator
console.log(id === 100 ? 'Correct' : 'Incorrect');
