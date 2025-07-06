// 🔗 Problem: Check if a string is a palindrome using two-pointer technique
// 📂 Topic: Strings, Two-Pointer
// 🧠 Level: Easy
// 🗓️ Solved on: 2025-07-06
// 💻 Language: JavaScript

/**
 * 🧾 Problem Statement:
 * 
 * Given a string, check whether it is a palindrome or not using
 * the two-pointer technique.
 * 
 * A palindrome is a word that reads the same forward and backward.
 * 
 * 🔍 Example:
 * Input: "abcba"
 * Output: true
 * 
 * Input: "hello"
 * Output: false
 * 
 * ⏱️ Time Complexity: O(n)
 * 📦 Space Complexity: O(1)
 * 
 * ⚠️ Note:
 * - Comparison is case-sensitive.
 * - Only basic characters are used (no spaces/punctuation handling).
 */

/**
 * @param {string} str - Input string
 * @return {boolean} - Returns true if string is a palindrome, false otherwise
 */
const isPalindrome = (str) => {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};

// ✅ Test Cases
console.log(isPalindrome("abcba")); // Output: true
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
