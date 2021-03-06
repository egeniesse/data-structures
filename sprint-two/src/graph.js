

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = {
    value : node,
    edge : {}
  };

};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if(this.nodes.hasOwnProperty(node)){
    return true;
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if(this.nodes.hasOwnProperty(node)){
    delete this.nodes[node];
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  if(this.nodes[fromNode].edge.hasOwnProperty(toNode) && this.nodes[toNode].edge.hasOwnProperty(fromNode)){
    return true;
  }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  this.nodes[fromNode].edge[toNode] = toNode;
  this.nodes[toNode].edge[fromNode] = fromNode;

};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //check if there is an edge
  if(this.hasEdge(fromNode, toNode)){
    delete this.nodes[fromNode].edge[toNode];
    delete this.nodes[toNode].edge[fromNode];
  }

  //remove the edge property from node

};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.nodes){
    cb(node);

  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


