interface exampleInterface{
    // readonly name: string; - if we use readonly, the values will be Immutable

    name: string;

    display(view: string): void;
}

// class exampleClass implements exampleInterface{

//     name = "karthick";
//     // name = "hello";// error because of readonly keyword

//     display(view: string): void{
//         console.log("from class");
//         console.log("data is " + view);
//     }

// }

// let example = new exampleClass();

// console.log(example.name);
// example.display("karthick");

// var customer: exampleInterface = {
//     name : "karthick",

//    display: (value: string) => { return value}

// }

// console.log(customer.display("hello"));
// console.log(customer.name);

//Interface Inheritance Example

interface User{
    firstName: string;
}

interface userTwo {
    lastName: string;
}

interface mainUser extends User, userTwo{
    skill: string;
}

var customer = <mainUser>{};

customer.firstName = "karthick";
customer.lastName = "Divine";
customer.skill = "Hunting";

console.log(customer.firstName + " " + customer.lastName + " " + customer.skill);
