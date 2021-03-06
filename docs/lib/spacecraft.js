import MovingObject from "./moving_object";
import Projectile from "./projectile";
import Util from "./util";

const spaceShip = {
  WIDTH: 50,
  HEIGHT: 50
};

class spaceCraft extends MovingObject {
  constructor(options) {
    options.color = "#0D3F5D";
    options.height = spaceShip.HEIGHT;
    options.width = spaceShip.WIDTH;
    options.vel = options.vel || [0, 0];
    super(options);
  }

  fireProjectile() {
    const norm = Util.norm(this.vel);

    const relativeVelocity = Util.scale(
      Util.dir(this.vel),
      Projectile.SPEED
    );

    const projectileVelocity = [
      relativeVelocity[0] + this.vel[0], relativeVelocity[1] + this.vel[1]
    ];

    const projectile = new Projectile({
      pos: this.pos,
      game: this.game
    });

    this.game.add(projectile);
  }

  power(impulse) {

    if (impulse === "right") {
      this.vel = [3, 0];
    } else if (impulse === "left") {
      this.vel = [-3, 0];
    } else {
      this.vel = [0, 0];
    }


    // Spaceship dimension binding fails due to input timing delay. A player can hold down the movement button in this movement style superseding the set restrictions. Therefore no bounds set in place.

    // let futureSpot = this.pos[0] + this.vel[0];
    // if (futureSpot < 0) {
    //   this.vel = [3, 0];
    // } else if (futureSpot > 400) {
    //   this.vel = [-3, 0];
    // }

  }

  draw(ctxt) {
    ctxt.drawImage(document.getElementById("spaceship"),
      this.pos[0],
      this.pos[1],
      this.width,
      this.height);
  }

}


export default spaceCraft;
