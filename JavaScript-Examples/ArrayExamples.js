//Array Example - 1 length()

// const array_One = ["one","two","three"];
// console.log(array_One);
// console.log("the Length of Array : " + array_One.length);

//Array Example - 2 - concat()

// const array_One = ["aaa","bbb","ccc"];
// const array_Two = ["ddd","eee","fff"];

// const result = array_One.concat(array_Two);

// console.log(result);

//Array Example - 3 - constructor

// const First_Array = ["one","two","three","four"];
// const second_Array = ["five","six","seven"];

// let text = First_Array.constructor;

// console.log(text);


//Array Example  3 - copyWithin()

//copyWithin(target, start, end);

// let copyArray = First_Array.copyWithin(3, 0, 1);
// console.log(copyArray);

//Array Example 4 - entries()

// const cars = ["mercedez","maserati","rollsroyce","BMW"];

// const carEntries = cars.entries();

// console.log(carEntries);

// for(let x of carEntries){
//     console.log(x);
// }

//Array Example 5 - every();

// const ages = [18,22,33,44,55];

// let result = ages.every(checkAge);

// function checkAge(age){
//     return age >= 18;
// }

// console.log(result);

//Array Example 6 - fill() => fill(value, start, end);

// const array_1 = ["one","two","three","four"];

// const result = array_1.fill("added text" , 0, 1);

// console.log(result);


//Array Example 7 - filter()

// const ages = [12,23,16,45,56];
// const result = ages.filter(checkAdult);

// function checkAdult(age){
//     return age >= 18;
// }

// console.log(result);


//Array Example 8 - find()

// const ages = [12, 23, 34, 45 ,56];
// const result = ages.find(checkAdult);

// function checkAdult(age){
//     return age >= 18;
// }

// console.log(result);

//Array Example 9 - findIndex()

// const ages = [12,22,33,12,5];
// const result = ages.findIndex(checkAge);

// function checkAge(age){
//     return age >= 18;
// }

// console.log(result);


//Array Example 10 - forEach()

// let sum = 0;

// const values = [12,33,44,55];

// values.forEach(exampleFunction);

// function exampleFunction(values){
//     // sum = sum + values;

//     sum += values;

// }

// console.log("Total value is : " + sum);

//forEach another Example

const ages = [12,22,33,44,55];

ages.forEach(agesElement => console.log(agesElement));
