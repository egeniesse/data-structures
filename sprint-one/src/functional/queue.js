var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var stackSize = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    
    storage[stackSize] = value;
    stackSize++;
  };

  someInstance.dequeue = function() {
    if (stackSize !== 0){
      stackSize--;
    }
    return storage[stackSize];
  };

  someInstance.size = function() {
    return stackSize;
  };

  return someInstance;
};
