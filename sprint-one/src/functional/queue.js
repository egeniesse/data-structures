var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var stackSize = 0;
  var out = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    
    storage[stackSize] = value;
    stackSize++;
  };

  someInstance.dequeue = function() {
    if (stackSize - out > 0){
      var output = storage[out];
      out++;

      return output;
    }
  };

  someInstance.size = function() {
    return stackSize - out;
  };

  return someInstance;
};
