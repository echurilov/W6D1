const MovingObject = require("./moving_object.js");

class Ship extends MovingObject {
  constructor() {
    let options = {};
    options.vel = [0,0];
    options.pos = [250,250];
    options.radius = 30;
    options.color = "blue";
    super(options);
  }
  
  relocate() {
    this.vel = [0,0];
    this.pos = [250,250];
  }
}

module.exports = Ship;