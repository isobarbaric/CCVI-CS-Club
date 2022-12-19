# Krish Shah

n = int(input())
nums = []

for i in range(n):
    k = int(input())
    nums.append(k)

print(max(nums)-min(nums))