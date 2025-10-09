// File: checkLeapYear.js

const checkLeapYear = (year) => {
  const date = new Date(year, 1, 29); // February = month index 1
  return date.getDate() === 29;
};

console.log(checkLeapYear(2024)); // true
console.log(checkLeapYear(2025)); // false
