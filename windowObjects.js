//Window methods / objects / properties

//Alert
/*
alert('Hello World!');
*/

//Prompt
/*
const input = prompt();
alert(input);
*/

//Confirm
/*
if(confirm('Are you sure')){
    console.log('Yes');    
}else{
    console.log('No');    
}
*/

let val;

//Outter height and width
val = window.outerHeight;
val = window.outerWidth;

//Innerr height and width
val = window.innerHeight;
val = window.innerWidth;

//Scroll points
val = window.scrollY;
val = window.scrollX;

//Location object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.herf;
val = window.location.search;

//Redirect
window.location.herf = 'https://www.google.com/';
//Reload
/*
window.location.reload();
*/

//History object
window.history.go(-1);
val = window.history.length;

//Navigator object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);

