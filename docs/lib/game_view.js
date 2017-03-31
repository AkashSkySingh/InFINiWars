import Game from './game';

class GameView {
  constructor(game, ctxt) {
    this.ctxt = ctxt;
    this.game = game;
    this.spaceCraft = this.game.addSpaceCraft();
  }

  bindKeyHandlers(){

    this.keyDownListeners = window.addEventListener('keydown', event => {
      if (event.keyCode === 37) {
        this.spaceCraft.power("left");
      } else if (event.keyCode === 39) {
        this.spaceCraft.power("right");
      } else if (event.keyCode === 32) {
        this.spaceCraft.fireProjectile();
      } else if (event.keyCode === 66) {
        this.game.togglePause();
      }
    });

    this.keyUpListeners = window.addEventListener('keyup', event => {
      if (event.keyCode === 37 ) {
        this.spaceCraft.power("reset");
      } else if (event.keyCode === 39) {
        this.spaceCraft.power("reset");
      }
    });

    let restartb = document.getElementById("restart");
    this.restartListener = restartb.addEventListener("click", this.restart.bind(this));
  }

  unbindKeyHandlers() {
    debugger;
    document.removeEventListener('keydown', this.keyDownListeners);
    document.removeEventListener('keyup', this.keyUpListeners);

    let restartb = document.getElementById("restart");
    restartb.removeEventListener('click', this.restartListener);
  }


  start(bind) {
    if (bind) {
      this.bindKeyHandlers();
    }
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  restart() {
    this.unbindKeyHandlers();
    this.game = new Game();
    this.spaceCraft = this.game.addSpaceCraft();
    this.start(false);
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
