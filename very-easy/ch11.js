/*
Challenge: If you can't sleep, just count sheep!! (Codewars - 8kyu level)
Topics: Fundamentals, Strings

Description:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

Examples:
- countSheep(0) ➞ ""
- countSheep(1) ➞ "1 sheep..."
- countSheep(2) ➞ "1 sheep...2 sheep..."
- countSheep(3) ➞ "1 sheep...2 sheep...3 sheep..."
*/

// ----- Solution -----
// Time Complexity O(n) and Space Complexity O(1)
const countSheep = function (num) {
  let str = ``;
  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  return str;
};

// ----- Test -----
console.log(countSheep(0));
console.log(countSheep(1));
console.log(countSheep(2));
console.log(countSheep(3));

// ----- How This Works Behind the Scenes -----
