//This method is used to traverse the tree by going deep down a node before exporing the order node in a tree
const depthFirstValues = (root) => {
  if(root === null) return []

  const result = [];
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop()
    result.push(current.val);

    if (current.right) stack.push(current.right)
    if (current.left) stack.push(current.left)
  }
}