/*
Challenge: Return the Next Number from the Integer Passed

Description:
Create a function that takes a number as an argument, increments the number by +1 and returns the result.

Examples:
addition(0) ➞ 1
addition(9) ➞ 10
addition(-3) ➞ -2
*/

// ----- Solution -----
function addition(num) {
  const nextNum = num + 1;
  return nextNum;
}
// ----- Test -----
console.log(addition(678));
console.log(addition(9));
console.log(addition(37));

// ----- How This Works Behind the Scenes -----
