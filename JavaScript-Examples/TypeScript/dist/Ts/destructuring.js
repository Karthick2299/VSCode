"use strict";
//destructuring Example using Ts.
/*DESTRUCTURING :

    Destructuring in JavaScript is a
    simplified method of extracting multiple
     properties from an array */
// var[first, second, third] = ["aaa","bbb", "ccc"];
// console.log(first + " " + second + " " + third);
//destructuring Example 2
// var a, b;
// [a = 50, b = 40] = [];
// console.log(a + " " + b);
//destructuring Example 3 
// var planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];
// var[first, second, ...rest] = ["Mercury", ...planets];
// console.log(first);
// console.log(second);
// console.log(rest);
/// swapping variables Example
// var InputOne, InputTwo;
// [InputOne, InputTwo] = ['Kratos', "Thor"];
// [InputOne, InputTwo] = [InputTwo, InputOne];
// console.log(InputOne + " " + InputTwo);
//destructuring Example 2 
let array = ["Divine", "Steffi"];
let [firstName, lastName] = array;
console.log(firstName + " " + lastName);
