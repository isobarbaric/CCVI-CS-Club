# Krish Shah
# Given an array of n numbers (1 ≤ n ≤ 50), determine the maximum sum of any 3 numbers taken from that array.

def add_maximum_three(nums):
    nums.sort()
    return nums[-1] + nums[-2] + nums[-3]

n = int(input())
nums = []

for _ in range(n):
    curr_num = int(input())
    nums.append(curr_num)

ans = add_maximum_three(nums)
print(ans)
