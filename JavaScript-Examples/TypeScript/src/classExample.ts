
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


// class ExampleClass{

//     //static variable 
//     static someName: string = "Thanos";

//     static checkStatic(value: string){
//         console.log(value);
//     }

//     static anotherStatic(inputOne: number , inputTwo: number): number{
//         console.log("static method called");
//         return inputOne + inputTwo;
//     }

// }


// const classObj = new ExampleClass();

// const newObj = ExampleClass.checkStatic("karthick");

// const e1 = ExampleClass.anotherStatic(2,2);
// console.log(e1);
// console.log("static variable : " + ExampleClass.someName);


//* Inheritance Example in Ts


// class Animal {
//     name: string;

//     constructor(theName: string){ this.name = theName;}

//     move(distanceInMeters: number = 0){
//         console.log(`${this.name} moved ${distanceInMeters}m`);
//     }
// }

// class Snake extends Animal{
//     constructor(name: string){
//         super(name);
//     }

//     move(distanceInMeters = 5){
//         console.log("Slithering...");
//         super.move(distanceInMeters);
//     }
// }

// class Horse extends Animal{
//     constructor(name: string){
//         super(name);
//     }

//     move(distanceInMeters = 45){
//         console.log("from horse class");
//         super.move(distanceInMeters);
//     }
// }

// let s = new Snake("King Cobra");

// let h: Animal = new Horse("Black weather");

// s.move();
// h.move(22);


//class Example - accessing function from another class

// class ExClassOne{
//     firstName:string;

//     constructor(n: string){
//         this.firstName = n;
//     }

//     describe(this: ExClassOne){
//         console.log("from describe method : " + this.firstName);
//     }
// }


// const firstObj = new ExClassOne("karthick");

// firstObj.describe();

// const secondObj = {
//     firstName: "Object property",
//     describe: firstObj.describe
// };

// secondObj.describe();


//type reserved keyword Example

// type example = {
//     firstName: string;
//     lastName: string;

// };

// type example_1 = {
//     firstName: string;
//     checking: boolean;
// }

// type mainContainer = example & example_1;

// const newObj: mainContainer = {
//     firstName: "karthick",
//     lastName : "aaa",
//     checking : true
// };

// console.log(newObj);


//type - Example in Ts

// class Car  {
//     drive(){
//         console.log("driving...");
//     };
// }

// class Truck{
//     drive(){
//         console.log("Driving a Truck");
//     }

//     loadCargo(amount: number){
//         console.log("Loading cargo ... " + amount);
//     }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle){
//     vehicle.drive();
//     if(vehicle instanceof Truck){
//         vehicle.loadCargo(1000);
//     }
// }

// useVehicle(v1);
// useVehicle(v2);



//* Descrimination Union Example

// interface Bird{
//    type: 'bird';
//     flyingSpeed: number;
// }

// interface Horse{
//     type: 'horse';
//     runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal){
//     let speed;
//     switch(animal.type){
//         case 'bird':
//             console.log("from bird class");
//             speed = animal.flyingSpeed;
//             break;
//         case 'horse':
//             console.log('from horse class');
//             speed = animal.runningSpeed;
//             break;
//     }
//     console.log("Moving at speed: " + speed);
// }

// moveAnimal({type: 'horse', runningSpeed: 100});


//* index properties Example 

interface ErrorContainer{
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: "aaa",
    userName: "user"
};

console.log(errorBag);