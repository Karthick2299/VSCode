//print statment from Typescript

// console.log(" from Typescript");

//Addition of Two Numbers

// function addNumber(first:number, second:number){

//     let sum:number = first + second;

//     console.log(sum);
// }

// addNumber(5,2);

//object Example using typescript

// let users: {
//     firstName: string,
//     lastName : string
// };

// users = {
//     firstName : "karthick",
//     lastName : "hello"
// };

// console.log(users);

//enum Example using typescript

// enum statusCode{
//     NotFound = 404,
//     Success = 200,
//     Accepted = 202,
//     BadRequest = 400
// };

// console.log(statusCode.NotFound);
// console.log(statusCode.Success);



// console.log(typeof user);

//array Example using tyepscript

// const users: string[] = ["karthick","heisenberg"];
// console.log(users);

/* Tuples is a typed array with the pre - defined length and types for each other.
to define a Tuple , specify the type of each element in the array */


//tuple Example using typescript

// let ourTuple: [number , number , string];

// ourTuple = [2, 3, "someString"];

// console.log(ourTuple);


//tuple Example 2 using typescript

// const users : [firstName : string, lastName : string] = ["aaa","bbb"];
// console.log(users);


//same variable names in different block Example using typescript

// let firstNumber:string = "global variable";

// function getInfo(){

//     let firstNumber:string = "from getInfo method";


//     if(true){
//         let firstNumber:string = "Inside if statement";
//         console.log(firstNumber);
//     }
//     console.log(firstNumber);

// }

// console.log(firstNumber);

// getInfo();


//number Methods Examples
/*
    toExponential()         - exponential notation format
    toFixed()               - fixed point notation
    toLocaleString()        - local specific representation of the number
    toPrecision()           - exponential or fixed point to the specified precision
    toString()              - string representation of number
    valueOf()               - returns primitive value of the number.
*/

//toExponential() Example

// let myNumber:number  = 5432;
// console.log( "toExponential() : " + myNumber.toExponential());

//toFixed() Example

// console.log("toFixed() : " + myNumber.toFixed());

//toLocaleString() Example

// console.log("toLocaleString() : " + myNumber.toLocaleString());

//toPrecision() Example

// console.log("toPrecision() : " + myNumber.toPrecision());

//toString() Example

// console.log("toString()  : " + myNumber.toString());

/* -------------------------------------------------------------------- */

//String Examples

//string concat() Example

// let firstString:string = "Dark";
// let secondString:string = "Knight";

// let result:string = firstString.concat(" ", secondString);

// console.log("Concatenation performed : " + result );

//Type Assertion Example

// interface Employee{
//     name : string;
//     code : number;
// }

// let employee  = <Employee> {};
//     employee.name = "karthick";
//     employee.code = 123;

//     console.log(employee);


//If statement Example using Typescript

// let firstNumber:number = 5, secondNumber = 5;

// if(firstNumber == secondNumber){
//     console.log("Equals");
// }
// else if(firstNumber < secondNumber){
//     console.log("firstNumber less than second Number");
// }
// else {
//     console.log("firstNumber is Greater than secondNumber");
// }

//switch statement Example using Typescript

// let day:number = 4;

// switch(day){

//     case 0: 
//         console.log("Sunday");
//         break;
//     case 1: 
//         console.log("Monday");
//         break; 
//     case 2: 
//         console.log("Tuesday");
//         break; 
//     case 3: 
//         console.log("Wednesday");
//         break;
//     case 4: 
//         console.log("Thursday");
//         break; 
//     case 5: 
//         console.log("Friday");
//         break; 
//     case 6: 
//         console.log("Saturday");
//         break;

//     default:
//         console.log("Invalid Input");
//         break;
// }

//void keyword Example

// function printSomething():void{
//     console.log("hello from printSomething Method ");
//     // return 0; -- It gives Error.
// }

// printSomething();



// function throwSomeError(message : string) : never{
//     throw new Error(message);
// }

// throwSomeError("hello");


//union type Example using Typescript

// let code: (number | string);

// code = "hello";
// code = 23;

// console.log(code);


//function parameter as Union Example

// function displaySomething(inputValue_1:(number | string), inputValue_2:(number | string)){
//     console.log(typeof(inputValue_1)  + " : " + inputValue_1 );
//     console.log(typeof(inputValue_2) + " : " + inputValue_2);
// }


// displaySomething(254, "karthick");

