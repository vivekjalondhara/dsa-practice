// 🔗 Problem: https://leetcode.com/problems/two-sum/
// 📂 Topic: Arrays, HashMap
// 🧠 Level: Easy
// 🗓️ Solved on: 2025-06-24
// 💻 Language: TypeScript

/**
 * 🧾 Problem Statement:
 *
 * Given an array of integers `nums` and an integer `target`,
 * return the indices of the two numbers such that they add up to `target`.
 * 
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 * 
 * Return the answer in any order.
 *
 * Example:
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */

/**
 * 🧠 Approach:
 *
 * 1. Use a Map to store each number and its index as we iterate through the array.
 * 2. For each element `nums[i]`, calculate the value needed to reach the target: `target - nums[i]`.
 * 3. If this needed value already exists in the Map, we've found the two numbers.
 * 4. Return the stored index and current index.
 *
 * ⏱️ Time Complexity: O(n)
 * 📦 Space Complexity: O(n)
 */

function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>(); // number -> index
  
    for (let i = 0; i < nums.length; i++) {
      const checkTarget = target - nums[i];
  
      if (map.has(checkTarget)) {
        return [map.get(checkTarget)!, i]; // '!' because we know it exists
      }
  
      map.set(nums[i], i);
    }
  
    return []; // if no pair found
  }
  
  // ✅ Test Case
  const result = twoSum([2, 7, 11, 15], 9);
  console.log(result); // Output: [0, 1]
  