#
# @lc app=leetcode.cn id=406 lang=python3
#
# [406] 根据身高重建队列
#
"""
假设有打乱顺序的一群人站成一个队列，数组 people 表示队列中一些人的属性（不一定按顺序）。每个 people[i] = [hi, ki] 表示第 i 个人的身高为 hi ，前面 正好 有 ki 个身高大于或等于 hi 的人。


请你重新构造并返回输入数组 people 所表示的队列。返回的队列应该格式化为数组 queue ，其中 queue[j] = [hj, kj] 是队列中第 j 个人的属性（queue[0] 是排在队列前面的人）。



时间复杂度：O(n^2)，其中 nn 是数组 \textit{people}people 的长度。我们需要 O(n \log n)O(nlogn) 的时间进行排序，随后需要 O(n^2)O(n 
2
 ) 的时间遍历每一个人并将他们放入队列中。由于前者在渐近意义下小于后者，因此总时间复杂度为 O(n^2)O(n 
2
 )。

空间复杂度：O(\log n)O(logn)，即为排序需要使用的栈空间。

"""

# @lc code=start


class Solution:
    def reconstructQueue(self, people: List[List[int]]) -> List[List[int]]:
        people.sort(key=lambda x: (x[0], -x[1]))
        n = len(people)

        ans = [[] for i in range(n)]

        for person in people:
            spaces = person[1] + 1
            for i in range(n):
                if not ans[i]:
                    spaces -= 1

                    if spaces == 0:
                        ans[i] = person
                        break
        return ans


# @lc code=end
