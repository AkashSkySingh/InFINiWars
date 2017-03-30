import MovingObject from './moving_object';

class Projectile extends MovingObject {
  constructor(options) {

    options.pos = [options.pos[0] + 10, options.pos[1] - 10];
    options.height = Projectile.HEIGHT;
    options.width = Projectile.WIDTH;
    options.color = "#5B95B7";
    options.vel = [0, -3];

    super(options);
  }
}

Projectile.HEIGHT = 10;
Projectile.WIDTH = 10;

export default Projectile;
