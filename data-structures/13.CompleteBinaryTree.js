class CompleteBinaryTree {
    constructor() {
        this.nodes = [];
    }

    insert(value) {
        this.nodes.push(value);
    }

    getParentNode(index) {
        return this.nodes[Math.floor((index - 1) / 2)];
    }

    getLeftChildNode(index) {
        return this.nodes[2 * index + 1];
    }

    getRightChildNode(index) {
        return this.nodes[2 * index + 2];
    }
}

let CBT = new CompleteBinaryTree();
CBT.insert(15);
CBT.insert(10);
CBT.insert(25);
CBT.insert(8);
CBT.insert(12);
CBT.insert(20);
CBT.insert(30);

console.log(CBT);
