import Invader from "./invaders";
import Projectile from "./projectile";
import SpaceCraft from "./spacecraft";
import Util from "./util";

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
    } else if (object instanceof Projectile ) {
      this.projectiles.push(object);
    } else if (object instanceof SpaceCraft) {
      this.spaceCrafts.push(object);
    } else {
      throw "Error: Attempted to add unknown object";
    }

  }

  addInvaders() {

    for (let i = 0; i < Game.NUM_INVADERS; i++) {
      this.add(new Invader({ game: this }));
    }

  }

  addSpaceCraft() {

    let centerScreen = [Game.DIM_X / 2, 650];

    const spaceCraft = new SpaceCraft({
      pos: centerScreen,
      game: this
    });

    this.add(spaceCraft);

    return spaceCraft;

  }


  allObjects() {
    return [].concat(this.spaceCrafts, this.invaders, this.projectiles);
  }

  checkCollisions() {
    const allObjects = this.allObjects();
    for (let i=0; i < allObjects.length; i++) {
      for (let j=0; j < allObjects.length; j++){
        const obj1 = allObjects[i];
        const obj2 = allObjects[j];

        if (obj1.hasCollidedWith(obj2)) {
          const collision = obj1.collideWith(obj2);
          if (collision) return;
        }
      }
    }
  }

  randomPosition() {
    return [
      Game.DIM_X / 4 + Math.random() * Game.DIM_X / 2,
      0
    ];
  }

  remove(object) {
    if (object instanceof Projectile) {
      this.projectiles.splice(this.projectiles.indexOf(object), 1);
    } else if (object instanceof Invader) {
      this.invaders.splice(this.invaders.indexOf(object), 1);
    } else if (object instanceof SpaceCraft) {
      this.spaceCrafts.slice(this.spaceCrafts.indexOf(object), 1);
    } else {
      throw "Error: removal of unknown object.";
    }
  }

  draw(ctxt) {
    const pattern = ctxt.createPattern(Game.BackGround, 'no-repeat');
    ctxt.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctxt.fillStyle = pattern;

    this.allObjects().forEach((object) => {
      object.draw(ctxt);
    });
  }

  step(delta) {
    this.moveObjects(delta);
    this.checkCollisions();
  }

  moveObjects(delta) {
    this.allObjects().forEach((object) => {
      object.move(delta);
    });
  }

}

Game.BackGround = document.getElementById("infiniwars");
Game.DIM_X = 450;
Game.DIM_Y = 700;
Game.NUM_INVADERS = 10;

export default Game;
