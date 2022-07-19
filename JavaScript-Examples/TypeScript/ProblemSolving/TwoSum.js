//Problem of the Day.

var twoSum = function(nums, target){
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i,j];
            }
        }
    }
};
const array = [2,3,4,1,7];
console.log(twoSum(array, 6));