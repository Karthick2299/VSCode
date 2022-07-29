"use strict";
const formElement = document.querySelector("#formTag");
const saveBtn = document.querySelector("#btn_s");
const showBtn = document.querySelector("#btn_d");
const inputField_1 = document.querySelector("#name");
const inputField_2 = document.querySelector("#age");
const displayResult = document.querySelector("#showResult");
//print values of input element to console.
// function submitting(){
//     const content = inputField.value;
//     console.log("it's working");
// }
//print values of array to console
var arrayName = new Object();
var arrayAge = new Object();
function submitting() {
    var stack = [];
    const Name = inputField_1.value;
    const Age = inputField_2.value;
    //printing Values
    // console.log(Name);
    // console.log(Age);
    const combineValues = { Name, Age };
    const print = combineValues.Name + " , " + combineValues.Age;
    if ((combineValues.Name !== "") && (combineValues.Age !== "")) {
        stack.push(combineValues);
        displayResult.innerHTML = "[ " + print + " ] " + " is Added ";
    }
    else {
        console.log('Invalid Input');
        displayResult.innerHTML = "Oops!! Invalid Input";
    }
    console.log(...stack);
    // arrayName[arrayName.length] = inputValue_1;
    // arrayAge[arrayAge.length] = inputValue_2;
}
