/* 
Challenge link: https://www.codewars.com/kata/5254ca2719453dcc0b00027d/train/javascript

Instructions:
In this kata you have to create all permutations of a non empty input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

Examples:

With input 'a'
Your function should return: ['a']
With input 'ab'
Your function should return ['ab', 'ba']
With input 'aabb'
Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

The order of the permutations doesn't matter.
*/

// My solution
function permutations(string) {
  let result = [];

  // recursion stops with nothing left to iterate or empty input
  // or when just 1 element is left
  if (string.length === 0) return [];
  if (string.length === 1) return [string];

  for (let i = 0; i < string.length; i++) {
    // set apart first element
    const currentElement = string[i];
    // detach remaining elements
    let remainingElements = string.slice(0, i).concat(string.slice(i + 1));
    // repeat the slicing only on remaining elements
    const remainingElementsPermuted = permutations(remainingElements);
    // populate result array
    for (let j = 0; j < remainingElementsPermuted.length; j++) {
      let permutedArray = [currentElement]
        .concat(remainingElementsPermuted[j])
        .join()
        .replace(/,/g, '');
      result.push(permutedArray);
    }
  }
  // remove duplicates
  let uniqueArray = [...new Set(result)];
  return uniqueArray;
}

console.table(permutations('abba'));
