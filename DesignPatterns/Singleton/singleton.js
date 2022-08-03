"use strict";
exports.__esModule = true;
exports.Singleton = void 0;
var Singleton = /** @class */ (function () {
    //private constructor so that no instance is Created.
    function Singleton() {
    }
    Singleton.getInstance = function () {
        console.log("Singleton class is working");
        if (!Singleton.singleton) {
            Singleton.singleton = new Singleton();
        }
        return Singleton.singleton;
    };
    return Singleton;
}());
exports.Singleton = Singleton;
