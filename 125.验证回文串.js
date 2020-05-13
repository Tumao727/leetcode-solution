/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const formatString = s => {
  const numbers = '0123456789'
  const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperLetters = lowerLetters.toUpperCase()
  const validitems = numbers + lowerLetters + upperLetters
  const formatString = s.trim().split('')
    .filter(item => validitems.includes(item))
    .map(s => isNaN(Number(s)) ? s.toLowerCase() : s)
    .join('')
  return formatString
}


const isPalindrome = s => {
  const validString = formatString(s)
  return validString === validString.split('').reverse().join('')
};

const result = isPalindrome(' a')
console.log('result', result)
// @lc code=end

