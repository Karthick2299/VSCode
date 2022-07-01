var MainBoard = (function() {
    function rollDice(){
        return Math.floor(Math.random() * 6 + 1);
    }

    var playerOneScore = 0;
    var playerTwoScore = 0;


    function checkWinning(score, number){
        if(score + number > 100){
            score;
        }
        else{
            score = score + number;
        }
        return score;
    }


    function ScoreOfTheGame(score){
        switch(score){
            //*up cases(Ladders)

            case 1: 
                score = 23;
                break;
            case 5:
                score = 14;
                break;
            case 21:
                score = 42;
                break;
            case 36:
                score = 58;
                break;
            case 29:
                score = 85;
                break;
            case 71:
                score = 92;
                break;
            case 49:
                score = 67;
                break;

        //* Down cases (Snakes)
            case 64:
                score = 59;
                break;
            case 98:
                score = 48;
                break;
            case 99:
                score = 1;
                break;
            case 31:
                score = 28;
                break;
            case 26:
                score = 8;
                break;
            case 15:
                score = 2;
                break;
            case 93:
                score = 72;
                break;
            case 73:
                score = 17;
                break;
           

        }
        return score;
    }

    function displayActiveAndInactivePlayer(online, offline){
        const button_one = document.querySelector(".js-button-1");
        const button_two = document.querySelector(".js-button-2");

        if(online === 1){
            button_two.classList.add("disabled");
            button_one.classList.remove("disabled");
        }
        else{
            button_two.classList.remove("disabled");
            button_one.classList.add("disabled");
        }

    }
    

    function getActivePlayer(number, playerNumber){
        let active  = number === 6 ? playerNumber : playerNumber % 2 + 1;
         let inactive = active % 2 + 1;

         return {active, inactive};
    }

    function clearPreviousPosition(score){
        if(score > 0){
            let getBoardItem = `.board-item-${score}`;
            return document
                .querySelector(getBoardItem).style.setProperty("--ticker-color", "transparent");
        }
    }


    function playerOne(){
        //roll the dice
        const number = rollDice();


        //To Clear Previous positio
        clearPreviousPosition(playerOneScore);

        //displayer Player is active or inactive based on dice number
        let {active, inactive } = getActivePlayer(number, 1);
        displayActiveAndInactivePlayer(active,inactive);
        
        
        //To show the result on side(Need to fix this)
        document.querySelector(".js-dice-result").innerHTML = number + " player 1"; 

        playerOneScore = checkWinning(playerOneScore, number);
        playerOneScore = ScoreOfTheGame(playerOneScore);

        if(playerOneScore === 100){
            alert("Player 1 is Winner");
        }
        else{
            let getNewBoardItem = `.board.item - ${playerOneScore}`;
           document.querySelector(getNewBoardItem).style.setProperty("--ticker-color", "red");

        }
    }


    function playerTwo(){
        //roll the dice
        const number = rollDice();


        //To Clear Previous positio
        clearPreviousPosition(playerOneScore);

        //displayer Player is active or inactive based on dice number
        let {active, inactive } = getActivePlayer(number, 2);
        displayActiveAndInactivePlayer(active,inactive);
        
        
        //To show the result on side(Need to fix this)
        document.querySelector(".js-dice-result").innerHTML = number + " player 2"; 

        playerTwoScore = checkWinning(playerTwoScore, number);
        playerTwoScore = ScoreOfTheGame(playerTwoScore);

        if(playerTwoScore === 100){
            alert("Player 2 is Winner");
        }
        else{
            let getNewBoardItem = `.board.item - ${playerTwoScore}`;
           document.querySelector(getNewBoardItem).style.setProperty("--ticker-color", "white");
        }
    }


    function createLadder(ladderClass, noOfSteps) {
        const ladderNode = document.querySelector(ladderClass);
        for (i = 0; i < noOfSteps; i++) {
          const ladderSpan = document.createElement("span");
          ladderNode.appendChild(ladderSpan);
        }
      }



      return {playerOne,playerTwo, createLadder};

})();

window.addEventListener("load", function(event) {
    MainBoard.createLadder(".ladder-1", 4);
    MainBoard.createLadder(".ladder-2", 7);
    MainBoard.createLadder(".ladder-3", 19);
    MainBoard.createLadder(".ladder-4", 7);
    MainBoard.createLadder(".ladder-5", 7);
    MainBoard.createLadder(".ladder-6", 7);
    MainBoard.createLadder(".ladder-7", 5);
    MainBoard.createLadder(".ladder-8", 6);
  });
  


