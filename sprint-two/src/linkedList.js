var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //Create new node
    var node = new Node(value);
    node.next = list.tail;
    if(list.head){
      list.tail.previous = node;
    } else {
      list.head = node;
    }
    //Add new node to list
    //if head is not null then update the tail
    list.tail = node;
  };

  list.removeHead = function() {
    var oldHead = list.head;
    list.head = oldHead.previous;
    if(list.head){
      list.head.next = null;
    }
    return oldHead.value;
  };

  list.contains = function(target) {
    var searchList = function(node){
      if(node.value === target){
        return true;
      } else if (node.next !== null){
        return searchList(node.next);
      } else{
        return false;
      }
    };
    return searchList(list.tail);
  };

  list.addToHead = function(value){
    // create a new node and assign the value to the node
    var node = new Node(value);
    var oldHead = list.head

    if(!list.head){
      list.head = node;
    } else {
      list.head = node;
      node.previous = oldHead;
    }
    if (!list.tail){
      list.tail = node;
    }

    // find the current head, point the current head to the new node
    // point new node to the old head
    // reassign the list.head property to reflect the new node
  };

  list.removeTail = function(){
    //Identify the tail node
    var oldTail = list.tail;
    //Set tail equal to the next tail node
    list.tail = oldTail.next;
    //Reset the new tail node pointer to null
    list.tail.previous = null;
    //return the old tail's value
    return oldTail.value;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
