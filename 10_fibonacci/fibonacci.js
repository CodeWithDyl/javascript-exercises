const fibonacci = function (n) {
  n = parseInt(n); // Convert to integer if it's a string

  if (isNaN(n) || n < 0) {
    return "OOPS";
  } else if (n <= 1) {
    return n;
  }

  let fibPrev = 0;
  let fibCurrent = 1;

  for (let i = 2; i <= n; i++) {
    [fibPrev, fibCurrent] = [fibCurrent, fibPrev + fibCurrent];
  }

  return fibCurrent;
};

// Do not edit below this line
module.exports = fibonacci;
