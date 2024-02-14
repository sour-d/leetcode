/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let checkedNums = [];

  for (let i = 0; i < nums.length; i++) { 
    if (checkedNums.includes(target - nums[i])) {
      return [checkedNums.indexOf(target - nums[i]), i];
    }
    checkedNums.push(nums[i]);
  }
};
// @lc code=end

