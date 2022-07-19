//command line to decorators

//tsc --target ES5 --experimentalDecorators filename.ts

//Types of Decorators 
/* 1. Class Decorator
   2. Property Decorator
   3. Accessor Decorator
   4. Method Decorator
   5.Parameter Decorator
*/



// function test_one(){
//     console.log("test_one function");
//     return function(text: string){
//         console.log("first decorator function - returned");
//     };
// }

// function test_two(){
//     console.log("test_two function");

//     return function(){
//         console.log("another decorator from test_two function");
//     };
// }

//class decorators
// @Frozen
// class IceCream{
// }

// function Frozen(constructor: Function){
//     Object.freeze(constructor);
//     Object.freeze(constructor.prototype);
// }

// console.log(Object.isFrozen(IceCream));

// class Froyo extends IceCream{

// }

// function test_one(){
//     console.log("from test_one function");
//     return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
//         console.log("target function ");
//     };
// }

// class Example {
//     @test_one()
//     run(){}
// }
// const e = new Example();
// e.run();


//Decorator Example

// function Self(constructorFunction: Function){
//     console.log("Invoking decorator function here ");
//     constructorFunction.prototype.selfEmp = true;
// }

// @Self
// class Employee{
//     private _empName: string;
//     constructor(empName: string){
//         console.log("Invoking constructor");
//         this._empName = empName;
//     }
// }

// let employee: Employee = new Employee("karthick");

//Union type

// function printId(id: number | string){
//     console.log("Your ID is : " + id);
// }


// printId(22);
// printId("karthick");
// printId({id: "hello"}); => It gives Error



function sealed(constructor: Function){
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@sealed
class TestClass{
    type = "report";
    title:string;

    constructor(t: string){
        this.title = t;
    }
}

const test = new TestClass("karthick");

console.log(test);
