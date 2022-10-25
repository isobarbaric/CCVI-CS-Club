def is_palindrome(word):
    return word == word[::-1]

a = 'racecar'
print(is_palindrome(a))
