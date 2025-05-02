class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }
  padStart(val) {
    this.#value = val + this.#value;
  }
  padEnd(val) {
    this.#value += val;
  }
  padBoth(val) {
    this.padStart(val);
    this.padEnd(val);
  }
  getValue() {
    return this.#value;
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
