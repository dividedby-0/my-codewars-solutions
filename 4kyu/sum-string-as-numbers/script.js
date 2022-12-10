/* 
Challenge link: https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript

Instructions:
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

I have removed the use of BigInteger and BigDecimal in java

Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.

*/

// My solution

function sumStrings(a, b) {
  return showBigNumber(Number(a) + Number(b));

  // handles big numbers
  function showBigNumber(bigNumber) {
    return bigNumber
      .toString()
      .replace(/^([+-])?(\d+).?(\d*)[eE]([-+]?\d+)$/, function (x, s, n, f, c) {
        var l = +c < 0,
          i = n.length + +c,
          x = (l ? n : f).length,
          c = (c = Math.abs(c)) >= x ? c - x + l : 0,
          z = new Array(c + 1).join('0'),
          r = n + f;
        return (
          (s || '') +
          (l ? (r = z + r) : (r += z)).substring(0, (i += l ? z.length : 0)) +
          (i < r.length ? '.' + r.substring(i) : '')
        );
      });
  }
}

console.log(sumStrings('1234', '456'));
