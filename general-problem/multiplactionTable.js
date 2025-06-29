/**
 * ✅ Problem:
 * Print the multiplication table of a given number from 1 to 10.
 *
 * 💡 Approach:
 * Use a `for` loop from 1 to 10 and multiply each number with `n`.
 * Print each line in the format: "n * i = result"
 *
 * 🕒 Time Complexity: O(1)
 * - Always runs a loop 10 times.
 *
 * 🧠 Space Complexity: O(1)
 * - Only prints output, no extra memory used.
 *
 * 📌 Example:
 * Input: 5
 * Output:
 * 5 * 1 = 5
 * 5 * 2 = 10
 * ...
 * 5 * 10 = 50
 */

/**
 * @param {number} n - Number whose multiplication table will be printed
 */
const printMultiplicationTable = (n) => {
    for (let i = 1; i <= 10; i++) {
      console.log(`${n} * ${i} = ${n * i}`);
    }
  };
  
  // 🔁 Example usage
  printMultiplicationTable(5);
  