const getColour = coverage => {
  if (coverage < 80) {
    return "red";
  }

  if (coverage < 90) {
    return "yellow";
  }

  return "brightgreen";
};

module.exports.getColour = getColour;
