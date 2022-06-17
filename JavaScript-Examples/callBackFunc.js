// function displayer(inputToShowOnConsole){

//     console.log(inputToShowOnConsole);

// }


// function firstFunction(){
//     displayer("from firstFunction");
// }

// function secondFunction(){
//     displayer("from secondFunction");
// }

// firstFunction();
// secondFunction();


//Example number 2 - using calculator functions.


// function displyCalculation(calculation){
//    console.log("Its working fine");
//     console.log("The answer is " + calculation);
// }

// function addition(number_1, number_2){
//     let sum = number_1 + number_2;
//     return sum;
// }


// let showTheResult = addition(3,5);

// displyCalculation(showTheResult);


//Example 3 

function displayResult(result){
    console.log("Its working Fine.");
    console.log(result);
}


function addition(number_1, number_2, callDisplayResult){
    let sum = number_1 + number_2;
    return callDisplayResult(sum);
}

mainFunction = addition(5, 3, displayResult);
