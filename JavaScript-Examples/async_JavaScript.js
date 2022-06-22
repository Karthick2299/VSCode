//Example 1 - simple asychronous function using setTimeout() method.

// function displayText(){
//     console.log("this is the my example text, it showed after three seconds.");
// }

// setTimeout(displayText, 3000);


//Example 2  - by using setInterval() method

// function displayText(){
//     console.log("text from displayText method");
// }

// setInterval(displayText, 1000);


//Example 3 - using setInterval() method and Date() method.

// function showTiming(){
//     let date = new Date();

//     console.log(date.getHours() + " : " +  date.getMinutes() + " : " +  date.getSeconds());
// }

// setInterval(showTiming, 1000);

//Example 4 - Asynchronous Javascript 

// function asychronousFunction(){
//     console.log("this function will run after three seconds");
//     console.log("from asynchronous function");
// }

// function displayer(){
//     console.log("this is normal function");
//     console.log("displayer Method");
// }

// setTimeout(asychronousFunction, 3000);
// displayer();


//promises Example

// let myPromise  = new Promise(function(resolve, reject){
//     let input = 1;

//     if(input == 11){
//         resolve("messge from resolve ...Sucess!!!");
//     }
//     else{
//         reject("failed!!");
//     }

// });


// myPromise.then(
//     function(value){
//         displayer(value);
//     },

//     function(error){
//         displayer(error);
//     }
// );

// function displayer(inputValues){
//     console.log("message : " + inputValues);
// }


//Promise Example 2

// let promiseVariable = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("Message from resolve")},2000);
//     });

// promiseVariable.then(function(InputValue){
//     console.log(InputValue);
// });


//Promise Example 2

// function myfunction(){
//     return Promise.resolve("success") + Promise.reject("reject message");
// }

// function anotherFunction(){
//     return Promise.reject("reject message");
// }

// myfunction().then(
//     function display(){
//         console.log("Success Message");
//     }

// );


//Promise Example 3

// let myPromise = new Promise(success,error);

// let exampleVariable = true;

// myPromise.then(success);
// myPromise.catch(error);

// function success(){
//     console.log("success Message");
// }

// function error(){
//     console.log("Error Message");
// }


//async Example 1

// async function displayer(){
//     let promise  = new Promise(function(resolve,reject){
//         resolve("hello world");
//     });
    
//     console.log(await promise);
    
// }

// displayer();

//Promise reject Example

// function resolved(){
//     console.log("resolved");
// }

// function rejected(result){
//     console.error(result);
// }

// Promise.reject(new Error("Something went Wrong")).then(resolved,rejected);


//promise Example program

const count = true;

let promiseVariable = new Promise(function(resolve,reject){
    if(count){
        console.log("count is there");
    }
    else{
        console.log("no counts");
    }
});

// console.log(promiseVariable);

