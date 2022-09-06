class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//Creating New Nodes
const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")
const e = new Node("e")
const f = new Node("f")

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//Traversing A Tree

// Iterative method
const depthFirstValues = (root) => {
  if (root === null) return [];

  const result = [];
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.val);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return result
};


//Recursive Method
const depthFirstUsingRecursive = (root) => {
  if (root === null) return [];
  const leftValues = depthFirstUsingRecursive(root.left);
  const rightValues = depthFirstUsingRecursive(root.right);
  return [root.val, ...leftValues, ...rightValues]
}

console.log(depthFirstValues(a), "depthFirstTraveral")
console.log(depthFirstUsingRecursive(a), "depthFirstUsingRecursive");

//Searching Through a Tree for an Element
 //1. Using BreadthFirstTraversal Method

const treeIncludes = (root, target) => {
  if(root === null) return false;
  
  const queue = [root];
  while(queue.length > 0) {
    const current = queue.shift()
    if (current.val === target) {
      return true;
    }
    if (current.left) queue.push(current.left)
    if (current.right) queue.push(current.right)
  }

  return false;
}

//2. Using DeptFirstTraversal Method

const treeIncludesUsingDepthFirst = (root, target) => {
  if(root === null) return false;
  if(root.val === target) return true;
  
  return treeIncludesUsingDepthFirst(root.left, target) || treeIncludesUsingDepthFirst(root.right, target);
}

//Sum all in a tree
const treesum = (root) => {
  if (root === null) return 0;

  return root.val + treesum(root.val) + treesum(root.right)
  
};
