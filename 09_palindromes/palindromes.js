const palindromes = function (word) {
  let forwardString = word
    .toLowerCase()
    .replace(/[^\w\s]|_/g, "")
    .replace(/\s+/g, "")
    .split("");
  let first = forwardString.join();
  let second = forwardString.reverse().join();

  if (first === second) return true;
  else return false;
};
palindromes("racecar");

// Do not edit below this line
module.exports = palindromes;
