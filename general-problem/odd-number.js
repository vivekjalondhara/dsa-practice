/**
 * ✅ Problem:
 * Print odd numbers from 1 to N using recursion.
 *
 * 💡 Approach:
 * - Start from 1 and recursively check each number up to N.
 * - If the number is odd (i.e., not divisible by 2), print it.
 * - Move to the next number using recursion.
 *
 * 🕒 Time Complexity: O(N)
 * - One recursive call for each number from 1 to N.
 *
 * 🧠 Space Complexity: O(N)
 * - Because of the recursive call stack (up to N levels deep).
 *
 * 📌 Example:
 * Input: n = 5
 * Output: 1 3 5
 */

/**
 * @param {number} n - Upper limit
 * @param {number} current - Starting point (defaults to 1)
 */
const printOddNumbers = (n, current = 1) => {
    if (current > n) return;
  
    if (current % 2 !== 0) {
      console.log(current);
    }
  
    printOddNumbers(n, current + 1);
  };
  
  // 🔁 Example usage
  printOddNumbers(5); // Output: 1 3 5
  