const add = function (x, y) {
  let sum = x + y;
  return sum;
};

const subtract = function (x, y) {
  let difference = x - y;
  return difference;
};

function sum(...args) {
  if (args.length === 0) {
    throw new Error("At least one number or array is required.");
  }

  if (args.length === 1) {
    const numOrArray = args[0];

    if (Array.isArray(numOrArray)) {
      return numOrArray.reduce((acc, val) => acc + val, 0);
    } else {
      throw new Error("When providing a single argument, it must be an array.");
    }
  }

  return args.reduce((acc, val) => acc + val, 0);
}

function multiply(...args) {
  if (args.length === 0) {
    throw new Error("At least one number or array is required.");
  }

  if (args.length === 1) {
    const numOrArray = args[0];

    if (Array.isArray(numOrArray)) {
      return numOrArray.reduce((acc, val) => acc * val, 1);
    } else {
      throw new Error("When providing a single argument, it must be an array.");
    }
  }

  return args.reduce((acc, val) => acc * val, 1);
}

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
