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
      list.head = node.value;
    }
    list[node.value] = node; 
    list.tail = node;
  };

  list.removeHead = function() {
  };

  list.contains = function(target) {
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
