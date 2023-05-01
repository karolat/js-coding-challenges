/*
## Challenge 4: Find the Longest Word

Write a function that takes a string and returns the longest word in the string. If there are two or more words that are of the same length, return the first one that appears in the string. For example, if the input string is "The quick brown fox jumps over the lazy dog", the function should return "quick".

[Solution Explanation](./solutions/ch_4_Longest_Word/readme.md)
*/

const longestWord = (str) => {
  let words = str.split(' ')
  let max = 0;
  let longestWord = null
  words.forEach(word => {
    if (longestWord === null) {
      longestWord = word
    } else if (word.length > max) {
      max = word.length
      longestWord = word
    }
  });
  return longestWord
}



str = 'The quick brown fox jumps over the lazy dog';
console.log(longestWord(str))