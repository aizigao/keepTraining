#
# @lc app=leetcode.cn id=875 lang=python3
#
# [875] 爱吃香蕉的珂珂
#
'''
// 函数 f 是关于自变量 x 的单调函数
int f(int x) {
    // ...
}

// 主函数，在 f(x) == target 的约束下求 x 的最值
int solution(int[] nums, int target) {
    if (nums.length == 0) return -1;
    // 问自己：自变量 x 的最小值是多少？
    int left = ...;
    // 问自己：自变量 x 的最大值是多少？
    int right = ... + 1;

    while (left < right) {
        int mid = left + (right - left) / 2;
        if (f(mid) == target) {
            // 问自己：题目是求左边界还是右边界？
            // ...
        } else if (f(mid) < target) {
            // 问自己：怎么让 f(x) 大一点？
            // ...
        } else if (f(mid) > target) {
            // 问自己：怎么让 f(x) 小一点？
            // ...
        }
    }
    return left;
}
'''

# @lc code=start
'''
1. 定义：速度为 x 时，需要 f(x) 小时吃完所有香蕉
2. f(x) 随着 x 的增加单调递减
'''


def f(piles, x):
    hours = 0

    for pile in piles:
        hours += pile // x
        if pile % x > 0:
            hours += 1
    return hours


class Solution:
    '''
    x 为速度
    f(x) 为所需时间
    '''
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        left = 1
        #  注意，right 是开区间，所以再加一
        right = 1000000000 + 1

        while left < right:
            mid = left + (right - left) // 2
            ''' 走二分
            if f(piles, mid) == h:
                right = mid
            elif f(piles, mid) < h:
                right = mid
            elif f(piles, mid) > h:
                left = mid + 1
            '''

            # 简化
            if f(piles, mid) <= h:
                right = mid
            else:
                left = mid + 1

        return left


# @lc code=end
