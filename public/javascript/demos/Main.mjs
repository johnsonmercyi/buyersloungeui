import Person from "./Person.mjs";
import PersonObject from "./PersonObject.mjs";
import { date } from "./util.mjs";

class Main {
  constructor() {
    this.person = PersonObject;

    this.person.setName("Johnson");
    this.person.setAge(40);
    this.person.setDob(date);
  }

  printPersonDetails() {
    console.log(this.person.personDetails());
  }
}

const main = new Main();
main.printPersonDetails();