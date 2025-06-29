/**
 * ✅ Problem:
 * Calculate the factorial of a given number `n` (i.e., n! = 1 * 2 * 3 * ... * n).
 *
 * 💡 Approach:
 * - Start from 1 and multiply all numbers up to n using a `for` loop.
 * - Return the final product.
 *
 * 🕒 Time Complexity: O(n)
 * - We loop from 1 to n once.
 *
 * 🧠 Space Complexity: O(1)
 * - No extra memory used except a few variables.
 *
 * 📌 Example:
 * Input: 5
 * Output: 120 (i.e., 5! = 5×4×3×2×1)
 */

/**
 * @param {number} n - The number to calculate factorial for
 * @returns {number} - The factorial result
 */
const factorial = (n) => {
    let product = 1;
    for (let i = 1; i <= n; i++) {
      product *= i;
    }
    return product;
  };
  
  // 🔁 Example usage
  console.log(factorial(5)); // Output: 120
  