/* 
Challenge link: https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

Instructions:
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

*/

// My solution
function countPositivesSumNegatives(input) {
  let positives = [];
  let negatives = [];
  let result = [];

  if (input === null || input.length < 1) {
    return result;
  } else {
    input.forEach((element) => {
      element <= 0 ? negatives.push(element) : positives.push(element);
    });
  }

  result.push(positives.length);
  result.push(
    negatives.reduce((accumulator, current) => accumulator + current, 0)
  );

  return result;
}

console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
);
