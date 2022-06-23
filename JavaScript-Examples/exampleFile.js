//synchronous function Example

// function function_one(){
//     console.log("from function one");
// }

// function function_two(){
//     console.log("from function two")
// }


// function_two();
// function_one();

//asynchronous function Example

//setTimeout()

//setTimeout(function, 2000);

// function function_one(){
//     console.log("from function one");
// }

// function function_two(){
//     console.log("from function two")
// }

// setTimeout(function_one, 3000);
// setTimeout(function_two,2000);

// function function_one(){
//     console.log("from function one");
// }

// function function_two()
// {

   
//     console.log("from function two")
// }

// // setInterval(function_one, 3000);

// function_two();



// let someVariable = () => {
//     console.log("from arrow function");
// }


// // console.log(someVariable);
// someVariable();

// let promise  = new Promise(function(resolve, reject){
//     let someNumber = 10;

//     if(someNumber == 10){
//         resolve("success");
//     }
//     else{
//         reject(" from reject error occured");
//     }
// })

// .then(
//     function displayResult(result){
//         console.log("from displayResult " + result)
//     }
// )

// .catch(
//     function displayFailure(result){
//         console.log("from displayFailure " + result);
//     }
// )

// .finally(
//     function finallyMethod(){
//         console.log("from finally method");
//     }
// )

//async / await Example 


let promise = new Promise((resolve,reject) => {
    setTimeout(function(){
        resolve("success message")
    }, 3000);
})

promise.then(
    function successMessage(result){
        console.log(result);
    }
)

promise.catch(
    function ErrorMessage(result){
        console.log(result);
    }
);

async function displayResult(){
    let anotherVariable = await promise;
    console.log(anotherVariable);
    console.log("from displayResult method");
}

displayResult();