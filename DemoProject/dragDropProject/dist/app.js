"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
class ProjectInput {
    constructor() {
        this.templateElement = document.getElementById("main-template");
        this.formInputElement = document.getElementById("formTag");
        this.hostElement = document.getElementById("app");
        const importedNode = document.importNode(this.templateElement.content, true);
        this.formInputElement = importedNode.firstElementChild;
        this.configure();
        this.attach();
        this.userName = document.getElementById("username");
        this.age = document.getElementById("Age");
    }
    configure() {
        this.formInputElement.addEventListener('submit', this.submitHandler.bind(this));
    }
    attach() {
        this.hostElement.insertAdjacentElement("afterbegin", this.formInputElement);
    }
    gettingUserInput() {
        const enteredUserName = this.userName.value;
        const enteredAge = this.age.value;
        if (enteredUserName.trim().length === 0 ||
            enteredAge.trim().length === 0) {
            alert("Invalid Input");
        }
        else {
            return [enteredUserName, +enteredAge];
        }
    }
    submitHandler(event) {
        event.preventDefault();
        const userInput = this.gettingUserInput();
        console.log(userInput);
    }
}
__decorate([
    autobind
], ProjectInput.prototype, "submitHandler", null);
const project = new ProjectInput();
//# sourceMappingURL=app.js.map