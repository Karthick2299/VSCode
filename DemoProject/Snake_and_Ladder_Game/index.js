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

var selectDivTags = document.querySelectorAll(".number");

//to display which player's turn
var playerOne = document.getElementById("currentPlayerOne");
var playerTwo = document.getElementById("currentPlayerTwo");
var currentPlayerOne = 0;
var currentPlayerTwo = 0;

var randomNumber;

function gettingRandom(randomNum) {
  randomNum = Math.floor(Math.random() * 6 + 1);
  return randomNum;
}

function getRandom(checkPlayer) {
  let checkFirst = 1;
  let checkSecond = 2;

  let randomNum = Math.floor(Math.random() * 6 + 1);
  document.getElementById("dice-result").innerHTML = randomNum;

  if (checkPlayer === true) {
    currentPlayerOne += randomNum;

    console.log(randomNum);
    FirstPlayerConditionFunction(currentPlayerOne, checkFirst);

    console.log("currentPlayerOneScore " + currentPlayerOne);

    if (currentPlayerOne === 100) {
      throw new Error("max level reached");
    }
  } else {
    currentPlayerTwo += randomNum;

    SecondPlayerConditionFunction(currentPlayerTwo, checkSecond);

    console.log("currentPlayerTwoScore " + currentPlayerTwo);
  }
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
        (currentPlayerOne === randomNumber && randomNumber <= total) ||
        currentPlayerOne === total
      ) {
        $(`#${randomNumber}`)
          .addClass("active-1")
          .siblings()
          .removeClass("active-1");

        console.log("first player condition is working.");
        console.log("current player one variable : " + currentPlayerOne);
      } else if (currentPlayerOne >= total) {
        document.getElementById("button-1").disabled = true;
        document.getElementById("button-2").disabled = true;
        document.getElementById("game-condition").style = "display: block";
        document.getElementById("game-over").style = "display: block";
      }

      //switch case for Players

      switch (currentPlayerOne) {
        //* For Ladders

        case 4:
          currentPlayerOne = 14;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        case 9:
          currentPlayerOne = 31;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        case 21:
          currentPlayerOne = 42;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        case 28:
          currentPlayerOne = 84;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        case 51:
          currentPlayerOne = 67;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        case 71:
          currentPlayerOne = 91;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        //*for Snakes

        case 17:
          currentPlayerOne = 7;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        case 54:
          currentPlayerOne = 34;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        case 62:
          currentPlayerOne = 19;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        case 64:
          console.log("gotcha")
          currentPlayerOne = 60;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        case 87:
          currentPlayerOne = 24;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        case 93:
          currentPlayerOne = 73;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        case 95:
          currentPlayerOne = 75;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        case 98:
          currentPlayerOne = 79;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;
      }
    }
  } catch (error) {
    console.log(error);
  }
}

//*second Player function

function SecondPlayerConditionFunction(randomNumber, secondPlayer) {
  let total = 100;
  try {
    if (secondPlayer === 2) {
      if (
        currentPlayerTwo !== randomNumber ||
        (currentPlayerTwo === randomNumber && randomNumber <= total)
      ) {
        $(`#${randomNumber}`)
          .addClass("active-2")
          .siblings()
          .removeClass("active-2");

        console.log("second player condition is working.");
      } else if (currentPlayerTwo >= total) {
        document.getElementById("button-1").disabled = true;
        document.getElementById("button-2").disabled = true;
        document.getElementById("game-condition").style = "display: block";
        document.getElementById("game-over").style = "display: block";
      }

      //switch case for Second Player

      switch (currentPlayerOne) {
        //* For Ladders

        case 4:
          currentPlayerOne = 14;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        case 9:
          currentPlayerOne = 31;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        case 21:
          currentPlayerOne = 42;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        case 28:
          currentPlayerOne = 84;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        case 51:
          currentPlayerOne = 67;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        case 71:
          currentPlayerOne = 91;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        //*for Snakes

        case 17:
          currentPlayerOne = 7;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        case 54:
          currentPlayerOne = 34;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        case 62:
          currentPlayerOne = 19;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        case 64:
          console.log("gotcha")
          currentPlayerOne = 60;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        case 87:
          currentPlayerOne = 24;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        case 93:
          currentPlayerOne = 73;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        case 95:
          currentPlayerOne = 75;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        case 98:
          currentPlayerOne = 79;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;
      }


    }
  } catch (error) {
    console.log(error);
  }
}

//Player One

function firstPlayer() {
  var checkPlayer = true;

  console.log("first player function called");

  var random = getRandom(checkPlayer);

  console.log("playerOne Score " + currentPlayerOne);

  //display the player
  player.innerHTML = 1;
}

//Player Two

function secondPlayer() {
  console.log("second player function called");

  var checkPlayer = false;
  player.innerHTML = 2;

  var randomSecond = getRandom(checkPlayer);

  console.log("second player score " + currentPlayerTwo);
}
