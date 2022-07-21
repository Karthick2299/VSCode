//check whether the prime number is present in Array or not.

//Given Array

const InputArray = [25, 22,13, 16, 89];

function checkPrime(number){
    if(number <= 1){
        return false;
    }

    else{
        for(let i = 2; i < number; i++){
            if(number % i == 0){
                return false;
            }
        }
        return true;
    }
}

let primeNum = [], NonPrime = [];

InputArray.forEach(function (element){
    const isPrime = checkPrime(element);

    if(isPrime){
        primeNum += element + " , ";
        // console.log(`${element} is Prime`);
    }
    else{
        NonPrime += element + " , ";
        // console.log(`${element} is not Prime`);
    }
});

console.log("Prime numbers in Array is : " + primeNum);

console.log("Non Prime numbers in Array : " + NonPrime);


const result = checkPrime(3);
console.log(result);
