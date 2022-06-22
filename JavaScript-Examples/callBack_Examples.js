//callback function Example 

function displayer(getInput){
    console.log("printing statement from displayer method " + getInput);
}

function addition(first_number, second_number, callbackFunction){
    let sum = first_number + second_number;
    callbackFunction(sum);

}

addition(3,4,displayer);