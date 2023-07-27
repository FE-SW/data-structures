class ArrayList {
  constructor() {
    this.data = [];
  }

  add(value) {
    this.data.push(value);
  }

  remove(value) {
    const index = this.data.indexOf(value);
    if (index > -1) {
      this.data.splice(index, 1);
    }
  }

  indexOf(value) {
    return this.data.indexOf(value);
  }

  get(index) {
    return this.data[index];
  }

  size() {
    return this.data.length;
  }

  printList() {
    console.log(this.data.join(" -> "));
  }
}

let arrayList = new ArrayList();
arrayList.add(1);
arrayList.add(2);
arrayList.add(3);
arrayList.printList(); // 1 -> 2 -> 3
arrayList.remove(2);
arrayList.printList(); // 1 -> 3
console.log(arrayList.indexOf(3)); // 1
console.log(arrayList.get(1)); // 3
console.log(arrayList.size()); // 2
