class Person {

  constructor(name, age, dob) {
    // Global Instance Variables
    this.name = name;
    this.age = age;
    this.dob = dob;
  }

  /**
   * Some getters and setters
   */

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setAge(age) {
    this.age = age;
  }

  getAge() {
    return this.age;
  }

  setDob(dob) {
    this.dob = dob;
  }

  getDob() {
    return dob;
  }

  personDetails() {
    return `[name: ${this.name}, age: ${this.age}, dob: ${this.dob}]`;
  }
}

// const person = new Person();
// person.setName("John Doe");
// person.setAge(30);
// person.setDob(new Date().toLocaleString());

// console.log(person.personDetails());
export default Person;