#
# @lc app=leetcode.cn id=347 lang=python3
#
# [347] 前 K 个高频元素
#

# @lc code=start

"""
你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。
题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的。
你可以按任意顺序返回答案

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/top-k-frequent-elements
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
"""

"""
在这里，我们可以利用堆的思想：建立一个小顶堆，然后遍历「出现次数数组」：

如果堆的元素个数小于 k，就可以直接插入堆中。
如果堆的元素个数等于 k，则检查堆顶与当前出现次数的大小。如果堆顶更大，说明至少有 k 个数字的出现次数比当前值大，故舍弃当前值；否则，就弹出堆顶，并将当前值插入堆中。

O(Nlogk) / O(N)
"""


class Solution:
    # 方法一：堆
    # 首先遍历整个数组，并使用哈希表记录每个数字出现的次数，并形成一个「出现次数数组」
    # 这个先不展开了，就这样，需要看一下小项堆的实现
    def topKFrequent_1(self, nums: List[int], k: int) -> List[int]:
        # 生成num:index的map
        counter = collections.Counter(nums)
        # 小项堆
        h = []
        for key, val in counter.items():
            heapq.heappush(h, (val, key))
            if len(h) > k:
                # 这个是舍弃最头上的，留下后面k个
                heapq.heappop(h)
        return [x[1] for x in h]

    # 方法二：基于快速排序 TODO: 再说
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = collections.Counter(nums)
        num_cnt = list(count.items())
        topKs = self.findTopK(num_cnt, k, 0, len(num_cnt) - 1)
        return [item[0] for item in topKs]

    def findTopK(self, num_cnt, k, low, high):
        pivot = random.randint(low, high)
        num_cnt[low], num_cnt[pivot] = num_cnt[pivot], num_cnt[low]
        base = num_cnt[low][1]
        i = low
        for j in range(low + 1, high + 1):
            if num_cnt[j][1] > base:
                num_cnt[i + 1], num_cnt[j] = num_cnt[j], num_cnt[i + 1]
                i += 1
        num_cnt[low], num_cnt[i] = num_cnt[i], num_cnt[low]
        if i == k - 1:
            return num_cnt[:k]
        elif i > k - 1:
            return self.findTopK(num_cnt, k, low, i - 1)
        else:
            return self.findTopK(num_cnt, k, i + 1, high)

# @lc code=end
