#! /usr/bin/python

## https://wiki.python.org/moin/SimplePrograms

# 1. output
print('hello, work')

# 2. input assignment
# TODO
# name = row_input('What is your name?\n')
# print('hi, %s', name)

# 3 loop

friends = ['johna', 'pat', 'gray', 'michael']

for i,name in enumerate(friends):
    print('''
            test {iteration} is {name}
        '''.format(iteration = i, name=name)
    )

## 4 lines: Fibonacci, tuple assignment

parents , babies = (1,1)

while babies < 100:
    print('This generation has {0} babies'.format(babies))
    parents, babies = (babies, parents + babies)


## lines: Functions

def greet(name):
    print('hello', name)

greet('Jack')
greet('Alex')
greet('Bob')


## 6 line import regular expressions

import re

for test_string in ['555-1212', 'ILL-EGAl']:
    if re.match(r'^\d{3}-\d{4}$', test_string):
        print(test_string, ' is a valid US local phone number')
    else:
        print(test_string, ' reject')



## 7 lines: Dictionaries, generator expressions

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

import glob
md_files= glob.glob('*.md')
for file_name in sorted(md_files):
    print(' ----------', file_name)

    with open(file_name) as f:
        for line in f:
            print('   ' + line.rstrip())
    print('end')

## 10 Time conditionals from..import for else

from time import localtime

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
