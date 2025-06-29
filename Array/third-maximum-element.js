// 🔗 Problem: https://leetcode.com/problems/third-maximum-number/
// 📂 Topic: Arrays
// 🧠 Level: Easy
// 🗓️ Solved on: 2025-06-29
// 💻 Language: JavaScript

/**
 * 🧾 Problem Statement:
 * 
 * Given an integer array `nums`, return the third distinct maximum number in this array. 
 * If the third maximum does not exist, return the maximum number.
 * 
 * 🔍 Example 1:
 * Input: nums = [3, 2, 1]
 * Output: 1
 * 
 * 🔍 Example 2:
 * Input: nums = [1, 2]
 * Output: 2
 * 
 * 🔍 Example 3:
 * Input: nums = [2, 2, 3, 1]
 * Output: 1
 * 
 * 📘 Constraints:
 * - 1 <= nums.length <= 10⁴
 * - -2³¹ <= nums[i] <= 2³¹ - 1
 * 
 * ⏱️ Time Complexity: O(n log n) due to sort
 * 📦 Space Complexity: O(n) due to Set for uniqueness
 * 
 * ⚠️ Note:
 * - This approach removes duplicates using Set
 * - Then sorts the unique values
 * - Returns 3rd max if available, else returns the max
 */

/**
 * @param {number[]} nums - Input array of integers
 * @return {number} - Third distinct maximum or the maximum if not present
 */
const thirdMax = (nums) => {
    const uniqueNums = [...new Set(nums)];
    uniqueNums.sort((a, b) => a - b);
  
    return uniqueNums.length >= 3
      ? uniqueNums[uniqueNums.length - 3]
      : uniqueNums[uniqueNums.length - 1];
  };
  
  // ✅ Test Cases
  console.log(thirdMax([3, 2, 1]));       // Output: 1
  console.log(thirdMax([1, 2]));          // Output: 2
  console.log(thirdMax([2, 2, 3, 1]));    // Output: 1
  console.log(thirdMax([1, 2, 2, 5, 3])); // Output: 2
  