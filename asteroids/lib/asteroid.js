const MovingObject = require('./moving_object.js');
const Util = require('./util.js');

class Asteroid extends MovingObject {
  constructor(args) {
    let options = {};
    options.pos = args.pos;
    options.color = "#ccc";
    options.radius = 20;
    options.vel = Util.randomVec(Math.random() * 10);
    super(options);
  }
}

module.exports = Asteroid;