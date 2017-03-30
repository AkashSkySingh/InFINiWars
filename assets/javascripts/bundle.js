/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

const Util = {

  dir (vector) {
    const norm = Util.norm(vector);
    return Util.scale(vector, 1 / norm);
  },

  dist (pos1, pos2) {
    return Math.sqrt(
      Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
    );
  },

  norm (vector) {
    return Util.dist([0,0], vector);
  },

  scale (vec, m) {
    return [vec[0] * m, vec[1] * m];
  },

  wrap (coordinate, max) {
    if (coordinate < 0) {
      return max - (coordinate % max);
    } else if (coordinate > max) {
      return coordinate % max;
    } else {
      return coordinate;
    }
  }
};

module.exports = Util;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__util__);


class MovingObject {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.height = options.height;
    this.width = options.width;
    this.color = options.color;
    this.game = options.game;
    this.isWrappable = true;
  }

  collideWith(otherObject) {

  }

  draw(ctxt) {
    ctxt.fillStyle = this.color;

    ctxt.beginPath();
    ctxt.fillRect(this.pos[0], this.pos[1], this.width, this.height);
    ctxt.fill();
  }

  hasCollidedWith(otherObject) {
    const centerDist = __WEBPACK_IMPORTED_MODULE_0__util___default.a.dist(this.pos, otherObject.pos);
    return centerDist < (this.radius + otherObject.radius);
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

/* harmony default export */ __webpack_exports__["a"] = (MovingObject);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moving_object__ = __webpack_require__(1);


class Projectile extends __WEBPACK_IMPORTED_MODULE_0__moving_object__["a" /* default */] {
  constructor(options) {

    options.pos = [options.pos[0] + 10, options.pos[1]];
    options.height = ammo.HEIGHT;
    options.width = ammo.WIDTH;
    options.color = "#5B95B7";
    options.vel = [0, -3];

    super(options);
  }
}

const ammo = {
  HEIGHT: 10,
  WIDTH: 10
};

/* harmony default export */ __webpack_exports__["a"] = (Projectile);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__invaders__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__projectile__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spacecraft__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__util__);





class Game {

  constructor() {
    this.invaders = [];
    this.projectiles = [];
    this.spaceCrafts = [];

    this.addInvaders();
  }

  add(object) {
    if (object instanceof __WEBPACK_IMPORTED_MODULE_0__invaders__["a" /* default */]) {
      this.invaders.push(object);
    } else if (object instanceof __WEBPACK_IMPORTED_MODULE_1__projectile__["a" /* default */] ) {
      this.projectiles.push(object);
    } else if (object instanceof __WEBPACK_IMPORTED_MODULE_2__spacecraft__["a" /* default */]) {
      this.spaceCrafts.push(object);
    } else {
      throw "Error: unknown object";
    }
  }

  addInvaders() {
    for (let i = 0; i < Game.NUM_INVADERS; i++) {
      this.add(new __WEBPACK_IMPORTED_MODULE_0__invaders__["a" /* default */]({ game: this }));
    }
  }

  addSpaceCraft() {
    const spaceCraft = new __WEBPACK_IMPORTED_MODULE_2__spacecraft__["a" /* default */]({
      pos: this.startPosition(),
      game: this
    });

    this.add(spaceCraft);

    return spaceCraft;
  }

  startPosition () {
    return [
      Game.DIM_X / 2,
      650
    ];
  }

  allObjects() {
    return [].concat(this.spaceCrafts, this.invaders, this.projectiles);
  }

  checkCollisions() {
    const allObjects = this.allObjects();
    for (let i=0; i < allObjects.length; i++) {
      for (let j=0; j < allObjects.length; j++){
        const obj1 = allObjects[i];
        const obj2 = allObjects[j];

        if (obj1.hasCollidedWith(obj2)) {
          const collision = obj1.collideWith(obj2);
          if (collision) return;
        }
      }
    }
  }

  randomPosition() {
    return [
      Game.DIM_X * Math.random(),
      0
    ];
  }

