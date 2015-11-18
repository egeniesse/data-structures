var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.size = queueMethods.size;
  this.enqueue = queueMethods.enqueue;
  this.stackSize = 0;

  return this;
};

var queueMethods = {
  size : function(){
    return this.stackSize;
  },

  enqueue : function(){
    this.stackSize++;
  }
};


