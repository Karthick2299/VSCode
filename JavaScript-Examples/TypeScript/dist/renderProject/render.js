var projectInput = /** @class */ (function () {
    function projectInput() {
        this.templateElement = document.getElementById("basic template");
        this.hostElement = document.getElementById("app");
        console.log("constructor called");
        var importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = 'user-input';
        this.userInput = document.querySelector("#username");
        this.passwordInput = document.querySelector("#password");
        this.element.id = "user-input";
        this.configure();
        this.attach();
    }
    projectInput.prototype.submitHandler = function (event) {
        event.preventDefault();
        console.log(this.userInput.value);
    };
    projectInput.prototype.attach = function () {
        this.hostElement.insertAdjacentElement("afterbegin", this.element);
    };
    projectInput.prototype.configure = function () {
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    };
    return projectInput;
}());
var pro = new projectInput();
