// interface Example{
//     id:number;
//     name: string;
//     role: string;
// }

// const arr: Example[] = [];

// const a1: Example = {
//     id: 1,
//     name: "a",
//     role: "b"
// }

// arr.push(a1);

// console.log(arr);



//add Elements to parent class

// class parent_1{
    
//     parent: string[] | number[] = [];

//     id: number;
//     name: string;
//     role: string;

//     constructor(id: number, name: string, role: string){
//         console.log("constructor Called");
//         this.id = id;
//         this.name = name;
//         this.role = role;
//     }

    
// }
// const p = new parent_1(1, "k","s");


interface Interface_one{
    id: number;
    Name: string;
    role: string;
}

class class_S{

    data:(string | number)[] = [];

    // id: number;
    // Name: string;
    // role: string;

    // constructor(id: number, Name: string, role: string){
    //     this.id = id;
    //     this.Name = Name;
    //     this.role = role;
    // }

    addItems(id: number, Name: string, role: string){
        let a = [
            [
            this.data.push(id),
            this.data.push(Name),
            this.data.push(role)
            ]
        ]

        

    }
    


}

// const a = new class_S(1, "a","a");
const a = new class_S();
a.addItems(2,"karthick","developer");
a.addItems(3, "hello","testing");
a.addItems(4, "aaa","bbb");
a.addItems(5, "hi","hello");

console.log(a.data);