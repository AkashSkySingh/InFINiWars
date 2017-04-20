import MovingObject from "./moving_object";
import SpaceCraft from "./spacecraft";
import Projectile from "./projectile";
import Util from "./util";

const INVADER = {
  COLOR: "#5B95B7",
  WIDTH: 80,
  HEIGHT: 30,
  VEL: [0, 1.35]
};

class Invader extends MovingObject {
  constructor(options){
    options.color = INVADER.COLOR;
    options.pos = options.pos || options.game.randomPosition();
    options.width = INVADER.WIDTH;
    options.height = INVADER.HEIGHT;
    options.vel = options.vel || INVADER.VEL;
    super(options);
  }

  collideWith(otherObject) {
    if (otherObject instanceof SpaceCraft) {
      this.remove();
      otherObject.remove();
      return true;
    } else if (otherObject instanceof Projectile) {
      this.remove();
      otherObject.remove();
      return true;
    }
  }

  draw(ctxt) {
    ctxt.drawImage(document.getElementById("invader"),
      this.pos[0],
      this.pos[1],
      this.width,
      this.height);
  }
}

export default Invader;
