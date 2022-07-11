//destructuring Example using Ts.
var _a, _b;
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
var InputOne, InputTwo;
_a = ['Kratos', "Thor"], InputOne = _a[0], InputTwo = _a[1];
_b = [InputTwo, InputOne], InputOne = _b[0], InputTwo = _b[1];
console.log(InputOne + " " + InputTwo);
