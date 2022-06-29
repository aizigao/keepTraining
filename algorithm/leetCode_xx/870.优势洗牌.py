#
# @lc app=leetcode.cn id=870 lang=python3
#
# [870] 优势洗牌
#

# @lc code=start


class Solution:
    def advantageCount1(self, nums1: List[int], nums2: List[int]) -> List[int]:
        n = len(nums1)

        # nums2 降序
        maxpq = sorted([[idx, i] for idx, i in enumerate(nums2)],
                       key=lambda item: item[1],
                       reverse=True)
        # nums1 升序
        nums1.sort()

        # nums1[left] 最小, nums2[right] 最大
        left = 0
        right = n - 1

        res = [None] * n

        while maxpq:
            pair = maxpq.pop(0)

            #  // maxval 是 nums2 中的最大值，i 是对应索引
            i = pair[0]
            maxval = pair[1]

            if maxval < nums1[right]:
                #  // 如果 nums1[right] 能胜过 maxval，那就自己上
                res[i] = nums1[right]
                right -= 1
            else:
                #  // 否则用最小值混一下，养精蓄锐
                res[i] = nums1[left]
                left += 1
        return res

    def advantageCount(self, nums1: List[int], nums2: List[int]) -> List[int]:
        def helper(idx):
            left, right = 0, len(nums1) - 1
            while left <= right:
                mid = (left + right) // 2
                if nums1[mid] > nums2[idx]:
                    right = mid - 1
                else:
                    left = mid + 1
            if left < len(nums1):
                temp = left
            else:
                temp = 0
            ans.append(nums1[temp])
            nums1.pop(temp)

        nums1.sort()
        # visited = [False] * len(nums1)
        ans = []
        for i in range(len(nums2)):
            helper(i)
        return ans


# @lc code=end
