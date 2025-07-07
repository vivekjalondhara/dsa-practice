// 🔗 Problem: https://leetcode.com/problems/squares-of-a-sorted-array/
// 📂 Topic: Arrays, Two Pointers
// 🧠 Level: Easy
// 🗓️ Solved on: 2025-07-07
// 💻 Language: JavaScript

/**
 * 🧾 Problem Statement:
 *
 * Given an integer array `nums` sorted in non-decreasing order,
 * return an array of the squares of each number sorted in non-decreasing order.
 *
 * ✅ Input:  [-4, -1, 0, 3, 10]
 * ✅ Output: [0, 1, 9, 16, 100]
 *
 * 🔍 Constraints:
 * - Must not use built-in sort()
 * - Should run in O(n) time using two pointers
 */

const squareSortedArray = () => {
    const arr = [-4, -1, 0, 3, 10];
    let left = 0;
    let right = arr.length - 1;
    let index = right;
    const result = new Array(arr.length);
  
    while (left <= right) {
      const leftSquare = arr[left] * arr[left];
      const rightSquare = arr[right] * arr[right];
  
      if (leftSquare > rightSquare) {
        result[index] = leftSquare;
        left++;
      } else {
        result[index] = rightSquare;
        right--;
      }
      index--;
    }
  
    return result;
  };
  
  console.log(squareSortedArray()); // Output: [0, 1, 9, 16, 100]
  