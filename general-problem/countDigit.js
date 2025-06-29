/**
 * ✅ Problem:
 * Count the number of digits in a given integer.
 *
 * 💡 Approaches:
 * 1. Convert number to string and get its length.
 * 2. Use loop to divide number by 10 until it becomes 0.
 *
 * 🕒 Time Complexity: O(log₁₀N)
 * 🧠 Space Complexity: O(1)
 */

const countDigits = (n) => Math.abs(n).toString().length;


console.log(countDigits(456)); // Output: 3
