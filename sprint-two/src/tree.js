var Tree = function(value) {
  var newTree = Object.create(treeMethods);

  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // your code here
  this.children.push(new Tree(value));
};

treeMethods.contains = function(target) {
  console.log(this);
  var found = false;

  if (this.value === target){
      found = true;
  }
  var searchChildren = function(tree){
    if (tree.children.length){
      for (var i = 0; i < tree.children.length; i++){
        if (tree.children[i].value === target){
          found = true;
        } else {
          searchChildren(tree.children[i]);
        } 
      }
    }
  };
  searchChildren(this);
  return found;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */