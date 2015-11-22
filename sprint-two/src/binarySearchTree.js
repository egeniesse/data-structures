var BinarySearchTree = function(value) {
  var bsTree = Object.create(BinarySearchTree.prototype);
  bsTree.value = value;
  bsTree.left;
  bsTree.right;
  return bsTree;
  
};

BinarySearchTree.prototype.insert = function(value){
  var node = new Node(value);
  var findEmptySpace = function(currentNode, nextNode){
    if(currentNode.value < nextNode.value){
      if(!currentNode.right){
        currentNode.right = nextNode;
      } else {
        findEmptySpace(currentNode.right, nextNode)
      }
    } else if(currentNode.value > nextNode.value){
      if(!currentNode.left){
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
    if (currentNode.value === value){
      return true;
    } else if(currentNode.value < value){
      if(currentNode.right){
        return findValue(currentNode.right);
      } else {
        return false
      }
    } else if(currentNode.value > value){
      if (currentNode.left){
        return findValue(currentNode.left)
      } else {
        return false;
      }
    } else{
      return false;
    }
  };

  return findValue(this);
};

BinarySearchTree.prototype.depthFirstLog = function(func){

  var iterateTree = function(currentNode){
    
    func(currentNode.value);

    if(currentNode.left){
      iterateTree(currentNode.left);
    } 
    if(currentNode.right){
      iterateTree(currentNode.right);
    }

  };

  iterateTree(this);

};

var Node = function(value){
  this.value = value;
  this.right = undefined;
  this.left = undefined;
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
