const numbers = [1, 2, 3, 4, 5, 6];


// const snookerBalls = numbers.map((element, index, array) => {
//   console.log("element: ", element);
//   console.log("index: ", index);
//   console.log("array: ", array);
// });

// numbers.forEach(el => console.log(el + 1)); // Array forEach
const snookerBalls = numbers.map(el => "Ball " + el); // Array map
const evenNumbers = numbers.filter(el => el % 2 === 0); // Array filter

const ballsWithEvenNumbers = numbers.filter(el => el % 2 === 0)
.map(el => "Ball " + el);

// Array every function example
function validateEmptyFields(...fields) {
  return fields.every(el => el !== "");
}
const isFileld = validateEmptyFields("Filled", "Johnson", "No one");
console.log(isFileld);

const found = numbers.indexOf(3);
console.log(found);