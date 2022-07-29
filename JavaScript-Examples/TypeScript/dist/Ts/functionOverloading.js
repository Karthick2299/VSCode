"use strict";
//Function Overloading Example in Ts
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
    //    return a + b;
}
const result_add = add(2, 2);
console.log(result_add);
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
const userInput = null;
const storeData = userInput !== null && userInput !== void 0 ? userInput : "Default";
console.log(storeData);
