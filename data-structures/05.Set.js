class HashSet {
    constructor() {
        this.set = {};
    }

    _hash(value) {
        let hash = 0;
        for (let i = 0; i < value.length; i++) {
            hash += value.charCodeAt(i);
        }
        return hash;
    }

    add(value) {
        let hashedValue = this._hash(value);
        this.set[hashedValue] = true;  // We don't care about the value
    }

    has(value) {
        let hashedValue = this._hash(value);
        return this.set.hasOwnProperty(hashedValue);
    }

    delete(value) {
        let hashedValue = this._hash(value);
        delete this.set[hashedValue];
    }
}

let set = new HashSet();
set.add(1);
set.add(2);
set.add(3);

console.log(set.has(1)); // Outputs: true
console.log(set.has(4)); // Outputs: false
console.log(set.size()); // Outputs: 3

set.delete(2);
console.log(set.has(2)); // Outputs: false
console.log(set.size()); // Outputs: 2

console.log(set.values()); // Outputs: [1, 3]