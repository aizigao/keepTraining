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
    # 来自东哥套路
    def connect_1(self, root: 'Optional[Node]') -> 'Optional[Node]':
        if not root:
            return

        def traverse(node1, node2):
            if not node1 or not node2:
                return
            node1.next = node2

            traverse(node1.left, node1.right)
            traverse(node2.left, node2.right)
            traverse(node1.right, node2.left)

        traverse(root.left, root.right)

        return root

    # 层序遍历
    def connect2(self, root: 'Optional[Node]') -> 'Optional[Node]':
        if not root:
            return
        q = [root]

        while q:
            size = len(q)
            # 这里会遍历这一层的内容
            for i in range(size):
                cur = q.pop(0)

                if i < size - 1:
                    cur.next = q[0]

                if cur.left:
                    q.append(cur.left)

                if cur.right:
                    q.append(cur.right)
        return root

    # https://leetcode.cn/problems/populating-next-right-pointers-in-each-node/solution/tian-chong-mei-ge-jie-dian-de-xia-yi-ge-you-ce-2-4/

    def connect(self, root: 'Optional[Node]') -> 'Optional[Node]':
        if not root:
            return

        # 最左侧节点
        leftmost = root

        while leftmost.left:
            head = leftmost

            while head:
                # connection 1
                head.left.next = head.right

                # connection 2
                if head.next:
                    head.right.next = head.next.left

                head = head.next

            # 去下一层的最左的节点
            leftmost = leftmost.left

        return root


# @lc code=end
