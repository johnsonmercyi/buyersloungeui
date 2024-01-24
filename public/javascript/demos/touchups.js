let text = "Please locate where 'locate' occurs!";
// console.log(text.indexOf("locate"));
// text = String(text).replace("not", "very much");
// text = String(text).split("");
// let isMatch = String(text).match("is not available");
// let isMatch = String(text).includes();
// console.log(isMatch);

// try {
//   // throw new Error("BAD_CODE: Could find object.");
//   // throw new Error("CORRUPT_OPERATION: Could find object.");
//   throw new Error("This is a demo error!");
// } catch (error) {
//   if (String(error.message).includes("CORRUPT_OPERATION")) {
//     console.log("Hey! You're carrying out an illegal operation!");
//   } else if (error.message.includes("BAD_CODE")) {
//     console.log("I think you're not connected to the right network.");
//   } else {
//     console.log("Oops! Something went wrong.\n" + error.message);
//   }
// }


// const styleClasses = ["main", "secondary", "rounded"];
// let joinedClasses = styleClasses.join(" ");
// console.log(`<div class="${joinedClasses}"></div>`);

// let number = "text here!";
// console.log(`${number} is of type string? `, typeof number === "string");

// let convNum = "10.50";
// console.log(Number(convNum));


// const array = [1, 2, 3];
// const anotherArray = [...array, 4, 5, 6];
// anotherArray[2] = 20;
// console.log(array, anotherArray);

/**
 * Reverse an array while maintaining index order.
 */
const arrayOfData = [
  { name: "Johnson", role: "admin" },
  { name: "Jane", role: "user" },
  { name: "Job", role: "receptionist" },
];

arrayOfData.map((el, index) => ({ index: index, ...el })).reverse()
  .forEach((el, i) => {
    console.log(`[${i}: `, el, "]");
  });

