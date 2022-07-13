var Square = /** @class */ (function () {
    function Square() {
    }
    //area of a Square => side x side;
    Square.prototype.doCalculation = function () {
        var side = 4;
        var calc = side * side;
        console.log("The result is : " + calc);
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
