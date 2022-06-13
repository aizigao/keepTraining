#
# @lc app=leetcode.cn id=95 lang=python3
#
# [95] 不同的二叉搜索树 II
#


# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    '''
    根节点值 大于左子树，小于右子树
    '''
    def generateTrees(self, n: int) -> List[TreeNode]:
        def generateTrees(start, end):
            # base
            if start > end:
                return [None]

            allTrees = []
            for i in range(start, end + 1):
                leftTrees = generateTrees(start, i - 1)
                rightTress = generateTrees(i + 1, end)

                # 左树 和 右树各取一个 拼接
                for l in leftTrees:
                    for r in rightTress:
                        currTree = TreeNode(i)
                        currTree.left = l
                        currTree.right = r
                        allTrees.append(currTree)
            return allTrees

        return generateTrees(1, n) if n else []


# @lc code=end
