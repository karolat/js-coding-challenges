/*
## Challenge 5: Reverse a String

Write a function that takes a string as input and returns the string reversed. For example, if the input string is "hello", the function should return "olleh".

[Solution Explanation](./solutions/ch_5_Reverse_String/readme.md)
*/

const reverseString = (str) => {
  let reversed = ''
  for (let i = 0; i < str.length; i++) {
    reversed = `${str[i]}${reversed}`
  }
  return reversed
}

const str = 'hello'
console.log(reverseString(str))