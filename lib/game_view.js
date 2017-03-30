class GameView {
  constructor(game, ctxt) {
    this.ctxt = ctxt;
    this.game = game;
    this.spaceCraft = this.game.addSpaceCraft();
  }

  bindKeyHandlers(){
    const spaceCraft = this.spaceCraft;

    window.addEventListener('keydown', event => {
      if (event.keyCode === 37) {
        spaceCraft.move("left");
      } else if (event.keyCode === 39) {
        spaceCraft.move("right");
      } else if (event.keyCode === 32) {
        spaceCraft.shoot();
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
