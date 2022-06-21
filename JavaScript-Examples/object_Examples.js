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

const person = {
    f_name : "karthick",
    l_name : "selvam",
    language : "en",
    get lang(){
        return this.language;
    }

};

console.log(person.lang);