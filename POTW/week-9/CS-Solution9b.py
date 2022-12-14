# Krish Shah
# Determine the sandwich Josh took a bite out of last.

answers = {
    0: 'Grilled Cheese',
    1: 'Ham and Cheese',
    2: 'PB and Jelly',
    3: 'BLT',
    4: 'Tuna'
}

n = int(input())
print(answers[n % 5])