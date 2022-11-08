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
