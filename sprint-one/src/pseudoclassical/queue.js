var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.stackSize = 0;
  this.storage = {};
  this.nextNumber = 0;

};


  Queue.prototype.size = function(){
    return this.stackSize - this.nextNumber;
  };
  Queue.prototype.enqueue = function(value){
  	this.storage[this.stackSize] = value;
    this.stackSize++;
  };
  Queue.prototype.dequeue = function(){
  	if (this.stackSize - this.nextNumber !== 0){
  		var result = this.storage[this.nextNumber];
  		this.nextNumber++;
  		return result;
  	}
  };


