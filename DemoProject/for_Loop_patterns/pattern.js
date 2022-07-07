var n =5
// console.log(n);

var emptyString = "";

//left Increasing Triangle

// for(let row = 1; row <= n; row++){
//     for(let col = 1; col <= row; col++){
//         emptyString += "*";
//     }
//     emptyString += "\n";
// }


//left Decreasing Triangle

// for(let row = 1;  row <= n; row++){
//     for(let col = row; col <= n; col++){
//         emptyString += "*";
//     }
//     emptyString += "\n";
// }


//right increasing triangle

// for(let row = 1; row <= n; row++){
//     for(let col = row; col <= n; col++){
//         emptyString += " ";
//     }

    
//     for(let col = 1; col <= row; col++){
//         emptyString += " * ";
//     }
//     emptyString += "\n";
// }


//right decreasing triangle

    // for(let row = 1; row <= n; row++){
    //     for(let col = 1; col <= row; col++){
    //         emptyString += " ";
    //     }

    //     for(let col = row; col <= n; col++){
    //         emptyString += "*";
    //     }

    //     emptyString += "\n";
    // }

//rhombus triangle

// for(let row = 1; row < n; row++){
//     for(let col = row; col <= n; col++){
//         emptyString += " ";
//     }

//     for(let col = 1; col <= row; col++){
//         emptyString += "*"
//     }

//     for(let col = 1; col < row; col++){
//         emptyString += "*"
//     }

   

//     emptyString += "\n";
// }


// for(let row = 1; row <= n; row++){
//     for(let col = 1; col <= row; col++){
//         emptyString += " ";
//     }


//     for(col = row; col <= n; col++){
//         emptyString += "*";
//     }

//     for(let col = row; col < n; col++){
//         emptyString += "*";
//     }

//     emptyString += "\n";
// }

// console.log(emptyString);

//hollow square patter

// for(let row = 1; row <= n; row++){
//     for(let col = 1; col <= n; col++){
//         if(row === 1 || row === n){
//             emptyString += "*"
//         }
//         else{
//             if(col === 1 || col === n ){
//                 emptyString += "*";
//             }
//             else{
//                 emptyString += " ";
//             }
//         }
//     }
//     emptyString += "\n";
// }


//triangle pattern


// for(let row = 1; row <= n; row++){
//     for(let col = row; col <= n; col++){
//         emptyString += " ";
//     }

//     for(let col = 1; col < row; col++){
//         emptyString += "*";
//     }

//     for(let col = 1; col <= row; col++){
//         emptyString += "*";
//     }
//     emptyString += "\n";
// }



//number for loop pattern

// for(let row = 1; row <= n; row++){
//     for(let col = 1; col <= row; col++){
//         emptyString += col + " ";
//     }
//     emptyString += "\n";
// }


//left pascal triangle

// for(let row = 1; row < n; row++){
//     for(let col = row; col <= n; col++){
//         emptyString += " "
//     }

//     for(let col = 1; col <= row; col++){
//         emptyString += "*";
//     }

//     emptyString += "\n";
// }

// for(let row = 1; row <= n; row++){
//     for(let col = 1; col <= row; col++){
//         emptyString += " ";
//     }

//     for(let col = row; col <= n; col++){
//         emptyString += "*";
//     }

//     emptyString += "\n";
// }

// console.log(emptyString);




// console.log(emptyString);

//print pattern in html


// for(let row =1 ; row <= n; row++){
//     for(let col = 1; col <= row; col++){
//         emptyString +=  col + " ";
//     }
//     emptyString += "<br>";
// }

// document.getElementById("h2").innerHTML = emptyString;