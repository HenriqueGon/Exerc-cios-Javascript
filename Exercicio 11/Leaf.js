class Leaf {
  constructor(value) {
    this.value = value;
  }

  _getValue() {
    return this.value;
  }

  _setValue(value) {
    this.value = value;
  }
}

module.exports = Leaf;