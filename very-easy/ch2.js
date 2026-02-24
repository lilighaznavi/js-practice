/*
Challenge: Convert Minutes into Seconds

Description:
Write a function that takes an integer minutes and converts it to seconds.

Examples:
convert(5) ➞ 300
convert(3) ➞ 180
convert(2) ➞ 120
*/

// ----- Solution -----
const seconds = (minutes) => minutes * 60;

// ----- Test -----
console.log(seconds(5));
console.log(seconds(1));
console.log(seconds(12));

// ----- How This Works Behind the Scenes -----
