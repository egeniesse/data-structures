var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.stackSize = 0;
  queue.storage = {};
  queue.nextNumber = 0;

  return queue;
};

var queueMethods = {
  size : function(){

    return this.stackSize - this.nextNumber;
  },
  enqueue : function(value){
  	this.storage[this.stackSize] = value;
    this.stackSize++;
  },
  dequeue : function(){
  	if (this.stackSize - this.nextNumber !== 0){
  		var result = this.storage[this.nextNumber];
  		this.nextNumber++;
  		return result;
  	}
  }
};


