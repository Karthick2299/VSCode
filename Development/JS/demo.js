

document.addEventListener("click",hide);

document.addEventListener("click",show);

document.addEventListener("click",hiidingInfo);

var i;


for(i = 0; i < 1000; i++){

    if(i%2 == 0){
        function show(){
            document.getElementById("block").style.display = "block";
            document.getElementById("bar").style.display = "none";
            document.getElementById("main").style.filter = "blur(8px)";
            
        }
        
    }
    else{
        function hide(){
            document.getElementById("block").style.display = "none";
            document.getElementById("bar").style.display = "block";
        }
        function hiidingInfo(){
            document.getElementById("blur").style.display = "none"
        }
    }

}


const validate = document.getElementById("myBtn");
const name  = document.getElementById("fullName");


document.addEventListener("click",checking);


function checking(){

(e) => {
    if(name.value === " " || name.value == null){
        e.preventDefault();
    }
}

}