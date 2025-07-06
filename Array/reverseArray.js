// 🔗 Problem: Reverse an array using two-pointer technique
// 🔗 Problem: https://leetcode.com/problems/reverse-string/

// 📂 Topic: Arrays, Two-Pointer
// 🧠 Level: Easy
// 🗓️ Solved on: 2025-07-06
// 💻 Language: JavaScript

/**
 * 🧾 Problem Statement:
 * 
 * Given an array of characters, reverse the array **in-place**
 * using the **two-pointer technique**.
 * 
 * Do not use built-in reverse method.
 * 
 * 🔍 Example:
 * Input: ["v", "i", "v", "e"]
 * Output: ["e", "v", "i", "v"]
 * 
 * ⏱️ Time Complexity: O(n)
 * 📦 Space Complexity: O(1)
 * 
 * ⚠️ Note:
 * - This approach uses constant space and swaps elements in-place.
 */

/**
 * @return {string[]} - The reversed array
 */
const reverseArrayUsingTwoPointer = () => {
    const arr = ["v", "i", "v", "e","k"];
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr;
};

// ✅ Test Case
console.log(reverseArrayUsingTwoPointer()); // Output: ['k' ,'e', 'v', 'i', 'v' ]
