class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if(this.items.length === 0) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

let stack = new Stack();

stack.push("item1");
stack.push("item2");
console.log(stack.peek()); // Outputs: item2
console.log(stack.pop());  // Outputs: item2
console.log(stack.peek()); // Outputs: item1
console.log(stack.isEmpty()); // Outputs: false