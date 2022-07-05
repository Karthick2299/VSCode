//Getting Input Variables

var divTag = document.querySelector(".first-block");
var buttonTag = document.querySelector("button");
var  activeClass = document.querySelector(".active");

var MovingIcon = document.getElementById("move-icon");
var iconClass = document.querySelector(".icon");
var getPlayerTurn = document.getElementById("display-player");

var diceResult = document.getElementById("dice-result");

//random function variable

var randomNumber = () => {return Math.floor(Math.random() * 6 + 1)}

var getNumbers;

//to display which player's turn
var playerOne = document.getElementById("currentPlayerOne");
var playerTwo = document.getElementById("currentPlayerTwo");
var currentPlayerOne = 0;
var currentPlayerTwo = 0;
var currentPlayerScore = 0;

function initialChecking(currentPlayerOne, currentPlayerTwo){
    if(currentPlayerOne === 0 && currentPlayerTwo === 0){
        console.log("Both Players initial value is Zero.");
    }
}

initialChecking(currentPlayerOne, currentPlayerTwo);

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


function getRandom(){
      getNumbers = Math.floor(Math.random() * 6 + 1);
    if(currentPlayerOne === getNumbers){
            currentPlayerOne.classList.add("active");     
       
    }
    // diceResult.innerHTML = getNumbers;s

    
    // currentPlayerOne = currentPlayerScore + `${getNumbers}`;
    // console.log(currentPlayerOne);

    // document.getElementById("")
    
        // if(currentPlayerOne.class)

}
getRandom();


// function getBoardPosition(){


// }
// getBoardPosition();


// let getNumber;

// let currentPlayerOne = 0, currentPlayerTwo = 0;


// function rollingDice(){

//     //to avoid zero we have to add one in the Random function
//     //So It generates the dice value within 6.i.e(includes six)

//      getNumber = Math.floor(Math.random() * 6 + 1);
//     console.log(getNumber);

//     document.getElementById("dice-result").innerHTML = getNumber;
//     return getNumber;

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