// var InputOne = document.getElementById("fI")
// var InputTwo = document.getElementById("sI")
// var result = document.getElementById("result")

function f(){
    console.log("f(): evaluated");
    return function(_:any, _2: string, _3: PropertyDescriptor){
        console.log("Decorator function reached");
    };
}

class A{

    @f()
    hello(){}
}

//Take the user Input



//Select the Operation that you want ? 
