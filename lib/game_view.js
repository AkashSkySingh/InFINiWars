class GameView {
  constructor(game, ctxt) {
    this.ctxt = ctxt;
    this.game = game;
    this.spaceCraft = this.game.addSpaceCraft();
  }

  bindKeyHandlers(){
    const spaceCraft = this.spaceCraft;

    Object.keys(GameView.MOVES).forEach((k) => {
      let strafe = GameView.MOVES[k];
      key(k, () => ( spaceCraft.move(strafe)));
    });
  }
}
