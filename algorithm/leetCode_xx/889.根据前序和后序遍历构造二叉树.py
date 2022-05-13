#
# @lc app=leetcode.cn id=889 lang=python3
#
# [889] 根据前序和后序遍历构造二叉树
#


# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def constructFromPrePost(self, preorder: List[int],
                             postorder: List[int]) -> TreeNode:
        n = len(postorder)
        # 建出postorder的index索引
        postOrderIndexMap = {ele: index for index, ele in enumerate(postorder)}

        def makeTree(pre_l, pre_r, post_l, post_r):
            if pre_l > pre_r:
                return

            if pre_l == pre_r:
                return TreeNode(preorder[pre_l])

            rootVal = preorder[pre_l]

            root = TreeNode(rootVal)

            # 我们假设前序遍历的第二个元素是左子树的根节点，但实际上左子树有可能是空指针，那么这个元素就应该是右子树的根节点。由于这里无法确切进行判断，所以导致了最终答案的不唯一。
            leftRootVal = preorder[pre_l + 1]
            leftRootIdx = postOrderIndexMap[leftRootVal]
            leftSize = leftRootIdx - post_l + 1

            root.left = makeTree(
                pre_l + 1,  # pre_l
                pre_l + leftSize,  # pre_r
                post_l,  # post_l
                leftRootIdx,  # post_r
            )

            root.right = makeTree(
                pre_l + leftSize + 1,  # pre_l
                pre_r,  # pre_r
                leftRootIdx + 1,  # post_l
                post_r - 1,  # post_r
            )

            return root

        return makeTree(0, n - 1, 0, n - 1)


# @lc code=end
