/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// const containsDuplicate = nums => {
//   const filteredNums = Array.from(new Set(nums))
//   return filteredNums.length !== nums.length;
// };

const containsDuplicate = nums => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return true;
    }
    map.set(nums[i], nums[i])
  }

  return false;

};
// @lc code=end

