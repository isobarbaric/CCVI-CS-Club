# Krish Shah

n = int(input())
nums = []

for _ in range(n):
    k = int(input())
    nums.append(k)

print(max(nums)-min(nums))