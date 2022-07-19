"use strict";
//Function Overloading Example in Ts
// type Combinable = string | number;
// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: string, b: number): string;
// function add(a: number, b: string): string;
// function add(a: Combinable, b: Combinable){
//    if(typeof a === "string" || typeof b === "string"){
//       return a.toString() + b.toString();
//    }
//    return a + b;
// //    return a + b;
// }
// const result_add = add(2, 2);
// console.log(result_add);
//*Optional Chaining Example in Ts
// const billionaire = {
//     name: "Elon musk",
//     AI: {
//         name: "Jarvis"
//     }
// };
// const artificial = billionaire.AI?.name;
// console.log(artificial);
//It gives Error => because the play property doesn't exists in billionaire object
// const demo = billionaire?.play?.game;
// console.log(demo);
//Null Coalescing Example in Ts
var userInput = null;
var storeData = userInput !== null && userInput !== void 0 ? userInput : "Default";
console.log(storeData);
