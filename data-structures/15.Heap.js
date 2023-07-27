class MaxHeap {
    constructor() {
        this.heap = [];
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    removeMax() {
        const max = this.heap[0];
        this.heap[0] = this.heap[this.size() - 1];
        this.heap.pop();
        this.heapifyDown();
        return max;
    }

    heapifyUp() {
        let idx = this.size() - 1;
        while (this.parent(idx) && this.parent(idx) < this.heap[idx]) {
            this.swap(this.parentIdx(idx), idx);
            idx = this.parentIdx(idx);
        }
    }

    heapifyDown() {
        let idx = 0;
        while (this.leftChild(idx) && (this.leftChild(idx) > this.heap[idx] || this.rightChild(idx) > this.heap[idx])) {
            let largerIdx = this.rightIdx(idx);
            if (!this.rightChild(idx) || this.leftChild(idx) > this.rightChild(idx)) {
                largerIdx = this.leftIdx(idx);
            }

            this.swap(largerIdx, idx);
            idx = largerIdx;
        }
    }

    parent(idx) {
        return this.heap[this.parentIdx(idx)];
    }

    leftChild(idx) {
        return this.heap[this.leftIdx(idx)];
    }

    rightChild(idx) {
        return this.heap[this.rightIdx(idx)];
    }

    parentIdx(idx) {
        return Math.floor((idx - 1) / 2);
    }

    leftIdx(idx) {
        return idx * 2 + 1;
    }

    rightIdx(idx) {
        return idx * 2 + 2;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}

const heap = new MaxHeap();
heap.insert(3);
heap.insert(10);
heap.insert(5);
console.log(heap.peek());  // Output: 10
console.log(heap.removeMax());  // Output: 10
console.log(heap.peek());  // Output: 5
