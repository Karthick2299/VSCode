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
function printSomething() {
    console.log("hello from printSomething Method ");
}
printSomething();
