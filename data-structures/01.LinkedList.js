class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  length() {
    let current = this.head;
    let count = 0;
    while (current) {
        count++;
        current = current.next;
    }
    return count;
}

  // 요소를 맨 앞에 추가
  prepend(data) {
    let newNode = new ListNode(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // 인덱스 지정해 추가
  insertAt(data, position) {
    if (position < 0 || position > this.length()) {
      console.log("Invalid position");
      return;
  }

    let newNode = new ListNode(data);

    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let index = 0;

    while (current) {
      if (index === position - 1) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }

      current = current.next;
      index++;
    }
  }

  // 요소를 맨 뒤에 추가
  append(data) {
    let newNode = new ListNode(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // 요소 제거
  remove(data) {
    if (!this.head) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  // 리스트 출력
  printList() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + " -> ";
      current = current.next;
    }
    result+="null"
    console.log(result);
  }
}

let linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(3);
linkedList.insertAt(2, 2);  // 2를 인덱스 2의 위치에 추가
linkedList.printList();  // 1 -> 2 -> 3 -> null 출력
linkedList.insertAt(4, 5);  // Invalid position 출력
