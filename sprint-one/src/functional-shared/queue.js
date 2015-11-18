var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.size = queueMethods.size;
  queue.enqueue = queueMethods.enqueue;
  queue.dequeue = queueMethods.dequeue;
  queue.stackSize = 0;

  return queue;
};

var queueMethods = {
  size : function(){
    return this.stackSize;
  },

  enqueue : function(){
    this.stackSize++;
  },

  dequeue : function(){
    this.stackSize--;
  }
};


