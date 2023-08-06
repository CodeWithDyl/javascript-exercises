const convertToCelsius = function (celsius) {
  const fahrenheit = (celsius - 32) * (5 / 9);
  let fahrenheitRounded = Math.round(fahrenheit * 10) / 10;
  return fahrenheitRounded;
};

const convertToFahrenheit = function (fahrenheit) {
  const celsius = fahrenheit * (9 / 5) + 32;
  let celsiusRounded = Math.round(celsius * 10) / 10;
  return celsiusRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
