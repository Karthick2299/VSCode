// interface genericInterface<T, U>{
//     process(key: T, val: U): void;
// }

// class generic_Class<T, U> implements genericInterface<T,U>{
//     process(key: T, value: U): void{
//         console.log(`key value is : ${key}, value is : ${value}`);
//     }
// }

// let pro: genericInterface<number, string> = new generic_Class();

// pro.process(1, "karthick");

//Discriminated Union Example in Ts

// type Official = {
//     __typeName : "official";
//     name: string;
//     age: number;
// }

// type Monarch = {
//     __typeName : "Monarch";
//     name: string;
//     title: string;
// }

// type Boss = Official | Monarch;

// const bossDetails = (boss: Boss): string => {
//     if(boss.__typeName === "official"){
//         return  `${boss.name}, ${boss.age}`;
//     }
//     return `${boss.name}, ${boss.title}`;
// }

// console.log(bossDetails);


//generic example in Ts

// function getArray<T>(items: T[]){
//     return new Array<T>().concat(items);
// }

// let myNumArray = getArray<number>([10,20,30]);
// let myStrArray = getArray<string>(["hello","hi"]);

// myNumArray.push(80);
// myStrArray.push("wow");

// console.log(myNumArray);
// console.log(myStrArray);

//generic example 2 

function createArray<S, N>(value_1: S, value_2: N): [S, N]{
    return [value_1, value_2];
}

let func_1 = createArray<string, number>("hello",3);
let func_2 = createArray<number, number>(2,2);
let func_3 = createArray<number, string>(3,"Steffi");

console.log(func_1);
console.log(func_2);
console.log(func_3);