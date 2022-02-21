#
# @lc app=leetcode.cn id=621 lang=python3
#
# [621] 任务调度器
#

# @lc code=start
import collections


class Solution:
    ## 模拟
    def leastInterval(self, tasks: List[str], n: int) -> int:
        freq = collections.Counter(tasks)
        # 任务类别总数
        m = len(freq)

        print(freq, tasks)
        # 冷却限制, 最早可以执行时间
        nextValid = [1] * m
        # 剩余次数
        rest = list(freq.values())
        time = 0

        for i in range(len(tasks)):
            time += 1
            minNextValid = min(nextValid[j] for j in range(m) if rest[j] > 0)
            time = max(time, minNextValid)

            # 找出最大次数那个 
            best = -1
            for j in range(m):
                if rest[j] and nextValid[j] <= time:
                    if best == -1 or nextValid[j] > rest[best]:
                        best = j
            nextValid[best] = time + n + 1
        return time


# @lc code=end
