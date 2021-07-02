const Node = require('./Node');

class Tree {
  constructor(value) {
    this.root = new Node(value);
  }

  _getRoot() {
    return this.root;
  }

  _setRoot(root) {
    this.root = root; 
  }

  addNode(value) {  
    let root = this._getRoot();

    if (value != root.value) {
      if (value < root.value) {
        if (root.left === undefined) {
          root.left = new Node(value);
          root.left.parent = root.value;

          console.log(`Inserido o valor: ${value} a esquerda de ${root.value}`);
        } 

        // Código que irá incrementando a árvore para a esquerda
        // this._setRoot(root.left);
      } else {
        if (root.right === undefined) {
          root.right = new Node(value);
          root.right.parent = root.value;
          
          console.log(`Inserido o valor: ${value} a direita de ${root.value}`);
        }

        // Código que irá incrementando a árvore para a direita
        // this._setRoot(root.right);
      }
    }
  }

  checkNode(value) {
    const root = this._getRoot();

    if (value === root.value) {
      return 'Nó raiz';
    }

    if (root.left) {
      if (value === root.left.value) {
        if (root.left.parent) {
          return 'Nó filho do valor: ' + root.left.parent;
        } else {
          return 'Nó folha filho do valor: ' + root.value;
        }
      }
    }

    if (root.right) {
      if (value === root.right.value) {
        if (root.right.parent) {
          return 'Nó filho do valor: ' + root.right.parent;
        } else {
          return 'Nó folha filho do valor: ' + root.value;
        }
      }
    }

    return 'Valor não encontrado';
  }

}

module.exports = Tree;
