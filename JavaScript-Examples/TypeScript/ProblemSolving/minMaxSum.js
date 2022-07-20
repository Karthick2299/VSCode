function processData(input){
   var v = input;

    for(var  i = 0; i < v.length; i++){
        v[i] = parseInt(v[i]);
    }


    var max = -Infinity;
    var min = Infinity;

    for(let i = 0; i < v.length; i++){
        var sum = 0;
        for(let  j = 0; j < v.length; j++){
            if(i != j){
                sum += v[j];
            }
        }

        if(sum < min) min = sum;
        if(sum >  max) max = sum;
    }

    console.log(min, max);

}

const input = [1,2,3,4,5,6,8];
processData(input);