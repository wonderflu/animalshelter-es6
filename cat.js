// import Animal from "./animal.js";

class Cat extends Animal {
  #breed;
  #amountOfLegs;

  constructor(name, yearOfBirth, breed, amountOfLegs) {
    // constructor inherirance, the child class will have all fields from the parent class
    super(name, yearOfBirth);
    this.#breed = breed;
    this.#amountOfLegs = amountOfLegs;
  }

  get breed() {
    return this.#breed;
  }

  get amountOfLegs() {
    return this.#amountOfLegs;
  }
  set amountOfLegs(value) {
    this.#amountOfLegs = value;
  }
}
