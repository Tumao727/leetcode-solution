/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
  const list = s.split(' ').filter(a => a);
  const lastWord = list.length > 0 ? list[list.length - 1] : '';
  return lastWord.length;
};

// @lc code=end

