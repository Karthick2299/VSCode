//create an array
let array = [1, 3, 4, 5, 7, 22, 25, 76];
let target = 5;

let iterativeFunction = function(array, target){
    let start = 0, end = array.length-1;

    while(start <= end){
        let mid = Math.floor((start + end) / 2);

        if(array[mid] === target){
            return true;
        }
        else if(array[mid] < target){
            start = mid + 1;
        }
        else{
            end = mid - 1;
        }
    }

    return false;
}


if(iterativeFunction(array, target, 0, array.length-1)){
    document.write("Element Found");
}
else{
    document.write("Element not Found ")
}