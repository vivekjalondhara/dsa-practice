const checkMultiple = (num1, num2) => {
  if (num1 % num2 === 0 || num2 % num1 === 0) {
    console.log(`${num1} and ${num2} are multiples of each other`);
  } else {
    console.log(`${num1} and ${num2} are NOT multiples of each other`);
  }
};

// Examples
checkMultiple(10, 5); // multiples
checkMultiple(12, 4); // multiples
checkMultiple(7, 3); // not multiples
