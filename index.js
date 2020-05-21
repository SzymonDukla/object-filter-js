Object.filter = function( obj, exclusions) {
  let result = {}, key;
  for (key in obj) {
    if (!exclusions.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
};

module.exports = Object;