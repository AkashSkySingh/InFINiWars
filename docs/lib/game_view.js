import Game from './game';

class GameView {
  constructor(game, ctxt) {
    this.ctxt = ctxt;
    this.game = game;
    this.spaceCraft = this.game.addSpaceCraft();
    this.restart = this.restart.bind(this);
  }

  bindKeyHandlers(){

    this.keyDownListeners = event => {
      if (event.keyCode === 37) {
        this.spaceCraft.power("left");
      } else if (event.keyCode === 39) {
        this.spaceCraft.power("right");
      } else if (event.keyCode === 32) {
        this.spaceCraft.fireProjectile();
      } else if (event.keyCode === 66) {
        this.game.togglePause();
      }
    };

    window.addEventListener('keydown', this.keyDownListeners);

    this.keyUpListeners = event => {
      if (event.keyCode === 37 ) {
        this.spaceCraft.power("reset");
      } else if (event.keyCode === 39) {
        this.spaceCraft.power("reset");
      }
    };

    window.addEventListener('keyup', this.keyUpListeners);

    let restartb = document.getElementById("restart");
    restartb.addEventListener("click", this.restart);
  }

  unbindKeyHandlers() {

    window.removeEventListener('keydown', this.keyDownListeners);
    window.removeEventListener('keyup', this.keyUpListeners);

    let restartb = document.getElementById("restart");
    restartb.removeEventListener('click', this.restart);
  }


  start(bind) {
    if (bind) {
      this.bindKeyHandlers();
    }
    this.lastTime = 0;
    this.animationRequest = requestAnimationFrame(this.animate.bind(this));
  }

  restart() {
    this.unbindKeyHandlers();
    window.cancelAnimationFrame(this.animationRequest);
    this.game = new Game();
    this.spaceCraft = this.game.addSpaceCraft();
    this.start(true);
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
