#
# @lc app=leetcode.cn id=654 lang=python3
#
# [654] 最大二叉树
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    def constructMaximumBinaryTree(self, nums: List[int]) -> TreeNode:
        if not nums:
            return None

        maxVal = float('-inf')
        index = 0
        for i in range(len(nums)):
            if nums[i] > maxVal:
                maxVal = nums[i]
                index = i

        root = TreeNode(maxVal)

        root.left = self.constructMaximumBinaryTree(nums[:index])
        root.right = self.constructMaximumBinaryTree(nums[(index + 1)::])

        return root


# @lc code=end
