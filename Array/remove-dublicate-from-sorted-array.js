// 🔗 Problem: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// 📂 Topic: Arrays
// 🧠 Level: Easy
// 🗓️ Solved on: 2025-06-28
// 💻 Language: TypeScript / JavaScript

/**
 * 🧾 Problem Statement:
 * 
 * Given an integer array `nums` sorted in non-decreasing order, remove the duplicates **in-place** 
 * such that each unique element appears only once. The relative order of the elements should be kept the same.
 * 
 * Return the number of unique elements (`k`). The first `k` elements of `nums` should contain the unique elements 
 * in order. The remaining elements beyond `k` do not matter.
 * 
 * 📘 Note:
 * - Do not allocate extra space — modify the input array in-place.
 * - It is guaranteed that the input array is sorted.
 * 
 * 🔍 Example 1:
 * Input: nums = [1, 1, 2]
 * Output: 2, nums = [1, 2, _]
 * 
 * 🔍 Example 2:
 * Input: nums = [0,0,1,1,1,2,2,3,3,4]
 * Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
 */

/**
 * 🧠 Approach:
 * - Use the two-pointer technique:
 *   → Pointer `i` keeps track of the last unique element's index.
 *   → Pointer `j` scans the array.
 * - If `nums[j] !== nums[i]`, increment `i` and update `nums[i] = nums[j]`.
 * - This shifts all unique elements to the front of the array.
 * 
 * Alternatively, you can use `splice()` in a loop if you prefer array methods, 
 * though this is slightly less efficient for large arrays.
 * 
 * ✅ In-place modification is achieved.
 * 
 * ⏱️ Time Complexity: O(n) — One full pass through the array.
 * 📦 Space Complexity: O(1) — No extra space used, modifies in-place.
 * 
 * 🧪 Related Follow-up:
 * - What if duplicates are allowed **at most twice**? (LeetCode 80)
 * - Try using this technique to remove specific elements (`val`) — LeetCode 27.
 */

/**
 * @param {number[]} nums - Sorted input array
 * @return {number} - The number of unique elements (k)
 */
const removeDuplicates = (nums) => {
    let i = 1; // Start from index 1 (second element)
  
    // Loop through array and remove duplicates in-place
    while (i < nums.length) {
      // If current element is same as previous, remove it
      if (nums[i] === nums[i - 1]) {
        nums.splice(i, 1); // Removes element at index i
      } else {
        i++; // Only move forward if no duplicate was removed
      }
    }
  
    return nums.length;
  };
  
  // Test Case
  const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  const k = removeDuplicates(nums);
  
  console.log("k =", k);           // Output: 5
  console.log("nums =", nums);     // Output: [0, 1, 2, 3, 4]
  