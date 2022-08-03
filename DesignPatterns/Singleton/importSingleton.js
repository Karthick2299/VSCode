"use strict";
exports.__esModule = true;
exports.show = void 0;
var singleton_1 = require("./singleton");
function show() {
    var singleton1 = singleton_1.Singleton.getInstance();
    var singleton2 = singleton_1.Singleton.getInstance();
    if (singleton1 === singleton2) {
        console.log("Two singletons are Equal");
    }
    else {
        console.log("Two singletons are not Equal");
    }
}
exports.show = show;
show();
