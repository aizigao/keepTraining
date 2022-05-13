#
# @lc app=leetcode.cn id=1339 lang=python3
#
# [1339] 分裂二叉树的最大乘积
#


# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxProduct(self, root: Optional[TreeNode]) -> int:
        ans = 0

        treeSum = 0

        def travserse(node):
            nonlocal ans
            nonlocal treeSum
            if not node:
                return 0

            # 左树和
            l_sum = travserse(node.left)
            # 右树和
            r_sum = travserse(node.right)

            # 后序
            root_sum = l_sum + r_sum + node.val
            # cur = max((l_sum + node.val) * r_sum, l_sum * (r_sum + node.val))
            ans = max(ans, root_sum * (treeSum - root_sum))

            return root_sum

        treeSum = travserse(root)
        travserse(root)
        return int(ans % (1e9 + 7))


# @lc code=end
