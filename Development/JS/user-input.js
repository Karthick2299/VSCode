// var firstName = window.prompt("Enter Your name : ");
// alert("I'm " + firstName);

// prompt("hello");

//nested try block is possible in js.


var num1 = 0;
var num2 = 2;
var divide;
try{
    try{
      
    
   divide = num1 / num2;
   console.log(divide);
    }
    catch(simple){
        console.log("hello" + kirukku);
    }
}

catch(error){
    console.log("error is " + error);
}
finally{
    console.log("it always run ");
}