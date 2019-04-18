//For loop
for(let i=0; i<10; i++){
    if(i===2){
        console.log('2 is my number.');
        continue;
    }
    if(i===5){
        console.log('Stop the loop.');
        break;
    }

console.log('Number '+ i);
}

//While loop
    let i=0;
    while(i < 10){
        console.log('Number '+ i);
        i++;        
    }

//Do while
let j = 100;
do{
    console.log('Number '+ j);
    j++;
}
while(j < 10);

//Loop through array
const cars = ['Ford', 'Chevy', 'Honda', 'Toyta'];

for (let i = 0; i < cars.length; i++){
    console.log(cars[i]);    
}

//Foreach
cars.forEach(function (car, index, array) {
    console.log(`${index} : ${cars}`);
    console.log(array);    
})

//MAP
const users = [
    {id : 1, name : 'John'},
    {id : 2, name : 'Karan'},
    {id : 3, name : 'Joe'},
    {id : 4, name : 'Raja'}
];

const ids = users.map(function(user){
    return user.id;
});

console.log(ids);

//For in loop
const user = {firstName: 'John', lastName: 'Doe', age: 40}

for(let x in user){
    console.log(`${x} : ${user[x]}`);    
}