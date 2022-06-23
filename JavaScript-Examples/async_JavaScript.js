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

// const count = true;

// let promiseVariable = new Promise(function(resolve,reject){
//     if(count){
//         console.log("count is there");
//     }
//     else{
//         console.log("no counts");
//     }
// });
// console.log(promiseVariable);


//Promise Example 

// let countValue = new Promise(function(resolve,reject){
//     let count = 0;

//     if(count >= 0){
//         resolve("promise Accepted");
//     }

//     else{
//         reject("Something went Wrong");
//     }
// });


// countValue.then(
//     function successValue(result){
//         console.log(result);
//     }
// )

// .catch(
//     function errorValue(result){
//         console.log(result);
//     }
// );

//Promise Example - finally

// let countValue = new Promise(function(resolve,reject){
//     let counter = 10;

//     if(counter > 0){
//         resolve("Promise Accepted");
//     }
//     else{
//         reject("Promise Rejected");
//     }
// });


// countValue.then(
//     function successMessage(result){
//         console.log("Success Message");
//         console.log(result);
//     }
// )

// .catch(
//     function ErrorMessage(result){
//         console.log("Something went Wrong");
//         console.log(result);
//     }
// )

// .finally(
//     function finallyMethod(){
//         console.log("from finally Method");
//     }
// );


//async function Example

// async function showingResult(){
//     console.log("from showingResult function");
//     return Promise.resolve("success Message from resolve");
// }

// showingResult().then(
//     function(result){
//         console.log(result);
//     }
// )


//async function Example - without await keyword

// let examplePromise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("from resolve in Promise");
//     },4000);
// });

// async function showingResult(){

//     let result = await examplePromise;

//     console.log(result);
//     console.log("it Prints first");

// }

// showingResult();

//async function Example - with await keyword

// let examplePromise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("from resolve in Promise");
//     },4000);
// });

// async function showingResult(){

//     let result = await examplePromise;

//     console.log(result);
//     console.log("it Prints first");
//     console.log(examplePromise);

// }

// showingResult();

//difference to know for Callback function and Promise Example

// function myFunction(result){
//     console.log(result);
// }

// setTimeout(function(){
//     myFunction("Hello");
// },3000);

//Now using Promise in function

let promise = new Promise((resolve,reject) => {
    let count = false;
        if(count){
            setTimeout(() =>{
                resolve("Hello");
            },2000);
        }
        else{
            setTimeout(() => {
                reject("Hello from reject");
            },2000);
        }
});

promise.then((result) => {
    console.log(result);
})

.catch((result) => {
    console.log(result);
})

.finally(function(result){
    console.log("from finally method");
})