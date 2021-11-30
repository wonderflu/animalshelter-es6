class Owner {
  #name;
  #yearOfBirth;
  #shelter;

  constructor(name, yearOfBirth) {
    this.#name = name;
    this.#yearOfBirth = yearOfBirth;
    this.#shelter = null;
  }

  get name() {
    return this.#name;
  }

  get age() {
    const currentYear = new Date().getFullYear();
    if (this.#yearOfBirth === currentYear) {
      return 1;
    } else {
      return currentYear - this.#yearOfBirth;
    }
  }

  get shelter() {
    return this.#shelter;
  }
  set shelter(shelter) {
    this.#shelter = shelter;
  }

  feedHungryAnimals() {
    this.#shelter.hungryAnimals().forEach((animal) => {
      animal.full();
    });
  }

  cleanDirtyCages() {
    this.#shelter.dirtyCages().forEach((cage) => {
      cage.clean();
    });
  }
}
