

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};


HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];

  for(var i=0;i<bucket.length;i++){
    var tuple = bucket[i];
    if(tuple[0]===k){
      var oldValue = tuple[1];
      tuple[1]=v;
      return oldValue;
    }
  }
  
  bucket.push([k,v]);
  this._storage.set(index, bucket);
  this._size++;

  if((this._size/this._limit) >= .75){
    this._resize();
  }

};


HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if(k === "val1"){
  }
  
  if(bucket[0]){ 
    for(var i=0; i<bucket.length; i++){
      if(bucket[i][0]===k){
        return bucket[i][1];
      }
    }
  } 
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for(var i=0;i<bucket.length;i++){
    if(bucket[i][0] === k){
      //splice
      bucket.splice(i, 1);
      if((this._size/this._limit) <= .25){
        this._resize();
      }
      this._size--;
    }
  }

};

HashTable.prototype._resize = function(){
  var newLimit;

  if((this._size/this._limit) >= .75){
    newLimit = Math.floor(this._limit * 2);
  } else{
    this._size
    debugger;
    newLimit =  Math.floor(this._limit * 0.5);
  }

  this._storage.each(function(bucket, index, storage){
    if(bucket){
      for(var i = 0; i<bucket.length; i++){
        var tuple = bucket[i];
        
        if(getIndexBelowMaxForKey(tuple[0],newLimit) !== index){
          this.insert(tuple[0],tuple[1]);
          bucket.splice(i,1);
          i--;
          this._size--;
        }
      }
    }
  }.bind(this));
  
  this._limit = newLimit;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


