#
# @lc app=leetcode.cn id=116 lang=python3
#
# [116] 填充每个节点的下一个右侧节点指针
#

# @lc code=start
"""
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""
'''
Node connect(Node root) {
    if (root == null) return null;
    // 遍历「三叉树」，连接相邻节点
    traverse(root.left, root.right);
    return root;
}

// 三叉树遍历框架
void traverse(Node node1, Node node2) {
    if (node1 == null || node2 == null) {
        return;
    }
    /**** 前序位置 ****/
    // 将传入的两个节点穿起来
    node1.next = node2;
    
    // 连接相同父节点的两个子节点
    traverse(node1.left, node1.right);
    traverse(node2.left, node2.right);
    // 连接跨越父节点的两个子节点
    traverse(node1.right, node2.left);
}
'''


class Solution:
    def connect(self, root: 'Optional[Node]') -> 'Optional[Node]':
        if not root:
            return

        def traverse(node1, node2):
            if not node1 or not node2:
                return
            # -- 前数位置 ---
            #  将传入的两个节点穿起来
            node1.next = node2

            # 链接相同父节点的两个子节点
            traverse(node1.left, node1.right)
            traverse(node2.left, node2.right)

            # 链接 跨越父节点的两个节点
            traverse(node1.right, node2.left)

        traverse(root.left, root.right)
        return root


# @lc code=end
