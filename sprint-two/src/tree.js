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

};



/*
 * Complexity: What is the time complexity of the above functions?
 */