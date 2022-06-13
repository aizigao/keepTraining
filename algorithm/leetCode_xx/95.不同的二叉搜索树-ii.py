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

            rst = []
            # 在 start ,end 中取 一个节点做为根
            for i in range(start, end + 1):
                left = generateTrees(start, i - 1)
                right = generateTrees(i + 1, end)

                # 从左子树集合中选出一棵左子树，从右子树集合中选出一棵右子树，拼接到根节点上
                for l in left:
                    for r in right:
                        cur = TreeNode(i)
                        cur.left = l
                        cur.right = r
                        rst.append(cur)
            return rst

        return generateTrees(1, n) if n else []


# @lc code=end
