import MovingObject from './moving_object';

class Projectile extends MovingObject {
  constructor(options) {

    options.pos = [options.pos[0] + 15, options.pos[1] - 30];
    options.height = Projectile.HEIGHT;
    options.width = Projectile.WIDTH;
    options.color = "#5B95B7";
    options.vel = [0, -3];

    super(options);
  }

  draw(ctxt) {
    ctxt.drawImage(document.getElementById("projectile"),
      this.pos[0],
      this.pos[1],
      this.width,
      this.height);
  }
}

Projectile.HEIGHT = 40;
Projectile.WIDTH = 20;

export default Projectile;
