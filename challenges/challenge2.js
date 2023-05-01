/*
## Challenge 2: Palindrome Checker

Create a function that takes a string as an argument and returns `true` if it's a palindrome and `false` if it's not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward. For example, "racecar" is a palindrome, but "hello" is not.

[Solution Explanation](./solutions/ch_2_Palindrome_Checker/readme.md)

*/

const palindromeChecker = (str) => {
  for (let i = 0; i < Math.ceil(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }
  return true
}


console.log(palindromeChecker('abba'))
console.log(palindromeChecker('aba'));