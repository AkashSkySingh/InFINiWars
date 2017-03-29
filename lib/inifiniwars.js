const Game = require('./game');
const GameView = require("./game_view");

document.addEventListener("DOMContentLoaded", () => {
  const canvasElem = document.getElementByTagName("canvas")[0];
  canvasElem.width = Game.DIM_X;
  canvasElem.height = Game.DIM_Y;

  const ctxt = canvasElem.getContext("2d");
  const game = new Game();
  new GameView(game, ctxt).start();
});
