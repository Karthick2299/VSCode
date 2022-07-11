
// class Point{
//      x: number = 0;
//      y: number = 0;
// }

// const point = new Point();
// point.x = 10;
// point.y = 20;

// console.log(point.x);
// console.log(point.y);

//class Example 2

// class ExampleClass{
//     firstName: string;
//     lastName: string;

//     constructor(first:string, last: string){
//         this.firstName = first;
//         this.lastName = last;
//     }
// }

// const point = new ExampleClass("karthick","Steffi");
// console.log(point);


// class Animal{
//     move(){
//         console.log("Moving");
//     }
// }

// class Dog extends Animal{
//     woof(times: number){
//         for(let i = 0; i < times; i++){
//             console.log("woof");
//         }
//     };
// }


// const result = new Dog();

// result.woof(3);
// result.move();

//class Example 4

class Base{
    test(){
        console.log("from base class");
    };
}

class derived extends Base {
    test(name?: string){
        if(name === undefined){
            super.test();
        }
        else{
            console.log(`Hello, ${name.toUpperCase()}`);
        }
    }
}

const point = new derived();

point.test();
point.test("karthick");