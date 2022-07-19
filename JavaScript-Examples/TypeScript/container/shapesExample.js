"use strict";
var Square = /** @class */ (function () {
    function Square() {
    }
    //area of a Square => side x side;
    Square.prototype.doCalculation = function () {
        var side = 4;
        var calc = side * side;
        console.log("Side value is : ".concat(side));
        console.log("Area od Square is : " + calc);
    };
    return Square;
}());
//area of rectangle => length x breadth
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    Rectangle.prototype.doCalculation = function () {
        var height = 2;
        var breadth = 4;
        var result = height * breadth;
        console.log("length is : ".concat(height, " and Breadth is : ").concat(breadth));
        console.log("Area of Rectangle is : " + result);
    };
    return Rectangle;
}());
//area of circle => pi x (rdaius x radius)
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.doCalculation = function () {
        var radius = 6;
        var result = 3.14 * (radius * radius);
        console.log("Radius Value is : ".concat(radius));
        console.log("Area of Circle is : " + result);
    };
    return Circle;
}());
var square = new Square();
var rectangle = new Rectangle();
var circle = new Circle();
square.doCalculation();
rectangle.doCalculation();
circle.doCalculation();
