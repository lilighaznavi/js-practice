/*
Challenge: Convert Age to Days

Description:
Create a function that takes the age in years and returns the age in days.

Examples:
- calcAge(65) ➞ 23725
- calcAge(0) ➞ 0
- calcAge(20) ➞ 7300

Notes:
- Use 365 days as the length of a year for this challenge.
- Ignore leap years and days between last birthday and now.
- Expect only positive integer inputs.
*/

// ----- Solution -----
const livingDays = (age) => age * 365;

// ----- Test -----
console.log(livingDays(30));
console.log(livingDays(1));
console.log(livingDays(86));

// ----- How This Works Behind the Scenes -----
