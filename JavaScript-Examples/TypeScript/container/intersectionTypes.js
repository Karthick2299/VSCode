"use strict";
//Intersection types Example in Ts
// type InputOne =  string | number;
// type InputTwo = string | number;
// type mainType = InputOne & InputTwo;// Intersection type is : string | number
// const hello: mainType = "karthick";
// console.log(hello);
//*Generic Example in Ts
function identity(firstName) {
    console.log(firstName);
}
var output = identity("Generic type - String");
var output_one = identity(2);
