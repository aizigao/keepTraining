#
# @lc app=leetcode.cn id=560 lang=python3
#
# [560] 和为K的子数组
#

# @lc code=start

"""
一开始想着双指针，结果错了。因为nums[i]可以小于0，也就是说右指针i向后移1位不能保证区间会增大，左指针j向后移1位也不能保证区间和会减小。给定j，i的位置没有二段性，vice versa

前缀和 + 哈希表。哈希表记录以0为开头, j为结尾的和有多少个。sum[j,i] == k <=> prefix[i] - prefix[j] == k <=> prefix[i] - k = prefix[j]。

https://leetcode-cn.com/problems/subarray-sum-equals-k/solution/qian-zhui-he-yi-ci-bian-li-python3-by-mu-vsx8/
时间复杂度O(n),使用了前缀和思想，一次遍历，遍历到每一个元素都要计算其前缀和以及更新字典，字典上统计的是key:前缀和+K,value:次数

前缀和说明
https://www.cxyxiaowu.com/11326.html


pre[i]=pre[i−1]+nums[i]

pre[j−1]==pre[i]−k


https://leetcode-cn.com/problems/subarray-sum-equals-k/solution/he-wei-kde-zi-shu-zu-by-leetcode-solution/
"""


class Solution:
    # O(n) / O(n)
    def subarraySum(self, nums: List[int], k: int) -> int:
        # 设一个0:1因为可能第一个值就是k
        mp = {0: 1}
        count = 0
        pre = 0
        for x in nums:

            # 满足条件时
            if (pre - k) in mp:
                count + = mp[pre-k]
            # 记录pre出现的次数, 因为数据有正有负 所以会多次出现
            if pre in mp:
                mp[pre] += 1
            else:
                mp[pre] = 1

        return count


# @lc code=end
