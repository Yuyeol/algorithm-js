class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    // linked list가 비어있을 때 초기 상태
    this.head = null; // 맨 앞에 있는 노드
    this.count = 0; // 노드의 개수
  }
  printAll() {
    let currentNode = this.head;
    let text = "[";
    // currentNode가 null이 아닐 때까지 실행
    while (currentNode) {
      text += currentNode.data;
      currentNode = currentNode.next;
      if (currentNode) text += ", ";
    }
    text += "]";
    console.log(text);
  }

  clear() {
    this.head = null;
    this.count = 0;
  }

  insertAt(data, index) {
    if (index > this.count || index < 0) {
      throw new Error("Index out of bounds");
    }
    let newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      // 시작점을 currentNode로 설정
      let currentNode = this.head;
      // index - 1 만큼 currentNode를 이동
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      // newNode의 next를 currentNode의 next로 설정
      newNode.next = currentNode.next;
      // currentNode의 next를 newNode로 설정
      currentNode.next = newNode;
    }
    this.count++;
  }
  insertLast(data) {
    this.insertAt(data, this.count);
  }

  deleteAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error("Index out of bounds");
    }
    let currentNode = this.head;
    if (index === 0) {
      let deletedNode = this.head;
      // 다음 노드를 head로 설정
      this.head = this.head.next;
      this.count--;
      // 삭제된 노드를 리턴
      return deletedNode;
    } else {
      // index - 1 만큼 currentNode를 이동
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      // index에 해당하는 노드(current의 next node)를 deletedNode에 저장
      let deletedNode = currentNode.next;
      // currentNode의 next node를 next, next node로 설정(next node는 삭제되었으므로)
      currentNode.next = currentNode.next.next;
      this.count--;
      return deletedNode;
    }
  }
  deleteLast() {
    return this.deleteAt(this.count - 1);
  }

  getNodeAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error("Index out of bounds");
    }
    let currentNode = this.head;
    // index까지 currentNode를 이동
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
}
export { Node, LinkedList };
