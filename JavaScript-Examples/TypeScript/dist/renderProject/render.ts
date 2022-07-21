class projectInput{

    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;

    constructor(){
        this.templateElement = document.getElementById("basic template")! as HTMLTemplateElement;
        this.hostElement = document.getElementById("app")! as HTMLDivElement;

        this.element.id = "user-input";
        this.attach();
    }

    private attach(){
        this.hostElement.insertAdjacentElement("afterbegin", this.element);
    }

}