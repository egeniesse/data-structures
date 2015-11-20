

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};


HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var wasFound = false;

  if(bucket){
    for(var i=0;i<bucket.length;i++){
      if(bucket[i][0]===k){
        bucket[i][1]=v;
        wasFound = true;
        break;
      }
    }
  }
  if(!wasFound){
    this._storage.set(index,[k,v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if(bucket[0]){ 
    for(var i=0; i<bucket.length; i++){
      if(bucket[i][0]===k){
        return bucket[i][1];
      }
    }
  } else {
    return undefined;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for(var i=0;i<bucket.length;i++){
    if(bucket[i][0] === k){
      delete bucket[i];
    }
  }

  // this._storage.each(function(value, key, library){
  //   if(index === key){
  //     delete library[key];
  //   }
  // })
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


