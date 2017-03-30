class GameView {
  constructor(game, ctxt) {
    this.ctxt = ctxt;
    this.game = game;
    this.spaceCraft = this.game.addSpaceCraft();
  }

  bindKeyHandlers(){

    window.addEventListener('keydown', event => {
      if (event.keyCode === 37) {
        this.spaceCraft.power("left");
      } else if (event.keyCode === 39) {
        this.spaceCraft.power("right");
      } else if (event.keyCode === 32) {
        this.spaceCraft.fireProjectile();
      }
    });

    window.addEventListener('keyup', event => {
      if (event.keyCode === 37 ) {
        this.spaceCraft.power("reset");
      } else if (event.keyCode === 39) {
        this.spaceCraft.power("reset");
      }
    });
  }

  start() {
    this.bindKeyHandlers();
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    const timeDelta = time - this.lastTime;

    this.game.step(timeDelta);
    this.game.draw(this.ctxt);
    this.lastTime = time;

    requestAnimationFrame(this.animate.bind(this));
  }
}

export default GameView;
