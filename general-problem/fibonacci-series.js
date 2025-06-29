/**
 * ✅ Problem:
 * Generate the Fibonacci Series up to n terms using iteration.
 *
 * 💡 Approach:
 * - Initialize first two terms as 0 and 1.
 * - Use a loop to generate and print the next terms.
 *
 * 🕒 Time Complexity: O(n)
 * 🧠 Space Complexity: O(1) — if printing directly
 *
 * 📌 Example:
 * Input: 6
 * Output: 0 1 1 2 3 5
 */

/**
 * @param {number} n - Number of Fibonacci terms to generate
 */
const printFibonacciSeries = (n) => {
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
      console.log(a);
      [a, b] = [b, a + b]; // Swapping values
    }
  };
  
  // 🔁 Example usage
  printFibonacciSeries(6);
  