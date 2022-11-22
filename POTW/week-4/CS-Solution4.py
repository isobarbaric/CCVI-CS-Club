# Krish Shah
# Given a number n (1 ≤ n ≤ 100) and a number k (1 ≤ k ≤ 100), print the results of the multiplication of the first k multiples of n.

n = int(input())
k = int(input())

for i in range(k):
    print(n, '*', i+1, '=', n*(i+1))
