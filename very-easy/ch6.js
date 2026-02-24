/*
Return the First Element in an Array

Description:
Create a function that takes an array containing only numbers and return the first element.

Examples:
- getFirstValue([1, 2, 3]) ➞ 1
- getFirstValue([80, 5, 100]) ➞ 80
- getFirstValue([-500, 0, 50]) ➞ -500
*/

// ----- Solution -----
function getFirstValue(arr) {
  return arr[0];
}

// ----- Test -----
console.log(getFirstValue([4, 65, 12]));
console.log(getFirstValue([`Lili`, `Tom`, `John`]));
console.log(getFirstValue([34, `teacher`, 567]));

// ----- How This Works Behind the Scenes -----
