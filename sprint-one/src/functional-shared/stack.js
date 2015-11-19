var Stack = function() {
  var stack = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  stack.stackSize = 0;
  stack.storage = {};
  stack.push = stackMethods.push;
  stack.size = stackMethods.size;
  stack.pop = stackMethods.pop;
  return stack;

};

var stackMethods = {
  size : function(){
    return this.stackSize;

  },
  push : function(value){
    this.storage[this.stackSize]= value;
    this.stackSize++;
  },
  pop : function(){
    if (this.stackSize !== 0){
      this.stackSize--;
      return this.storage[this.stackSize];
    }
  }
};


