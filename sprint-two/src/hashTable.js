

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};


HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var wasFound = false;

  if(!bucket){
    this._storage.set(index,[]);
    bucket = this._storage.get(index);
  }
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
    bucket.push([k,v]);
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


