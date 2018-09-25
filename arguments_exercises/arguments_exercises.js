function sum() {
  let args = Array.from(arguments);
  let total = 0;
  args.forEach ((el) => total += el);
  return total;
}

function sum2(...nums) {
  let total = 0;
  nums.forEach ((el) => total += el);
  return total;
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

function myBind() {
  let args = Array.from(arguments);
  let ctx = args[0];
  let bindArgs = args.slice(1,args.length);
  let that = this;
  return function () {
    let args = Array.from(arguments);
    that.apply(ctx,bindArgs.concat(args));
    return true;
  };
}
Function.prototype.myBind = myBind;

function myBind2(...context) {
  let ctx = context[0];
  let bindArgs = context.slice(1,context.length);
  let that = this;
  return function (...args) {
    that.apply(ctx,bindArgs.concat(args));
    return true;
  };
}
Function.prototype.myBind2 = myBind2;

function curriedSum(numsArgs) {
  let numbers = [];
  function _curriedSum(num) {
    numbers.push(num);
    let total = 0;
    if (numbers.length === numsArgs) {
      numbers.forEach((n) => total += n);
      return total;
    } else {
      return _curriedSum;
    }
  }
  
  return _curriedSum; 
}

function curry(numArgs) {
  let args = [];
  let that = this;
  function _curry(arg) {
    args.push(arg);
    if(args.length === numArgs) {
      return that.apply(that, args);
    } else {
      return _curry;
    }
  }
  
  return _curry;
}

Function.prototype.curry = curry;

function curry2(numArgs) {
  let args = [];
  let that = this;
  function _curry(arg) {
    args.push(arg);
    if(args.length === numArgs) {
      return that.call(that, ...args);
    } else {
      return _curry;
    }
  }
  return _curry;
}
Function.prototype.curry2 = curry2;