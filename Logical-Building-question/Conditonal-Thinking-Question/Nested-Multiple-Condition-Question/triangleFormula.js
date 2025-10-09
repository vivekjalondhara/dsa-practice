const isValidTriangle = (a, b, c) => {
  if (a + b > c && a + c > b && b + c > a) {
    console.log(`Sides ${a}, ${b}, ${c} form a valid triangle`);
  } else {
    console.log(`Sides ${a}, ${b}, ${c} do NOT form a valid triangle`);
  }
};

// Examples
isValidTriangle(3, 4, 5); // valid
isValidTriangle(1, 2, 3); // not valid
