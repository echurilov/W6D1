class MovingObject {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
  }
}

module.exports = MovingObject;

function draw(ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0],this.pos[1],this.radius,0, 2 * Math.PI, false);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(this.pos[0],this.pos[1],1,0, 2 * Math.PI, false);
  ctx.fillStyle = "yellow";
  ctx.stroke();
}

function move() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
}

function isCollidedWith(otherObject) {
  let delta_x = this.pos[0] - otherObject.pos[0];
  let x_squared = delta_x * delta_x;
  let delta_y = this.pos[1] - otherObject.pos[1];
  let y_squared = delta_y * delta_y;
  let sum = x_squared + y_squared;
  let distance = Math.sqrt(sum);
  
  if(distance < this.radius + otherObject.radius) {
    return true;
  } else {
    return false;
  }
}



MovingObject.prototype.draw = draw;
MovingObject.prototype.move = move;
MovingObject.prototype.isCollidedWith = isCollidedWith;
