import Invader from "./invaders";
import Projectile from "./projectile";
import SpaceCraft from "./spacecraft";
import Util from "./util";

class Game {

  constructor() {
    this.setUpGame();
  }

  setUpGame() {
    this.invaders = [];
    this.projectiles = [];
    this.spaceCrafts = [];
    this.score = 0;
    this.addInvaders();
    this.paused = false;
    this.gameOverState = false;
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

  togglePause() {
    if (this.paused) {
      this.paused = false;
    } else {
      this.paused = true;
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
          if (collision) {
            this.updateScore(obj1, obj2);
          }
        }
      }
    }
  }

  randomPosition() {

    return [
      Game.DIM_X / 4 + Math.random() * Game.DIM_X / 2,
      -400 * Math.random()
    ];

  }

  updateScore(obj1, obj2) {

    if (obj1 instanceof Invader
      && obj2 instanceof Projectile){
      if (!this.gameOverState) {
        this.score = this.score + 100;
      }
    }

  }

  gameOver(ctxt) {
    if (this.spaceCrafts.length === 0) {
      ctxt.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
      this.gameOverState = true;
    }
  }

  remove(object) {

    if (object instanceof Projectile) {
      this.projectiles.splice(this.projectiles.indexOf(object), 1);
    } else if (object instanceof Invader) {
      this.invaders.splice(this.invaders.indexOf(object), 1);
    } else if (object instanceof SpaceCraft) {
      this.spaceCrafts.splice(this.spaceCrafts.indexOf(object), 1);
    } else {
      throw "Error: removal of unknown object.";
    }
  }

  draw(ctxt) {
    const pattern = ctxt.createPattern(Game.BackGround, 'no-repeat');
    ctxt.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctxt.fillStyle = pattern;
    document.getElementById("score").innerHTML = this.score;

    this.allObjects().forEach((object) => {
      object.draw(ctxt);
      this.gameOver(ctxt);
    });

    window.setInterval(
      () => {
        this.invaders.forEach((invader) => {
          if (invader.pos[1] > 700) {
            invader.pos = this.randomPosition();
          }
        });

        for (let i = this.invaders.length; i < Game.NUM_INVADERS; i++) {
          this.add(new Invader({ game: this }));
        }

      }, 1000
    );
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
Game.NUM_INVADERS = 30;

export default Game;
