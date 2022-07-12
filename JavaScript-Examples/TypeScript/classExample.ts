
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

// class Department{
//     protected employees: string[] = [];

//     constructor(protected  id: string, public name: string){
//         console.log("from Department class Constructor");
//         this.id = id;
//         this.name = name;
//     }


//     describe(this: Department){
//         // console.log(`Department (${this.id}): ${this.name}`);
//         console.log("from describe method");

//     }

//     addEmployee(employee: string){
//         console.log("Employee Added");
//     }

// }


// const a = new Department("1","karthick");

// a.describe();


//getter and setter Example in Ts

//In Typescript getter and setter has different names.

//*Getter - Accessor | Setter - Mutator.

// class Developer{
//     private lang: string = " ";
//     private task: string[] = [];

//     get language(){
//         return this.lang;
//     }
//     set language(value: string){
//          this.lang = value;
//     }

//     get tasks(){
//         return this.task;
//     }

//     set tasks(values: string[]){
//         this.task = values;
//     }


// }

// const dev = new Developer();

// dev.language = "java";

// dev.tasks = ["code", "debug"];

// console.log("Lanuguages : " + dev.language);
// console.log("tasks are : " + dev.tasks);


//static method Example in Ts


class ExampleClass{

    //static variable 
    static someName = "Thanos";

    static checkStatic(value: string){
        console.log(value);
    }

    static anotherStatic(inputOne: number , inputTwo: number): number{
        console.log("static method called");
        return inputOne + inputTwo;
    }

}


const classObj = new ExampleClass();

const newObj = ExampleClass.checkStatic("karthick");

const e1 = ExampleClass.anotherStatic(2,2);
console.log(e1);
console.log("static variable : " + ExampleClass.someName);

