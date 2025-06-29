// 🔗 Problem: https://leetcode.com/problems/plus-one/
// 📂 Topic: Arrays (Digit Manipulation)
// 🧠 Level: Easy
// 🗓️ Solved on: 2025-06-28
// 💻 Language: JavaScript

/**
 * 🧾 Problem Statement:
 * You are given a large integer represented as an array of digits,
 * where each digits[i] is the i-th digit of the number.
 * The digits are ordered from most significant to least significant.
 * Increment the large integer by one and return the resulting array of digits.
 * 
 * 🔍 Examples:
 * Input: digits = [1, 2, 3] ➝ Output: [1, 2, 4]
 * Input: digits = [9, 9, 9] ➝ Output: [1, 0, 0, 0]
 * 
 * 📘 Constraints:
 * - 1 <= digits.length <= 100
 * - 0 <= digits[i] <= 9
 * - digits does not contain any leading 0's.
 * 
 * ⏱️ Time Complexity: O(n)
 * 📦 Space Complexity: O(1) (excluding output array)
 * 
 * 💡 Approach:
 * Start from the last digit. If it is less than 9, add 1 and return.
 * If it is 9, set it to 0 and carry over to the next digit.
 * If carry exists after all digits, insert 1 at the beginning.
 */

/**
 * @param {number[]} digits - Array representing a large integer
 * @return {number[]} - Array representing the incremented integer
 */
const plusOne = (digits) => {
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] < 9) {
        digits[i] += 1;
        return digits;
      }
      digits[i] = 0; // Carry over
    }
  
    // If all digits were 9, add 1 at the beginning
    digits.unshift(1);
    return digits;
  };
  
  // ✅ Test Cases
  console.log(plusOne([1, 2, 3])); // Output: [1, 2, 4]
  console.log(plusOne([9, 9, 9])); // Output: [1, 0, 0, 0]
  console.log(plusOne([7, 6, 9])); // Output: [7, 7, 0]
  console.log(plusOne([0]));       // Output: [1]
  