var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  
  var stackSize=0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[stackSize] = value;
    stackSize++;
  };

  someInstance.pop = function() {
    if(stackSize!==0){
      stackSize--;
    }

    return storage[stackSize];

  };

  someInstance.size = function() {
   return stackSize;
  };

  return someInstance;
};
