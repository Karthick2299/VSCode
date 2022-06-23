//callback function Example 

// function displayer(getInput){
//     console.log("printing statement from displayer method " + getInput);
// }

// function addition(first_number, second_number, callbackFunction){
//     let sum = first_number + second_number;
//     callbackFunction(sum);

// }

// addition(3,4,displayer);

//Callback function Example 2

// function myResult(){
//     let exampleString = "karthick";
//     displayMyName(exampleString);
// }

// function displayMyName(result){
//     console.log(" Hi " + result);
// }

// myResult();

//callBack function Example 3

// function mainFunction(){

//     let exampleString = "Karthick - comes from mainFunction";
//     first_function(exampleString);

// }

// function first_function(result){
//     let anotherVariable = result;
//     console.log("first function called");
//     second_function(anotherVariable);
// }

// function second_function(InputFromFirst_Function){
//     let second_variable = InputFromFirst_Function;
//     console.log("second function called");
//     displayer(second_variable);
// }

// function displayer(result){
//     console.log("finally displayer method called");
//     console.log(result);
// }

// mainFunction();

//callBack function Example

function firstFunction(){
    let someName = "loki";
    console.log("firstFunction");
    
    secondFunction(someName);
    
    }
    
    function secondFunction(result){
    let anotherVariable = result;
    
    console.log("second function");
    
    displayResult(anotherVariable);
    
    
    
    }
    
    function displayResult(anyName){
    console.log("from displayResult method");
    
    console.log("I'm " + anyName);
    
    
    }

    firstFunction();
    