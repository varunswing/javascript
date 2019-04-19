//String
const name = 'Jeff';
const name2 = new String('Jeff');

//name2.foo = 'bar';
//console.log(name2);

console.log(typeof name2);

if(name2 === 'Jeff'){
    console.log('YES');    
}else{
    console.log('NO');    
}

//Number
const num1 = 5;
const num2 = new Number(5);

//Boolean
const bool1 = true;
const bool2 = new Boolean(true);

//Function 
const getSum1 = function (x, y) {
return x + y;
}
const getSum2 = new Function('x', 'y', 'return x + y');

//Object
const john1 = {name: "John"};
const john2 = new Object({name: "John"});

console.log(john2);

//Array
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,3);

//Regular expression
const rel1 = /\w+/;
const rel2 = new RegExp('\\w+');

console.log(rel2);



