var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.stackSize = 0;
  this.up = 0;
  this.container = {};
};

Queue.prototype.enqueue = function(value){
  this.container[this.stackSize] = value;
  this.stackSize ++;
};

Queue.prototype.size = function(){
  return this.stackSize-this.up;
};

Queue.prototype.dequeue = function(){
  if(this.stackSize-this.up>0){
    var result = this.container[this.up];
    this.up++;
    return result;
  }
};

