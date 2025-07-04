// 🔗 Problem: Count Number of Occurrences of an Element
// 📂 Topic: Arrays
// 🧠 Level: Basic
// 🗓️ Solved on: 2025-07-04
// 💻 Language: JavaScript

/**
 * 🧾 Problem Statement:
 * 
 * Given an array and a target element, count how many times the target 
 * appears in the array.
 * 
 * 🔍 Example:
 * Input: nums = [1, 2, 3, 2, 4, 2, 5], target = 2
 * Output: 3
 * 
 * ⏱️ Time Complexity: O(n)
 * 📦 Space Complexity: O(1)
 */

/**
 * Count the number of times a specific element appears in an array
 * @return {number} Count of the target element
 */
const countOccurrences = () => {
    const nums = [1, 2, 3, 2, 4, 2, 5];
    const target = 2;
    let count = 0;

    for (let num of nums) {
        if (num === target) {
            count++;
        }
    }

    return count;
};

// ✅ Test Case
console.log(countOccurrences()); // Output: 3
