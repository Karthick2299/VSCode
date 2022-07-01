function rollingDice(){

    //to avoid zero we have to add one in the Random function
    //So It generates the dice value within 6.i.e(includes six)

    let  getNumber = Math.floor(Math.random() * 6 + 1);
    console.log(getNumber);

    document.getElementById("dice-result").innerHTML = getNumber;

}