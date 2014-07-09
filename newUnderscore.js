

(function() {
  _ = {};
  _.lastTwo = function(array) {
    if (!array) {
      throw new Error("_.lastTwo must be given an argument.")
    } else if (!Array.isArray(array)) {
      throw new Error("_lastTwo must be given an array as an argument.")
    } else {
      return array.slice(-2);
    }
  }
})(this);
