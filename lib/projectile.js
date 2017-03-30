import MovingObject from './moving_object';

class Projectile extends MovingObject {
  constructor(options) {
    super(options);

    options.height = ammo.HEIGHT;
    options.width = ammo.WIDTH;
  }
}

const ammo = {
  HEIGHT: 5,
  WIDTH: 5
};

export default Projectile;
