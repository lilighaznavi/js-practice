/*
Challenge: Return the Sum of Two Numbers

Description:
Create a function that takes two numbers as arguments and returns their sum.

Examples:
addition(3, 2) ➞ 5
addition(-3, -6) ➞ -9
addition(7, 3) ➞ 10
*/

// ----- Solution -----
const addition = function (a, b) {
  const sum = a + b;
  return sum;
};

// ----- Test -----
console.log(addition(-3, 5));
console.log(addition(5, 9));
console.log(addition(-6, -7));

// ----- How This Works Behind the Scenes -----
