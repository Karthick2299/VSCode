interface shapes{

    
    doCalculation():void;

}


class Square implements shapes{

    //area of a Square => side x side;

    doCalculation():void{
        let side = 4;
        let calc = side * side;
       console.log("The result is : " + calc);
    }

    

}


//area of rectangle => length x breadth

class Rectangle implements shapes{
 
doCalculation(): void {
    let height = 2;
    let breadth = 4;

     let result = height * breadth;
    console.log("Area of Rectangle is : " + result);
}

}

//area of circle => pi x (rdaius x radius)

class Circle implements shapes{
    doCalculation(): void {
        let radius = 6;
        let result = 3.14 * (radius * radius);
        console.log("Area of Circle is : " + result);
    }
}
    
const square = new Square();
const rectangle = new Rectangle();
const circle = new Circle();

square.doCalculation();
rectangle.doCalculation();
circle.doCalculation();





