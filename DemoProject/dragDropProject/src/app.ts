//validation Interface

interface Validatatble {
  value?: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

function validate(validatableInput: Validatatble) {
  let isValid = true;

  if (validatableInput.required) {
    isValid = isValid && validatableInput.value?.toString().trim().length !== 0;
  }

  if (
    validatableInput.minLength &&
    typeof validatableInput.value === "string"
  ) {
    isValid =
      isValid && validatableInput.value.length > validatableInput.minLength;
  }

  if (
    validatableInput.maxLength != null &&
    typeof validatableInput.value === "string"
  ) {
    isValid =
      isValid && validatableInput.value.length < validatableInput.maxLength;
  }

  if (
    validatableInput.min != null &&
    typeof validatableInput.value === "number"
  ) {
    isValid = isValid && validatableInput.value > validatableInput.min;
  }

  if (
    validatableInput.max != null &&
    typeof validatableInput.value === "number"
  ) {
    isValid = isValid && validatableInput.value < validatableInput.max;
  }
  return isValid;
}

//autobind decorator
function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}


//Creating Another Class - Project State

class ProjectState{
    private projects: any[] = [];
    private static instance: ProjectState;

    private constructor(){

    }

    addProject(username: string, age: number){
        const newProject = {
            username: username,
            age: age
        }
        this.projects.push(newProject);
    }

    static getInstance(){
        if(this.instance){
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }
}

//Creating Another Class - Project Lists

class ProjectList{
    templateElement: HTMLTemplateElement;
    element: HTMLElement;
    hostElement: HTMLDivElement;

    constructor(private type: 'active' | 'finished'){
            this.templateElement = document.getElementById(
              "project-list"
            )! as HTMLTemplateElement;
        
            this.hostElement = document.getElementById("app")! as HTMLDivElement;
        
            const importedNode = document.importNode(
              this.templateElement.content,
              true);
              
              this.element = importedNode.firstElementChild as HTMLElement;
              this.element.id = `${this.type}-projects`;

              this.attach();
              this.renderContent();
            }

            private attach() {
                this.hostElement.insertAdjacentElement("beforeend", this.element);
              }

            private renderContent(){
                const listId = `${this.type}-projects-list`;
                this.element.querySelector("ul")!.id = listId;
                this.element.querySelector("h2")!.textContent = this.type.toUpperCase() + ' PROJECTS';
            }
}

//creating a Class

class ProjectInput {
  templateElement: HTMLTemplateElement;
  formInputElement: HTMLFormElement;
  hostElement: HTMLDivElement;

  //Getting from Input Elements
  userName: HTMLInputElement;
  age: HTMLInputElement;

  //constructor

  constructor() {
    this.templateElement = document.getElementById(
      "main-template"
    )! as HTMLTemplateElement;
    this.formInputElement = document.getElementById(
      "formTag"
    )! as HTMLFormElement;

    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );

    this.formInputElement = importedNode.firstElementChild as HTMLFormElement;

    //Assinging Form Input Elements

    this.configure();
    this.attach();

    this.userName = document.getElementById("username")! as HTMLInputElement;
    this.age = document.getElementById("Age")! as HTMLInputElement;
  }
  private configure() {
    this.formInputElement.addEventListener(
      "submit",
      this.submitHandler.bind(this)
    );
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.formInputElement);
  }

  //getting User Input function

  private gettingUserInput(): [string, number] | void {
    const enteredUserName = this.userName.value;
    const enteredAge = this.age.value;

    const userName: Validatatble = {
      value: enteredUserName,
      required: true,
      min: 1,
      max: 5,
    };

    const age: Validatatble = {
      value: +enteredAge,
      required: true,
      min: 1,
      max: 5,
    };

    if (!validate(userName) || !validate(age)) {
      alert("Invalid Input");
      return;
    } else {
      return [enteredUserName, +enteredAge];
    }
  }

  @autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    // console.log(this.userName.value);
    // console.log(this.age.value);

    const userInput = this.gettingUserInput();
    console.log(userInput);
  }
}

const project = new ProjectInput();
const activeProject = new ProjectList('active');
const finishedProject = new ProjectList('finished');
