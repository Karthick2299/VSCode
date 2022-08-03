var divElement = document.querySelector(".container");
function changeColor() {
    console.log("function is working");
    if (!divElement.classList.contains("redColor")) {
        console.log("if working ");
        divElement.classList.add("redColor");
    }
    else {
        console.log("else working");
        divElement.classList.remove("redColor");
    }
}
