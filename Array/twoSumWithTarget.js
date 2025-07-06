// 🔗 Problem: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// 📂 Topic: Two Pointers
// 🧠 Level: Easy
// 🗓️ Solved on: 2025-07-06
// 💻 Language: JavaScript

/**
 * 🧾 Problem Statement:
 * Given a 1-indexed array of integers `numbers` that is already sorted in non-decreasing order,
 * find two numbers such that they add up to a specific `target` number.
 * Return the indices of the two numbers (1-indexed) as an array of integers.
 * You must use only constant extra space.
 * 
 * 🔍 Examples:
 * Input: numbers = [2, 7, 11, 15], target = 9 ➝ Output: [1, 2]
 * Input: numbers = [2, 3, 4], target = 6 ➝ Output: [1, 3]
 * 
 * 📘 Constraints:
 * - 2 <= numbers.length <= 3 * 10^4
 * - -1000 <= numbers[i] <= 1000
 * - numbers is sorted in non-decreasing order.
 * - There is exactly one solution.
 * 
 * ⏱️ Time Complexity: O(n)
 * 📦 Space Complexity: O(1)
 * 
 * 💡 Approach:
 * Use two pointers — one at the beginning (`left`), one at the end (`right`) of the array.
 * - If sum is equal to target, return indices.
 * - If sum is less than target, move left pointer to right.
 * - If sum is more than target, move right pointer to left.
 */

/**
 * @return {number[] | boolean} - Array of indices (1-indexed) if found, else false
 */
const twoSumWithTarget = () => {
    const numbers = [2, 11];
    const target = 9;
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];

        if (sum === target) {
            return [left + 1, right + 1]; // 1-indexed
        }

        if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return false;
};

// ✅ Test Case
console.log(twoSumWithTarget()); // Output: false
