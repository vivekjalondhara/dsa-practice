/**
 * ✅ Problem:
 * Print even numbers from 1 to N using recursion.
 * 
 * 💡 Approach:
 * - Start from 1 and go up to N using recursion.
 * - At each recursive call, check if the number is even.
 *   If yes, print it.
 * - Recursively call with the next number.
 * 
 * 🕒 Time Complexity: O(N)
 * - We visit each number from 1 to N once.
 * 
 * 🧠 Space Complexity: O(N)
 * - Due to the recursion call stack (up to N calls).
 * 
 * 📌 Example:
 * Input: n = 10
 * Output: 2 4 6 8 10
 */

/**
 * @param {number} n - Upper limit
 * @param {number} current - Current number to evaluate (starts from 1)
 */
const printEvenNumbers = (n, current = 1) => {
    if (current > n) return;
  
    if (current % 2 === 0) {
      console.log(current);
    }
  
    printEvenNumbers(n, current + 1);
  };
  
  // 🔁 Example usage:
  printEvenNumbers(10);
  