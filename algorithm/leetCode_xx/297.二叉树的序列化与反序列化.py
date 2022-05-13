#
# @lc app=leetcode.cn id=297 lang=python3
#
# [297] 二叉树的序列化与反序列化
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Codec:
    '''
    前序模式
    '''
    def serialize(self, root: TreeNode) -> str:
        """Encodes a tree to a single string.
        """
        ans = []

        def dfs(node):
            if not node:
                ans.append('null')
                return
            ans.append(str(node.val))
            dfs(node.left)
            dfs(node.right)

        dfs(root)
        return ",".join(ans)

    def deserialize(self, data: str) -> TreeNode:
        """Decodes your encoded data to tree.
        """

        data = data.split(',')

        def dfs(nodes):
            rootV = nodes.pop(0)
            if rootV == 'null':
                return None
            root = TreeNode(rootV)
            root.left = dfs(nodes)
            root.right = dfs(nodes)
            return root

        return dfs(data)


# Your Codec object will be instantiated and called as such:
# ser = Codec()
# deser = Codec()
# tree = ser.serialize(root)
# ans = deser.deserialize(tree)
# return ans

# @lc code=end
