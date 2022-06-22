// const person = {
//     f_Name : "karthick",
//     L_name : "selvam",
//     eyeColor: "Brown"
// };

// const myArray = Object.values(person);
// console.log(myArray);

// let myString = JSON.stringify(person);

// console.log(myString);


//StringyFy Arrays Example

// const cars = ["maserati","audi","mercedes benz"];

// let myString = JSON.stringify(cars);

// console.log(myString);

//Getter and Setter Examples

// const person = {
//     f_name : "karthick",
//     l_name : "selvam",
//     language : "en",
//     get lang(){
//         return this.language;
//     }

// };

// console.log(person.lang);

//Object Constructors

// function User(first, last , age, eyeColor){
//     this.first = first;
//     this.last = last;
//     this.age = age;
//     this.eyeColor = eyeColor;
// }

// const myObject  = new User("karthick","Selvam",22,"brown");

// console.log(myObject.first);
// console.log(myObject.last);
// console.log(myObject.age);
// console.log(myObject.eyeColor);


//Object as Keys in Map

// const number_one = { someName : "Number One"};
// const number_two = { someName : "Number Two"};
// const number_three = {someName : "Number Three"};

// const numbers = new Map();

// numbers.set(number_one, 100);
// numbers.set(number_two, 200);
// numbers.set(number_three,300);

// for(let i of numbers){
//     console.log(i);
// }

//Map Example 1


// const map1 = new Map();

// map1.set('0','someExample');
// map1.set('2','another');

// const iterator = map1.keys();

// console.log(iterator.next().value);
// console.log(iterator.next().value);


//Object Example

// const user = {
//     name : "karthick"
// };
// console.log("Before Define Property : " + user.name);

// Object.defineProperty(user, "name", {value:"Batman"});

// console.log("After Define property " + user.name);


//Object Methods()

//Object Example 1 - assign()

// const firstObject = { a: 1, b : 2};
// const modifiedObject = {b : 4, d : 12};

// const result = Object.assign(firstObject, modifiedObject);

// console.log(result);

//Object Example 2 - create()

// const firstObject = {
//     a : 1,
//     b : 2,
//      hello : function(){
//         console.log("function from object");
//     }
// };


// const newObject = Object.create(firstObject);

// console.log(newObject.hello());



//Object Example 3 - getOwnPropertyDescriptor()

// const object_one = {
//     first_Name : "karthick"
// };

// const object_descriptor = Object.getOwnPropertyDescriptor(object_one,"first_Name");

// console.log(object_descriptor.configurable);
// console.log(object_descriptor.value);

//Object Example 4 - getOwnPropertyDescriptors()

// const object_one = {
//     first_name : "karthick"
// };

// const newDescriptor = Object.getOwnPropertyDescriptors(object_one);

// console.log(newDescriptor.first_name.writable);

// console.log(newDescriptor.first_name.value);


//Object Example 5 - getPropertyNames()

// const object_values = {
//     one : "one",
//     two : "two",
//     three : "three",
//     four : "four"
// };

// console.log(Object.getOwnPropertyNames(object_values));

//Object Example 6 - hasOwnProperty()

const object_values = {
    one : "one",
    two : "two",
    three : "three",
    four : "four"
};

console.log(object_values.hasOwnProperty('one'));
console.log(object_values.hasOwnProperty('onfivee'));