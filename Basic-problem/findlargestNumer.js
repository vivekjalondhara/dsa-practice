const findLargestNumber = () => {
  const arr = [2, 5, 4, 9, 6, 7, 1, 0, 9];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
};

console.log(findLargestNumber());
