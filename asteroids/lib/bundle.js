/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/asteroids.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/asteroid.js":
/*!*************************!*\
  !*** ./lib/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./lib/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./lib/util.js\");\n\nclass Asteroid extends MovingObject {\n  constructor(args) {\n    let options = {};\n    options.pos = args.pos;\n    options.color = \"#ccc\";\n    options.radius = 20;\n    options.vel = Util.randomVec(Math.random() * 10);\n    super(options);\n  }\n}\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./lib/asteroid.js?");

/***/ }),

/***/ "./lib/asteroids.js":
/*!**************************!*\
  !*** ./lib/asteroids.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log(\"Webpack is working!\");\n\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./lib/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./lib/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./lib/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./lib/game_view.js\");\n\n// window.MovingObject = MovingObject;\n// window.Asteroid = Asteroid;\n\ndocument.addEventListener(\"DOMContentLoaded\",function(event) {\n  let canvas = document.getElementById(\"game-canvas\");\n  let ctx = canvas.getContext(\"2d\");  \n  const game = new Game();\n  const game_view = new GameView(game,ctx);\n  window.game_view = game_view;\n  game_view.start();\n});\n\n\n\n//# sourceURL=webpack:///./lib/asteroids.js?");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./lib/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./lib/ship.js\");\n\nclass Game {\n  constructor() {\n    this.dim_x = 500;\n    this.dim_y = 500;\n    this.ship = new Ship();\n    this.asteroids = [];\n    this.num_asteroids = 10;\n    this.addAsteroids();\n    this.allObjects = this.allObjects();\n  }\n  \n  allObjects() {\n    return this.asteroids.concat(this.ship);\n  }\n  \n  randomPosition() {\n    return [Math.random() * this.dim_x, Math.random() * this.dim_y];\n  }\n  \n  addAsteroids() {\n    for (let i = 0; i < this.num_asteroids; i++) {\n      this.asteroids.push(new Asteroid({pos: this.randomPosition()}));\n    }\n  }\n  \n  draw(ctx) {\n    ctx.clearRect(0,0,this.dim_x,this.dim_y);\n    this.allObjects.forEach((obj) => obj.draw(ctx));\n  }\n  \n  moveObjects() {\n    this.allObjects.forEach((obj) => obj.move());\n    this.allObjects.forEach((obj) => obj.pos = this.wrap(obj.pos));\n  }\n  \n  wrap(pos) {\n    if (pos[0] < 0) {\n      return ([this.dim_x,pos[1]]);\n    }\n    if (pos[1] < 0) {\n      return ([pos[0],this.dim_y]);\n    }\n    if (pos[0] > this.dim_x) {\n      return ([0,pos[1]]);\n    }\n    if (pos[1] > this.dim_x) {\n      return ([pos[0],0]);\n    }\n    return pos;\n  }\n  \n  checkCollisions() {\n    for(let i=0;i<this.allObjects.length;i++) {\n      for(let j=i;j<this.allObjects.length;j++) {\n        if(i != j && this.allObjects[i].isCollidedWith(this.allObjects[j])) {\n          let obj1 = \"asteroid\";\n          let obj2 = \"asteroid\";\n          if (this.allObjects[i] === this.ship) {\n            let obj1 = \"ship\";\n          }\n          if (this.allObjects[j] === this.ship) {\n            let obj2 = \"ship\";\n          }\n          console.log(`Collision between ${obj1} and ${obj2} at ${this.allObjects[i].pos} and ${this.allObjects[j].pos}`);\n          this.remove(i,j);\n        }\n      }\n    }\n  }\n  \n  step() {\n    this.moveObjects();\n    this.checkCollisions();\n  }\n  \n  remove(i,j) {\n    if (this.asteroids.indexOf(this.allObjects[i]) != -1) {\n      this.asteroids.splice(this.asteroids.indexOf(this.allObjects[i], 1));\n      this.num_asteroids -= 1;\n    }\n    if (this.asteroids.indexOf(this.allObjects[j]) != -1) {\n      this.asteroids.splice(this.asteroids.indexOf(this.allObjects[j], 1));\n      this.num_asteroids -= 1;\n    } else if (this.allObjects[i] === this.ship || this.allObjects[j] ===  this.ship) {\n      this.ship.relocate();\n    }\n  }\n}\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./lib/game.js?");

/***/ }),

/***/ "./lib/game_view.js":
/*!**************************!*\
  !*** ./lib/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class GameView {\n  constructor(game,ctx) {\n    this.game = game;\n    this.ctx = ctx;\n  }\n  \n  start() {\n    window.setInterval(() => this.game.step(),20);\n    window.setInterval(() => this.game.draw(this.ctx),20);\n  }\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./lib/game_view.js?");

/***/ }),

/***/ "./lib/moving_object.js":
/*!******************************!*\
  !*** ./lib/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class MovingObject {\n  constructor(options) {\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n  }\n}\n\nmodule.exports = MovingObject;\n\nfunction draw(ctx) {\n  ctx.beginPath();\n  ctx.arc(this.pos[0],this.pos[1],this.radius,0, 2 * Math.PI, false);\n  ctx.fill();\n  ctx.beginPath();\n  ctx.arc(this.pos[0],this.pos[1],1,0, 2 * Math.PI, false);\n  ctx.fillStyle = \"yellow\";\n  ctx.stroke();\n}\n\nfunction move() {\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n}\n\nfunction isCollidedWith(otherObject) {\n  let delta_x = this.pos[0] - otherObject.pos[0];\n  let x_squared = delta_x * delta_x;\n  let delta_y = this.pos[1] - otherObject.pos[1];\n  let y_squared = delta_y * delta_y;\n  let sum = x_squared + y_squared;\n  let distance = Math.sqrt(sum);\n  \n  if(distance < this.radius + otherObject.radius) {\n    return true;\n  } else {\n    return false;\n  }\n}\n\n\n\nMovingObject.prototype.draw = draw;\nMovingObject.prototype.move = move;\nMovingObject.prototype.isCollidedWith = isCollidedWith;\n\n\n//# sourceURL=webpack:///./lib/moving_object.js?");

/***/ }),

/***/ "./lib/ship.js":
/*!*********************!*\
  !*** ./lib/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./lib/moving_object.js\");\n\nclass Ship extends MovingObject {\n  constructor() {\n    let options = {};\n    options.vel = [0,0];\n    options.pos = [250,250];\n    options.radius = 30;\n    options.color = \"blue\";\n    super(options);\n  }\n  \n  relocate() {\n    this.vel = [0,0];\n    this.pos = [250,250];\n  }\n}\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./lib/ship.js?");

/***/ }),

/***/ "./lib/util.js":
/*!*********************!*\
  !*** ./lib/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits: function inherits(childClass, parentClass) {\n    childClass.prototype = Object.create(parentClass.prototype);\n    childClass.prototype.constructor = childClass;\n  },\n  \n  randomVec: function randomVec(length) {\n   const deg = 2 * Math.PI * Math.random();\n   return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n },\n // Scale the length of a vector by the given amount.\n scale: function scale(vec, m) {\n   return [vec[0] * m, vec[1] * m];\n }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./lib/util.js?");

/***/ })

/******/ });