//Intersection types Example in Ts

// type InputOne =  string | number;

// type InputTwo = string | number;

// type mainType = InputOne & InputTwo;// Intersection type is : string | number

// const hello: mainType = "karthick";

// console.log(hello);

//*Generic Example in Ts

function identity<T>(firstName: T): void{
    console.log(firstName);
}


let output = identity<string>("Generic type - String");

let output_one = identity<number>(2);