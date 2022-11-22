/* 
Challenge link: https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

Instructions:
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

Constraints
0 <= input.length <= 100
*/

// My solution
function validParentheses(parens) {
  let stringArray = parens.split('');

  function spliceArray() {
    for (let i = 0; i < stringArray.length; i++) {
      if (stringArray[i] == '(' && stringArray[i + 1] == ')') {
        // removes every couple of parentheses () until there's none left
        // if some parentheses are left unpaired, it means there's a problem
        stringArray.splice(i, 2);
        spliceArray(); // repeats recursively
      }
    }
  }
  spliceArray();

  // checks if there are unpaired parentheses
  return stringArray.length == 0 ? true : false;
}

console.log(validParentheses('())('));
console.log(validParentheses(')()()()('));
