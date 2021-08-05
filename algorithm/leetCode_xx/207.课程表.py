#
# @lc app=leetcode.cn id=207 lang=python3
#
# [207] 课程表
#
'''
本题是一道经典的「拓扑排序」问题。
https://leetcode-cn.com/problems/course-schedule/solution/ke-cheng-biao-by-leetcode-solution/

看这里: https://oi-wiki.org/graph/topo/

TODO: 先要看图的内容才能搞的定了，再说

## 生成一个 topo
Kahn 算法

```
L← Empty list that will contain the sorted elements
S ← Set of all nodes with no incoming edges
while S is non-empty do
    remove a node n from S
    insert n into L
    for each node m with an edge e from n to m do
        remove edge e from the graph
        if m has no other incoming edges then
            insert m into S
if graph has edges then
    return error (graph has at least onecycle)
else
    return L (a topologically sortedorder)
```

'''


# @lc code=start
class Solution:
    # 方法一 dfs
    '''
    时间复杂度: O(n+m)，其中 n 为课程数，m 为先修课程的要求数。这其实就是对图进行深度优先搜索的时间复杂度。

    空间复杂度: O(n+m)。题目中是以列表形式给出的先修课程关系，为了对图进行深度优先搜索，我们需要存储成邻接表的形式，空间复杂度为 O(n+m)O(n+m)。在深度优先搜索的过程中，我们需要最多 O(n)O(n) 的栈空间（递归）进行深度优先搜索，因此总空间复杂度为 O(n+m)O(n+m)。

    '''
    def canFinish(self, numCourses: int,
                  prerequisites: List[List[int]]) -> bool:
        edges = collections.defaultdict(list)
        visited = [0] * numCourses
        result = list()
        valid = True

        for info in prerequisites:
            edges[info[1]].append(info[0])

        def dfs(u: int):
            nonlocal valid
            visited[u] = 1
            for v in edges[u]:
                if visited[v] == 0:
                    dfs(v)
                    if not valid:
                        return
                elif visited[v] == 1:
                    valid = False
                    return
            visited[u] = 2
            result.append(u)

        for i in range(numCourses):
            if valid and not visited[i]:
                dfs(i)

        return valid

    '''
    bfs
    时间复杂度: O(n+m)O(n+m)，其中 nn 为课程数，mm 为先修课程的要求数。这其实就是对图进行广度优先搜索的时间复杂度。
    空间复杂度: O(n+m)O(n+m)。题目中是以列表形式给出的先修课程关系，为了对图进行广度优先搜索，我们需要存储成邻接表的形式，空间复杂度为 O(n+m)O(n+m)。在广度优先搜索的过程中，我们需要最多 O(n)O(n) 的队列空间（迭代）进行广度优先搜索。因此总空间复杂度为 O(n+m)O(n+m)。
    '''
    def canFinish2(self, numCourses: int,
                   prerequisites: List[List[int]]) -> bool:
        edges = collections.defaultdict(list)
        indeg = [0] * numCourses

        for info in prerequisites:
            edges[info[1]].append(info[0])
            indeg[info[0]] += 1

        q = collections.deque([u for u in range(numCourses) if indeg[u] == 0])
        visited = 0

        while q:
            visited += 1
            u = q.popleft()
            for v in edges[u]:
                indeg[v] -= 1
                if indeg[v] == 0:
                    q.append(v)

        return visited == numCourses


# @lc code=end
