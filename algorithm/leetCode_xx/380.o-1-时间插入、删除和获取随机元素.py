#
# @lc app=leetcode.cn id=380 lang=python3
#
# [380] O(1) 时间插入、删除和获取随机元素
#

# @lc code=start
# 变长数组 + 哈希表


class RandomizedSet:
    def __init__(self):
        self.nums = []
        self.indeces = {}

    # 如果 val 不存在集合中，则插入并返回 true，否则直接返回 false
    def insert(self, val: int) -> bool:
        if val in self.indeces:
            return False
        self.indeces[val] = len(self.nums)
        self.nums.append(val)
        return True

    # 如果 val 在集合中，则删除并返回 true，否则直接返回 false
    def remove(self, val: int) -> bool:
        if val not in self.indeces:
            return False

        idx = self.indeces[val]
        self.nums[idx] = self.nums[-1]
        self.nums.pop()

        self.indeces[self.nums[idx]] = idx
        del self.indeces[val]
        return True

    # 集合中等概率地随机获得一个元素
    def getRandom(self) -> int:
        return choice(self.nums)


# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()
# @lc code=end
