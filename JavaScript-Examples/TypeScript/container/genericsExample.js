"use strict";
// interface genericInterface<T, U>{
//     process(key: T, val: U): void;
// }
var bossDetails = function (boss) {
    if (boss.__typeName === "official") {
        return "".concat(boss.name, ", ").concat(boss.age);
    }
    return "".concat(boss.name, ", ").concat(boss.title);
};
console.log(bossDetails);
