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
var hundread = document.getElementById("100");
//button Tag
var buttonTagone = document.querySelector(".btn-1");
var buttonTagTwo = document.querySelector(".btn-2");
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


var randomNumber; //global variable

function gettingRandom(randomNum) {
  // var localRandom = Math.floor(Math.random() * 6 + 1);
  // return localRandom;

  randomNum = Math.floor(Math.random() * 6 + 1);
  return randomNum;
}

//get Random function{

function getRandom(checkPlayer) {
  //var randomNumber = gettingRandom() - for random Number function scope.
  //  var getReturn = gettingRandom(); //function call to get random number
  
  let checkFirst = 1;
  let checkSecond = 2;
  let currentPlayerScoreOne = 0;
  let currentPlayerScoreTwo = 0;
  
  var randomNum = gettingRandom();
  // console.log("random number is : " + randomNum);

  // gettingRandom();
  document.getElementById("dice-result").innerHTML = randomNum;
  // console.log("get Return variable " + randomNum);

  // value += randomNumber;
  if (checkPlayer === true) { 

     currentPlayerScoreOne += randomNum;
    // if (currentPlayerScoreOne > 100) {
    //   throw new Error("Invalid Input");
    // }
    FirstPlayerConditionFunction(randomNum, checkFirst);
    
    // console.log("currentPlayerOneScore " + currentPlayerScoreOne);



    if(currentPlayerScoreOne >= 90){
       randomNum =  Math.floor(Math.random() * 3);
      throw new Error("max level reached");
    }

  }   
  else {
    currentPlayerScoreTwo += randomNum;
    // if (currentPlayerScoreOne > 100) {
    //   throw new Error("Invalid Input");
    // }
    SecondPlayerConditionFunction(randomNum, checkSecond);

    console.log("currentPlayerTwoScore " + currentPlayerScoreTwo);


    if(currentPlayerScoreTwo >= 100){
      throw new Error("max level reached");
    }

  }

  //   currentPlayerScore = 323;
  // console.log("currentPlayerScore " + currentPlayerOne);
  //printing random numbers

  //call the conditionFunction

  return randomNum;
}

//condition function

//*first player function

function FirstPlayerConditionFunction(randomNumber, firstPlayer) {
  try {
    let total = 100;
    //it adds the active class to the div tags..in a incrementing order.

    if (firstPlayer === 1) {
      if (
        currentPlayerOne !== randomNumber ||
        (currentPlayerOne === randomNumber && randomNumber <= total)
      ) {
        $(`#${currentPlayerOne}`)
          .addClass("active-1")
          .siblings()
          .removeClass("active-1");

        console.log("first player condition is working.");
      }

      
      
    }
    
    // if((hundread.contains(firstPlayer)) || currentPlayerOne >= 100){
    //   document.getElementById("show-winning").innerHTML = "1 Won";
    // }
    
    // callingSwitchCase(currentPlayerOne);
  } catch (error) {
    console.log(error);
  }
  // return newInputVariable;
}

//*second Player function

function SecondPlayerConditionFunction(randomNumber, secondPlayer){
  try{
  if (secondPlayer === 2) {
    if (
      currentPlayerTwo !== randomNumber ||
      (currentPlayerTwo === randomNumber && randomNumber <= total)
    ) {
      $(`#${currentPlayerTwo}`)
        .addClass("active-2")
        .siblings()
        .removeClass("active-2");

      console.log("second player condition is working.");

      // checkToRemoveClass(currentPlayerTwo);
    }

    
  }
  // if((hundread.contains(secondPlayer)) || currentPlayerTwo >= 100){
  //   document.getElementById("show-winning").innerHTML = "2 Won";
  // }
}
catch(error){
  console.log(error);
}

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
  var checkPlayer = true;

  var checkPlayerOne = 1;

  console.log("first player function called");

  var random = getRandom(checkPlayer, buttonTagone);
  document.getElementById("dice-result").innerHTML = random;

  currentPlayerOne += random;
  console.log("playerOne Score " + currentPlayerOne);

  //display the player
  player.innerHTML = 1;


}
//Player Two

function secondPlayer() {
  console.log("second player function called");

  var checkPlayer;
  var checkPlayerTwo = 2;
  player.innerHTML = 2;
  //calling getRandom function
  // var playerTwo = getRandom(secondPlayer);
  var randomSecond = getRandom(checkPlayer);
  document.getElementById("dice-result").innerHTML = randomSecond;
  currentPlayerTwo += randomSecond;
  //call the conditionFunction
  console.log("second player score " + currentPlayerTwo);

  // SecondPlayerConditionFunction(checkPlayerTwo);

  //printing random numbers
}

// firstPlayer();
// secondPlayer();