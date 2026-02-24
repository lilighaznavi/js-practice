/*
Challenge: Area of a Triangle

Description:
Write a function that takes the base and height of a triangle and return its area.

Examples:
triArea(3, 2) ➞ 3
triArea(7, 4) ➞ 14
triArea(10, 10) ➞ 50
*/

// ----- Solution -----
const triArea = function (base, height) {
  const area = (base * height) / 2;
  return area;
};

// ----- Test -----
console.log(triArea(3, 1));
console.log(triArea(10, 5));
console.log(triArea(4, 18));

// ----- How This Works Behind the Scenes -----
