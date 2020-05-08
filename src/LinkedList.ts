class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
      //with void you can return but you can't return a value like return node
    }
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  get length(): number {
    // list is empty
    if (!this.head) {
      return 0;
    }
    let length = 1;
    let node = this.head;
    // update the list and point to the next node in the chain
    while (node.next) {
      length++;
      node = node.next;
    }
    //exited while loop -- node.next = undefined
    return length;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }
    //0 cause we start at index 0
    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      //if not, go to the next node on the chain
      counter++;
      node = node.next;
    }
    //goes through whole list and never finds an index equal to what we're looking for
    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty; yeet!');
    }
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  //swapping the values not the actual node
  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  print(): void {
    if (!this.head) {
      return;
    }
    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
