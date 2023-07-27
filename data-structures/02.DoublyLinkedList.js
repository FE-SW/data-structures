class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // 리스트의 길이를 반환
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
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
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

  // 요소 맨 뒤에 추가
  append(data) {
    let newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
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
    while (current) {
      if (current.data === data) {
        if (current === this.head && current === this.tail) {
          this.head = null;
          this.tail = null;
        } else if (current === this.head) {
          this.head = this.head.next;
          this.head.prev = null;
        } else if (current === this.tail) {
          this.tail = this.tail.prev;
          this.tail.next = null;
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
        return;
      }
      current = current.next;
    }
  }

    // 리스트 출력 (헤더 -> 테일)
    printListFromHead() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data + ' -> ';
            current = current.next;
        }
        result += 'null';
        console.log('Head to Tail: ' + result);
    }

    // 리스트 출력 (테일 -> 헤더)
    printListFromTail() {
        let current = this.tail;
        let result = '';
        while (current) {
            result = ' <- ' + current.data + result;
            current = current.prev;
        }
        result = 'null' + result;
        console.log('Tail to Head: ' + result);
    }
}

// 링크드 리스트 사용
let linkedList = new DoublyLinkedList();
linkedList.append(1);
linkedList.append(3);
linkedList.prepend(0);  // 0을 맨 앞에 추가
linkedList.insertAt(2, 2);  // 2를 인덱스 2의 위치에 추가
linkedList.printListFromHead();  // Head to Tail: 0 -> 1 -> 2 -> 3 -> null
linkedList.printListFromTail();  // Tail to Head: null <- 3 <- 2 <- 1 <- 0
linkedList.insertAt(4, 5);  // Invalid position 출력
