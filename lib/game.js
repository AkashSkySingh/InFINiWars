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
      throw "Error: unknown object";
    }
  }

  addInvaders() {
    for (let i = 0; i < Game.NUM_INVADERS; i++) {
      this.add(new Invader({ game: this }));
    }
  }

  addSpaceCraft() {
    const spaceCraft = new SpaceCraft({
      pos: this.startPosition(),
      game: this
    });

    this.add(spaceCraft);

    return spaceCraft;
  }

  startPosition () {
    return [
      Game.DIM_X / 2,
      650
    ];
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

  draw(ctxt) {
    const pattern = ctxt.createPattern(Game.BackGround, 'no-repeat');
    ctxt.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctxt.fillStyle = pattern;
    ctxt.fill();

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

export default Game;
