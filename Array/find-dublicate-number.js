// 🔗 Problem: https://leetcode.com/problems/find-the-duplicate-number/
// 📂 Topic: Arrays, Floyd's Cycle Detection
// 🧠 Level: Medium
// 🗓️ Solved on: 2025-07-04
// 💻 Language: JavaScript

/**
 * 🧾 Problem Statement:
 * 
 * Given an array of integers `nums` containing `n + 1` integers where each 
 * integer is in the range `[1, n]` inclusive.
 * 
 * There is only one repeated number in `nums`, return this repeated number.
 * 
 * 🚫 Constraints:
 * - Must not modify the array (read-only).
 * - Uses only constant extra space.
 * - Time complexity must be less than O(n²).
 * 
 * 🔍 Example:
 * Input: nums = [1,3,4,2,2]
 * Output: 2
 * 
 * ⏱️ Time Complexity: O(n)
 * 📦 Space Complexity: O(1)
 * 
 * ⚠️ Note:
 * - This approach uses Floyd's Tortoise and Hare algorithm to detect the cycle.
 */

/**
 * @param {number[]} nums - Input array with n+1 integers
 * @return {number} - The duplicate number
 */
var findDuplicate = function(nums) {
    let slow = nums[0];
    let fast = nums[0];

    // Phase 1: Find the intersection point of the two runners.
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);

    // Phase 2: Find the entrance to the cycle (duplicate number).
    slow = nums[0];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow;
};

// ✅ Test Cases
console.log(findDuplicate([1, 3, 4, 2, 2])); // Output: 2
console.log(findDuplicate([3, 1, 3, 4, 2])); // Output: 3
console.log(findDuplicate([1, 1]));          // Output: 1
console.log(findDuplicate([1, 1, 2]));       // Output: 1
