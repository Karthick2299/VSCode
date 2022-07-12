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

abstract class foodPreparation{

    abstract orderFood(value: string): void;

    abstract giveRecipe(recipe: string): string;

    abstract foodServed(foods: string): void;

}


class myClass extends foodPreparation{
    orderFood(value: string): void {
        console.log("order is : " + value);
        console.log("food order placed");
    }

    giveRecipe(recipe: string): string {
        console.log("your recipe selected ");

        return recipe;
    }

    foodServed(foods: string): void {
        console.log("Food served");
        console.log("you ordered : " + foods);
        console.log("Thank you! come again!");
    }

}

const c = new myClass();

c.orderFood("Steak");
c.giveRecipe("spicy");
c.foodServed("Beef Burger");


