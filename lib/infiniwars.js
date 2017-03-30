import Game from './game';
import GameView from "./game_view";

document.addEventListener("DOMContentLoaded", () => {
  const canvasElem = document.getElementById("infiniwars");
  canvasElem.width = Game.DIM_X;
  canvasElem.height = Game.DIM_Y;

  const ctxt = canvasElem.getContext("2d");
  const game = new Game();
  new GameView(game, ctxt).start();
});
