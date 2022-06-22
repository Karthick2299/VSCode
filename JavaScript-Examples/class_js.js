// class Person{
//     constructor(){
//         console.log("from constructor");
//     }
//     displayMessage(){
//         console.log("Some messages from displayMessage");
//     }
// }

// let myPerson = new Person();
// myPerson.displayMessage();


// class Example_name{
//     constructor(first, last){
//         this.first = first;
//         this.last = last;
//     }
// }


// const callConstructor = new Example_name("karthick","selvam");

// console.log(callConstructor.first + " " + callConstructor.last);

class bike{
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    ageOfBike(){
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

let myBike  = new bike("CD100",1982);
let myCar = new bike("RollsRoyce",2018);

console.log("My bike Name is : " + myBike.name + " and it is " + myBike.ageOfBike() + " years old ");
console.log("My Car Name is : " + myCar.name + " and it is " + myCar.ageOfBike() + " years old ");