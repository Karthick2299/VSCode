import { Product, ProductFactory } from "./product";


function show(): void{
    var a: Product | null = ProductFactory.createProduct("A");
    var b: Product | null = ProductFactory.createProduct("B");

    console.log(a?.method());
    console.log(b?.method())
}

show();

