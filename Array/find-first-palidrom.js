// 🔗 Problem: Find First Palindrome String in Array
// 🔗 Problem Link: https://leetcode.com/problems/find-first-palindromic-string-in-the-array/
// 📂 Topic: String, Array, Two-Pointer
// 🧠 Level: Easy
// 🗓️ Solved on: 2025-07-06
// 💻 Language: JavaScript

/**
 * 🧾 Problem Statement:
 * 
 * Given an array of strings, return the first string that is a palindrome.
 * If no palindrome exists, return null.
 *
 * A string is a palindrome when it reads the same forward and backward.
 * 
 * 🔍 Example:
 * Input: ["abc", "car", "ada", "racecar", "cool"]
 * Output: "ada"
 */

const isPalindrome = () => {
    const words = ["abc", "car", "ada", "racecar", "cool"];
    let mainStr = 0;

    while (mainStr < words.length) {
        const str = words[mainStr];
        const newStr = str.split('');
        let left = 0;
        let right = newStr.length - 1;
        let isPalin = true;

        while (left < right) {
            if (newStr[left] !== newStr[right]) {
                isPalin = false;
                break;
            }
            left++;
            right--;
        }

        if (isPalin) {
            return str;
        }

        mainStr++;
    }

    return ''; // No palindrome found
};

// 🚀 Test Case
console.log("✅ Output:", isPalindrome()); // "ada"
