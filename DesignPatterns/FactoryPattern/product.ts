export interface Product{
    method(param?: any): void;
}

export class ConcreteProductA implements Product{
    method = (param?: any) => {
        return "Method from concreteProductA";
    }
}

export class ConcreteProductB implements Product{
    method = (param?: any) => {
        return "Method from concreteProductB";
    }
}

export class ProductFactory{
    public static createProduct(type: string) : Product | null{
        if(type === "A"){
            return new ConcreteProductA();
        }
        else if(type === "B"){
            return new ConcreteProductB();
        }
        return null;
        
    }
}
