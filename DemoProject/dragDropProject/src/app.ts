//autobind decorator
function autobind(
    _: any,
    _2: string,
    descriptor: PropertyDescriptor
){
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }

    };
    return adjDescriptor;
}


//creating a Class 

class ProjectInput{
    templateElement: HTMLTemplateElement;
    formInputElement: HTMLFormElement;

    //Getting from Input Elements
    userName: HTMLInputElement;
    age: HTMLInputElement;
    hostElement: HTMLDivElement;

    //constructor

    constructor(){
        this.templateElement = document.getElementById("main-template")! as HTMLTemplateElement;
        this.formInputElement = document.getElementById("formTag")! as HTMLFormElement;


        this.hostElement = document.getElementById("app")! as HTMLDivElement;

        const importedNode = document.importNode(this.templateElement.content, true);

        this.formInputElement = importedNode.firstElementChild as HTMLFormElement;

        //Assinging Form Input Elements 

        
        this.configure();
        this.attach();
        
        this.userName = document.getElementById("username")! as HTMLInputElement;
        this.age = document.getElementById("Age")! as HTMLInputElement;
    }
    private configure(){
        this.formInputElement.addEventListener('submit', this.submitHandler.bind(this));
    }

    private attach(){
        this.hostElement.insertAdjacentElement("afterbegin",this.formInputElement);
    }

    //getting User Input function

    private gettingUserInput(): [string, number] | void{
        const enteredUserName = this.userName.value;
        const enteredAge = this.age.value;

        
        if(
            enteredUserName.trim().length === 0 ||
            enteredAge.trim().length === 0
            ){
                alert("Invalid Input");
            }
            else{

                return [enteredUserName, +enteredAge];
            }
    }

    @autobind
    private submitHandler(event: Event){
        event.preventDefault();
        // console.log(this.userName.value);
        // console.log(this.age.value);

        const userInput = this.gettingUserInput();
        console.log(userInput);

      

    }

}

const project = new ProjectInput();