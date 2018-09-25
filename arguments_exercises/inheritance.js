function inherits(parent) {
  function Surrogate() {}
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
}

function sayHello() {console.log("Hello.");}
Shape.prototype.sayHello = sayHello;

function Shape() {
  this.color = "red";
}

function Square() {
  this.length = 2;
}

Function.prototype.inherits = inherits;

function inherits2(parent) {
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
}

Function.prototype.inherits2 = inherits2;