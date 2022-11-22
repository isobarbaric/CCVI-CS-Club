# Krish Shah
# Determine the number of people with COVID after x amount of days.

initial_infected = int(input())
infection_rate = int(input())
num_days = int(input())

num_infected = initial_infected
for i in range(1, num_days+1):
    num_infected += initial_infected * (infection_rate ** i)

print(num_infected)