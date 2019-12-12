let re;
// Literal characters
re = /hello/;
re = /hello/i;

// Metacharacter symbol
re = /^h/i; // Must start with 
re = / world$/i; // Must end with 
re = /^world$/i; // Must start and end with
re = /H.llo/i; // Matches any one character 
re = /H*llo/i; // Matches any character 0 or more times 
re = /He?llo/i; // Optional character(e)
re = /He\?llo/i; // Escape character 

// Brackets [] - Character Sets
re = /He[laf]lo/i; // Must be a l, a or f 
re = /[HL]ello/i; // Must be a H or L 
re = /He[^laf]lo/i; // Must be anything except l, a or f
re = /[A-Z]ello/i; // Must be any uppercase letter 
re = /[a-z]ello/i; // Must be any lowercase letter 
re = /[A-Za-z]ello/i; // Must be any letter
re = /[0-9][0-9]Hello/i; // Must be any number 

// Braces {} - Quantifiers
re = /Hel{2}o/i; // Must occur exactly {m} amount of times
re = /Hel{2, 4}o/i; // Must occur between {m, n} amount of times
re = /Hel{2, }o/i; // Must occur atleast {m} amount of times

// Parentheses () - Grouping
re = /^([0-9]x){3}$/i;

// Shorthand character classes
re = /\w/; // Word character - alphanumeric or _
re = /\w+/; // + = one or more
re = /\W/; // Non-Word character
re = /\d/; // Match any digit
re = /\d+/; // Match any digit 0 or more times
re = /\D/; // Match any non-digit
re = /\s/; // Match whitespace char
re = /\S/; // Match non-whitespace char
re = /Hell\b/i; // Word boundary

// String to match
const str = 'Hello, welcome to hell';

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`);
    }else{
        console.log(`${str} don't matches ${re.source}`);
    }
}

reTest(re, str);