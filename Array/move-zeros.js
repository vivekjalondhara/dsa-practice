// 🔗 Problem: Move Zeroes
// 🔗 Problem Link: https://leetcode.com/problems/move-zeroes/
// 📂 Topic: Arrays, Two-Pointer
// 🧠 Level: Easy
// 🗓️ Solved on: 2025-07-06
// 💻 Language: JavaScript

/**
 * 🧾 Problem Statement:
 * 
 * Given an integer array `nums`, move all `0`'s to the end 
 * of it while maintaining the relative order of the non-zero elements.
 *
 * You must do this in-place without making a copy of the array.
 * 
 * 🔍 Example:
 * Input:  [0, 1, 0, 3, 12]
 * Output: [1, 3, 12, 0, 0]
 */

function moveZeroes(arr) {
    let left = 0;

    for (let num of arr) {
        if (num !== 0) {
            console.log(left, "insertPos"); // debug log
            arr[left] = num;
            left++;
        }
    }

    while (left < arr.length) {
        arr[left] = 0;
        left++;
    }

    return arr;
}

// 🚀 Test Case
const input = [0, 1, 0, 3, 12];
const output = moveZeroes(input);
console.log("✅ Output:", output); // [1, 3, 12, 0, 0]
