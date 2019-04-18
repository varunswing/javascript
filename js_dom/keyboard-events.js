const form = document.querySelector('form');
const taskInput = document.querySelector('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

//Clear input
taskInput.value = 'task';

form.addEventListener('Submit', runEvent);

//Keydown
taskInput.addEventListener('keydown', runEvent);
//Keyup
taskInput.addEventListener('keyup', runEvent);
//Keypress
taskInput.addEventListener('keypress', runEvent);
//Focus
taskInput.addEventListener('focus', runEvent);
//Blur
taskInput.addEventListener('blur', runEvent);
//Cut
card.addEventListener('cut', runEvent);
//Paste
card.addEventListener('Paste', runEvent);
//Input
card.addEventListener('Input', runEvent);
//Change
card.addEventListener('Change', runEvent);

//Event handler
function runEvent(e) {
    console.log(`Event Type:${e.type}`);
    console.log(e.target.value);
    heading.innerText = e.target.value;

    //Get input value
    console.log(taskInput.value);
    e.preventDefault();  
}
