class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.items.length === 0) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

let queue = new Queue();

queue.enqueue("item1");
queue.enqueue("item2");
console.log(queue.front()); // Outputs: item1
console.log(queue.dequeue()); // Outputs: item1
console.log(queue.front()); // Outputs: item2
console.log(queue.isEmpty()); // Outputs: false
