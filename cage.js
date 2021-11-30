class Cage {
  #size;
  #id;
  #isDirty;
  #animals;

  constructor(size) {
    this.#size = size;
    this.#id = Date.now() + Math.floor(Math.random() * 100);
    this.#isDirty = false;
    this.#animals = [];
  }

  get size() {
    return this.#size;
  }

  get id() {
    return this.#id;
  }

  get isDirty() {
    return this.#isDirty;
  }
  dirty() {
    this.#isDirty = true;
  }
  clean() {
    this.#isDirty = false;
  }

  get animals() {
    return this.#animals;
  }

  addAnimal(animal) {
    this.#animals.push(animal);
  }

  removeAnimalByID(id) {
    const animalIndex = this.#animals.findIndex((animal) => animal.id === id);
    this.#animals.splice(animalIndex, 1);
  }
}
