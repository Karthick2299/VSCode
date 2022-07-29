"use strict";
// var InputOne = document.getElementById("fI")
// var InputTwo = document.getElementById("sI")
// var result = document.getElementById("result")
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function f() {
    console.log("f(): evaluated");
    return function (_, _2, _3) {
        console.log("Decorator function reached");
    };
}
class A {
    hello() { }
}
__decorate([
    f()
], A.prototype, "hello", null);
//Take the user Input
//Select the Operation that you want ? 
