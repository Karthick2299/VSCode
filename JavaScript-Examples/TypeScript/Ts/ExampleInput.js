"use strict";
exports.__esModule = true;
var readLine = require("node:readline");
var process_1 = require("process");
var r1 = readLine.createInterface({
    input: process_1.stdin,
    output: process_1.stdout
});
r1.question("what's your name ? ", function (answer) {
    console.log("Your Name is : ".concat(answer));
    console.log("closing the Interface");
    r1.close();
});
