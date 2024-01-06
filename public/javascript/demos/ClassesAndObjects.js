class Person {

  constructor() {
    this.name = "Johnson";
    this.age = 0;
    this.dob = new Date();

    console.log(this.dob);
  }
}

const person = new Person();