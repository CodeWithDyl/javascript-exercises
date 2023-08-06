const sumAll = function (firstNum, secondNum) {
  let sum = 0;
  let first = firstNum;
  let second = secondNum;

  if (firstNum < 0 || secondNum < 0) return "ERROR";

  if (typeof firstNum === "number" && typeof secondNum === "number") {
    if (firstNum > secondNum) {
      first = secondNum;
      second = firstNum;
    }

    for (i = first; i <= second; i++) {
      sum += i;
    }
    return sum;
  } else return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
