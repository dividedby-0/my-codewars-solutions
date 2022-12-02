/* 
Challenge link: https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

Instructions:
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.

Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false



*/

// My solution
function generateHashtag(str) {
  if (str == '' || str[0] == ' ') {
    return false;
  } else {
    let wordArray = str.split(' ');
    let upperCaseArray = [];

    for (let word of wordArray) {
      word = String(word).charAt(0).toUpperCase() + word.slice(1, word.length);
      upperCaseArray.push(word);
    }
    upperCaseArray.unshift('#');
    let newString = upperCaseArray.join('');

    if (newString.length > 140) {
      return false;
    } else {
      return newString;
    }
  }
}

console.log(generateHashtag('Do We have A Hashtag'));
console.log(generateHashtag(''));
