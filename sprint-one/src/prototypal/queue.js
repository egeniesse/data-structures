var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.stackSize = 0;
  queue.out = 0;
  queue.storage = {};
  return queue;
};

var queueMethods = {
  size : function(){
    return this.stackSize-this.out;
  },
  enqueue : function(value){
    this.storage[this.stackSize] = value;
    this.stackSize++;
  },
  dequeue: function(){
    if(this.stackSize-this.out>0){
      var result =this.storage[this.out];
      this.out++;
      return result;
    }
    
  }
};


