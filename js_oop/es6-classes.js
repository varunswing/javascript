class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName){
        this.lastName = newLastName;
    }

    static addNumbers(x, y){
        return x + y;
    }
}

const mary = new Person('Mary', 'Williams', '10-16-2000');

mary.getsMarried('Thompson');

console.log(mary);

console.log(Person.addNumbers(2, 3));