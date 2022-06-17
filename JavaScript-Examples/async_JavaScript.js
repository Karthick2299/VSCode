//Example 1 - simple asychronous function using setTimeout() method.

// function displayText(){
//     console.log("this is the my example text, it showed after three seconds.");
// }

// setTimeout(displayText, 3000);


//Example 2  - by using setInterval() method

// function displayText(){
//     console.log("text from displayText method");
// }

// setInterval(displayText, 1000);


//Example 3 - using setInterval() method and Date() method.

function showTiming(){
    let date = new Date();

    console.log(date.getHours() + " : " +  date.getMinutes() + " : " +  date.getSeconds());
}

setInterval(showTiming, 1000);