class HashMap {
  constructor() {
    this.map = {};
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash;
  }

  set(key, value) {
    let hashedKey = this._hash(key);
    this.map[hashedKey] = value;
  }

  get(key) {
    let hashedKey = this._hash(key);
    return this.map[hashedKey];
  }

  has(key) {
    let hashedKey = this._hash(key);
    return this.map.hasOwnProperty(hashedKey);
  }

  delete(key) {
    let hashedKey = this._hash(key);
    delete this.map[hashedKey];
  }
}

let map = new HashMap();
map.set("name", "John Doe");
map.set("age", 30);

console.log(map.get("name")); // Outputs: John Doe
console.log(map.get("age")); // Outputs: 30
console.log(map.has("name")); // Outputs: true
console.log(map.size()); // Outputs: 2

map.delete("age");
console.log(map.has("age")); // Outputs: false
console.log(map.size()); // Outputs: 1

console.log(map.keys()); // Outputs: ['name']
console.log(map.values()); // Outputs: ['John Doe']

map.clear();
console.log(map.size()); // Outputs: 0
