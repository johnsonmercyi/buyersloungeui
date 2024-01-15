const HTTPMethods = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete"
}
// Locked to READ ONLY
Object.freeze(HTTPMethods);

HTTPMethods.GET = "Another method!";

// console.log(HTTPMethods.GET);

const person = { name: "Joshua MC", age: 40, address: "New Address" };

// Object.keys(person).map(key => {
//   console.log(person[key]);
// });

// Object.values(person).map(value => {
//   console.log(value);
// });

// Object.entries(person).map(entry => {
//   console.log(`${entry[0]}: ${entry[1]}`);
// });

const response = [
  { name: "Joshua MC", age: 40, address: "New Address" },
  { name: "Jane Doe", age: 25, address: "Jane's Address" },
  { name: "Donny Ikechukwu", age: 30, address: "New Avenue Address" },
];

response.forEach(row => {
  // Render to the HTLM DOM
});








