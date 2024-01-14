const array = [1, "john", "jane", 100];
const obj = {
  name: "Johnson",
  age: "20"
};

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// const entries = Object.entries(obj);
// for (let i = 0; i < entries.length; i++) {
//   const entry = entries[i];
//   console.log(`${entry[0]} = '${entry[1]}'`);
// }

// for(const key in obj) {
//   console.log(obj[key]);
// }

// for (const key of Object.keys(obj)) {
//   console.log(obj[key]);
// }

// console.log(obj["name"]);

const  obj2 = {
  name: "Jane"
}

for (const key in obj) {
  if (Object.hasOwnProperty.call(obj2, key)) {
    const element = obj2[key];
    console.log(element);
  }

  Object.hasOwnProperty.call(obj2, key);
  obj2.hasOwnProperty(key);
}



function displayArrayMethods() {
  for (const item in array) {
    console.log(item);
  }

  for (const item of array) {
    console.log(item);
  }

  for (let i = 0; i < array.length; i++) {
    console.log("Printing: ", array[i]);
  }
}