// 🔗 Problem: https://leetcode.com/problems/search-insert-position/
// 📂 Topic: Arrays (Non-binary-search approach)
// 🧠 Level: Easy
// 🗓️ Solved on: 2025-06-28
// 💻 Language: JavaScript

/**
 * 🧾 Problem Statement:
 * 
 * Given a sorted array of distinct integers and a target value, return the index if the target is found.
 * If not, return the index where it would be if it were inserted in order.
 * 
 * 🔍 Example 1:
 * Input: nums = [1, 3, 5, 6], target = 5
 * Output: 2
 * 
 * 🔍 Example 2:
 * Input: nums = [1, 3, 5, 6], target = 2
 * Output: 1
 * 
 * 🔍 Example 3:
 * Input: nums = [1, 3, 5, 6], target = 7
 * Output: 4
 * 
 * 📘 Constraints:
 * - 1 <= nums.length <= 10⁴
 * - -10⁴ <= nums[i], target <= 10⁴
 * - All the integers in nums are distinct and sorted in ascending order.
 * 
 * ⏱️ Time Complexity: O(n)
 * 📦 Space Complexity: O(1)
 * 
 * ⚠️ Note:
 * - This is not the optimal O(log n) binary search solution.
 * - It uses `.findIndex()` for simplicity and readability.
 */

/**
 * @param {number[]} nums - Sorted array of distinct integers
 * @param {number} target - Target value to find or insert
 * @return {number} - Index of the target or its insertion point
 */
const searchInsert = (nums, target) => {
    const index = nums.findIndex(num => num >= target);
    return index === -1 ? nums.length : index;
  };
  
  // ✅ Test Cases
  console.log(searchInsert([1, 3, 5, 6], 5)); // Output: 2
  console.log(searchInsert([1, 3, 5, 6], 2)); // Output: 1
  console.log(searchInsert([1, 3, 5, 6], 7)); // Output: 4
  console.log(searchInsert([1, 3, 5, 6], 0)); // Output: 0
  