//Getting Input Variables
var firstRow = document.querySelector(".row-one");
var divTagOne = document.querySelector(".first-block");
var divTagTwo = document.querySelector(".second-block");
var divTagThree = document.querySelector(".third-block");
var divTagFour = document.querySelector(".fourth-block");
var divTagFive = document.querySelector(".fifth-block");
var divTagSix = document.querySelector(".sixth-block");
var divTagSeven = document.querySelector(".seventh-block");
var divTagEight = document.querySelector(".eighth-block");
var divTagNine = document.querySelector(".nineth-block");
var divTagTen = document.querySelector(".ten-block");

//button Tag
var buttonTag = document.querySelector("button");
//active class
var  activeClass = document.querySelector(".active");

//icon id

var MovingIcon = document.getElementById("move-icon");

//icon class
var iconClass = document.querySelector(".icon");

//get Players
var getPlayerTurn = document.getElementById("display-player");

//result of dice.
var diceResult = document.getElementById("dice-result");

var row_one = document.querySelector(".row-one");
// console.log(row_one);
//random function variable

var randomNumber = () => {return Math.floor(Math.random() * 6 + 1)}

var getNumbers;

var selectDivTags = document.querySelectorAll(".number");
//to display which player's turn
var playerOne = document.getElementById("currentPlayerOne");
var playerTwo = document.getElementById("currentPlayerTwo");
var currentPlayerOne = 0;
var currentPlayerTwo = 0;
var currentPlayerScore = 0;




// console.log(selectDivTags);
//checking initial value

// function initialChecking(currentPlayerOne, currentPlayerTwo){
//     if(currentPlayerOne === 0 && currentPlayerTwo === 0){
//         console.log("Both Players initial value is Zero.");
//     }
// }

// initialChecking(currentPlayerOne, currentPlayerTwo);

// console.log(playerOne);
// console.log(playerTwo);

// buttonTag.addEventListener("click", getRandom);


// console.log($(randomNumber));

// var element = $("#move-icon").attr("id");

// console.log(element);

// function addingScores(currentPlayerOne, currentPlayerScore,randomNumber ){
//     currentPlayerScore +=   randomNumber;
//     console.log(currentPlayerScore);

//     if(currentPlayerScore === randomNumber){
//         console.log("its working");
//     }

// }

// addingScores(0,0,randomNumber());

function gettingRandom(){
    return getNumbers = Math.floor(Math.random() * 6 + 1);
};


function getRandom(){
    gettingRandom();
    
    let length = divTagOne.length;
    
    currentPlayerOne += getNumbers;
    console.log(currentPlayerOne);
    
    //call the conditionFunction
    conditionFunction(currentPlayerOne);
    
    //printing random numbers
    document.getElementById("dice-result").innerHTML = getNumbers;
    
      // if(currentPlayerOne === getNumbers){
          //         playerOne.classList.add("active");     
          //     console.log("if statement is working");
          // }
          
        // else{
            //     playerOne.classList.remove("active");
            //     console.log("else statement is working");
            // }
            
            // console.log(divTagOne);
            
            // console.log(getNumbers);
            
            
            
            // var sum = 0;
            
            // sum = sum + currentPlayerOne;
            // console.log("sum value " + sum);
            
            
            // let add = 0;
            
            // add = add + sum;
            // console.log(add)
            
            // sumPlayerOneValues(currentPlayerOne);
         
        }

        function conditionFunction(){

            try{
                let total = 100;
               //it adds the active class to the div tags..in a incrementing order.

            if(currentPlayerOne !== getNumbers || currentPlayerOne === getNumbers && getNumbers <= total){
                $(`#${currentPlayerOne}`).addClass("active").siblings().removeClass("active");

                if(currentPlayerOne + getNumbers >= 100){
                    Math.floor(Math.random() * 1 + 1);
                }
            }

            if(currentPlayerOne > 100){
                $(".ten-block").removeClass("active");
                console.log("It worked");
            }

            // else{
            //     $(`#${currentPlayerOne}`).removeClass("active");
            // }
            //  if((currentPlayerOne + getNumbers) >= 90 && (currentPlayerOne + getNumbers) <= 100) {
            //     let sum = currentPlayerOne + getNumbers;
            //     console.log("sum value is " + sum)
            //     sum = Math.floor(Math.random() * 2 + 1);
            //     currentPlayerOne + getNumbers;
            // }

            // clearPrevious(getNumbers);
            
            // else if(currentPlayerOne + getNumbers === 100) {
            //     throw new Error("Game Finished");
            //     // console.log("game finished");
            // }

        }



        catch(error){
            console.log(error);
        }

            
        }


        // function clearPrevious(getNumbers){
        //     if(getNumbers > 0){
        //         let getItems = `${getNumbers}`;
        //         return document.querySelector(getItems)
        //         .style.setProperty("--bg-color", "transparent");
        //     }
        // }

        buttonTag.addEventListener("click",getRandom);
        // getRandom();
        
            // if(divTagTwo.classList.contains("active")){
            
              
                //     divTagTwo.classList.add("active");
                //     divTagTwo.classList.remove("active");
                
                // }
            // for(let i = 0; i <= 10; i++)
            
            // let sum = 0;
            
            
            
            // buttonTag.addEventListener("click", rollingDice);
            
            // function getBoardPosition(){
                
                
                // }
                // getBoardPosition();
                
                
                // let getNumber;
                
                // let currentPlayerOne = 0, currentPlayerTwo = 0;
                
                
//                 function rollingDice(){
                    



//     //to avoid zero we have to add one in the Random function
//     //So It generates the dice value within 6.i.e(includes six)

   
  
// }



// var firstNumber = document.querySelector(".number-one");
// var secondNumber = document.querySelector(".number-two")

// var Number = document.querySelectorAll("number");
// buttonTag.addEventListener("click", checkFunction);


// function checkFunction(){

//     let getPosition = $("1");

//     console.log(getPosition);

// }







//prints the random Number

// console.log(getRandomNumber);