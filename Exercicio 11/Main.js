const Tree = require('./Tree');

class Main {
  _execute() {
    const tree = new Tree(12);

    tree.addNode(20);
    tree.addNode(10);
    // tree.addNode(30);
    // tree.addNode(45);

    console.log(tree.checkNode(10));
  }
}

new Main()._execute();
