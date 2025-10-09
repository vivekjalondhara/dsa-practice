const printGrade = (marks) => {
  if (marks >= 90 && marks <= 100) {
    console.log("Grade: A");
  } else if (marks >= 80) {
    console.log("Grade: B");
  } else if (marks >= 70) {
    console.log("Grade: C");
  } else if (marks >= 60) {
    console.log("Grade: D");
  } else if (marks >= 0) {
    console.log("Grade: F");
  } else {
    console.log("Invalid marks");
  }
};

// Examples
printGrade(95); // Grade A
printGrade(82); // Grade B
printGrade(65); // Grade D
printGrade(50); // Grade F
