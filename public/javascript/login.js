document.addEventListener('DOMContentLoaded', function (event) {
  const usernameField = document.querySelector("#username");
  const passwordField = document.querySelector("#password");
  const submitButton = document.querySelector("#loginButton");

  // Traditional Javascript function
  function doSomething() {
    // Using the this keyword here would have an issue
    return "[doSomething] Called!";
  }

  // Javascript arrow function
  const arrowFunction = () => {
    // Using the this keyword here would refer to the object of the document which is what we want
  }

  submitButton.addEventListener('click', (event) => {
    event.preventDefault();// Stops the form default behaviour
    const car = new Car(usernameField.value, passwordField.value);
    // car.submitDetails();

    car.executeMethods(doSomething);
  });
  
});

// Demonstrates Javascript classes
class Car {

  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  submitDetails = () => {
    console.log("Submitting details...");
    console.log("Name: ", this.username);
    console.log("Age: ", this.password);
  }

  executeMethods = (method) => {
    console.log(method);
  }
}

