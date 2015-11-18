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
    var value = storage[0];
    size--;
    for(var i=0; i<size.length;i++){
      storage[i] = storage[i+1];
    }
    console.log(storage)
    return value;
  };

  someInstance.size = function() {
    return size >= 0 ? size : 0;
  };

  return someInstance;
};
