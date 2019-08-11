// 二叉树查找
// O(log(n))

/*************************************************************
任意节点的左子树不空，则左子树上所有结点的值均小于它的根结点的值；
任意节点的右子树不空，则右子树上所有结点的值均大于它的根结点的值；
任意节点的左、右子树也分别为二叉查找树；
没有键值相等的节点。二叉查找树相比于其他数据结构的优势在于查找、插入的时间复杂度较低。为O(log n)。二叉查找树是基础性数据结构，用于构建更为抽象的数据结构，如集合、multiset、关联数组等。
 ******************************************************/

/*
 * Invert tree to returns an inverted tree ->
 *
 *           (10)
 *           /  \
 *         (20) (5)
 *         /    / \
 *       (40)  (6) (3)
 *
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  whoAmI() {
    return `Node ${this.data}`;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // insert a node
  insert(data) {
    const dataNode = new Node(data);
    if (!this.root) {
      this.root = dataNode;
      return;
    }

    let curr = this.root;

    while (data !== curr.data) {
      if (data < curr.data) {
        // left tree
        if (!curr.left) {
          curr.left = dataNode;
          break;
        }
        curr = curr.left;
      } else {
        // right tree
        if (!curr.right) {
          curr.right = dataNode;
          break;
        }
        curr = curr.right;
      }
    }
    console.log(this.root);
  }

  search(data) {
    if (!this.root) return false;
    let curr = this.root;

    while (curr) {
      if (data === this.root) {
        return curr;
      } else if (data < curr.data) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
  }

  // invert the tree
  // 左右树互调
  invert(curr = root) {
    if (curr.left && curr.right) {
      this.invert(curr.left);
      this.invert(curr.right);
    }
    [curr.left, curr.right] = [curr.right, curr.left];
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, data) {
    if (node == null) {
      return null;
    }

    if (data == node.data) {
      // no children node
      if (node.left == null && node.right == null) {
        return null;
      }
      if (node.left == null) {
        return node.right;
      }
      if (node.right == null) {
        return node.left;
      }

      let getSmallest = function(node) {
        if (node.left === null && node.right == null) {
          return node;
        }
        if (node.left != null) {
          return node.left;
        }
        if (node.right !== null) {
          return getSmallest(node.right);
        }
      };
      let temNode = getSmallest(node.right);
      node.data = temNode.data;
      node.right = this.removeNode(temNode.right, temNode.data);
      return node;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else {
      node.right = this.removeNode(node.right, data);
      return node;
    }
  }

  // In-order traversal print
  inOrder(root) {
    var curr = root;

    if (curr) {
      this.inOrder(curr.left);
      console.log(curr.data);
      this.inOrder(curr.right);
    }
  }

  // Post-order traversal print
  postOrder(root) {
    var curr = root;

    if (curr) {
      this.inOrder(curr.left);
      this.inOrder(curr.right);
      console.log(curr.data);
    }
  }

  // Pre-order traversal print
  preOrder(root) {
    var curr = root;
    if (curr) {
      console.log(curr.data);
      this.preOrder(curr.left);
      this.preOrder(curr.right);
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(4);
bst.insert(8);
bst.insert(5);
bst.insert(2);
bst.insert(3);
