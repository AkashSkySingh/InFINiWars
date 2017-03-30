import MovingObject from "./moving_object";
import SpaceCraft from "./spacecraft";
import Projectile from "./projectile";
import Util from "./util";



const INVADER = {
  COLOR: "#182730",
  WIDTH: 20,
  HEIGHT: 20,
  VEL: [0, 4]
};

class Invader extends MovingObject {
  constructor(options){
    options.color = INVADER.COLOR;
    options.pos = options.pos || options.game.randomPosition();
    options.width = INVADER.WIDTH;
    options.height = INVADER.HEIGHT;
    options.vel = options.vel || INVADER.VEL;
    debugger;
    super(options);
  }

  collideWith(otherObject) {
    if (otherObject instanceof SpaceCraft) {
      return true;
    } else if (otherObject instanceof Projectile) {
      this.remove();
      otherObject.remove();
      return true;
    }
  }
}

export default Invader;
