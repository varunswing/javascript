let re;
re = /hello/;
re = /hello/i; // i = case insensitive
re = /hello/g; // Global search

// console.log(re);
// console.log(re.source);

// exec() - Return result in an array or null
// const result = re.exec('Brad Hello World');
// console.log(result);

// console.log(result);
// console.log(result[1]);
// console.log(result.index);
// console.log(result.input);

// test() - Return true or false
// const result = re.test('hello');
// console.log(result);

// match() - Return result array or null
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);

// search() - return index of the first match if not found returns -1
// const str = 'Brad Hello There';
// const result = str.search(re);
// console.log(result);

// replace() - Return new string with some or all matches of a pattern
// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr);