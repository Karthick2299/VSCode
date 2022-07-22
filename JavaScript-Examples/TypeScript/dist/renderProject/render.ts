class projectInput{

    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    userInput: HTMLInputElement;
    passwordInput: HTMLInputElement;

    constructor(){
        this.templateElement = document.getElementById("basic template")! as HTMLTemplateElement;
        this.hostElement = document.getElementById("app")! as HTMLDivElement;

        console.log("constructor called");

        let importedNode = document.importNode(this.templateElement.content,true);

        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.element.id = 'user-input';

        this.userInput = document.querySelector("#username") as HTMLInputElement;
        this.passwordInput = document.querySelector("#password") as HTMLInputElement;

        this.element.id = "user-input";

        this.configure();
        this.attach();
    }

    private submitHandler(event: Event){
        event.preventDefault();
        console.log(this.userInput.value);
    }
    private attach(){
        this.hostElement.insertAdjacentElement("afterbegin", this.element);
    }

    private configure(){
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    }

}

const pro = new projectInput();