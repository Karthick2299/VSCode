const formElement = document.querySelector("#formTag") as HTMLFormElement;
const saveBtn = document.querySelector("#btn_s") as HTMLButtonElement;
const showBtn = document.querySelector("#btn_d") as HTMLButtonElement;
const inputField_1 = document.querySelector("#name") as HTMLInputElement;
const inputField_2 = document.querySelector("#age") as HTMLInputElement;
const displayResult = document.querySelector("#showResult") as HTMLParagraphElement;


//print values of input element to console.

// function submitting(){

//     const content = inputField.value;
//     console.log("it's working");

// }

//print values of array to console

var arrayName = new Object();
var arrayAge = new Object();


function submitting(){
    
    var stack = [];

    const Name: string = inputField_1.value;
    const Age: string = inputField_2.value;

    //printing Values

    // console.log(Name);
    // console.log(Age);

    const combineValues = { Name ,  Age } ;

    
    const print = combineValues.Name + " , " + combineValues.Age;

    if((combineValues.Name !== "") && (combineValues.Age !== "") ){
        stack.push(combineValues); 
        displayResult.innerHTML = "[ " + print + " ] " +  " is Added ";
    }
  else{
        console.log('Invalid Input');
        displayResult.innerHTML = "Oops!! Invalid Input";
    }


    console.log( ...stack);

   
    // arrayName[arrayName.length] = inputValue_1;
    // arrayAge[arrayAge.length] = inputValue_2;




}

