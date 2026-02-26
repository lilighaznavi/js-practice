/*
Challenge: Convert boolean values to strings (Codewars - 8kyu level)
Topics: Fundamentals

Description:
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.



Examples:
- (boolToWord(true)) ➞ `Yes`
- (boolToWord(false)) ➞ `No`
*/

// ----- Solution -----
// Time Complexity O(1) and Space Complexity O(1)
function boolToWord(bool) {
  if (bool === true) {
    return `Yes`;
  } else {
    return `No`;
  }
}

// ----- Test -----
console.log(boolToWord(true));
console.log(boolToWord(false));

// ----- How This Works Behind the Scenes -----
