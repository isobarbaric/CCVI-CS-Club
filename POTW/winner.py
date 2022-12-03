# Krish Shah
# Script to generate the winner based on contenders numbered #1-n.

import random

n = int(input('Enter the number of contenders: '))

winner = -1
seen = []

while True:
    num = random.randint(1, n)
    if num in seen:
        winner = num
        break
    else:
        seen.append(num)

print(winner)
