const MovingObject = require("./moving_object");
const Projectile = require("./projectile");
const Util = require("./util");

class spaceCraft extends MovingObject {
  constructor(options) {
    super(options);
    options.radius = spaceCraft.RADIUS;
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
      vel: projectileVelocity,
      game: this.game
    });

    this.game.add(projectile);
  }

  power(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  }

}

spaceCraft.RADIUS = 10;
module.exports = spaceCraft;
