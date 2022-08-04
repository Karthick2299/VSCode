// function identityFunction<T>(arg: T): T{
//     return arg;
// }
// let output1 = identityFunction<string>("hello");
// let output2 = identityFunction<number>(100);
// console.log(output1);
// console.log(output2);
//Generic Example 2
var studentInfo = /** @class */ (function () {
    function studentInfo(id, name) {
        this.Id = id;
        this.Name = name;
    }
    studentInfo.prototype.display = function () {
        console.log("id = ".concat(this.Id, ", Name = ").concat(this.Name));
    };
    return studentInfo;
}());
var a1 = new studentInfo(1, "hello");
a1.display();
