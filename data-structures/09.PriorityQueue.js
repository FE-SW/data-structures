class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(element, priority) {
    let queued = false;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > priority) {
        this.items.splice(i, 0, { element, priority });
        queued = true;
        break;
      }
    }

    if (!queued) {
      this.items.push({ element, priority });
    }
  }

  dequeue() {
    if (this.items.length === 0) {
      return "Queue is empty";
    }
    return this.items.shift().element;
  }

  front() {
    return this.items[0].element;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

let priorityQueue = new PriorityQueue();

priorityQueue.enqueue("item1", 2);
priorityQueue.enqueue("item2", 1);
console.log(priorityQueue.front()); // Outputs: item2
console.log(priorityQueue.dequeue()); // Outputs: item2
console.log(priorityQueue.front()); // Outputs: item1
console.log(priorityQueue.isEmpty()); // Outputs: false
