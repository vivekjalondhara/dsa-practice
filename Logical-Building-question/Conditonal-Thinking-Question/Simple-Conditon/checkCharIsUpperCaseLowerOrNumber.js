const checkCharacterType = (char) => {
  if (char >= "A" && char <= "Z") {
    console.log(`${char} is an uppercase letter`);
  } else if (char >= "a" && char <= "z") {
    console.log(`${char} is a lowercase letter`);
  } else if (char >= "0" && char <= "9") {
    console.log(`${char} is a digit`);
  } else {
    console.log(`${char} is a special character`);
  }
};

checkCharacterType("A"); // Uppercase
checkCharacterType("b"); // Lowercase
checkCharacterType("7"); // Digit
checkCharacterType("@"); // Special character
