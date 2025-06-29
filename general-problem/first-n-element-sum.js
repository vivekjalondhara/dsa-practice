/**
 * ✅ Problem:
 * Calculate the sum of numbers from 0 to N using a mathematical formula.
 *
 * 💡 Approach:
 * Use the formula: Sum = n * (n + 1) / 2
 * This avoids loops or recursion and gives the result instantly.
 *
 * 🕒 Time Complexity: O(1)
 * 🧠 Space Complexity: O(1)
 *
 * 📌 Example:
 * Input: 5
 * Output: 15 (0 + 1 + 2 + 3 + 4 + 5)
 */

/**
 * @param {number} n - The upper limit number
 * @returns {number} - The sum from 0 to n
 */
const nNumberTotal = (n) => (n * (n + 1)) / 2;

// 🔁 Example usage
console.log(nNumberTotal(5)); // Output: 15
