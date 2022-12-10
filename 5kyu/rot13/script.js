/*
Challenge link: https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

Instructions:
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

// My solution
function rot13(message) {
  const normalAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  const shiftedAlphabet = 'nopqrstuvwxyzabcdefghijklm';
  let cipheredMessage = '';
  for (let i = 0; i < message.length; i++) {
    const index = normalAlphabet.indexOf(message[i]);
    if (normalAlphabet.indexOf(message[i]) == -1) {
      // if it's a symbol or a number, just copy it
      cipheredMessage += message[i];
    } else {
      // if it's contained in the normalAlphabet
      cipheredMessage += shiftedAlphabet[index];
    }
  }

  return cipheredMessage;
}

console.log(rot13('te!st'));
