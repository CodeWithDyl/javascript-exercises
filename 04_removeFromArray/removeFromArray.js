const removeFromArray = function (array, ...args) {
<<<<<<< HEAD
  const newArray = new Array();
=======
  const newArray = [];
>>>>>>> 837a7d4036f6e5810a691afbe0699103011082e1

  array.forEach((item) => {
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
