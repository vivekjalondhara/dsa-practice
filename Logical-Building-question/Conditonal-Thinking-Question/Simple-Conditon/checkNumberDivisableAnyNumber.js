const checkDivisible = (num, divisor) => {
  if (num % divisor === 0) {
    console.log(`${num} is divisible by ${divisor}`);
  } else {
    console.log(`${num} is not divisible by ${divisor}`);
  }
};

checkDivisible(20, 5); // Example: 20 is divisible by 5
checkDivisible(21, 5); // Example: 21 is not divisible by 5
