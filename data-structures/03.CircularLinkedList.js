class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // 리스트의 길이를 반환
  length() {
    if (!this.head) {
      return 0;
    }

    let current = this.head;
    let count = 1;
    while (current.next !== this.head) {
      count++;
      current = current.next;
    }
    return count;
  }

  // 요소를 맨 앞에 추가
  prepend(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = newNode;
      newNode.prev = newNode;
    } else {
      newNode.prev = this.tail;
      newNode.next = this.head;
      this.head.prev = newNode;
      this.tail.next = newNode;
      this.head = newNode;
    }
  }

  // 요소를 중간에 추가
  insertAt(data, position) {
    if (position < 0 || position > this.length()) {
      console.log("Invalid position");
      return;
    }

    let newNode = new Node(data);

    if (position === 0) {
      this.prepend(data);
      return;
    } else if (position === this.length()) {
      this.append(data);
      return;
    } else {
      let current = this.head;
      let index = 0;

      while (index++ < position) {
        current = current.next;
      }

      newNode.prev = current.prev;
      newNode.next = current;
      current.prev.next = newNode;
      current.prev = newNode;
    }
  }

  // 요소를 맨 뒤에 추가
  append(data) {
    let newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = newNode;
      newNode.prev = newNode;
    } else {
      newNode.prev = this.tail;
      newNode.next = this.head;
      this.head.prev = newNode;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // 요소 제거
  remove(data) {
    if (!this.head) {
      return;
    }

    let current = this.head;

    if (this.head.data === data) {
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail.next = this.head.next;
        this.head.next.prev = this.tail;
        this.head = this.head.next;
      }
      return;
    }

    current = this.head.next;
    while (current !== this.head) {
      if (current.data === data) {
        current.prev.next = current.next;
        current.next.prev = current.prev;
        if (current === this.tail) {
          this.tail = current.prev;
        }
        return;
      }
      current = current.next;
    }
  }

  // 리스트 출력 (헤더 -> 테일)
  printListFromHead() {
    if (!this.head) {
      console.log("Empty List");
      return;
    }

    let current = this.head;
    let result = "";
    do {
      result += current.data + " -> ";
      current = current.next;
    } while (current !== this.head);
    result += this.head.data;
    console.log("Head to Tail: " + result);
  }

  // 리스트 출력 (테일 -> 헤더)
  printListFromTail() {
    if (!this.head) {
      console.log("Empty List");
      return;
    }

    let current = this.tail;
    let result = "";
    do {
      result = " <- " + current.data + result;
      current = current.prev;
    } while (current !== this.tail);
    result = this.tail.data + result;
    console.log("Tail to Head: " + result);
  }
}

// 링크드 리스트 사용
let linkedList = new CircularLinkedList();
linkedList.append(1);
linkedList.append(3);
linkedList.prepend(0); // 0을 맨 앞에 추가
linkedList.insertAt(2, 2); // 2를 인덱스 2의 위치에 추가
linkedList.printListFromHead(); // Head to Tail: 0 -> 1 -> 2 -> 3 -> back to 0
linkedList.printListFromTail(); // Tail to Head: back to 3 <- 2 <- 1 <- 0
linkedList.insertAt(4, 5); // Invalid position 출력
