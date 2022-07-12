/* Singleton is a creational design pattern, 
which ensures that only one object of its kind exists 
and provides a single point of access to it for any other code.
*/


// class singletonClass{

//     private static instance: singletonClass;

//     private constructor(){
//         console.log("private constructor called");
//     }

//     static someMethod(): void{
//         console.log("some method in SingleTon class");
//     }

// }

// function checkingObject(){
//     const s1 = singletonClass.someMethod();
//     const s2 = singletonClass.someMethod();

//     if(s1 === s2){
//         console.log("Singleton works");
//     }
//     else{
//         console.log("Singleton Failed");
//     }
// }

// checkingObject();



//Interface Example

interface ExampleInterface{
    firstName: string,
    lastName: string,
    age: number

    fullName(result: string): string;

}


let user_one : ExampleInterface;

user_one = {
    firstName: "karthick",
    lastName: "Divine",
    age: 22,

    fullName(result: string): string{

        result = this.firstName + " " +  this.lastName;
       console.log("Full Name is : " + result);

       return result;
    }

};

console.log(user_one);
const result = user_one.fullName("hello");
console.log(result);


