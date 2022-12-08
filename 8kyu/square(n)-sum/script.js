/* 
Challenge link: https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

Instructions:
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

// My solution
function squareSum(numbers) {
  return numbers
    .map((number) => Math.pow(number, 2))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(squareSum([0, 3, 4, 5]));