//TypeAssertion Example using TypeScript

// let example: any = "karthick";
// let anotherVariable = <string> example;

// console.log(typeof(anotherVariable));

//Type assertion with Object Example using typescript

// interface Employee{
//     FirstName: string,
//     id:number
// }

// let employee = <Employee>{};

// employee.FirstName = "karthick";
// employee.id = 123;


// console.log(employee);


//for loop Examples using typescript

// let str = "Batman";

// for(var character of str){
//     console.log(character);
// }

//Fat Arrow function Example using typescript

// let addition = (firstNumber:number, secondNumber:number) => {
//     console.log(firstNumber + secondNumber);
// }

// addition(10,20);


//arrow function Example 2

// let printSomething = () => console.log("from printSomething");

// printSomething();


//arrow function Example 3


// function addition(firstNumber:number, secondNumber : number){
//     return firstNumber + secondNumber;
// }

// let sum:number = addition(5,5);

// console.log(sum);

/* ------------------------------------------------------------------ */

//type alias Example using Typescript

// type User = {firstName : string , age : number};

// const user_one : User = {firstName : "karthick", age : 23};

// console.log(user_one);

//type alias Example 2

// type user = {name: string, age: number};
// const user_one : user = {name : "karthick", age: 23};


// function greet(User : user){
//     console.log(User.name);
//     console.log(User.age);
// }
// greet(user_one);


/*----------------------------------------------------------------*/  


//function types Examples

// function add(a:number, b: number){
//     return a + b;
// }

// function printResult(result : number): void{
//     console.log(result);
// }

// printResult(add(10,5));

// let combineValues : (a: number , b: number) => number;
// // let combineValues : Function;
// // combineValues = add;
// // combineValues = 10;-> it gives error because combineValues assigned as combineValues
// combineValues = add;

// console.log(combineValues(8,8));


//never keyword Example using Typescript

//this function always throw error , it never returns anything. so we put never keyword
// function generateError(ErrorMessage : string, code: number):never{
//     throw {message: ErrorMessage, ErrorCode: code};
// }

// generateError("Error Occured", 123);

//*tuple Example

// const array : any[] = ["aaa","bbb","ccc",true,431]

// let userData : [number , string] = [123,"karthick"] ;

//* Enum Example 
// enum someName{
//     firstName = "karthick",
//     secondName = 2
// }


// let result_1_point_one = someName.firstName;
// console.log(result_1_point_one);
// let result_one = someName["firstName"];
// console.log(result_one);

// let result_two = someName.secondName;
// console.log(result_two);


//* Arrow function Example in Typescript

// const printOutput = () => { return console.log("from arrow function");};

// printOutput();

//arrow function Example

// const add = (numberOne:number , numberTwo:number) => {
//     return numberOne + numberTwo;
// }

// console.log(add(2,2));

//Rest parameters Example

// const add = (...numbers:number[]) => {
//     return numbers.reduce((curResult , curValue) => {
//         return curResult + curValue;
//     });
// }

// const addNumbers = add(2,2,2,2,2);
// console.log(addNumbers);

//Destructuring Array - It means Pulling elements out of the Array.


//*Interface Examples in Ts

// interface Example{
//     id: number;
//     FirstName: string;
// }

// let Ex_one: Example = {id : 1, FirstName: "karthick"};

// console.log(Ex_one);


//*Class Example in Ts

// class Department {
//     name: string;

//     constructor(n: string){
//         this.name = n;
//     }
// }


// const accounting = new Department("constructor Called");

// console.log(accounting);

// class Example in typeScript

// class Department {
//     name: string;

//     constructor(n: string){
//         this.name = n;
//     }

//     describe(this: Department){
//         console.log("Department : " + this.name);
//     }
// }

// const exampleObj = new Department("Karthick");

// exampleObj.describe();


//class Example 2 

// class ExampleClass{
//     firstName: string;
//     id: number;
//     constructor(name: string, id: number){
//         this.firstName = name;
//         this.id = id;

//     }

//     description(this: ExampleClass){
//         console.log("FirstName is : " + this.firstName);
//         console.log("Id is : " + this.id);
//     }
// }


// const exampleObj = new ExampleClass("karthick",123);

// exampleObj.description();

//! rest paraemter Example using TS

// let Greet = (greeting: string, ...names: string[]) => {
//     return greeting + " " + names.join(", ");
// }

// console.log(Greet("karthick", "hello", "Batman"));




