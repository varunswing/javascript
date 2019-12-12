const user = {email : 'jdoe@gmail.com'};

try {
    // Produce a ReferenceError
    // myFunction();

    // Produce a TypeError
    // null.myFunction();

    // Syntax Error
    // eval('Hello World');

    // URI Error
    // decodeURIComponent('%');

    if(!user.name){
        // Throw user has no name
        throw new SyntaxError('User has no name');
    }

} catch (e) {
    console.log(`User error: ${e.message}`);
    // console.log(e);
    // console.log(e.message);
    // console.log(e.name);
    // console.log(e instanceof TypeError);
}finally{
    console.log('Finally runs regardless of result...');
}

console.log('Program continues....');