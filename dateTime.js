let val;

const today = new Date();
let birthday = new Date('9-10-1981 11:24:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');

val = today.getMonth(); // Starts with 0.
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(9);
birthday.setDate(17);
birthday.setFullYear(1999);
birthday.setHours(11);
birthday.setMinutes(23);
birthday.setSeconds(2);

console.log(val);
console.log(birthday);

