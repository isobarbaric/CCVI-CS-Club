def is_palindrome(word):
    return word == word[::-1]

a = input()
print(is_palindrome(a))