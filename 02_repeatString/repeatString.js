const repeatString = function (word, times) {
  if (times < 0) return "ERROR";
  let finalWord = "";
  for (times; times > 0; times--) {
    finalWord += word;
  }
  return finalWord;
};

// Do not edit below this line
module.exports = repeatString;
