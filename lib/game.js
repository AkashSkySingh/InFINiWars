const Invader = require("./invader");
const Projectile = require("./projectile");
const spaceCraft = require("./spacecraft");
const Util = require("./util");

class Game {

  constructor() {
    this.invaders = [];
    this.projectiles = [];
    this.spaceCrafts = [];

    this.addInvaders();
  }

  add(object) {
    if (object instanceof Invader) {
      this.invaders.push(object);
    } else if (object instanceof Projectile) {
      this.projectiles.push(object);
    } else if (object instanceof spaceCraft) {
      this.spaceCrafts.push(object);
    } else {
      throw "Error: unknown object";
    }
  }

  addInvaders() {
    for (let i = 0; i < Game.NUM_INVADERS; i++) {
      this.add(new Invader({ game: this }));
    }
  }

  addSpaceCraft() {
    const spaceCraft
  }

}
