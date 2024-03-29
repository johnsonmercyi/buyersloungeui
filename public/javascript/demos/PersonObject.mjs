import * as util from './util.mjs';

const PersonObject = {
  name: undefined,
  age: undefined,
  dob: undefined,
  initializePerson: function(name, age, dob) {
    this.name = name;
    this.age = age;
    this.dob = dob;
    return this;
  },
  setName: function(name) {
    this.name = name;
  },
  setAge: function(age) {
    this.age = age;
  },
  setDob: function(dob) {
    this.dob = dob;
  },
  getName: function() {
    return this.name;
  },
  getAge: function() {
    return this.age;
  },
  getDob: function() {
    return this.dob;
  },
  personDetails: function() {
    return `[name: ${this.name}, age: ${this.age}, dob: ${this.dob}]`;
  }
};

//check this ->
//PersonObject.initializePerson("ikenna", 29, util.date);
//console.log(PersonObject.personDetails());
const p = PersonObject.initializePerson("ikenna", 29, util.date);
console.log(p.personDetails());

export default PersonObject;

// Person.initializePerson("Jane Doe", 40, util.date);
// console.log(Person.personDetails());