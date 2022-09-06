//This method is the queue method(FIFO): Its used to traverse a tree node without exploring the last node of a branch before going to the other node

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//Creating New Nodes
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const breadthFirstValues = (root) => {
  if(root === null) return []

  const values = []
  const queue = [root]

  while (queue.length > 0) {
    const current = queue.shift()
    values.push(current.val);

    if(current.left) queue.push(current.left)
    if(current.right) queue.push(current.right)
  }

  return values
}

console.log(breadthFirstValues(a), "breadthFirst");