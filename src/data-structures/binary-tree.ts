class TreeNode {
  public value: string;
  public left: TreeNode = null;
  public right: TreeNode = null;

  constructor(value: string) {
    this.value = value;
  }

  setLeft(node: TreeNode) {
    this.left = node;
  }

  setRight(node: TreeNode) {
    this.right = node;
  }
}

const nodeA = new TreeNode("A");
const nodeB = new TreeNode("B");
const nodeC = new TreeNode("C");
const nodeD = new TreeNode("D");
const nodeE = new TreeNode("E");
const nodeF = new TreeNode("F");

nodeA.setLeft(nodeB);
nodeA.setRight(nodeC);
nodeB.setLeft(nodeD);
nodeB.setRight(nodeE);
nodeC.setRight(nodeF);

//     TREE
//       A
//      / \
//     B   C
//    / \   \
//   D   E   F

function depthFirstValues(root: TreeNode | null): string[] {
  if (root === null) {
    return [];
  }

  const result = [];
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();

    result.push(current.value);

    if (current.right !== null) {
      stack.push(current.right);
    }

    if (current.left !== null) {
      stack.push(current.left);
    }
  }

  return result;
}

function depthFirstValuesRecursive(root: TreeNode | null): string[] {
  if (root === null) {
    return [];
  }

  const leftValues: any[] = depthFirstValuesRecursive(root.left);
  const rightValues: any[] = depthFirstValuesRecursive(root.right);

  return [root.value, ...leftValues, ...rightValues];
}

// console.log(depthFirstValues(nodeA));
// console.log(depthFirstValuesRecursive(nodeA));

function breadthFirstValues(root: TreeNode | null): string[] {
  if (root === null) {
    return [];
  }

  const queue = [root];
  const result = [];

  while (queue.length > 0) {
    const current = queue.shift();

    result.push(current.value);

    if (current.left) {
      queue.push(current.left);
    }

    if (current.right) {
      queue.push(current.right);
    }
  }

  return result;
}

// console.log(breadthFirstValues(nodeA));

function depthFirstSearch(root: TreeNode | null, target: string): boolean {
  if (root === null) {
    return false;
  }

  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();

    if (current.value === target) {
      return true;
    }

    if (current.right) {
      stack.push(current.right);
    }

    if (current.left) {
      stack.push(current.left);
    }
  }

  return false;
}

function depthFirstRecursiveSearch(
  root: TreeNode | null,
  target: string
): boolean {
  if (root === null) {
    return false;
  }

  if (root.value === target) {
    return true;
  }

  const hasOnRight = depthFirstRecursiveSearch(root.right, target);
  const hasOnLeft = depthFirstRecursiveSearch(root.left, target);

  return hasOnRight || hasOnLeft;
}

function breadthFirstSearch(root: TreeNode | null, target: string): boolean {
  if (root === null) {
    return false;
  }

  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current.value === target) {
      return true;
    }

    if (current.left) {
      queue.push(current.left);
    }

    if (current.right) {
      queue.push(current.right);
    }
  }

  return false;
}

console.log(depthFirstSearch(nodeA, "F"));
console.log(depthFirstRecursiveSearch(nodeA, "A"));
console.log(breadthFirstSearch(nodeA, "B"));
