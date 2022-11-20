/* 
Challenge link: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

Instructions:
Count the number of Duplicates
Write a function that will return the countObj of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

*/

// My solution
function duplicateCount(text) {
  let stringArray = text.toLowerCase().split('');
  let countObj = {};
  let duplicates = 0;

  // stores count in obj
  // increment on each iteration or initialize
  // without the '|| 0' part the obj value would be NaN
  stringArray.forEach((element) => {
    countObj[element] = (countObj[element] || 0) + 1;
  });

  // counts how many duplicates in obj
  Object.values(countObj).forEach((value) => (value > 1 ? duplicates++ : 0));

  return duplicates;
}

console.log(duplicateCount('aabbcde'));
// console.log(duplicateCount('abcde'));
// console.log(duplicateCount('abcdabaabbababae'));
