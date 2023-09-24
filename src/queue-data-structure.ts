class Queue {
  private items: any = {};
  private rear: number = 0;
  private front: number = 0;

  enqueue(element: any): void {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue(): any {
    if (this.isEmpty()) {
      return undefined;
    }

    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;

    return item;
  }

  peak(): any {
    return this.items[this.front];
  }

  isEmpty(): boolean {
    return this.rear - this.front === 0;
  }

  size(): number {
    return this.rear - this.front;
  }

  print(): void {
    console.log(this.rear, this.front);
    console.log(this.items);
  }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();
queue.print();
queue.dequeue();
// queue.enqueue(40);
queue.dequeue();
queue.dequeue();
queue.print();
// queue.dequeue();
console.log(queue.isEmpty());
