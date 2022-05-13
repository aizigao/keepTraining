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
        root_sum = 0

        def traverse(node):
            nonlocal ans
            nonlocal root_sum

            if not node:
                return 0

            l_sum = traverse(node.left)
            r_sum = traverse(node.right)
            cur_sum = l_sum + r_sum + node.val

            ans = max((root_sum - cur_sum) * cur_sum, ans)
            return cur_sum

        # 先求 总和
        root_sum = traverse(root)

        # 再次计算
        traverse(root)

        return int(ans % (1e9 + 7))


# @lc code=end
