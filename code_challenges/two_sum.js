// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

//SOURCE: https://leetcode.com/problems/two-sum/
//LEVEL: EASY

let nums = [2,5,5,11];
let target = 10;

const twoSum = (nums, target) => {
    for (let i=0; i<nums.length; i++) {
        for (let j=i+1; j<nums.length; j++) {
            console.log([nums[i],nums[j]])
            if((nums[i]+nums[j]) === target){
                return ([i,j]);
            }   
        }
    }
    return("No solution found");
};

console.log(twoSum(nums, target));