
//Getting elements from html document

var newContainer = document.querySelector(".container");
var buttonTag = document.querySelector(".btn");
var bodyElement = document.querySelector("body");

   // addition operation

//condition to perform color changing tasks

/*alert("error ");
document.write("hello");
 prompt("enter your name :");
console.log("hello");*/

 buttonTag.addEventListener("click",function(){
    if(newContainer.classList.contains('container') && 
    buttonTag.classList.contains('btn') && 
    bodyElement.classList.contains('body'))
    {
        
        newContainer.classList.toggle("another-container");
        buttonTag.classList.toggle("btn2");
        bodyElement.classList.toggle("another-body");
       

        console.log("its working");
    }
});
 



//function() {-----};




//another approach by using onlick function on html document

// function changeTheColor(){

//     if(newContainer.classList.contains('container') && 
//     buttonTag.classList.contains('btn') && 
//     bodyElement.classList.contains('body'))
//     {
        
//         newContainer.classList.toggle("another-container");
//         buttonTag.classList.toggle("btn2");
//         bodyElement.classList.toggle("another-body");
       

//         console.log("its working");
//     }
// };

    //  if(newContainer.classList.contains('another-container') && 
    // buttonTag.classList.contains('btn2') && 
    // bodyElement.classList.contains('another-body')){

    //     newContainer.classList.add("container");
    //     buttonTag.classList.add("btn");
    //     bodyElement.classList.add("body");

    // }






