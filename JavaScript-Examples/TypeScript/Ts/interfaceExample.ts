// interface exampleInterface{
//     // readonly name: string; - if we use readonly, the values will be Immutable

//     name: string;

//     display(view: string): void;
// }

// // class exampleClass implements exampleInterface{

// //     name = "karthick";
// //     // name = "hello";// error because of readonly keyword

// //     display(view: string): void{
// //         console.log("from class");
// //         console.log("data is " + view);
// //     }

// // }

// // let example = new exampleClass();

// // console.log(example.name);
// // example.display("karthick");

// // var customer: exampleInterface = {
// //     name : "karthick",

// //    display: (value: string) => { return value}

// // }

// // console.log(customer.display("hello"));
// // console.log(customer.name);

// //Interface Inheritance Example

// // interface User{
// //     firstName: string;
// // }

// // interface userTwo {
// //     lastName: string;
// // }

// // interface mainUser extends User, userTwo{
// //     skill: string;
// // }

// // var customer = <mainUser>{};

// // customer.firstName = "karthick";
// // customer.lastName = "Divine";
// // customer.skill = "Hunting";

// // console.log(customer.firstName + " " + customer.lastName + " " + customer.skill);

// //*Method Overloading Example

// class myExampleClass {

//     message: string;

//     constructor(n: string){
//         this.message = n;
//     }

//     exampleFunction(person: string): string;
//    exampleFunction(persons: string[]): string[];

//    exampleFunction(person: unknown): unknown{
//     if(typeof person === "string"){
//         return `${this.message}, ${person}`;
//     }
//     else if(Array.isArray(person)){
//         return person.map(name => `${this.message}, ${name}`);
//     }

//     throw new Error("Something went Wrong");

//    }

// }

// const myClass_1 = new myExampleClass("hello");

// console.log(myClass_1);

//Interface Example

// interface Animal{
//     name: string;
// }

// interface Lion extends Animal{
//     throne: string;
// }

//type Example

// type Animal = {
//     name: string;
// }

// type Bear = Animal & {
//     honey: boolean;
// }

// type total = Animal & Bear;

// const a_one: total = {
//     name: "lion",
//     honey: true
// }

// console.log(a_one);

//partial type Example using interface
interface Todo {
  name: string;
  title: string;
  id: number;
  description: string;
}

type Preview = Partial<Todo>;

const hello: Preview = {
  name: "karthick",
  title: "dev",
  id: 123,
  description: "hello world",
};

console.log(hello);

//readonly Example

// class Example_one implements Todo {
//   name = "Divine Steffi";
//   title = "dev";
//   id = 123;
//   description = "hello world";

//   printResult() {
//     return (
//       this.name + " " + this.title + " " + this.id + " " + this.description
//     );
//   }
// }

// const example_one = new Example_one();

// console.log(example_one.printResult());
