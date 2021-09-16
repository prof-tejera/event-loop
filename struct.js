class Stack {
  constructor() {
    this.arr = [];
  }

  push(e) {
    this.arr = [e, ...this.arr];
  }

  pop() {
    const [e, ...rest] = this.arr;
    this.arr = rest;
    return e;
  }

  getItems() {
    return [...this.arr];
  }
}

class Queue {
  constructor() {
    this.arr = [];
  }

  push(e) {
    this.arr = [...this.arr, e];
  }

  pop() {
    const [e, ...rest] = this.arr;
    this.arr = rest;
    return e;
  }

  getItems() {
    return [...this.arr];
  }
}

export { Stack, Queue };
