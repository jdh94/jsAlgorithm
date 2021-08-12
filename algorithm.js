"use strict"

// [3,1,2,3]	2
// [3,3,3,2,2,4]	3
// [3,3,3,2,2,2]	2

let nums = []

function solution(nums) {
  let answer = 0;
  let halfNums = nums.length/2;
  let countNums = [...new Set(nums)];
  
  if(countNums.length > halfNums)
      answer = halfNums;
  else
      answer = countNums.length;
  
  return answer;
}