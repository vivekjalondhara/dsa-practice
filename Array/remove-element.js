// 🔗 Problem: https://leetcode.com/problems/remove-element/
// 📂 Topic: Arrays
// 🧠 Level: Easy
// 🗓️ Solved on: 2025-06-28
// 💻 Language: JavaScript

/**
 * 🧾 Problem Statement:
 * Given an integer array `nums` and a value `val`, remove all occurrences of `val` in-place.
 * Return the number of elements left (not equal to `val`).
 * The order can be changed. Do not use extra space.
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
        nums[k] = nums[i];
        k++;
      }
    }
  
    return k;
  };
  
  // 🧪 Test Case
  const nums = [3, 2, 2, 3];
  const val = 3;
  const k = removeElement(nums, val);
  console.log("k =", k);                  // Output: 2
  console.log("Updated nums:", nums);     // Output: [2, 2, _, _]
  