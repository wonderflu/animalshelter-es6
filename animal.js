class Animal {
  // declaring private variables
  #name;
  #yearOfBirth;
  #id;
  #isHungry;

  constructor(name, yearOfBirth) {
    // defining private variables
    this.#name = name;
    this.#yearOfBirth = yearOfBirth;
    this.#id = Date.now() + Math.floor(Math.random() * 100);
    this.#isHungry = false;
  }

  get name() {
    return this.#name;
  }
  set name(value) {
    this.#name = value;
  }

  get age() {
    const currentYear = new Date().getFullYear();
    if (this.#yearOfBirth === currentYear) {
      return 1;
    } else {
      return currentYear - this.#yearOfBirth;
    }
  }

  get id() {
    return this.#id;
  }

  get isHungry() {
    return this.#isHungry;
  }
  hungry() {
    this.#isHungry = true;
  }
  full() {
    this.#isHungry = false;
  }
}
