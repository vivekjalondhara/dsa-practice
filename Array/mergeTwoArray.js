// 🔗 Problem: Merge Two Sorted Arrays Using Two-Pointer Technique
// 📂 Topic: Arrays, Two-Pointer
// 🧠 Level: Easy
// 🗓️ Solved on: 2025-07-06
// 💻 Language: JavaScript

/**
 * 🧾 Problem Statement:
 * 
 * Given two sorted arrays `arr` and `arr1`, merge them into a single
 * sorted array using the two-pointer technique.
 * 
 * Do not use built-in sort function.
 * 
 * 🔍 Example:
 * Input: arr = [1, 3, 12], arr1 = [2, 5, 6]
 * Output: [1, 2, 3, 5, 6, 12]
 * 
 * ⏱️ Time Complexity: O(n + m)
 * 📦 Space Complexity: O(n + m)
 * 
 * ⚠️ Note:
 * - Both arrays are already sorted.
 * - The final result will also be sorted.
 */

/**
 * @returns {number[]} - Merged sorted array
 */
const mergeSortedArrays = () => {
    const arr = [1, 3, 12];
    const arr1 = [2, 5, 6];
    
    let i = 0;
    let j = 0;
    const result = [];
  
    // Compare elements from both arrays and push the smaller one
    while (i < arr.length && j < arr1.length) {
      if (arr[i] < arr1[j]) {
        result.push(arr[i]);
        i++;
      } else {
        result.push(arr1[j]);
        j++;
      }
    }
  
    // Push remaining elements from arr
    while (i < arr.length) {
      result.push(arr[i]);
      i++;
    }
  
    // Push remaining elements from arr1
    while (j < arr1.length) {
      result.push(arr1[j]);
      j++;
    }
  
    return result;
  };
  
  // ✅ Test Output
  console.log(mergeSortedArrays());
  // Output: [1, 2, 3, 5, 6, 12]
  