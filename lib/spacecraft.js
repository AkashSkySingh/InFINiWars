import MovingObject from "./moving_object";
import Projectile from "./projectile";
import Util from "./util";

class spaceCraft extends MovingObject {
  constructor(options) {
    super(options);
    options.color = "#999999";
    options.height = spaceShip.HEIGHT;
    options.width = spaceShip.WIDTH;
    options.vel = options.vel || [0, 0];
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
      this.vel = [1, 0];
    } else {
      this.vel = [-1, 0];
    }
  }

}


const spaceShip = {
  WIDTH: 10,
  HEIGHT: 10
};

export default spaceCraft;
