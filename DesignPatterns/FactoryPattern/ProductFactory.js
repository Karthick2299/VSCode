"use strict";
exports.__esModule = true;
var product_1 = require("./product");
function show() {
    var a = product_1.ProductFactory.createProduct("A");
    var b = product_1.ProductFactory.createProduct("B");
    console.log(a === null || a === void 0 ? void 0 : a.method());
    console.log(b === null || b === void 0 ? void 0 : b.method());
}
show();
