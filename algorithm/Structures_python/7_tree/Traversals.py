#  -- preorder
'''
In a preorder traversal, we visit the root node first, then recursively do a preorder traversal of the left subtree, followed by a recursive preorder traversal of the right subtree.
'''


def preorder(tree):
    if tree:
        print(tree.getRootVal())
        preorder(tree.getLeftChild)
        preorder(tree.getRightChild)

# -- inorder


'''
In an inorder traversal, we recursively do an inorder traversal on the left subtree, visit the root node, and finally do a recursive inorder traversal of the right subtrees
'''

def inorder(tree):
    if tree:
        inorder(tree.getLeftChild)
        print(tree.getRootVal())
        inorder(tree.getRightChild)

# postorder
'''
In a postorder traversal, we recursively do a postorder traversal of the left subtree and the right subtree followed by a visit to the root node.
'''

def postorder(tree):
    if tree:
        postorder(tree.getLeftChild)
        print(tree.getRootVal())
        postorder(tree.getRightChild)