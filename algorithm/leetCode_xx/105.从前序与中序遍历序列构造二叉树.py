#
# @lc app=leetcode.cn id=105 lang=python3
#
# [105] 从前序与中序遍历序列构造二叉树
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> TreeNode:
        n = len(preorder)
        # 建出inorder的index索引
        inorderIndexMap = {ele: index for index, ele in enumerate(inorder)}
        """
        preorder
        root [left nodes] [right nodes]
        inorder
        [left nodes] root [right nodes]


        我们肯定要想办法确定根节点的值，把根节点做出来，然后递归构造左右子树即可
        由前序结果可以直接找到 root
        """
        def makeTree(preorder_left, preorder_right, inorder_left,
                     inorder_right):
            if preorder_left > preorder_right:
                return None
            # pass
            rootVal = preorder[preorder_left]

            # 找到 root 在inorder的位置
            root_idx_inorder = inorderIndexMap[rootVal]
            # 找出左树的大小
            left_tree_size = root_idx_inorder - inorder_left

            # 建出root
            root = TreeNode(rootVal)

            # 用同样的方式建出左右树
            root.left = makeTree(preorder_left + 1,
                                 preorder_left + left_tree_size, inorder_left,
                                 root_idx_inorder - 1)

            root.right = makeTree(preorder_left + left_tree_size + 1,
                                  preorder_right, root_idx_inorder + 1,
                                  inorder_right)

            return root

        return makeTree(0, n - 1, 0, n - 1)


# @lc code=end
