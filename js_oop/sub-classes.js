class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }
    greeting () {
        return `Hello there ${this.firstName} ${this.lastName}!`;
    }
}

class Customer extends Person{
    constructor(firstName, lastName, phone, membership){
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost (){
        return 400;
    }
}

const john = new Customer('John', 'Doe', '555-555-5555', 'standard');

console.log(john.greeting());
console.log(Customer.getMembershipCost());