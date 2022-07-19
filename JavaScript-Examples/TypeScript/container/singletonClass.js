"use strict";
/* Singleton is a creational design pattern,
which ensures that only one object of its kind exists
and provides a single point of access to it for any other code.
*/
var user_one;
user_one = {
    firstName: "karthick",
    lastName: "Divine",
    age: 22,
    fullName: function (result) {
        console.log("print something");
        result = this.firstName + " " + this.lastName;
        console.log("Full Name is : " + result);
        return result;
    }
};
console.log(user_one);
var result = user_one.fullName("hello");
console.log(result);
