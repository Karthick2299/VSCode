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

// class bike{
//     constructor(name,year){
//         this.name = name;
//         this.year = year;
//     }
//     ageOfBike(){
//         let date = new Date();
//         return date.getFullYear() - this.year;
//     }
// }

// let myBike  = new bike("CD100",1982);
// let myCar = new bike("RollsRoyce",2018);

// console.log("My bike Name is : " + myBike.name + " and it is " + myBike.ageOfBike() + " years old ");
// console.log("My Car Name is : " + myCar.name + " and it is " + myCar.ageOfBike() + " years old ");

//class Example - Inheritance

// class Parent {
//     constructor(someName){
//         this.someName = someName;
//     }    

//     greet(){
//         console.log(`hello ${this.someName}`);
//     }
// }

// class childClass extends Parent{

// }

// let childObject = new childClass("karthick");
// childObject.greet();


//class Inheritance Example - using super()

// class Parent {
//     constructor(){
//         console.log("from constructor of a parent");
//     }

//     hello(){
//         console.log("hello function");
//     }
// }

// class child extends Parent{
//     constructor(){
//         super();
//         console.log("child");
//     }

// }

// let childObject = new child();
// childObject.hello();


//class static Example

class parent {
    constructor(){
        console.log("parent class constructor");
    }
    
    static printSomething(){
        console.log("from static method");
    }
}


class child extends parent {
 
    constructor(){
        console.log("from child class constructor");
        super();
    }

}

let childObject = new child();
child.printSomething();