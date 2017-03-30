import MovingObject from "./moving_object";
import Projectile from "./projectile";
import Util from "./util";

const spaceShip = {
  WIDTH: 30,
  HEIGHT: 30
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
      this.vel = [1, 0];
    } else if (impulse === "left") {
      this.vel = [-1, 0];
    } else {
      this.vel = [0, 0];
    }
  }

}


export default spaceCraft;
