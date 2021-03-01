#! /usr/bin/env python3
'''
https://leetcode-cn.com/problems/remove-element/solution/yi-chu-yuan-su-by-leetcode/
给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

示例 1:

给定数组 nums = [1,1,2],

函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。

你不需要考虑数组中超出新长度后面的元素。
示例 2:

给定 nums = [0,0,1,1,1,2,2,3,3,4],

函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。

你不需要考虑数组中超出新长度后面的元素。
说明:

为什么返回数值是整数，但输出的答案是数组呢?

请注意，输入数组是以“引用”方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

你可以想象内部操作如下:

// nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
int len = removeDuplicates(nums);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。
for (int i = 0; i < len; i++) {
print(nums[i]);
}


尝试双指针法。
你是否使用“元素顺序可以更改”这一属性？
当要删除的元素很少时会发生什么？
'''

'''
方法：双指针法

算法:
数组完成排序后，我们可以放置两个指针 i 和 j，
其中 i 是慢指针，而 j 是快指针。只要 nums[i] = nums[j]，我们就增加 j 以跳过重复项。

当我们遇到 nums[j] !== nums[i] 时，
跳过重复项的运行已经结束，
因此我们必须把它（nums[j]）的值复制到 nums[i + 1]。然后递增 ii，接着我们将再次重复相同的过程，直到 j 到达数组的末尾为止。
复杂度分析

时间复杂度：O(n)O(n)，假设数组的长度是 nn，那么 ii 和 jj 分别最多遍历 nn 步。

空间复杂度：O(1)O(1)。

作者：LeetCode
链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/solution/shan-chu-pai-xu-shu-zu-zhong-de-zhong-fu-xiang-by-/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
'''
def removeDuplicates(nums):
    if len(nums) == 0:
        return 0
    i = 0
    for j in range(1,len(nums)):
        if nums[j] != nums[i]:
            nums[i+1] = nums[j]
            i += 1
    return i + 1

# run
nums = [1, 1, 2]
nums2 = [0,0,1,1,1,2,2,3,3,4]
print(removeDuplicates(nums))
print(removeDuplicates(nums2))