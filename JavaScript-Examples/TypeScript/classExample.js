// class Point{
//      x: number = 0;
//      y: number = 0;
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.test = function () {
        console.log("from base class");
    };
    ;
    return Base;
}());
var derived = /** @class */ (function (_super) {
    __extends(derived, _super);
    function derived() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    derived.prototype.test = function (name) {
        if (name === undefined) {
            _super.prototype.test.call(this);
        }
        else {
            console.log("Hello, ".concat(name.toUpperCase()));
        }
    };
    return derived;
}(Base));
var point = new derived();
point.test();
point.test("karthick");
