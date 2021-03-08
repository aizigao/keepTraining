#
# @lc app=leetcode.cn id=15 lang=python3
#
# [15] 三数之和
#

"""
方法一：排序 + 双指针


「不重复」的本质是什么？我们保持三重循环的大框架不变，只需要保证：

- 第二重循环枚举到的元素不小于当前第一重循环枚举到的元素；
- 第三重循环枚举到的元素不小于当前第二重循环枚举到的元素。

我们枚举的三元组 (a, b, c)(a,b,c) 满足 a \leq b \leq ca≤b≤c，保证了只有 (a, b, c)(a,b,c) 这个顺序会被枚举到





时间复杂度：O(N^2)O(N 
2
 )，其中 NN 是数组 \textit{nums}nums 的长度。

空间复杂度：O(log N)。我们忽略存储答案的空间，额外的排序的空间复杂度为 O(logN)。然而我们修改了输入的数组 \textit{nums}nums，在实际情况下不一定允许，因此也可以看成使用了一个额外的数组存储了 \textit{nums}nums 的副本并进行排序，空间复杂度为 O(N)O(N)。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/3sum/solution/san-shu-zhi-he-by-leetcode-solution/

"""

# @lc code=start


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        n = len(nums)
        nums.sort()
        ans = list()

        # 枚举 a
        for first in range(n):
            # 需要和上一次枚举的数不相同
            if first > 0 and nums[first] == nums[first - 1]:
                continue

            # c 对应的指针初始指向数组的最右端
            third = n - 1
            target = -nums[first]
            # 枚举 b
            for second in range(first + 1, n):
                # 需要和上一次枚举的数不相同
                if second > first + 1 and nums[second] == nums[second - 1]:
                    continue

                # 需要保证 b 的指针在 c 的指针的左侧
                while second < third and nums[second] + nums[third] > target:
                    third -= 1

                # 如果指针重合，随着 b 后续的增加
                # 就不会有满足 a+b+c=0 并且 b<c 的 c 了，可以退出循环
                if second == third:
                    break
                if nums[second] + nums[third] == target:
                    ans.append([nums[first], nums[second], nums[third]])

        return ans

# @lc code=end
