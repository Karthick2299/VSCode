"use strict";
class projectInput {
    constructor() {
        this.templateElement = document.getElementById("basic template");
        this.hostElement = document.getElementById("app");
        console.log("constructor called");
        let importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = 'user-input';
        this.userInput = document.querySelector("#username");
        this.passwordInput = document.querySelector("#password");
        this.element.id = "user-input";
        this.configure();
        this.attach();
    }
    submitHandler(event) {
        event.preventDefault();
        console.log(this.userInput.value);
    }
    attach() {
        this.hostElement.insertAdjacentElement("afterbegin", this.element);
    }
    configure() {
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    }
}
const pro = new projectInput();
