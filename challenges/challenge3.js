/*
## Challenge 3: Fibonacci Series

Write a function that takes a number `n` as input and returns the first `n` numbers in the Fibonacci sequence. The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding numbers. The first two numbers in the sequence are 0 and 1. For example, if `n` is 5, the function should return the array` [0, 1, 1, 2, 3]`.

[Solution Explanation](./solutions/ch_3_Fibonacci_Series/readme.md)
*/

const fibonacci = (n) => {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 2] + sequence[i - 1]);
    }
    return sequence;
  }
};

for (let i = 0; i < 10; i++) {
  console.log(fibonacci(i))
}