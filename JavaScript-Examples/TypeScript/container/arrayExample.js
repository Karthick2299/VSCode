"use strict";
// interface Example{
//     id:number;
//     name: string;
//     role: string;
// }
var class_S = /** @class */ (function () {
    function class_S() {
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
    class_S.prototype.addItems = function (id, Name, role) {
        var a = [
            [
                this.data.push(id),
                this.data.push(Name),
                this.data.push(role)
            ]
        ];
    };
    return class_S;
}());
// const a = new class_S(1, "a","a");
var a = new class_S();
a.addItems(2, "karthick", "developer");
a.addItems(3, "hello", "testing");
a.addItems(4, "aaa", "bbb");
a.addItems(5, "hi", "hello");
console.log(a.data);
