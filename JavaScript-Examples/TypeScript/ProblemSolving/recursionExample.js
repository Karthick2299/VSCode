// A function call itself is Recursion

// function recurse(n){
//     console.log("from recurse function");

//     //recursive call
//     if(n > 1){
//         recurse(n-1);
//     }
    
// }

// recurse(10);


//recursion Example 2

function countDown(n){
    console.log(n);
    
    if(countDown > 1){
        countDown(n-1);
    }



}

countDown(5);