function getRandom(){
    // var randomValue;
    var getRandom = gettingRandom();
    console.log(getRandom);
}

function gettingRandom(value){
    value =  (Math.floor(Math.random() * 6 + 1));
    return value;
}

getRandom();