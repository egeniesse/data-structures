var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.storage = {};
  queue.out = 0;
  queue.size = queueMethods.size;
  queue.enqueue = queueMethods.enqueue;
  queue.dequeue = queueMethods.dequeue;
  queue.stackSize = 0;

  return queue;
};

var queueMethods = {
  size : function(){
    return this.stackSize - this.out;
  },

  enqueue : function(value){
    this.storage[this.stackSize]=value;
    this.stackSize++;
  },

  dequeue : function(){
    if(this.stackSize - this.out > 0){
      
      var output = this.storage[this.out];
      this.out++;
      return output;
    }
  }
};


