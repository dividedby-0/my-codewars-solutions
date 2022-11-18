/* 
Challenge link: https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

Instructions:
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]


*/

// My solution
function digitize(n) {
  return String(n)
    .split('')
    .reverse()
    .map((number) => Number(number));
}

console.log(typeof n);
console.log(digitize(35231));
