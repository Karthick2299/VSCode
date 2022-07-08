'use strict';
// var newInputVariable = 5;

// let checks = newInputVariable > 15 ? console.log("Succeed") : console.log("Failed");


//Call back function

// function addNumber(num1, num2){
//     let sum = num1 + num2;
    
//     display(sum);
//     return sum;
// }

// function display(sumValue){
//     console.log("Sum Value is " + sumValue);
// }

// addNumber(1,2);


//Recursive Function

// function sum(number){
//     if(number === 0){
//         return 0;
//     }
//     return number + sum(number - 1);
// }

// var result = sum(10);
// console.log(result);


//linear sum for even numbers

// function evenNumbers(number){
//     if(number === 0){
//         return 0;
//     }
//     else if(number % 2 !== 0){
//         return evenNumbers(number - 1);
//     }
//     return number + evenNumbers(number - 1);
// }

// var result = evenNumbers(10);
// console.log(result);


//number exponent(power)

// function powerFunction(base, exponent){
//     if(exponent === 1){
//         return base;
//     }
//     return base * powerFunction(base, exponent - 1);
// }

// var result = powerFunction(2,3);

// console.log(result);


//make first letter  captial of every work

// const str = "free code camp";
// const words = str.split(" ");

// for(let i = 0; i < words.length; i++){
//     words[i] = words[i][0].toUpperCase() + words[i].substr(1);
// }

// console.log(words);

//array methods Example - using arr.splice() method

// let array = ["Dream", "Big", "work", "Hard"];

// array.splice(1,1);

// console.log("slice method applied : " + array);

//array splice() Example 2

// let array = ["Dream", "Big", "Work", "Hard"];

// array.splice(0,2, "new Replacement", "Thanos");

// console.log(array);


//array Example - concat method

// let array = ["Dream", "Big", "Work", "Hard"];
// // let array_2  = ["hi","hello","Batman", "Doctor Strange"];
// var result = array.concat(["hi","hello","Batman", "Doctor Strange"]);

// console.log(result);


//array Example - split(), map() and join().

// var result_1 = camelize("background-color");
// var result_2 = camelize("list-style-image");
// var result_3 = camelize("webkit-transition");

// function camelize(str){
//     return str.split("-").map(
//         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)

//     ).join("");

   
// }

// console.log(result_1);
// console.log(result_2);
// console.log(result_3);


//sort an array in Descending order

// let array = [5, 2, 1, -10, 8]; // => -10, 1, 3, 5, 8
// // array.sort((a,b) => b + a);
// array.sort();
// array.reverse();
// console.log(array);

//shuffle an Array

// function shuffle(array){
//     array.sort(() => Math.random() - 0.5);
//     return array;
// }

// let array = [3, 2, 1, 5, 6];
// var result = shuffle(array);

// console.log(result);

//Iterator Example 

// const array = ['hi', "hello", "how are you ? "];

// const it = array[Symbol.iterator]();
// for(let value of it){
//     console.log(value);
// }

//Matrix Example

let array =[ 
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(array[0][2]);
