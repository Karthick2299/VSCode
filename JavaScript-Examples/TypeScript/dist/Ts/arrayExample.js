"use strict";
// interface Example{
//     id:number;
//     name: string;
//     role: string;
// }
class class_S {
    constructor() {
        this.data = [];
    }
    // id: number;
    // Name: string;
    // role: string;
    // constructor(id: number, Name: string, role: string){
    //     this.id = id;
    //     this.Name = Name;
    //     this.role = role;
    // }
    addItems(id, Name, role) {
        let a = [
            [
                this.data.push(id),
                this.data.push(Name),
                this.data.push(role)
            ]
        ];
    }
}
// const a = new class_S(1, "a","a");
const a = new class_S();
a.addItems(2, "karthick", "developer");
a.addItems(3, "hello", "testing");
a.addItems(4, "aaa", "bbb");
a.addItems(5, "hi", "hello");
console.log(a.data);
