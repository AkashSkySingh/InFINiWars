import MovingObject from './moving_object';

class Projectile extends MovingObject {
  constructor(options) {

    options.pos = [options.pos[0] + 10, options.pos[1]];
    options.height = ammo.HEIGHT;
    options.width = ammo.WIDTH;
    options.color = "#ffffff";
    options.vel = [0, -3];

    super(options);
  }
}

const ammo = {
  HEIGHT: 10,
  WIDTH: 10
};

export default Projectile;
