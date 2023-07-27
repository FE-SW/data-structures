class BTreeNode {
    constructor(order) {
        this.order = order;
        this.keys = [];
        this.children = [];
    }

    get isLeaf() {
        return !this.children.length;
    }

    get isFull() {
        return this.keys.length === this.order - 1;
    }

    find(key) {
        let i = 0;
        while (i < this.keys.length && this.keys[i] < key) {
            i++;
        }
        return i;
    }
}

class BTree {
    constructor(order = 3) {
        this.order = order;
        this.root = new BTreeNode(this.order);
    }

    split(node) {
        let midIndex = Math.floor(node.keys.length / 2);
        let leftKeys = node.keys.slice(0, midIndex);
        let rightKeys = node.keys.slice(midIndex + 1);

        let newNode = new BTreeNode(this.order);
        newNode.keys = rightKeys;
        node.keys = leftKeys;

        if (!node.isLeaf) {
            newNode.children = node.children.slice(midIndex + 1);
            node.children = node.children.slice(0, midIndex + 1);
        }
        
        return {newNode, midKey: node.keys[midIndex]};
    }

    insert(key) {
        let root = this.root;
        if (root.isFull) {
            let {newNode, midKey} = this.split(root);
            root = new BTreeNode(this.order);
            root.keys = [midKey];
            root.children = [this.root, newNode];
            this.root = root;
        }
        this.insertNonFull(root, key);
    }

    insertNonFull(node, key) {
        let i = node.find(key);
        if (node.isLeaf) {
            node.keys.splice(i, 0, key);
        } else {
            let child = node.children[i];
            if (child.isFull) {
                let {newNode, midKey} = this.split(child);
                node.keys.splice(i, 0, midKey);
                node.children.splice(i + 1, 0, newNode);
                if (key > midKey) {
                    child = newNode;
                }
            }
            this.insertNonFull(child, key);
        }
    }
}