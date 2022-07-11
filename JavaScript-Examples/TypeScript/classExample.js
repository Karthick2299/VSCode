// class Point{
//      x: number = 0;
//      y: number = 0;
// }
// const point = new Point();
// point.x = 10;
// point.y = 20;
// console.log(point.x);
// console.log(point.y);
//class Example 2
// class ExampleClass{
//     firstName: string;
//     lastName: string;
//     constructor(first:string, last: string){
//         this.firstName = first;
//         this.lastName = last;
//     }
// }
// const point = new ExampleClass("karthick","Steffi");
// console.log(point);
// class Animal{
//     move(){
//         console.log("Moving");
//     }
// }
// class Dog extends Animal{
//     woof(times: number){
//         for(let i = 0; i < times; i++){
//             console.log("woof");
//         }
//     };
// }
// const result = new Dog();
// result.woof(3);
// result.move();
//class Example 4
// class Base{
//     test(){
//         console.log("from base class");
//     };
// }
// class derived extends Base {
//     test(name?: string){
//         if(name === undefined){
//             super.test();
//         }
//         else{
//             console.log(`Hello, ${name.toUpperCase()}`);
//         }
//     }
// }
// const point = new derived();
// point.test();
// point.test("karthick");
// Access Modifiers Example using Ts
// class Employee {
//     public employeeName: string;
//     constructor(name: string){
//         this.employeeName = name;
//     }
//     greet(){
//         console.log(`Good Morning ${this.employeeName}`);
//     }
//     convertToString(num: number){
//         return num.toString();
//     }
// }
// let employee = new Employee("karthick");
// employee.convertToString(20);
// console.log(employee);
//*Inheritance Example in Ts
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        console.log("from Department class Constructor");
        this.id = id;
        this.name = name;
    }
    Department.prototype.describe = function () {
        // console.log(`Department (${this.id}): ${this.name}`);
        console.log("from describe method");
    };
    Department.prototype.addEmployee = function (employee) {
        console.log("Employee Added");
    };
    return Department;
}());
var a = new Department("1", "karthick");
a.describe();
