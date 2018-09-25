const Asteroid = require("./asteroid.js");
const Ship = require("./ship.js");

class Game {
  constructor() {
    this.dim_x = 500;
    this.dim_y = 500;
    this.ship = new Ship();
    this.asteroids = [];
    this.num_asteroids = 10;
    this.addAsteroids();
    this.allObjects = this.allObjects();
  }
  
  allObjects() {
    return this.asteroids.concat(this.ship);
  }
  
  randomPosition() {
    return [Math.random() * this.dim_x, Math.random() * this.dim_y];
  }
  
  addAsteroids() {
    for (let i = 0; i < this.num_asteroids; i++) {
      this.asteroids.push(new Asteroid({pos: this.randomPosition()}));
    }
  }
  
  draw(ctx) {
    ctx.clearRect(0,0,this.dim_x,this.dim_y);
    this.allObjects.forEach((obj) => obj.draw(ctx));
  }
  
  moveObjects() {
    this.allObjects.forEach((obj) => obj.move());
    this.allObjects.forEach((obj) => obj.pos = this.wrap(obj.pos));
  }
  
  wrap(pos) {
    if (pos[0] < 0) {
      return ([this.dim_x,pos[1]]);
    }
    if (pos[1] < 0) {
      return ([pos[0],this.dim_y]);
    }
    if (pos[0] > this.dim_x) {
      return ([0,pos[1]]);
    }
    if (pos[1] > this.dim_x) {
      return ([pos[0],0]);
    }
    return pos;
  }
  
  checkCollisions() {
    for(let i=0;i<this.allObjects.length;i++) {
      for(let j=i;j<this.allObjects.length;j++) {
        if(i != j && this.allObjects[i].isCollidedWith(this.allObjects[j])) {
          let obj1 = "asteroid";
          let obj2 = "asteroid";
          if (this.allObjects[i] === this.ship) {
            let obj1 = "ship";
          }
          if (this.allObjects[j] === this.ship) {
            let obj2 = "ship";
          }
          console.log(`Collision between ${obj1} and ${obj2} at ${this.allObjects[i].pos} and ${this.allObjects[j].pos}`);
          this.remove(i,j);
        }
      }
    }
  }
  
  step() {
    this.moveObjects();
    this.checkCollisions();
  }
  
  remove(i,j) {
    if (this.asteroids.indexOf(this.allObjects[i]) != -1) {
      this.asteroids.splice(this.asteroids.indexOf(this.allObjects[i], 1));
      this.num_asteroids -= 1;
    }
    if (this.asteroids.indexOf(this.allObjects[j]) != -1) {
      this.asteroids.splice(this.asteroids.indexOf(this.allObjects[j], 1));
      this.num_asteroids -= 1;
    } else if (this.allObjects[i] === this.ship || this.allObjects[j] ===  this.ship) {
      this.ship.relocate();
    }
  }
}


module.exports = Game;