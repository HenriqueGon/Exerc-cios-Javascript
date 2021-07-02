const Leaf = require('./Leaf');

class Node extends Leaf{
  constructor(value) {
    super(value);
    
    this.left = undefined;
    this.right = undefined;
    this.parent = undefined;
  }
  
  _getLeft() {
    return this.left;
  }

  _setLeft(value) {
    this.left = value;
  }

  _getRight() {
    return this.right;
  }

  _setRight(value) {
    this.right = value;
  }

  _getParente() {
    return this.parent;
  }

  _setParent(value) {
    this.parent = value;
  }
}

module.exports = Node;