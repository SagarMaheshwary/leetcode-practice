class Stack {
  private items: any[] = [];

  push(item: any): void {
    this.items.push(item);
  }

  pop(): any {
    return this.items.pop();
  }

  peek(): any {
    return this.items[this.items.length - 1];
  }

  size(): number {
    return this.items.length;
  }

  print(): void {
    console.log(this.items);
  }
}

const stack = new Stack();
stack.push("Item One");
stack.push("Item Two");
stack.push("Item Three");

// console.log(stack.pop());
// console.log(stack.print());
// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.size());
