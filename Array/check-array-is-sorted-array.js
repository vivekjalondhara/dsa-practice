// 🔗 Problem: Check if Array is Sorted
// 📂 Topic: Arrays (Iteration, Comparison)
// 🧠 Level: Easy
// 🗓️ Solved on: 2025-07-03
// 💻 Language: JavaScript

/**
 * 🧾 Problem Statement:
 * Given an array of integers, check whether the array is sorted in **non-decreasing** order.
 * Return true if the array is sorted, otherwise return false.
 * 
 * 🔍 Examples:
 * Input: [1, 2, 3, 4] ➝ Output: true
 * Input: [1, 3, 2] ➝ Output: false
 * Input: [5, 5, 5, 5] ➝ Output: true
 * 
 * 📘 Constraints:
 * - 1 <= arr.length <= 10^4
 * - -10^5 <= arr[i] <= 10^5
 * 
 * ⏱️ Time Complexity: O(n)
 * 📦 Space Complexity: O(1)
 * 
 * 💡 Approach:
 * Iterate from left to right and compare each element with the next.
 * If any element is greater than the next, return false.
 * If no such pair is found, return true.
 */

/**
 * @param {number[]} arr - Array of integers
 * @return {boolean} - True if array is sorted in non-decreasing order, else false
 */
const isSortedArray = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  };
  
  // ✅ Test Cases
  console.log(isSortedArray([1, 2, 3, 4])); // Output: true
  console.log(isSortedArray([1, 3, 2]));    // Output: false
  console.log(isSortedArray([5, 5, 5, 5])); // Output: true
  console.log(isSortedArray([10, 9, 8]));   // Output: false
  console.log(isSortedArray([1]));          // Output: true
  