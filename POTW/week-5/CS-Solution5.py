# Avinash Anand
# Given a positive integer n (1 ≤ n ≤ 99999999), print out the largest prime factor of n.

import math

def maximum(num):
    for i in range(2, math.floor(math.sqrt(num))+1):
        while num % i == 0:
            if num == i:
                break
            num /= i
    return int(num)

a = int(input())

print(maximum(a))