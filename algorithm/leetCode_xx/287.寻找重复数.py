#
# @lc app=leetcode.cn id=287 lang=python3
#
# [287] 寻找重复数
#

# @lc code=start


class Solution:
    # 方法一：二分查找
    # O(nlogn) / O(1)
    # 我们定义 \textit{count}[i]count[i] 表示 \textit{nums}nums 数组中小于等于 ii 的数有多少个，假设我们重复的数是 \textit{target}target，那么 [1,\textit{target}-1][1,target−1]里的所有数满足 \textit{count}[i]\le icount[i]≤i，[target,n][target,n] 里的所有数满足 \textit{count}[i]>icount[i]>i，具有单调性。
    # TODO: 通用性过低啊，不看
    def findDuplicate_1(self, nums: List[int]) -> int:
        n = len(nums)
        ans = -1

        # 两个指针
        l = 1
        r = n - 1

        while l <= r:
            # mid = (l + r) >> 1 这个写的太hack了,改一下
            mid = (l + r) // 2

            # 找出所有小于中间值的个数
            count = 0
            for i in range(n):
                count += 1 if nums[i] <= mid else 0

            if count <= mid:
                l = mid + 1
            else:
                r = mid - 1
                ans = mid
        return ans

    # 方法二： 二进制
    # TODO: 再说吧 看不懂
    def findDuplicate(self, nums: List[int]) -> int:
        n = len(nums)
        ans = 0
        #  确定二进制下最高位是多少
        bit_max = 31

        while not ((n - 1) >> bit_max):
            bit_max -= 1

        for bit in range(bit_max):
            x = 0
            y = 0
            for i in range(n):
                if nums[i] & (1 << bit):
                    x += 1
                if i >= 1 and (i & (1 << bit)):
                    y += 1
            if x > y:
                ans |= 1 << bit
        return ans

    # 方法三：快慢指针


# @lc code=end
