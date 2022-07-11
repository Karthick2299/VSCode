//Problem 1 - Count all Possible paths from top left to bottom right 
//of a M x N matrix
// m-1 => for moving Down
//n-1 => for moving Right
//Total moves  = down moves + right moves => (m -1) + (n - 1);
//Solution in Java Program
/*

    public class FindPaths{
        public static void main(String[] args){
            System.out.println(numberOfPaths(3,3));
        }

        static int numberOfPaths(int m, int n){

        }

    }

*/
// function numberOfPaths(m:number, n: number): number{
//     if(m == 1 || n == 1){
//         return 1;
//     }
//     return numberOfPaths(m-1, n) + numberOfPaths(m, n-1);
// }
// const result = numberOfPaths(2,2);
// console.log(result);
//Problem 2 - check whether the Number is Present in an Array or not.
// var army = ["Marcos", "Delta Force", "SWAT"];
// if(army.indexOf("Marcos") !== -1){
//     console.log("Yes, Value Exists");
// }
// else{
//     console.log("No, It doesn't Exists");
// }
var Numbers = [2, 3, 4, 5, 6, 7];
function checkValue(array) {
    if (array.indexOf(2) !== -1) {
        console.log("value exists");
    }
    else {
        console.log("value doesn't Exists");
    }
}
checkValue(Numbers);
