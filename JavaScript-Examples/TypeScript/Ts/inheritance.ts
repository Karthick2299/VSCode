// interface firstInterface{
//     displayMethodOne(): void;
// }

// interface secondInterface extends firstInterface{
//     displayMethodTwo(): void;
// }

// class ImplementInterface implements secondInterface{
//     displayMethodOne(): void {
//         console.log("from display method one");
//     }
//     displayMethodTwo(): void {
//         console.log("from display second method");
//     }

//     displayClass(): void{
//         console.log("from class");
//     }
// }

// const c1 = new ImplementInterface();

// c1.displayClass();
// c1.displayMethodOne();
// c1.displayMethodTwo();


//inheritance Example

interface ITax{
    taxpayerId: string;
    calculateTax(): number;
}

class IncomeTax implements ITax{
    taxpayerId: string = "karthick";
    calculateTax(): number{
        return 1000;
    }
}

class ServiceTax implements ITax{
    taxpayerId: string = "Divine";
    calculateTax(): number{
        return 500;
    }
}


const i1 = new IncomeTax();
var result_one = i1.calculateTax();
console.log(result_one);

const b = new ServiceTax();
var result_two = b.calculateTax();
console.log(result_two);