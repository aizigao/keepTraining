#
# @lc app=leetcode.cn id=652 lang=python3
#
# [652] 寻找重复的子树
#


# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findDuplicateSubtrees(
            self, root: Optional[TreeNode]) -> List[Optional[TreeNode]]:
        res = []
        count = collections.Counter()

        def travserse(root):
            if not root:
                return '#'
            left = travserse(root.left)
            right = travserse(root.right)

            subTree = left + ',' + right + ',' + str(root.val)
            count[subTree] += 1
            if count[subTree] == 2:
                res.append(root)
            return subTree

        travserse(root)
        return res


# @lc code=end