  draw(ctxt) {
    const pattern = ctxt.createPattern(Game.BackGround, 'no-repeat');
    ctxt.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctxt.fillStyle = pattern;
    // ctxt.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.allObjects().forEach((object) => {
      object.draw(ctxt);
    });
  }

  step(delta) {
    this.moveObjects(delta);
    this.checkCollisions();
  }

  moveObjects(delta) {
    this.allObjects().forEach((object) => {
      object.move(delta);
    });
  }

}

Game.BackGround = document.getElementById("infiniwars");
Game.DIM_X = 450;
Game.DIM_Y = 700;

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
        console.log("left");
        spaceCraft.power("left");
      } else if (event.keyCode === 39) {
        console.log("right");
        spaceCraft.power("right");
      } else if (event.keyCode === 32) {
        console.log("firing");
        spaceCraft.fireProjectile();
      }
    });

    window.addEventListener('keyup', event => {
      if (event.keyCode === 37 ) {
        spaceCraft.power("reset");
      } else if (event.keyCode === 39) {
        spaceCraft.power("reset");
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

/* harmony default export */ __webpack_exports__["a"] = (GameView);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_view__ = __webpack_require__(4);



document.addEventListener("DOMContentLoaded", () => {
  const canvasElem = document.getElementById("infiniwars");
  canvasElem.width = __WEBPACK_IMPORTED_MODULE_0__game__["a" /* default */].DIM_X;
  canvasElem.height = __WEBPACK_IMPORTED_MODULE_0__game__["a" /* default */].DIM_Y;

  const ctxt = canvasElem.getContext("2d");
  const game = new __WEBPACK_IMPORTED_MODULE_0__game__["a" /* default */]();
  new __WEBPACK_IMPORTED_MODULE_1__game_view__["a" /* default */](game, ctxt).start();
});


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moving_object__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spacecraft__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projectile__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__util__);







const INVADER = {
  COLOR: "#182730",
  WIDTH: 20,
  HEIGHT: 20,
  VEL: [0, 4]
};

class Invader extends __WEBPACK_IMPORTED_MODULE_0__moving_object__["a" /* default */] {
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
    if (otherObject instanceof __WEBPACK_IMPORTED_MODULE_1__spacecraft__["a" /* default */]) {
      return true;
    } else if (otherObject instanceof __WEBPACK_IMPORTED_MODULE_2__projectile__["a" /* default */]) {
      this.remove();
      otherObject.remove();
      return true;
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Invader);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moving_object__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__projectile__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__util__);




const spaceShip = {
  WIDTH: 30,
  HEIGHT: 30
};

class spaceCraft extends __WEBPACK_IMPORTED_MODULE_0__moving_object__["a" /* default */] {
  constructor(options) {
    options.color = "#0D3F5D";
    options.height = spaceShip.HEIGHT;
    options.width = spaceShip.WIDTH;
    options.vel = options.vel || [0, 0];
    super(options);
  }

  fireProjectile() {
    const norm = __WEBPACK_IMPORTED_MODULE_2__util___default.a.norm(this.vel);

    const relativeVelocity = __WEBPACK_IMPORTED_MODULE_2__util___default.a.scale(
      __WEBPACK_IMPORTED_MODULE_2__util___default.a.dir(this.vel),
      __WEBPACK_IMPORTED_MODULE_1__projectile__["a" /* default */].SPEED
    );

    const projectileVelocity = [
      relativeVelocity[0] + this.vel[0], relativeVelocity[1] + this.vel[1]
    ];

    const projectile = new __WEBPACK_IMPORTED_MODULE_1__projectile__["a" /* default */]({
      pos: this.pos,
      game: this.game
    });

    this.game.add(projectile);
  }

  power(impulse) {
    if (impulse === "right") {
      this.vel = [1, 0];
    } else if (impulse === "left") {
      this.vel = [-1, 0];
    } else {
      this.vel = [0, 0];
    }
  }

}


/* harmony default export */ __webpack_exports__["a"] = (spaceCraft);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map