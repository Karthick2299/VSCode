"use strict";
// abstract class AbstractExample{
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
class foodPreparation {
}
class myClass extends foodPreparation {
    orderFood(value) {
        console.log("order is : " + value);
        console.log("food order placed");
    }
    giveRecipe(recipe) {
        console.log("your recipe selected ");
        return recipe;
    }
    foodServed(foods) {
        console.log("Food served");
        console.log("you ordered : " + foods);
        console.log("Thank you! come again!");
    }
}
const c = new myClass();
c.orderFood("Steak");
c.giveRecipe("spicy");
c.foodServed("Beef Burger");
