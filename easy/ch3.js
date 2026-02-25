/*
Challenge: 13.Roman to Integer (LeetCode)
Topics: Hash Table, Math, String

Description:
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

- I can be placed before V (5) and X (10) to make 4 and 9. 
- X can be placed before L (50) and C (100) to make 40 and 90. 
- C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

Examples:
Input: s = "III"
Output: 3
Explanation: III = 3.

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

Constraints:
1. 1 <= s.length <= 15
2. s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
3. It is guaranteed that s is a valid roman numeral in the range [1, 3999].
*/

// ----- Solution -----
// Version 1 - Time Complexity O(n) and Space Complexity O(1)
/*
const romanNumeral = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};

const romanToInt = function (s) {
  let int = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I" && s[i + 1] === "V") {
      int += romanNumeral.IV;
      i++;
    } else if (s[i] === "I" && s[i + 1] === "X") {
      int += romanNumeral.IX;
      i++;
    } else if (s[i] === "X" && s[i + 1] === "L") {
      int += romanNumeral.XL;
      i++;
    } else if (s[i] === "X" && s[i + 1] === "C") {
      int += romanNumeral.XC;
      i++;
    } else if (s[i] === "C" && s[i + 1] === "D") {
      int += romanNumeral.CD;
      i++;
    } else if (s[i] === "C" && s[i + 1] === "M") {
      int += romanNumeral.CM;
      i++;
    } else {
      int += romanNumeral[s[i]];
    }
  }
  return int;
};
*/

// Version 2 - Time Complexity O(n) and Space Complexity O(1)
// In Roman numerals, a smaller value before a larger value means subtraction.
/*
const romanNumeral = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s) {
  let int = 0;
  for (let i = 0; i < s.length; i++) {
    if (romanNumeral[s[i]] < romanNumeral[s[i + 1]]) {
      int += romanNumeral[s[i + 1]] - romanNumeral[s[i]];
      i++;
    } else {
      int += romanNumeral[s[i]];
    }
  }
  return int;
}

Note:
Using romanNumeral[s[i]] and romanNumeral[s[i + 1]] multiple times slows down the code and lowers the beats. Storing them in variables first makes the code faster and improves the beats.

  */

// Version 3 - Time Complexity O(n) and Space Complexity O(1)
const romanNumeral = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s) {
  let int = 0;
  for (let i = 0; i < s.length; i++) {
    const cur = romanNumeral[s[i]];
    const next = romanNumeral[s[i + 1]];
    if (cur < next) {
      int += next - cur;
      i++;
    } else {
      int += cur;
    }
  }
  return int;
}

// ----- Test -----
console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));

// ----- How This Works Behind the Scenes -----
