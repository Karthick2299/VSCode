//Function Overloading Example in Ts

type someName = string | number;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: someName, b: someName){
  
   if(typeof a === "string" || typeof b === "string"){
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

const storeData = userInput ?? "Default";

console.log(storeData);