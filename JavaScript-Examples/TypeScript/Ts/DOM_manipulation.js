var formElement = document.querySelector("#formTag");
var saveBtn = document.querySelector("#btn_s");
var showBtn = document.querySelector("#btn_d");
var inputField_1 = document.querySelector("#name");
var inputField_2 = document.querySelector("#age");
var displayResult = document.querySelector("#showResult");
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
    var Name = inputField_1.value;
    var Age = inputField_2.value;
    //printing Values
    // console.log(Name);
    // console.log(Age);
    var combineValues = { Name: Name, Age: Age };
    var print = combineValues.Name + " , " + combineValues.Age;
    if ((combineValues.Name !== "") && (combineValues.Age !== "")) {
        stack.push(combineValues);
        displayResult.innerHTML = "[ " + print + " ] " + " is Added ";
    }
    else {
        console.log('Invalid Input');
        displayResult.innerHTML = "Oops!! Invalid Input";
    }
    console.log.apply(console, stack);
    // arrayName[arrayName.length] = inputValue_1;
    // arrayAge[arrayAge.length] = inputValue_2;
}
