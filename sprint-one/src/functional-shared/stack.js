var Stack = function() {
  var stack = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  stack.stackSize = 0;
  stack.push = stackMethods.push;
  stack.size = stackMethods.size;
  stack.pop = stackMethods.pop;
  return stack;

};

var stackMethods = {
  size : function(){
    return this.stackSize;

  },
  push : function(){
    this.stackSize++;
  },
  pop : function(){
    if (this.stackSize !== 0){
      this.stackSize--;
    }
  }
};


