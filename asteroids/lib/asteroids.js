console.log("Webpack is working!");

const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");

// window.MovingObject = MovingObject;
// window.Asteroid = Asteroid;

document.addEventListener("DOMContentLoaded",function(event) {
  let canvas = document.getElementById("game-canvas");
  let ctx = canvas.getContext("2d");  
  const game = new Game();
  const game_view = new GameView(game,ctx);
  window.game_view = game_view;
  game_view.start();
});

