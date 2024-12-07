'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static deadAnimals() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  // eslint-disable-next-line constructor-super
  constructor(name, health, hidden) {
    // eslint-disable-next-line no-undef
    super(name, health);

    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // eslint-disable-next-line no-useless-constructor
  constructor(name, health, hidden) {
    super(name, health, hidden);
  }

  bite(item) {
    // eslint-disable-next-line no-constant-condition
    if (item.hidden === false && item instanceof Herbivore) {
      // eslint-disable-next-line no-unused-expressions
      item.health -= 50;
      Animal.deadAnimals();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
