#
# @lc app=leetcode.cn id=96 lang=python3
#
# [96] 不同的二叉搜索树
#

# @lc code=start


"""
- 每一个节点 都可以为root
- 1...(i−1) 序列作为左子树，将  (i+1)...n 序列作为右子树
- 同样的方式递归构建左子树和右子树


https://leetcode-cn.com/problems/unique-binary-search-trees/solution/bu-tong-de-er-cha-sou-suo-shu-by-leetcode-solution/
"""


class Solution:
    def numTrees(self, n: int) -> int:
        """
        :type n: int
        :rtype: int
        """
        G = [0]*(n+1)
        G[0], G[1] = 1, 1

        # G(n) = sum(i->n) ( G(i-1) * G(n-i))
        # 0, 1是基线条件，不用算了

        # 第二层循环是因为有个累加求和 2.第一层循环是动态规划-从下往上递推
        for i in range(2, n+1):
            # 以不同数作为 root
            for j in range(1, i+1):
                G[i] += G[j-1] * G[i-j]

        return G[n]

    # 二, 数学方法，这个忽略
# @lc code=end
