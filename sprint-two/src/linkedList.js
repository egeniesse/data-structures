var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //Create new node
    var node = new Node(value);
    node.next = list.tail;
    //Add new node to list
    //if head is not null then update the tail
    if(list.head === null){
      list.head = node;
    }
    list[node.value] = node; 
    list.tail = node;
  };

  list.removeHead = function() {
    var oldHead = list.head;
    var findHead = function(node){
      if(node.next !== list.head && node.next !== null){
        findHead(node.next)
      } else if (node.next === null){
        return node;
      }else {
        list.head = node;
        node.next = null;
      }
    }
    findHead(list.tail);
    return oldHead.value;
  };

  list.contains = function(target) {
    var found = false;
    for(var key in list){
      if(list[key].value === target){
        found = true;
      }
    }
    return found;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
