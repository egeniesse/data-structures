var BinarySearchTree = function(value) {
  var bsTree = Object.create(BinarySearchTree.prototype);
  bsTree.value = value;
  bsTree.left = undefined;
  bsTree.right = undefined;
  return bsTree;
  
};

BinarySearchTree.prototype.insert = function(value){
  var node = new Node(value);
  var findEmptySpace = function(currentNode, nextNode){
    if(currentNode.value < nextNode.value){
      if(currentNode.right === undefined){
        currentNode.right = nextNode;
      } else {
        findEmptySpace(currentNode.right, nextNode)
      }
    } else if(currentNode.value > nextNode.value){
      if(currentNode.left === undefined){
        currentNode.left = nextNode;
      } else {
        findEmptySpace(currentNode.left, nextNode)
      }
    }
  };
  findEmptySpace(this, node);
};
BinarySearchTree.prototype.contains = function(value){

  var findValue = function(currentNode){
    if(currentNode.value === undefined){
      return false;
    } else if (currentNode.value === value){
      return true;
    } else if(currentNode.value < value){
      return findValue(currentNode.right);
    } else if(currentNode.value > value){
      return findValue(currentNode.left)
    } else{
      return false;
    }
  };
  return findValue(this);
};
BinarySearchTree.prototype.depthFirstLog = function(){};

var Node = function(value){
  this.value = value;
  this.right = undefined;
  this.left = undefined;
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
