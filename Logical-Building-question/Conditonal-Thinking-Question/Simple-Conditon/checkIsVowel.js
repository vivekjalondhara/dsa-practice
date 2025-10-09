// Pre-create the set once
const vowelsSet = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

const isVowel = (char) => vowelsSet.has(char);

console.log(isVowel("a")); // true
console.log(isVowel("b")); // false
console.log(isVowel("E")); // true
