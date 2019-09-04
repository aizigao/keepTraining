#! /usr/bin/python

## 以下内容来自官方的文档, 练习一下
# https://wiki.python.org/moin/SimplePrograms

# 1. output
from time import localtime
import glob
import re
print('hello, work')

# 2. input assignment
# TODO
# name = row_input('What is your name?\n')
# print('hi, %s', name)

# 3 loop

friends = ['johna', 'pat', 'gray', 'michael']

for i, name in enumerate(friends):
    print('''
            test {iteration} is {name}
        '''.format(iteration=i, name=name)
          )

# 4 lines: Fibonacci, tuple assignment

parents, babies = (1, 1)

while babies < 100:
    print('This generation has {0} babies'.format(babies))
    parents, babies = (babies, parents + babies)


## lines: Functions

def greet(name):
    print('hello', name)


greet('Jack')
greet('Alex')
greet('Bob')


# 6 line import regular expressions


for test_string in ['555-1212', 'ILL-EGAl']:
    if re.match(r'^\d{3}-\d{4}$', test_string):
        print(test_string, ' is a valid US local phone number')
    else:
        print(test_string, ' reject')


# 7 lines: Dictionaries, generator expressions

prices = {
    'apple': 0.40,
    'banana': 0.50
}

my_purchase = {
    # key must be string
    'apple': 1,
    'banana': 6
}

# sum is a buidin fn
grocery_bill = sum(prices[fruit] * my_purchase[fruit] for fruit in my_purchase)
print('I owe the grocer $%.2f', grocery_bill)


# 9 opening files

md_files = glob.glob('*.md')
for file_name in sorted(md_files):
    print(' ----------', file_name)

    with open(file_name) as f:
        for line in f:
            print('   ' + line.rstrip())
    print('end')

# 10 Time conditionals from..import for else


activities = {
    8: 'Sleeping',
    9: 'Commuting',
    17: 'Working',
    18: 'Commuting',
    20: 'Eating',
    22: 'Resting'
}

time_now = localtime()
hour = time_now.tm_hour

for activity_time in sorted(activities.keys()):
    if hour < activity_time:
        print(activities[activity_time])
        break
else:
    print('Unknown, AFK or sleeping!')


# 11 lines: Triple-quoted strings, while loop

REFTRIN = '''
%d bottles of beer on the wall,
%d bottles of beer,
take on down, pass it around,
%d bottles of berr on the wall!
'''
bottles_of_beer = 3


while bottles_of_beer > 1:
    print( REFTRIN % (bottles_of_beer, bottles_of_beer, bottles_of_beer-1))
    bottles_of_beer -= 1






## 12 lines: Classes

class BankAccount(object):
    def __init__(self, initial_balance=0):
        self.balance = initial_balance

    def deposit(self, amount):
        self.balance += amount
    def withdraw(self, amount):
        self.balance -= amount
    def isOverdrawn(self):
        return self.balance < 0

my_account = BankAccount(15)
my_account.withdraw(5)
print(my_account.balance)
print(my_account.isOverdrawn())



## 15 lines: itertools

print('-----------15 ----------')

from itertools import groupby
lines = '''
This is the
first paragraph.

This is the second
'''.splitlines()

# use itertools.groupby and bool to return groups of 
# consecutive lines that  either have content or don't

for has_chars, frags in groupby(lines, bool):
    if has_chars:
        print(''.join(frags))
    else:
        print("".join(frags))
