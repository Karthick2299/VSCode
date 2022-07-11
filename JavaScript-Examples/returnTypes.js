//with return with arguments

// function exampleFunction(someContent){
//     console.log(someContent);
//     return someContent;
// }

// var result = exampleFunction("karthick");

// console.log(result);

//without return without argument

// function exampleFunction(){
//     console.log("example Function");
// }

//  exampleFunction();

 //with argument without return type

//  function exampleFunction(someContent){
//     console.log(someContent);
//  }

//  var result = exampleFunction("karthick");

//without argument with return type

// function exampleFunction(){
//     var text = "karthick";
//     return text;
// }

// var result = exampleFunction();

// console.log(result);

//transpose array example

let array = [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3]
];

console.log("Before : " + array);

//arrow function example
// const newInputVariable = (arr) => {
//     console.log(arr);
// }

// newInputVariable("karthick");

// function matrixTranspose(array){
//     let length = array.length;


//     for(let row = 0; row < length; row++){
//         for(let col = 0; col < row; col++){
//             const temp = array[row][col];
//             array[row][col] = array[col][row];
//             array[col][row] = temp;
//         }
//     }
//     console.log(array);
//     return array;
// }

// var result = transpose(array);
// console.log("result is : " + result);


// function exampleFunction(){
//     let someVar = "god";
//     console.log(someVar); // local variable
//     let someInput = "jesus";
//     return someInput;

// }

// var result = exampleFunction();

// console.log(result);


//Function Example with new keyword

const example = new Function(`console.log("from function")`);

console.log(example);