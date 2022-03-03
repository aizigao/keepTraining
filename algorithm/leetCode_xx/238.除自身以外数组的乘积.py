#
# @lc app=leetcode.cn id=238 lang=python3
#
# [238] 除自身以外数组的乘积
#


# @lc code=start
class Solution:
    # 方法一. 左右乘积列表
    '''
    时间复杂度：O(N)，其中 N 指的是数组 nums 的大小。预处理 L 和 R 数组以及最后的遍历计算都是 O(N) 的时间复杂度。
    空间复杂度：O(N)，其中 N 指的是数组 nums 的大小。使用了 L 和 R 数组去构造答案，L 和 R 数组的长度为数组 nums 的大小。
    '''
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        size = len(nums)
        l, r, ans = [0] * size, [0] * size, [0] * size

        l[0] = 1
        r[size - 1] = 1

        for i in range(1, size):
            l[i] = nums[i - 1] * l[i - 1]

        for i in reversed(range(size - 1)):
            r[i] = nums[i + 1] * r[i + 1]

        for i in range(size):
            ans[i] = l[i] * r[i]

        return ans
    # 方法二 O(1) 优化
    '''
    空间复杂度：O(1)O(1)，输出数组不算进空间复杂度中，因此我们只需要常数的空间存放变量。
    '''
    def productExceptSelf2(self, nums: List[int]) -> List[int]:
        length = len(nums)
        answer = [0]*length
        
        # answer[i] 表示索引 i 左侧所有元素的乘积
        # 因为索引为 '0' 的元素左侧没有元素， 所以 answer[0] = 1
        answer[0] = 1
        for i in range(1, length):
            answer[i] = nums[i - 1] * answer[i - 1]
        
        # R 为右侧所有元素的乘积
        # 刚开始右边没有元素，所以 R = 1
        R = 1;
        for i in reversed(range(length)):
            # 对于索引 i，左边的乘积为 answer[i]，右边的乘积为 R
            answer[i] = answer[i] * R
            # R 需要包含右边所有的乘积，所以计算下一个结果时需要将当前值乘到 R 上
            R *= nums[i]
        
        return answer



# @lc code=end
