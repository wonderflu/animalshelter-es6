class Shelter {
  #name;
  #cages;

  constructor(name) {
    this.#name = name;
    this.#cages = [];
  }

  get name() {
    return this.#name;
  }

  get cages() {
    return this.#cages;
  }

  dirtyCages() {
    const dirtyCages = this.#cages.filter((cage) => cage.isDirty);
    if (!dirtyCages.length) {
      return null;
    } else {
      return dirtyCages;
    }
  }

  dirtyCagesCBAsync(callback) {
    setTimeout(() => {
      let error;
      const dirtyCages = this.#cages.filter((cage) => cage.isDirty);
      if (!dirtyCages.length) {
        error = new Error(
          "There are no cages to clean, all of them are already clean."
        );
      }
      callback(error, dirtyCages);
    }, 1000);
  }

  dirtyCagesAsync() {
    return new Promise((resolve, reject) => {
      const dirtyCages = this.#cages.filter((cage) => cage.isDirty);
      setTimeout(() => {
        if (!dirtyCages.length) {
          reject(
            new Error(
              "There are no cages to clean, all of them are already clean."
            )
          );
        } else {
          resolve(dirtyCages);
        }
      });
    }, 1000);
  }

  findCageByID(id) {
    const cageByID = this.#cages.find((cage) => cage.id === id);
    if (!cageByID) {
      return null;
    } else {
      return cageByID;
    }
  }

  addCage(cage) {
    this.#cages.push(cage);
  }

  deleteCageByID(id) {
    const cageIndex = this.#cages.findIndex((cage) => cage.id === id);
    this.#cages.splice(cageIndex, 1);
  }

  hungryAnimals() {
    const hungryAnimals = [];
    this.#cages.forEach((cage) => {
      cage.animals.forEach((animal) => {
        if (animal.isHungry) {
          hungryAnimals.push(animal);
        }
      });
    });
    if (!hungryAnimals.length) {
      return null;
    } else {
      return hungryAnimals;
    }
  }

  findAnimalByID(id) {
    let animalByID;
    this.#cages.forEach((cage) => {
      cage.animals.forEach((animal) => {
        if (animal.id === id) {
          animalByID = animal;
        }
      });
    });
    if (!animalByID) {
      return null;
    } else {
      return animalByID;
    }
  }
}
