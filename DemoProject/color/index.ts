const divElement = document.querySelector(".container") as HTMLDivElement;

function changeColor(): void{
    console.log("function is working");
   if(!divElement.classList.contains("redColor")){
    console.log("if working ")
    divElement.classList.add("redColor");
   }
   else{
    console.log("else working");
    divElement.classList.remove("redColor");
   }
}
