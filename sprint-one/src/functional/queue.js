var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var stackSize = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    stackSize++;
  };

  someInstance.dequeue = function() {
    stackSize--;
  };

  someInstance.size = function() {
    return stackSize;
  };

  return someInstance;
};
