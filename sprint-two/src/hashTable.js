var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};


HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];

  if (bucket[0]) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        return;
      } 
    }
  }
  this._size++;
  var tempTuple = [k, v];
  bucket.push(tempTuple);
  this._storage.set(index, bucket);
  this.expand();
};


HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
  this.expand();
  this._size--;

};

HashTable.prototype.expand = function() {
  if (this._size / this._limit > 0.75) {
    this._limit = this._limit * 2;
    // double this._limit
    reAssign.call(this, this._limit);
    // call reAssign using this._limit


  } else if (this._size / this._limit < 0.25) {
    // if minimizing wait until reassign function runs to change the limit
    var tempLimit = this._limit / 2;
    reAssign.call(this, tempLimit);
    // call reAssign

    this._limit = tempLimit;
    // change the limit

  }
};

var reAssign = function(limit) {
  // use the each helper function to iterate over sotorage array
  var hash = this;
  this._storage.each(function(bucket, index) {
    if (bucket) {

      for (var i = 0; i < bucket.length; i++) {
        var newIndex = getIndexBelowMaxForKey(bucket[i][0], limit);
        if (newIndex !== index) {
          hash.insert(bucket[i][0], bucket[i][1]);
          bucket.splice(i, 1);
          hash._size--;
        }
      }
    }
  });
  // after the bucket is selected, iterates through the current bucket
  // use the gerIndexBelowMaxForKey function to reassign the index for the touple
  // use the insert function to set the value in the correct index
  // if the index is the same, do nothing
};



/*
 * Complexity: What is the time complexity of the above functions?
 */