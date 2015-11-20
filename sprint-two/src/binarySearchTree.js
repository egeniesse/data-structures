var BinarySearchTree = function(value) {
  var bsTree = Object.create(BinarySearchTree.prototype);
  bsTree.value = value;
  bsTree.left = null;
  bsTree.right = null;
  return bsTree;
  
};

BinarySearchTree.prototype.insert = function(value){
  var node = new Node(value);
  var findEmptySpace = function(currentNode, nextNode){
    if(currentNode.value < nextNode.value){
      if(currentNode.right === null){
        currentNode.right = nextNode;
      } else {
        findEmptySpace(currentNode.right, nextNode)
      }
    } else if(currentNode.value > nextNode.value){
      if(currentNode.left === null){
        currentNode.left = nextNode;
      } else {
        findEmptySpace(currentNode.left, nextNode)
      }
    }
  };
  findEmptySpace(this, node);
};
BinarySearchTree.prototype.contains = function(){};
BinarySearchTree.prototype.depthFirstLog = function(){};

var Node = function(value){
  this.value = value;
  this.right = null;
  this.left = null;
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
