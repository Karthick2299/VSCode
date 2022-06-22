//function declaration Example 1

// function myDeclaredFunction(){
//     console.log("from my Declared Function");
// }

// myDeclaredFunction();

//function Example 2 - Using Expression

// const example = function() {
//     return console.log("from exampleNameOfFuncton");
    
// }
// example();


//function Example 2 - call()

// const user = {
//     fullName : function(){
//         return console.log(this.firstName + " " + this.lastName);
//     }
// };

// const user_1 = {
//     firstName : "karthick",
//     lastName : "Selvam"
// };


// user.fullName.call(user_1);


//function Example 3 - addition program

// function addition(first, second){
//     let sum = first + second;
//     return console.log(sum);
// }
// addition(5,5);

//function Example 4 - function call

// const user = {
//     firstName : "karthick",
//     lastName : "selvam",
//     fullName : function(){
//         return console.log(this.firstName + " " + this.lastName);
//     }
// };

// user.fullName();

//function Example 5 - function call() -2

// const person = {
//     fullName : function(){
//         return console.log(this.firstName + " " + this.lastName);
//     }
// };

// const user_one = {
//     firstName : "karthick",
//     lastName : "Selvam"  
// };

// const user_two = {
//     firstName : "Christian",
//     lastName : "Bale"
// };

// const user_three = {
//     firstName : "Tom",
//     lastName : "Cruise"
// };


// person.fullName.call(user_one);
// person.fullName.call(user_two);
// person.fullName.call(user_three);

//function Example 6 - apply()

// const user = {
//     firstname : "hello",
//     fullName : function(){
//        return console.log(this.firstName + " " + this.lastName);
//     }
// }

// const user_one = {
//     firstName : "christian",
//     lastName : "Bale",
// }

// user.fullName.apply(user_one);

//function Example 7 - bind()

// const users = {

//     firstName : "Christian",
//     lastName : "Bale",
//     fullName : function(){
//         return console.log(this.firstName + " " + this.lastName);
//     }
// };

// const user_one = {
//     firstName : "Tom",
//     lastName : "Cruise"
// };

// let fullName = users.fullName.bind(user_one);

// fullName();


//function Example 7 - Closures
//Javascript variables belong to the local or global scope
//Global Variable can made of local(private) with Closures



// const add = (function (){
//     let counter  = 0;
   
//     return function(){
//         counter += 1;
//         console.log(counter);
//     }
// })();

// add();
// add();
// add();
// add();


//function Example - multiply example

const multiply = (function(){
    let counter  = 1;

    return function(){
        counter *= 2;
        console.log(counter);
    }
})();

multiply();
multiply();
multiply();
multiply();
