var vaidate;

$(document).ready(function (){

    $("#link").click(function(){
        $("#navMenu").animate({
            width:'toggle'
        });
    });
});

$(document).ready(function() {
    vaidate = true;
    $("#bar").click(function(){
        $("#navMenu").animate({
            height:'toggle'
        });
    });
});

