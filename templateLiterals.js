const name = 'John';
const age = 31;
const job = 'Web Developer';
const city = 'Miami';
let html;

//without template string(es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

html = '<ul>' +
       '<li>Name: ' + name + '</li>' +
       '<li>Age: ' + age + '</li>' +
       '<li>Job: ' + job + '</li>' +
       '<li>City: ' + city + '</li>' +
       '</ul>'

function hello(){
    return 'Hello';
}

//With template string(es6)
html = `
    <ul>
        <li>Name: ${name} </li>
        <li>Name: ${age} </li>
        <li>Name: ${job} </li>
        <li>Name: ${city} </li>
        <li>Name: ${2 + 2} </li>
        <li>Name: ${hello()} </li>
        <li>Name: ${age > 30 ? 'Over 30' : 'Under 30'} </li>
    </ul>
`;

document.body.innerHTML = html;