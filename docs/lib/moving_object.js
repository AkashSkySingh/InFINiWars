import Util from "./util";

class MovingObject {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.height = options.height;
    this.width = options.width;
    this.color = options.color;
    this.game = options.game;
  }

  collideWith(otherObject) {
  }

  draw(ctxt) {
    ctxt.fillStyle = this.color;

    ctxt.beginPath();
    ctxt.fillRect(this.pos[0], this.pos[1], this.width, this.height);
    ctxt.fill();
  }

  faceCheck() {
    return [(this.pos[0] + this.width/2), (this.pos[1])];
  }

  hasCollidedWith(otherObject) {
    const centerDist = Util.dist(this.faceCheck(), otherObject.faceCheck());
    return centerDist < (this.width/2 + otherObject.width/2);
  }

  move(timeDelta) {
    const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
    offsetX = this.vel[0] * velocityScale,
    offsetY = this.vel[1] * velocityScale;

    this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];

  }

  remove() {
    this.game.remove(this);
  }

}

const NORMAL_FRAME_TIME_DELTA = 1000/60;

export default MovingObject;
