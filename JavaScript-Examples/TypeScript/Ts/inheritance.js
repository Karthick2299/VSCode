// interface firstInterface{
//     displayMethodOne(): void;
// }
var IncomeTax = /** @class */ (function () {
    function IncomeTax() {
        this.taxpayerId = "karthick";
    }
    IncomeTax.prototype.calculateTax = function () {
        return 1000;
    };
    return IncomeTax;
}());
var ServiceTax = /** @class */ (function () {
    function ServiceTax() {
        this.taxpayerId = "Divine";
    }
    ServiceTax.prototype.calculateTax = function () {
        return 500;
    };
    return ServiceTax;
}());
var i1 = new IncomeTax();
var result_one = i1.calculateTax();
console.log(result_one);
var b = new ServiceTax();
var result_two = b.calculateTax();
console.log(result_two);
