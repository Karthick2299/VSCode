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
var mainDiv = document.querySelector(".main-number-section");
var player = document.getElementById("display-player");
//button Tag
var buttonTag = document.querySelector("button");
//active class
var activeClass = document.querySelector(".active");

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

var selectDivTags = document.querySelectorAll(".number");
//to display which player's turn
var playerOne = document.getElementById("currentPlayerOne");
var playerTwo = document.getElementById("currentPlayerTwo");
var currentPlayerOne = 0;
var currentPlayerTwo = 0;
var currentPlayerScoreOne = 0;
var currentPlayerScoreTwo =0;

var randomNumber;//global variable

function gettingRandom() {
    // var localRandom = Math.floor(Math.random() * 6 + 1);
    // return localRandom;

    randomNumber = Math.floor(Math.random() * 6 + 1);
}

//get Random function{



function getRandom(checkFirst,checkSecond) {
    //var randomNumber = gettingRandom() - for random Number function scope.
  //  var getReturn = gettingRandom(); //function call to get random number

  gettingRandom();
   document.getElementById("dice-result").innerHTML = randomNumber;
   console.log("get Return variable " + randomNumber);
  

  // value += randomNumber;
  if(checkFirst === true){
  currentPlayerScoreOne += randomNumber;
  }
  if(checkSecond === true){
    currentPlayerScoreTwo += randomNumber;
  }
  
//   currentPlayerScore = 323;
  console.log("currentPlayerScore " + currentPlayerOne);
  // console.log("currentPlayerScore " + currentPlayerOne);
  //printing random numbers

  //call the conditionFunction
  conditionFunction(/*getReturn*/);

  // return value;

}

//condition function

function conditionFunction() {
  try {
    let total = 100;
    //it adds the active class to the div tags..in a incrementing order.

    if (currentPlayerScoreOne === currentPlayerOne) {
      if (
        currentPlayerOne !== randomNumber ||
        (currentPlayerOne === randomNumber && randomNumber <= total)
      ) {
        $(`#${currentPlayerOne}`)
          .addClass("active-1")
          .siblings()
          .removeClass("active-1");

        if (currentPlayerOne + randomNumber >= 100) {
          Math.floor(Math.random() * 1 + 1);
        }

        console.log("normal if is working");

        // checkToRemoveClass(currentPlayerOne);
      }
    } else if (currentPlayerScoreTwo === currentPlayerTwo){
      if (
        currentPlayerTwo !== randomNumber ||
        (currentPlayerTwo === randomNumber && randomNumber <= total)
      ) {
        $(`#${currentPlayerTwo}`)
          .addClass("active-2")
          .siblings()
          .removeClass("active-2");

        if (currentPlayerTwo + randomNumber >= 100) {
          Math.floor(Math.random() * 1 + 1);
        }

        console.log("normal if is working of else condition");

        // checkToRemoveClass(currentPlayerTwo);
      }
    }

    // callingSwitchCase(currentPlayerOne);
  } catch (error) {
    console.log(error);
  }
  // return newInputVariable;
}

//calling getRandom function
// buttonTag.addEventListener("click", getRandom);

//need to fix this

// function checkToRemoveClass(player){
//     if (player > 10) {
//         if(firstRow.classList.contains("active")){
//             $("#row-one").toggleClass("active");
//             console.log("nested if is working");
//         }
//       }
// }
//}

//Player One

function firstPlayer() {
  var checkFirst = true;

    console.log("first player function called");
    
    // var onePlayer;
    //calling getRandom function
    // var playerOneRandom = getRandom();
    getRandom(checkFirst);
    
    currentPlayerOne += randomNumber;
    console.log( "playerOne Score " + currentPlayerOne);

    //display the player
    player.innerHTML = currentPlayerOne;

  //call the conditionFunction
  conditionFunction();

  //printing random numbers
  document.getElementById("dice-result").innerHTML = randomNumber;
  // return playerOneRandom;
}
//Player Two

function secondPlayer() {

    console.log("second player function called");
    
    var checkSecond = true;
    
    //calling getRandom function
    // var playerTwo = getRandom(secondPlayer);
    getRandom(checkSecond);
    currentPlayerTwo += randomNumber;
    //call the conditionFunction
    conditionFunction(currentPlayerTwo);
    console.log(currentPlayerTwo);

  //printing random numbers
  document.getElementById("dice-result").innerHTML = currentPlayerTwo;
}
