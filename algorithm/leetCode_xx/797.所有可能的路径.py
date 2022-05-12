#
# @lc app=leetcode.cn id=797 lang=python3
#
# [797] 所有可能的路径
#


# @lc code=start
class Solution:
    # TODO: 官方的解法也要看一看
    def traverse(self, graph, s, path, res):
        path.append(s)
        n = len(graph)
        # 到终点
        if s == n - 1:
            res.append(path[:])
        for ss in graph[s]:
            self.traverse(graph, ss, path, res)
        path.pop()

    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:
        res = []
        path = []
        self.traverse(graph, 0, path, res)
        return res


# @lc code=end
