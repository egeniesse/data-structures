var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size]= value;
    size++;
  };

  someInstance.dequeue = function() {
    size--;
    return storage[size];
  };

  someInstance.size = function() {
    return size >= 0 ? size : 0;
  };

  return someInstance;
};
