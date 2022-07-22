//Validation

interface Validatable{
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min: number;
    max: number;
}

function validate(validatableInput: Validatable){
    let isValid = true; 
}


//autobind decorator

function autobind(
    _: any, 
    _2:string,
    descriptor:PropertyDescriptor 
    ){

    let originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        get(){
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
        
    };

    return adjDescriptor;

}

class ProjectInput{
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;

    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor(){
        this.templateElement = document.getElementById("project-input")! as HTMLTemplateElement;
        this.hostElement = document.getElementById("app")! as HTMLDivElement;

        const importedNode = document.importNode(this.templateElement.content, true);

        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.element.id = "user-input";
        
        this.configure();
        this.attach();
        this.titleInputElement = document.querySelector("#title")! as HTMLInputElement;
        this.descriptionInputElement = document.querySelector("#description")! as HTMLInputElement;
        this.peopleInputElement = document.querySelector("#people")! as HTMLInputElement;

    }

    private gatherUserInput(): [string, string, number] | void{
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;

        if(enteredTitle.trim().length === 0 || 
           enteredDescription.trim().length === 0 ||
           enteredPeople.trim().length === 0){
                alert("Invalid Input");
                return;
           }
           else{
            return [enteredTitle, enteredDescription, +enteredPeople];
           }

    }

    @autobind
    private submitHandler(event: Event){
        event.preventDefault();
        // console.log(this.titleInputElement.value);
        const userInput = this.gatherUserInput();

        if(Array.isArray(userInput)){
            const[title, desc, people] = userInput;

            console.log(title , desc, people);
        }

    }

    private configure(){
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    }

    private attach(){
        this.hostElement.insertAdjacentElement("afterbegin",this.element);
    }
}

const pro = new ProjectInput();