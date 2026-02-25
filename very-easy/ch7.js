/*
Challenge: Sum Mixed Array (Codewars - 8kyu level)
Topics: Fundamentals, Strings, Arrays

Description:
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.



Examples:
- [9, 3, '7', '3'] ➞ 22
- ['5', '0', 9, 3, 2, 1, '9', 6, 7] ➞ 42
- ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'] ➞ 41
*/

// ----- Solution -----
// Time Complexity O(n) and Space Complexity O(1)
function sumMix(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }

  return sum;
}

// ----- Test -----
console.log(sumMix([9, 3, "7", "3"]));
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
console.log(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]));

// ----- How This Works Behind the Scenes -----
