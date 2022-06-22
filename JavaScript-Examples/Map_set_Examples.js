//set Example

const numbers = new Set([60,70]);

numbers.add(10);
numbers.add(20);
numbers.add(30);
numbers.add(40);
numbers.add(50);

for(let Example of numbers){
    console.log(Example);
}

//Set Example  - delete()

// numbers.delete(50);

// console.log(numbers);

//Set Example - has()

// console.log(numbers.has(10));

//Set Example - size()

// console.log(numbers.size);


//Set Example - values()

// console.log(numbers.values());

// numbers.forEach(() => {
//     console.log(numbers);
// })



//Map Example

// const cars = new Map();

// cars.set("bmw",500);
// cars.set("maserati",100);
// cars.set("tesla",300);
// cars.set("model S",700);

// console.log(cars);


//Map Example - get()

// console.log(cars.get("bmw"));

//Map Example - size

// console.log(cars.size);

//Map Example - delete()

// cars.delete("tesla");
// console.log(cars);

//Map Example - entries()

// for(let Example of cars.entries()){
//     console.log(Example);
// }