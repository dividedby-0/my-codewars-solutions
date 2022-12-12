/* 
Challenge link: https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

Instructions:
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

// My solution
function findUniq(arr) {
  let temp1 = arr.filter((element) => element == arr[1]);

  let temp2 = arr.filter((element) => element != arr[1]);

  if (temp1.length > temp2.length) {
    return Number(temp2.join());
  } else {
    return Number(temp1.join());
  }
}

console.log(findUniq([3, 10, 3, 3, 3]));
console.log(findUniq([1, 0, 0]));
