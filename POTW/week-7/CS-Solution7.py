# Krish Shah
# Determine if a given year is a leap year.

year = int(input())

is_leap_year = False

if year % 4 == 0 and not year % 100 == 0:
    is_leap_year = True
elif year % 400 == 0:
    is_leap_year = True

if is_leap_year:
    print("yes")
else:
    print("no")
