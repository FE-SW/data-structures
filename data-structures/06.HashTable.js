class HashTable {
    constructor(size = 50) {
        this.buckets = new Array(size);
        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = new Map(); //해시값 충돌을 위해, 체이닝
        }
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.buckets.length;
    }

    set(key, value) {
        if (key === null || value === null) {
            throw new Error("Key or value cannot be null");
        }

        const index = this._hash(key);
        this.buckets[index].set(key, value);
    }

    get(key) {
        const index = this._hash(key);
        return this.buckets[index].get(key);
    }

    has(key) {
        const index = this._hash(key);
        return this.buckets[index].has(key);
    }

    delete(key) {
        const index = this._hash(key);
        this.buckets[index].delete(key);
    }
}

let ht = new HashTable();

ht.set("name", "John Doe");
console.log(ht.get("name")); // Outputs: John Doe

ht.set("age", 30);
console.log(ht.get("age")); // Outputs: 30

ht.set("age", 33);
console.log(ht.get("age")); // Outputs: 33