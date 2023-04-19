const convertToCelsius = function(faren) {
  let celcius = (faren - 32) * (5/9);
  return celcius;
};

const convertToFahrenheit = function(cel) {
  let faren = (cel * 9/5) + 32;
  return faren;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
