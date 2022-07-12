// abstract class AbstractExample{
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
//     completeMethod(){
//         console.log("from abstract method");
//     }
//     abstract incompleteMethod(value: string): string;
// }
// class NormalClass {
//     //incomplete methods are completed here
//     incompleteMethod(value: string): string{
//         console.log(value);
//         console.log("from complete method in abstract class");
//         return value;
//     }
// }
// const dev = new NormalClass();
// const result = dev.incompleteMethod("for abstract class");
// console.log(result);
//abstract Class Example
var foodPreparation = /** @class */ (function () {
    function foodPreparation() {
    }
    return foodPreparation;
}());
var myClass = /** @class */ (function (_super) {
    __extends(myClass, _super);
    function myClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    myClass.prototype.orderFood = function (value) {
        console.log("order is : " + value);
        console.log("food order placed");
    };
    myClass.prototype.giveRecipe = function (recipe) {
        console.log("your recipe selected ");
        return recipe;
    };
    myClass.prototype.foodServed = function (foods) {
        console.log("Food served");
        console.log("you ordered : " + foods);
        console.log("Thank you! come again!");
    };
    return myClass;
}(foodPreparation));
var c = new myClass();
c.orderFood("Steak");
c.giveRecipe("spicy");
c.foodServed("Beef Burger");
