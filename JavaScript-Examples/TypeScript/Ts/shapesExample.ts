interface Shapes{

    
    doCalculation():void;

}


class Square implements Shapes{

    //area of a Square => side x side;

    doCalculation():void{
        let side = 4;
        let calc = side * side;
        console.log(`Side value is : ${side}`)
       console.log("Area od Square is : " + calc);
    }

    

}


//area of rectangle => length x breadth

class Rectangle implements Shapes{
 
doCalculation(): void {
    let height = 2;
    let breadth = 4;

     let result = height * breadth;
     console.log(`length is : ${height} and Breadth is : ${breadth}`);
    console.log("Area of Rectangle is : " + result);
}

}

//area of circle => pi x (rdaius x radius)

class Circle implements Shapes{
    doCalculation(): void {
        let radius = 6;

        let result = 3.14 * (radius * radius);
        console.log(`Radius Value is : ${radius}`);
        console.log("Area of Circle is : " + result);
    }
}
    
const square = new Square();
const rectangle = new Rectangle();
const circle = new Circle();

square.doCalculation();
rectangle.doCalculation();
circle.doCalculation();





