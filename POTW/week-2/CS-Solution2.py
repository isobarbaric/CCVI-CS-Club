# Krish Shah
# Determine if a given string is a palindrome and print out true/false accordingly.

def is_palindrome(word):
    return word == word[::-1]

a = 'racecar'
print(is_palindrome(a))