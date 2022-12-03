# Krish Shah
# Determine the number of unique integers in a given list.

n = int(input())
nums = set()

for _ in range(n):
    k = int(input())
    nums.add(k)

print(len(nums))