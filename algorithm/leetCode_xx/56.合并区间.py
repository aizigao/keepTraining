#
# @lc app=leetcode.cn id=56 lang=python3
#
# [56] 合并区间
#

# @lc code=start


class Solution:
    # 方法一：排序
    # O(nlogn)
    # O(logn) 空间 这里计算的是存储答案之外，使用的额外空间。O(\log n)O(logn) 即为排序所需要的空间复杂度

    """
    - 左端点升序排序
    - 第一个区间加入 merged 数组
    - 如果当前区间的左端点在数组 merged 中最后一个区间的右端点之后，那么它们不会重合，我们可以直接将这个区间加入数组 merged 的末尾
    - 否则，它们重合，我们需要用当前区间的右端点更新数组 merged 中最后一个区间的右端点，将其置为二者的较大值。
    """

    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        # 存储结果
        merged = []
        # 按左节点排序
        intervals.sort(key=lambda x: x[0])

        for interval in intervals:
            if not merged:
                # merged为空
                merged.append(interval)
            elif merged[-1][1] < interval[0]:
                # 比较最后一顶的右节点与当前的顶的左节点, 中间有间隔，append
                merged.append(interval)
            else:
                # 可以合并了
                merged[-1][1] = max(interval[1], merged[-1][1])
        return merged

# @lc code=end
