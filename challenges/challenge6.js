/*
## Challenge 6: Capitalize the First Letter of Each Word

Write a function that takes a string as input and returns the string with the first letter of each word capitalized. For example, if the input string is "the quick brown fox", the function should return "The Quick Brown Fox".

[Solution Explanation](./solutions/ch_6_Capitalize_First_Letter_of_Word/readme.md)
*/

const capitalizeWords = (str) => {
  let words = str.split(' ')
  let capitalizedString = ''
  for (word of words) {
    word[0] = word[0].toUpperCase()
    capitalizedString = capitalizedString.concat(
      ` ${word[0].toUpperCase()}${word.slice(1)}`
    );
  }
  return capitalizedString.trimStart()
}

let str = 'the quick brown fox';
console.log(capitalizeWords(str))