//Median of Array

// const median = arr => {
//     const mid = Math.floor(arr.length/2);
//     const num = [...arr].sort((a,b) => a - b);

//     return arr.length % 2 !== 0 ? num[mid] : (num[mid - 1] + num[mid]) / 2;

// };

// console.log(median([2,3,4,5,6,7,-8]));

//Sorting an Array


// const array = [1,4,7,9];
// function sort(array){
//     let temp = 0;
//     for(let i = 0; i < array.length; i++){
//         for(let j = i + 1; j < array.length; j++){
//             if(array[i] > array[j]){
//                 temp = array[i];
//                 array[i] = array[j];
//                 array[j] = temp;
//             }
//         }

//     }
//     //printing sorted Array
//     // console.log("Sorted Array : " + array);

//     // getMedian(array);

// }

// function getMedian(inputArray){

//     sort(inputArray);

//     let length = inputArray.length;

//     //if the array is odd positioned
//     if(length % 2 == 1){
//         console.log(inputArray[(length / 2) - .5]);
//         return inputArray;
//     }

//     else{
//         console.log((inputArray[(length / 2)] + inputArray[(length / 2) - 1]) / 2);
//         return (inputArray[(length / 2)] + inputArray[(length / 2) - 1]) / 2;
//     }
// }



// // sort(array);
// const resultMedian = getMedian(array);
// console.log("The Median of Array is : " + resultMedian);


//Get random element in Array

function random_item(array){
    return array[Math.floor(Math.random() * array.length)];
}

const arrayEx = [23,45,23,1,2,57,676,9,4,1,23,22,25];
var resultArr = random_item(arrayEx);

console.log("Random Element is : " + resultArr);