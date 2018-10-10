/* Implement a tree using prototypal instantiation.
Your tree should have methods named "addChild" and "contains".
*/

// EXAMPLE USAGE:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'

var treeMaker = function(value) {
  var newTree = Object.create(treeMaker.methods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};

//methods go here!
treeMaker.methods = {};

treeMaker.methods.addChild = function(value) {
  var node = treeMaker(value);
  // console.log('this', this);
  this.children.push(node);
};

treeMaker.methods.contains = function(value) {
  // check if the root node contains value;
  if (this.value === value) return true;
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(value)) return true;
  }
  return false;
};

var Tree = treeMaker(1);
Tree.addChild(2);
Tree.addChild(3);
console.log(Tree.contains(4));
// console.log('newTree', Tree);
